// useAuth.js
import { useState } from "react";
import { auth } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

export default function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Sign Up
  const signUp = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Get ID token
      const token = await userCredential.user.getIdToken(true);

      setLoading(false);
      return {
        user: userCredential.user, // contains uid, email, etc.
        token, // ID token (JWT)
      };
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };

  // Login
  const login = async (email, password) => {
    setLoading(true);
    setError(null);
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );

      // Get ID token
      const token = await userCredential.user.getIdToken(true);

      setLoading(false);
      return {
        user: userCredential.user,
        token,
      };
    } catch (err) {
      setError(err.message);
      setLoading(false);
      return null;
    }
  };


  return { signUp, login, loading, error };
}
