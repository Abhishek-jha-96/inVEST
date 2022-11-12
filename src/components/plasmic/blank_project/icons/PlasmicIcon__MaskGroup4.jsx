// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskGroup4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 46 46"}
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
          "M22.56 45.074c12.46 0 22.56-10.09 22.56-22.537S35.02 0 22.56 0C10.1 0 0 10.09 0 22.537s10.1 22.537 22.56 22.537z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskGroup4Icon;
/* prettier-ignore-end */
