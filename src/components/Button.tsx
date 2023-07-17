import React, { FC } from "react";

interface ButtonProps {
  title: string;
  [x: string]: any;
}

const Button: FC<ButtonProps> = ({ title, ...props }) => {
  return (
    <button
      type="submit"
      className="bg-[#27293F] py-4 w-full text-white font-extrabold rounded-lg hover:bg-gradient-to-r hover:from-[#FF6257] hover:to-orange-600 hover:drop-shadow-3xl"
      {...props}
    >
      {title}
    </button>
  );
};

export default Button;
