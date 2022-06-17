import React from "react";
import { onAuthStateChanged, signInAnonymously } from "firebase/auth";
import { auth, db } from "firebaseConfig/clientApp";
import { ref, set } from "firebase/database";

export const AuthContext = React.createContext<{
  user: any | null;
  loading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  error: string;
}>({
  user: null,
  loading: false,
  setLoading: () => {},
  error: "",
});

type Props = {
  children: React.ReactNode;
};

export const AuthContextProvider = ({ children }: Props) => {
  const [user, setUser] = React.useState<any>(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState("");

  React.useEffect(() => {
    const fetchAsyncData = async () => {
      await signInAnonymously(auth)
        .then(() => {
          // Signed in..
          console.log("anonymous sign in");

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
                  console.log("fullfilled");
                })
                .catch((error) => {
                  console.log(error);
                });

              setUser(user);
            } else {
              // User is signed out
              setUser(null);
              console.log("signout");
            }
          });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
          // ...
          setError(
            `${error.message} & ${error.code} or See the console for more information.`
          );
        });
    };

    fetchAsyncData();
  }, []);

  const values = { user, setLoading, loading, error };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
