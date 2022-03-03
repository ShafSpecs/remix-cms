import * as React from "react";

export const TabSelector = ({
  isActive,
  children,
  onClick,
}: {
  isActive: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    className={`tab-selector ${isActive ? "active-tab" : ""}`}
    onClick={onClick}
    type="submit"
  >
    {children}
  </button>
);
