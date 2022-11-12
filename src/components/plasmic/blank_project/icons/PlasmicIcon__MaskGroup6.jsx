// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskGroup6Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 59 59"}
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
          "M29.244 58.43c16.151 0 29.245-13.08 29.245-29.215C58.489 13.08 45.396 0 29.244 0 13.094 0 0 13.08 0 29.215 0 45.35 13.093 58.429 29.244 58.429z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskGroup6Icon;
/* prettier-ignore-end */
