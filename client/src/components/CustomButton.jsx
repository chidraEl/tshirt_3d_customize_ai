import React from "react";
import state from "../store";
import { useSnapshot } from "valtio";
import { getContrastingColor } from "../config/helpers";

const CustomButton = ({ title, type, handleClick, customeStyles }) => {
  const snap = useSnapshot(state);
  const generateStyle = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: getContrastingColor(snap.color),
      };
    } else if (type === "outline") {
      return {
        borderWidth: "1px",
        borderColor: "#aaa",
        color: "#000",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.5 flex-1 rounded-md font-semibold ${customeStyles}`}
      style={generateStyle(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};

export default CustomButton;
