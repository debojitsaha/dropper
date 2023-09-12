import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buttonMenu } from "../../data/buttonMenu";
import { addItemToCanvas, clearCanvas } from "../../store/features/CanvasSlice";
import { BiSearch } from "react-icons/bi";
import { FiTrash } from "react-icons/fi";
import { BsChevronDown, BsFillPlayFill } from "react-icons/bs";

const ButtonMenu = () => {
  const dispatch = useDispatch();

  const { id } = useSelector((state) => state.canvas);

  const add = (btn) => {
    const payload = {
      id: id,
      top: 30,
      left: 90,
      type: btn.type,
      title: btn.title,
    };

    dispatch(addItemToCanvas(payload));
  };
  return (
    <aside className="w-1/5 p-4 bg-[#F9FBFC]">
      <div className="flex gap-3 items-center justify-end mb-3">
        <div className="flex gap-4">
          <div className="flex items-center gap-1">
            81.2% <BsChevronDown />
          </div>
          <button
            className="flex items-center gap-1 bg-red-500 text-white font-semibold px-4 py-2 rounded-md"
            onClick={() => dispatch(clearCanvas())}
          >
            Clear Canvas
            <FiTrash size={"18px"} />
          </button>
        </div>
      </div>
      <div className="px-3 py-2 border-2 border-gray-200 rounded-md flex focus-within:border-indigo-600 focus-within:border-2 box-border gap-3 bg-white">
        <BiSearch className="text-2xl" />
        <input
          className="w-3/4 focus:outline-none text-gray-700 text-sm"
          type="text"
          aria-label="search components"
          placeholder="Search Components"
        />
      </div>
      <div className="mt-5">
        <h3 className="text-gray-600 font-medium">Components</h3>
        <div className="">
          {buttonMenu.map((btn, index) => {
            return (
              <div
                key={index}
                className="border-t border-b border-gray-400/15 first:border-t-0 -mt-[1px]"
              >
                <button
                  onClick={() => add(btn)}
                  className="flex gap-4 text-sm my-8 items-center"
                >
                  <div className="shadow-2xl bg-white p-2 rounded-md">
                    <img
                      className="h-[3rem] w-[3rem] rounded"
                      src={btn.image}
                      alt={btn.title}
                    />
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-gray-800">{btn.title}</p>
                    <p className="mt-1 text-gray-500">{btn.description}</p>
                  </div>
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </aside>
  );
};

export default ButtonMenu;
