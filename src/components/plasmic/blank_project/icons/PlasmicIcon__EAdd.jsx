// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function EAddIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 22 22"}
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
          "M21 9.99h-9V.999c0-.6-.4-.999-1-.999s-1 .4-1 .999v8.99H1c-.6 0-1 .4-1 1s.4.999 1 .999h9v8.99c0 .6.4 1 1 1s1-.4 1-1v-8.99h9c.6 0 1-.4 1-1 0-.598-.4-.998-1-.998z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default EAddIcon;
/* prettier-ignore-end */
