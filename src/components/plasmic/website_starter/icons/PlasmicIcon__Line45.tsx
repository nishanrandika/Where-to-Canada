// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Line45IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Line45Icon(props: Line45IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 101 3"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path stroke={"currentColor"} strokeWidth={"3"} d={"M0 1.5h101"}></path>
    </svg>
  );
}

export default Line45Icon;
/* prettier-ignore-end */
