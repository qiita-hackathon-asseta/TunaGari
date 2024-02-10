// Login.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getAuth } from "firebase/auth";
import app from "../firebase";

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const Login = () => {
  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      console.log(user);
      // resulrtがあればログイン成功
      // Homeページに遷移する処理を書く
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <h1>TunaGari</h1>
      <button onClick={handleGoogleLogin}>Googleでログイン</button>
    </div>
  );
};
