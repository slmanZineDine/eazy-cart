import React from "react";

const loading = () => {
  return (
    <div className="flex h-screen items-center justify-center">
      <div className="h-20 w-20 animate-ping rounded-full bg-primary"></div>
    </div>
  );
};

export default loading;
