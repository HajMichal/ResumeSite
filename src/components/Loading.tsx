import { ReactPureIcon } from "@/icons";
import React from "react";

function Loading() {
  return (
    <div className="justify-center w-full items-center flex flex-col">
      <ReactPureIcon />
      <p className="text-xl">Loading...</p>
    </div>
  );
}

export default Loading;
