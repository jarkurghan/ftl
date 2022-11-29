import React from "react";
import Scroll from "./_device/scroll";
export default function Background() {
  return (
    <div >
      <span>Tasdiqlash</span>
      {/*drop-shadow()*/}
      <Scroll item="blur" unit="px" default={0} />
      <Scroll item="brightness" unit="" default={50} />
      <Scroll item="contrast" unit="" default={50} />
      <Scroll item="grayscale" unit="%" default={0} />
      <Scroll item="hue-rotate" unit="deg" default={0} />
      <Scroll item="invert" unit="%" default={0} />
      <Scroll item="saturate" unit="%" default={100} />
      <Scroll item="sepia" unit="%" default={0} />
      <Scroll item="opacity" unit="%" default={100} />
    </div>
  );
}
