import React from "react";
import Link from "next/link";

const Button = ({ children, href, onClick, type = "button" }) => {
  const buttonElement = (
    <button 
      type={type}
      onClick={onClick}
      className="relative cursor-pointer bg-[#ED1C25] z-0 flex items-center gap-2 overflow-hidden border-2 border-[#FAD4D680] px-4 py-2 font-semibold text-white transition-all duration-500 before:absolute before:inset-0 before:-z-10 before:translate-x-[150%] before:translate-y-[150%] before:scale-[2.5] before:rounded-[100%] before:bg-[#fff] before:transition-transform before:duration-1000 before:content-[''] hover:scale-105 hover:text-[#ED1C25] hover:before:translate-x-[0%] hover:before:translate-y-[0%] active:scale-95"
    >
      <span>{children}</span>
    </button>
  );

  return (
    <div>
      {href ? (
        <Link href={href}>
          {buttonElement}
        </Link>
      ) : (
        buttonElement
      )}
    </div>
  );
};

export default Button;
