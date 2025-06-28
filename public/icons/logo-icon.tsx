import React from "react";

interface LogoProps {
  size?: number;
  color?: string;
  className?: string;
}

const LogoIcon: React.FC<LogoProps> = ({
  size = 10,
  color = "currentColor",
  className = "",
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1225 1048"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M1.5 337.5V0.5H353L1.5 337.5Z" fill={color} />
      <path d="M1.5 708V1045H353L1.5 708Z" fill={color} />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M1224.5 1048H533L0 525.5L533 1.5H1224.5L687.5 525.5L1224.5 1048ZM476.5 525.5L825 171.5H611.5L244.5 525.5L611.5 871.5H825L476.5 525.5Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;
