// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskGroup3Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 69 69"}
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
          "M34.258 68.446c18.92 0 34.257-15.322 34.257-34.223C68.515 15.323 53.178 0 34.258 0 15.338 0 0 15.322 0 34.223c0 18.9 15.338 34.223 34.258 34.223z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskGroup3Icon;
/* prettier-ignore-end */
