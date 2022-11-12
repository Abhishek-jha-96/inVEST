// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function MaskGroup5Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 66 66"}
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
          "M32.587 65.107c17.997 0 32.586-14.575 32.586-32.553C65.173 14.574 50.583 0 32.586 0 14.59 0 0 14.575 0 32.554c0 17.978 14.59 32.553 32.587 32.553z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default MaskGroup5Icon;
/* prettier-ignore-end */
