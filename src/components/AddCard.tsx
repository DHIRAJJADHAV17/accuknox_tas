import React from "react";
import SideDrawer from "./SideDrawer";

const AddCard = () => {
  return (
    <div className="relative border rounded-xl p-4 bg-white hover:shadow-xl transform transition-transform duration-300 hover:scale-105">
      <div className="flex items-center justify-center">
        <div>
          <SideDrawer />
        </div>
      </div>
    </div>
  );
};

export default AddCard;
