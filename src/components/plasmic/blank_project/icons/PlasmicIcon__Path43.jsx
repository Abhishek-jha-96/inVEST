// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path43Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1664 250"}
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
          "M22.481 49.027s6.813 31.83 283.402 13.187C582.472 43.57 804.561-59.652 1149.96 49.027c345.39 108.679 513.66 61.842 513.66 61.842l-34.06 138.236L0 224.095"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path43Icon;
/* prettier-ignore-end */
