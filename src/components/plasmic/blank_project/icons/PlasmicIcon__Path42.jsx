// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path42Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1664 424"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",
        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M22.481 83.28s6.813 54.07 283.402 22.4c276.589-31.669 498.678-207.009 844.077-22.4 345.39 184.61 513.66 105.05 513.66 105.05l-34.06 234.817L0 380.664"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path42Icon;
/* prettier-ignore-end */
