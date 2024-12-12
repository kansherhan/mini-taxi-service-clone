import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import { useEffect, useRef } from "react";
import { FaSignInAlt } from "react-icons/fa";

export const Header = () => {
  const signInButtonRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      console.log(
        (signInButtonRef.current.querySelector("button").textContent = "Войти"),
      );
    }, 1000);
  }, []);

  return (
    <header className="w:full shadow:0px|2px|8px|0px|#63636333 p:15px|0px">
      <div className="container">
        <div className="inner w:full flex flex:row flex jc:space-between ai:center">
          <img
            src="/logo.png"
            alt="logo"
            className="h:40px w:auto"
          />

          <div className="user">
            <SignedOut>
              <div
                ref={signInButtonRef}
                className="flex ai:center sign-in-button"
              >
                <FaSignInAlt className="mr:10px" />

                <SignInButton />
              </div>
            </SignedOut>

            <SignedIn>
              <div className="scale(1.3)">
                <UserButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </div>
    </header>
  );
};
