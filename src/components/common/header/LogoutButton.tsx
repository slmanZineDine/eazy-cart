"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/services/actions/authAction";

const LogoutButton = ({ className = "" }: { className?: string }) => {
  return (
    <Button
      className={`bg-red-500 hover:bg-red-500/75 ${className}`}
      onClick={logout}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
