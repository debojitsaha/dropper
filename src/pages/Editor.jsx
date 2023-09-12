import React from "react";
import ButtonMenu from "../components/editor/ButtonMenu";
import Container from "../components/editor/Container";

const Editor = () => {
  return (
    <main className="">
      <div className="flex ">
        {/* canvas */}
        <div className="w-4/5">
          <Container />
        </div>

        {/* list of components */}
        <ButtonMenu />
      </div>
    </main>
  );
};

export default Editor;
