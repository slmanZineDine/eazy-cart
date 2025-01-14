"use client";

// My-Hooks
import { useHydration } from "@/hooks/common/useHydration";

const currentYear = new Date().getFullYear();

const CurrentYear = () => {
  // ################### CUSTOM HOOKS ###################
  const hydrated = useHydration();

  return <>{hydrated ? currentYear : ""}</>;
};

export default CurrentYear;
