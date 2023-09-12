import React, { useState } from "react";
import ButtonMenu from "../components/editor/ButtonMenu";
import Container from "../components/editor/Container";
import { BiMenu } from "react-icons/bi";

const Editor = () => {
  const [zoomLevel, setZoomLevel] = useState(100);
  return (
    <main className="">
      <div className="flex h-screen">
        {/* canvas */}
        <div className="w-4/5">
          <div className="bg-white p-4">
            <div className="flex gap-3 font-semibold">
              <BiMenu className="md:text-2xl text-xl" />
              <p>
                Design Board
                <span className="md:text-md sm:text-sm text-gray-400">
                  {" "}
                  (Draft)
                </span>
              </p>
            </div>
          </div>
          <Container zoomLevel={zoomLevel} setZoomLevel={setZoomLevel} />
        </div>

        {/* list of components */}
        <ButtonMenu zoomLevel={zoomLevel} />
      </div>
    </main>
  );
};

export default Editor;
