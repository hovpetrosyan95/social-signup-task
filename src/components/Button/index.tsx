import React from "react";

import "./style.scss";

const Button = ({ text, className, icon }: { text: string; className?: string, icon?: Object }) => {
  return <button className={`default-btn ${className}`}>{text} {icon}</button>;
};

export default Button;
