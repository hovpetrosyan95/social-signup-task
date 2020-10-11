import React from "react";

import "./style.scss";

const Button = ({ text, className, icon, onClick }: { text: string; className?: string, icon?: Object, onClick?: any }) => {
  return <button className={`default-btn ${className}`} onClick={onClick}>{text} {icon}</button>;
};

export default Button;
