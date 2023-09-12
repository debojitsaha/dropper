import React, { useEffect } from "react";
import { useDrag } from "react-dnd";
import { getEmptyImage } from "react-dnd-html5-backend";
import Button from "../draggables/Button";
import Dropdown from "../draggables/Dropdown";
import Input from "../draggables/Input";
import Table from "../draggables/Table";

export const componentType = ["Button", "Input", "Dropdown", "Table"];

function getStyles(left, top, isDragging) {
  const transform = `translate3d(${left}px, ${top}px, 0)`;
  return {
    position: "absolute",
    transform,
    WebkitTransform: transform,
    opacity: isDragging ? 0 : 1,
    height: isDragging ? 0 : "",
  };
}

const DraggableBox = ({ id, title, left, top, type }) => {
  console.log(type);

  const [{ isDragging }, drag, preview] = useDrag(
    () => ({
      type: type,
      item: { id, left, top, title },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
      }),
    }),
    [id, left, top, title]
  );

  useEffect(() => {
    preview(getEmptyImage(), { captureDraggingState: true });
  }, []);

  if (type === "button")
    return (
      <div style={getStyles(left, top, isDragging)} ref={drag}>
        <Button title={title} />
      </div>
    );

  if (type === "input")
    return (
      <div style={getStyles(left, top, isDragging)} ref={drag}>
        <Input title={title} />
      </div>
    );

  if (type === "dropdown")
    return (
      <div style={getStyles(left, top, isDragging)} ref={drag}>
        <Dropdown />
      </div>
    );

  if (type === "table")
    return (
      <div style={getStyles(left, top, isDragging)} ref={drag}>
        <Table />
      </div>
    );
};

export default DraggableBox;
