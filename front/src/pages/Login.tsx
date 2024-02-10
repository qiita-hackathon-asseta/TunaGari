// Login.js
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../firebase";
import { GoogleLoginButton } from "react-social-login-buttons";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

const auth = getAuth(app);

const provider = new GoogleAuthProvider();
provider.addScope("https://www.googleapis.com/auth/contacts.readonly");

export const Login = () => {
  const navigate = useNavigate();
  const handleGoogleLogin = async () => {
    try {
      const auth = getAuth(app);
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      // resulrtがあればログイン成功
      if (user) {
        // Topeページに遷移する処理を書く
        navigate("/secret/home");
      }
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user){
        navigate("/secret/home")
      }
    });

    return () => unsubscribe();
  }, []);

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
