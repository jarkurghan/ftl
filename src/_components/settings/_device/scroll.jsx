/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { v4 as uuid } from "uuid";

export default function Scroll(props) {
  const [id] = useState(uuid().substring(24));
  const [x, setx] = useState(props.default);
  useEffect(() => {
    document.getElementById(id).scrollLeft = 25 * x;
  }, [x]);
  function changeHandler(e, item, unit) {
    let element = document.getElementsByClassName("league")[0];
    let filter = element.style.filter;
    if (e.type === "scroll") {
      setx(e.target.scrollLeft / 25);
    } else if (e.type === "change") {
      setx(e.target.value);
    }

    let value;
    if (
      props.item === "sepia" ||
      props.item === "saturate" ||
      props.item === "grayscale" ||
      props.item === "opacity" ||
      props.item === "invert"
    ) {
      value = x;
    } else if (props.item === "blur") {
      value = x / 25;
    } else if (props.item === "hue-rotate") {
      value = x * 3.6;
    } else {
      if (x < 50) {
        value = 0.2 + 0.8 * (x / 50);
      } else {
        value = (x / 50) * 4 - 3;
      }
    }
    if (filter.indexOf(item) !== -1) {
      element.style.filter = filter.replace(
        filter.substring(
          filter.indexOf(item),
          filter.indexOf(item) +
            filter.substring(filter.indexOf(item)).indexOf(")") +
            1
        ),
        item + "(" + value + unit + ")"
      );
    } else {
      element.style.filter += ` ${item + "(" + value + unit + ")"}`;
    }
  }
  return (
    <div
      style={{
        display: "flex",
      }}
    >
      <div
        id={id}
        style={{
          maxWidth: "200px",
          height: "20px",
          overflow: "scroll",
          backgroundColor: "white",
        }}
        onScroll={(e) => changeHandler(e, props.item, props.unit)}
      >
        <div style={{ minWidth: "2683px" }}></div>
      </div>
      <input
        type="number"
        min={1}
        max={100}
        className="scroll-input"
        id={id + "input"}
        value={x}
        onChange={(e) => changeHandler(e, props.item, props.unit)}
      />
    </div>
  );
}
