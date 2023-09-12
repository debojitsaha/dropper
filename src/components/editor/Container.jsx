import React, { useCallback } from "react";
import { useDrop } from "react-dnd";
import DraggableBox from "./DraggableBox";
import snapToGrid from "../../utilities/snapToGrid";
import { useDispatch, useSelector } from "react-redux";
import { updatePositionOnCanvas } from "../../store/features/CanvasSlice";
import { componentType } from "../../data/buttonMenu";
import DragLayer from "./DragLayer";

const Container = () => {
  const { itemsOnCanvas } = useSelector((state) => state.canvas);
  const dispatch = useDispatch();

  const moveBox = useCallback(
    (id, left, top) => {
      const payload = {
        id: id,
        left: left,
        top: top,
      };
      dispatch(updatePositionOnCanvas(payload));
    },
    [itemsOnCanvas]
  );

  const [, drop] = useDrop(
    () => ({
      accept: componentType,
      drop(item, monitor) {
        const delta = monitor.getDifferenceFromInitialOffset();
        let left = Math.round(item.left + delta.x);
        let top = Math.round(item.top + delta.y);
        [left, top] = snapToGrid(left, top);

        moveBox(item.id, left, top);
        return undefined;
      },
    }),
    [moveBox]
  );

  return (
    <div
      ref={drop}
      className="w-full h-screen border relative overflow-hidden bg-[#E9EFF2]"
    >
      <DragLayer />
      {Object.keys(itemsOnCanvas).length <= 0 ? (
        <div className="w-full h-full flex flex-col justify-center items-center text-gray-600 font-medium">
          <h4 className="text-2xl">Click on the components</h4>
          <h4 className="text-2xl">or</h4>
          <h4 className="text-2xl">Drag the components on the Canvas</h4>
        </div>
      ) : (
        <div>
          {Object.keys(itemsOnCanvas).map((key) => {
            return <DraggableBox key={key} {...itemsOnCanvas[key]} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Container;
