import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import HomePage from ".";

const userTest = userEvent.setup();

jest.mock(
  "next/link",
  () =>
    ({ children }: { children: React.ReactNode }) =>
      children
);

describe("HomePage", () => {
  test("render Homepage", async () => {
    render(<HomePage />);

    expect(screen.getByText(/SO, YOU WANT TO TRAVEL TO/i)).toBeInTheDocument();
  });

  test("Explore Button", async () => {
    render(<HomePage />);

    const ExploreButton = screen.getByRole("button", { name: /explore/i });

    await userTest.click(ExploreButton);

    expect(screen.getByText(/01 PICK YOUR DESTINATION/i)).toBeInTheDocument();
  });

  test("displays the header and paragraph text", () => {
    const { container } = render(<HomePage />);

    expect(container).toMatchInlineSnapshot(`
<div>
  <div
    class="sc-bczRLJ knZaIN"
  >
    <div
      class="sc-gsnTZi"
    >
      <span
        style="box-sizing: border-box; display: block; overflow: hidden; background: none; opacity: 1; border: 0px; margin: 0px; padding: 0px; position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px;"
      >
        <img
          data-nimg="fill"
          decoding="async"
          src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
          style="position: absolute; top: 0px; left: 0px; bottom: 0px; right: 0px; box-sizing: border-box; padding: 0px; margin: auto; display: block; width: 0px; height: 0px; min-width: 100%; max-width: 100%; min-height: 100%; max-height: 100%;"
        />
        <noscript />
      </span>
    </div>
    <div
      class="sc-dkzDqf fzNLLp"
    >
      <div
        class="sc-hKMtZM kvEeaW"
      >
        <p
          class="sc-eCYdqJ dtVQZj"
        >
          SO, YOU WANT TO TRAVEL TO
        </p>
        <span
          class="sc-jSMfEi fgtpjX"
        >
          SPACE
        </span>
        <p
          class="sc-gKXOVf hPXHXx"
        >
          Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
        </p>
      </div>
      <div
        class="sc-iBkjds ivJUgg"
      >
        <div
          class="sc-ftvSup fXpLfz"
        >
          <span
            class="sc-jqUVSM iuygBN"
          >
            <a
              class="sc-kDDrLX drFysb"
              role="button"
            >
              EXPLORE
            </a>
          </span>
          <div
            class="sc-papXJ hBDWLE"
          />
        </div>
      </div>
    </div>
  </div>
</div>
`);
  });
});
