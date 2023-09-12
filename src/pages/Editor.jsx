import React from "react";
import ButtonMenu from "../components/editor/ButtonMenu";
import Container from "../components/editor/Container";
import { BiMenu } from "react-icons/bi";
import { BsChevronDown, BsFillPlayFill } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { clearCanvas } from "../store/features/CanvasSlice";

const Editor = () => {
  const dispatch = useDispatch();

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
