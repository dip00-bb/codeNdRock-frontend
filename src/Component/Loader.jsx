import React from "react";

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div
        className="w-16 h-16 border-4 border-t-yellow-400 border-b-yellow-400 border-l-gray-900 border-r-gray-900 rounded-full animate-spin"
        style={{
          borderTopColor: "var(--primary-color)",
          borderBottomColor: "var(--primary-color)",
          borderLeftColor: "var(--primary-dark)",
          borderRightColor: "var(--primary-dark)",
        }}
      ></div>
    </div>
  );
};

export default Loader;
