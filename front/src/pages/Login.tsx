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
    <div>
      <h1>TunaGari</h1>
      <GoogleLoginButton onClick={handleGoogleLogin}>
        {/* 日本語にするならこれいる */}
        <span style={{ fontSize: 16 }}>Googleでログイン</span>
      </GoogleLoginButton>
    </div>
  );
};
