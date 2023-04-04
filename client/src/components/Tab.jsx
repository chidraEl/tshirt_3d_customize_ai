import React from "react";
import { useSnapshot } from "valtio";
import state from "../store";

const Tab = ({
  tab,
  isFilterTab,
  isActiveTab,
  activeEditorTab,
  handleClick,
}) => {
  const snap = useSnapshot(state);

  const activeFilterStyles =
    isFilterTab && isActiveTab
      ? { backgroundColor: snap.color, opacity: 0.9 }
      : { backgroundColor: "transparent", opacity: 0.7 };

  const activeEditorStyles =
    activeEditorTab == tab.name
      ? { backgroundColor: "#ffffff66", opacity: 1 }
      : { backgroundColor: "transparent", opacity: 1 };
  return (
    <div className="relative">
      <div
        key={tab.name}
        className={`tab-btn ${
          isFilterTab
            ? "rounded-full bg-white/30 shadow-lg shadow-gray-400/90"
            : "rounded-lg"
        }`}
        style={isFilterTab ? activeFilterStyles : activeEditorStyles}
        onClick={handleClick}
      >
        <img
          src={tab.icon}
          className={`${
            isFilterTab ? "w-2/3 h-2/3" : "w-2/3 h-2/3 object-contain"
          }`}
        />
      </div>
    </div>
  );
};

export default Tab;
