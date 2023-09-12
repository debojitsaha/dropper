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
      <div className="flex justify-between p-4">
        <div className="flex gap-3">
          <BiMenu className="md:text-2xl text-xl" />
          <p>
            Design Board
            <span className="md:text-md sm:text-sm text-gray-400">(Draft)</span>
          </p>
        </div>
        <button onClick={() => dispatch(clearCanvas())}>
          Clear Canvas (only for testing)
        </button>
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            81.2% <BsChevronDown />
          </div>
          <div className="flex items-center gap-1 text-indigo-600 bg-indigo-200 px-4 py-2 rounded-md">
            <BsFillPlayFill className="text-xl" />
            Preview
          </div>
        </div>
      </div>
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
