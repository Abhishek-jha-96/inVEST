// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path422Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1664 276"}
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
          "M22.481 54.124s6.813 35.14 283.402 14.558S804.561-65.854 1149.96 54.124c345.39 119.978 513.66 68.272 513.66 68.272l-34.06 152.608L0 247.394"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path422Icon;
/* prettier-ignore-end */
