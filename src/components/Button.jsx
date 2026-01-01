import React from "react";
import { Plus, Minus } from "lucide-react";
import "./Button.css";

const Button = ({ val, setHistory }) => {
  const handleClick = () => {
    setHistory((prev) => ({
      past: [...prev.past, prev.present],
      present: prev.present + val,
      future: [],
    }));
  };

  return (
    <button
      className={`stepBtn ${val < 0 ? "stepBtn--neg" : "stepBtn--pos"}`}
      type="button"
      onClick={handleClick}
    >
      {val < 0 ? <Minus size={13} /> : <Plus size={13} />}
      {Math.abs(val)}
    </button>
  );
};

export default Button;
