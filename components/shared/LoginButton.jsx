"use server";
import { signIn } from "next-auth/react";
import { FiLogIn } from "react-icons/fi";

const LoginButton = () => {
  return (
    <form
      action={async () => {
        await signIn("google", { callbackUrl: "/" });
      }}
    >
      <button type="submit">
        <span className="max-sm:hidden">Log In</span>
        <FiLogIn className="size-6 sm:hidden text-red-500" />
      </button>
    </form>
  );
};

export default LoginButton;
