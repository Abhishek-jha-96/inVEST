// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskGroupIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 85 85"}
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
          "M42.195 84.305c23.304 0 42.196-18.872 42.196-42.152S65.499 0 42.195 0C18.892 0 0 18.872 0 42.153c0 23.28 18.892 42.152 42.195 42.152z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskGroupIcon;
/* prettier-ignore-end */
