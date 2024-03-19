import React from "react";

const sizes = {
  xs: "text-[10px] font-normal leading-[25px]",
  lg: "text-base font-normal leading-6",
  s: "text-xs font-normal",
  xl: "text-lg font-normal",
  md: "text-sm font-normal",
};

const Text = ({ children, className = "", as, size = "s", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-inter ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
