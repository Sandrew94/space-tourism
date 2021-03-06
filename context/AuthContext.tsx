import React from "react";
import { onAuthStateChanged, signInAnonymously, User } from "firebase/auth";
import { auth, db } from "firebaseConfig/clientApp";
import { ref, set } from "firebase/database";

export const AuthContext = React.createContext<{
  user: User | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
  tokenId: string;
}>({
  user: null,
  loading: false,
  setLoading: () => {},
  error: "",
  tokenId: "",
});

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<User | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");
  const [tokenId, setToken] = React.useState<any>();
  React.useEffect(() => {
    const fetchAsyncData = async () => {
      await signInAnonymously(auth)
        .then(() => {
          // Signed in..

          onAuthStateChanged(auth, async (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User

              await set(
                ref(
                  db,
                  `/${process.env.NEXT_PUBLIC_FIREBASE_ROUTE}/${user.uid}`
                ),
                true
              )
                .then(() => {
                  //Fullfilled
                })
                .catch((error: Error) => {
                  throw new Error(error.message);
                });

              setUser(user);
              const tokenId = await user.getIdToken();
              setToken(tokenId);
            } else {
              // User is signed out
              setUser(null);
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          // ...
          setError(
            `${error.message} & ${error.code} or See the console for more information.`
          );
          throw new Error(`${errorMessage} & ${errorCode}`);
        });
    };

    fetchAsyncData();
  }, []);

  const values = { user, setLoading, loading, error, tokenId };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
