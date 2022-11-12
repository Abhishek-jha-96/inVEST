// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path4Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 1567 238"}
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
          "M21.176 63.763s6.417 41.397 266.942 17.15c260.524-24.247 469.714-158.495 795.052-17.15 325.33 141.344 483.83 80.43 483.83 80.43l-32.08 92.873L0 204.539"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path4Icon;
/* prettier-ignore-end */
