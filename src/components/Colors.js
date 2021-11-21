import React from "react";
import SingleColor from "./SingleColor";

function Colors({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        const { hex, rgb } = color;
        return (
          <SingleColor key={hex + index} color={hex} rgb={rgb} index={index} />
        );
      })}
    </section>
  );
}

export default Colors;
