// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskGroup2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 138 138"}
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
          "M68.933 137.727c38.071 0 68.933-30.831 68.933-68.864C137.866 30.831 107.004 0 68.933 0 30.863 0 0 30.831 0 68.863c0 38.033 30.862 68.864 68.933 68.864z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskGroup2Icon;
/* prettier-ignore-end */
