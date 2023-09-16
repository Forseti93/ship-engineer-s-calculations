import React from "react";

const Superscript = ({ children }: { children: string }) => {
  return (
    <span style={{ display: "inline-block", transform: "translateY(-5px)" }}>
      {children}
    </span>
  );
};

export default Superscript;
