"use client";

import { Button } from "@/components/ui/button";
import { logout } from "@/services/actions/authAction";

const LogoutButton = ({
  translations,
  className = "",
}: {
  translations: { [key: string]: string };
  className?: string;
}) => {
  return (
    <Button
      className={`w-full bg-red-500 hover:bg-red-500/85 ${className}`}
      onClick={logout}
    >
      {translations.logout}
    </Button>
  );
};

export default LogoutButton;
