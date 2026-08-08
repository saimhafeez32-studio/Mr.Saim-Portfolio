import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { signInWithPopup } from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

import { auth, provider, db } from "../../firebase";

import "./TipsModal.css";

const TipsModal = ({ open, onClose }) => {
  const navigate = useNavigate();

  useEffect(() => {
    if (!open) return;

    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, provider);

      const user = result.user;

      await setDoc(
        doc(db, "users", user.uid),
        {
          uid: user.uid,
          name: user.displayName,
          email: user.email,
          photo: user.photoURL,
          createdAt: serverTimestamp(),
          lastLogin: serverTimestamp(),
        },
        { merge: true }
      );

      onClose();

      navigate("/brand-guide");

    } catch (error) {
      console.error(error);
      alert(error.message);
    }
  };

  if (!open) return null;

  return (
    <div className="tips-modal">

      <div
        className="tips-overlay"
        onClick={onClose}
      ></div>

      <div className="tips-card">

        <button
          className="tips-close"
          onClick={onClose}
          type="button"
          aria-label="Close"
        >
          <FaTimes />
        </button>

        <span className="tips-tag">
          FREE BRAND GUIDE
        </span>

        <h2>
          Discover the 5 Proven Tips
          <br />
          to Build a Premium Brand
        </h2>

        <p>
          Get instant access to practical branding strategies
          that help businesses stand out, build trust and
          attract more customers.
        </p>

        <button
          className="google-btn"
          type="button"
          onClick={handleGoogleLogin}
        >
          <FcGoogle />
          <span>Continue with Google</span>
        </button>

        <small>
          No spam. Your information stays private.
        </small>

      </div>

    </div>
  );
};

export default TipsModal;