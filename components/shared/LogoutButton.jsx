"use server";
import { signOut } from "next-auth/react";
import { FiLogOut } from "react-icons/fi";
const LogoutButton = () => {
  return (
    <form
      action={async () => {
        await signOut({ callbackUrl: "/" });
      }}
    >
      <button type="submit">
        <span className="max-sm:hidden">Logout</span>
        <FiLogOut className="size-6 sm:hidden text-red-500" />
      </button>
    </form>
  );
};

export default LogoutButton;
