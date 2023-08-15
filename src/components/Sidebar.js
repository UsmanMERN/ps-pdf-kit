import React, { useEffect } from "react";
import { useSnapshot } from "valtio";
import state from "../store/instance";

function Sidebar() {
  const { PSPDFKit, instance } = useSnapshot(state);

  // Preloader while PSPDFKit is loading
  if (!PSPDFKit) {
    return <div className="bg-dark p-3 text-white">Loading...</div>;
  }

  // Get the current toolbar items
  const items = instance.toolbarItems;

  return (
    <div className="bg-dark p-3">
      {/* Map over the toolbar items */}
      {instance.toolbarItems.map((toolbarItem) => (
        <button
          key={toolbarItem.type}
          className="btn btn-primary mb-2 d-block"
          onClick={() => {
            // Handle the toolbar item's action
            if (toolbarItem.onPress) {
              toolbarItem.onPress();
            }
          }}
        >
          {toolbarItem.type}
        </button>
      ))}
    </div>
  );
}

export default Sidebar;
