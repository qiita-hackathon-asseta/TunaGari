// Login.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase";
import { GoogleLoginButton } from "react-social-login-buttons";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // resulrtがあればログイン成功
      if (user) {
        // Topeページに遷移する処理を書く
        console.log(user);
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    // <div>
    //   <h1>TunaGari</h1>
    //   <button onClick={handleGoogleLogin} className="w-3/5 bg-red-500">
    //     {/* 日本語にするならこれいる */}
    //     <span style={{ fontSize: 16 }}>Googleでログイン</span>
    //   </button>
    // </div>
    <div className="bg-login-bac h-[calc(100vh-4rem)] w-full bg-center object-cover">
      <div className="flex h-full items-center justify-center">
        <div className="w-1/5">
          <GoogleLoginButton
            onClick={handleGoogleLogin}
            className="w-3/5 bg-red-500"
          >
            {/* 日本語にするならこれいる */}
            <span style={{ fontSize: 16 }}>Googleでログイン</span>
          </GoogleLoginButton>
        </div>
      </div>
    </div>
  );
};
