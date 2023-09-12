import React, { useCallback, useState } from "react";
import { useDrop } from "react-dnd";
import DraggableBox from "./DraggableBox";
import snapToGrid from "../../utilities/snapToGrid";
import { useDispatch, useSelector } from "react-redux";
import { updatePositionOnCanvas } from "../../store/features/CanvasSlice";
import { componentType } from "../../data/buttonMenu";
import DragLayer from "./DragLayer";

const Container = ({ zoomLevel, setZoomLevel }) => {
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

  const handleZoom = (event) => {
    if (event.ctrlKey) {
      event.preventDefault(); // Prevent the default scrolling behavior

      // Calculate the new zoom level based on the scroll delta
      const newZoomLevel = zoomLevel + (event.deltaY > 0 ? -5 : 5);

      // Limit the zoom level to your desired range (e.g., 10% to 300%)
      if (newZoomLevel >= 10 && newZoomLevel <= 300) {
        setZoomLevel(newZoomLevel);
      }
    }
  };

  return (
    <div
      ref={drop}
      className="w-full h-screen border relative overflow-auto bg-[#E9EFF2]"
      onWheel={handleZoom}
    >
      <div
        className="w-full relative bg-transparent overflow-auto"
        style={{
          transform: `scale(${zoomLevel / 100})`,
          transformOrigin: "top left",
          overflow: "auto", // Enable scrollbars for inner content
          height: "100%", // Set a fixed height to the inner scrollable area
        }}
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
    </div>
  );
};

export default Container;
