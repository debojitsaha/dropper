import React from "react";
import { useDragLayer } from "react-dnd";
import snapToGrid from "../../utilities/snapToGrid";

const layerStyles = {
  position: "absolute",
  pointerEvents: "none",
  zIndex: 100,
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
};

function getItemStyles(initialOffset, currentOffset) {
  if (!initialOffset || !currentOffset) {
    return {
      display: "none",
    };
  }
  let { x, y } = currentOffset;
  x -= initialOffset.x;
  y -= initialOffset.y;
  [x, y] = snapToGrid(x, y);
  x += initialOffset.x;
  y += initialOffset.y - 73;
  const transform = `translate(${x}px, ${y}px)`;
  return {
    transform,
    WebkitTransform: transform,
  };
}

const styles = {
  display: "inline-block",
  border: "1px dashed gray",
  padding: "0.5rem 1rem",
  cursor: "move",
};

const DragLayer = () => {
  const { itemType, isDragging, item, initialOffset, currentOffset } =
    useDragLayer((monitor) => ({
      item: monitor.getItem(),
      itemType: monitor.getItemType(),
      initialOffset: monitor.getInitialSourceClientOffset(),
      currentOffset: monitor.getSourceClientOffset(),
      isDragging: monitor.isDragging(),
    }));

  if (!isDragging) {
    return null;
  }
  return (
    <div style={layerStyles}>
      <div
        className="absolute inset-0 "
        style={{
          backgroundSize: "25px 25px",
          backgroundImage:
            "linear-gradient(to right, #e3e3e3 1px, transparent 1px), linear-gradient(to bottom, #e3e3e3 1px, transparent 1px)",
        }}
      ></div>
      <div
        style={getItemStyles(initialOffset, currentOffset)}
        className="absolute"
      >
        <div style={styles}>{item.title}</div>
      </div>
    </div>
  );
};

export default DragLayer;
