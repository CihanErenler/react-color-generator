import React from "react";
import SingleColor from "./SingleColor";

function Colors({ colors }) {
  return (
    <section className="colors">
      {colors.map((color, index) => {
        const hex = color.hex;
        const rgb = color.rgb;
        return <SingleColor key={hex} color={hex} rgb={rgb} index={index} />;
      })}
    </section>
  );
}

export default Colors;
