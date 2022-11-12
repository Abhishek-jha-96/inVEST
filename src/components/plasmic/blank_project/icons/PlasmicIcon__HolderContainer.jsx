// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function HolderContainerIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 433 117"}
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
        opacity={".7"}
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M37.687 0c-8.284 0-15 6.716-15 15v28.095L.946 56.835c-1.255.792-1.263 2.615-.015 3.39l21.756 13.5v28.157c0 8.284 6.716 15 15 15h380c8.284 0 15-6.716 15-15V15c0-8.284-6.716-15-15-15h-380z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HolderContainerIcon;
/* prettier-ignore-end */
