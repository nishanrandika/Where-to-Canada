// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type HandDrawnElementsIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function HandDrawnElementsIcon(props: HandDrawnElementsIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 169 67"}
      height={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M90.012.372c-3.285.264-6.614.584-7.396.71s-3.47.42-5.974.654c-2.503.233-4.807.633-5.12.89-.313.255-3.001.891-5.974 1.413-2.973.523-6.3 1.188-7.396 1.48a714.63 714.63 0 01-5.407 1.401c-1.878.48-4.182 1.18-5.12 1.555-.938.375-3.625 1.285-5.972 2.023-5.805 1.825-11.12 3.91-16.27 6.38-2.372 1.139-4.502 2.07-4.733 2.07-.773 0-2.893 2.688-2.893 3.67 0 .545.613 1.129 1.398 1.33 1.64.422 4.355-.37 4.15-1.211-.136-.557-.377-.655-1.992-.807-1.613-.152-.468-1.116 3.698-3.11 4.97-2.379 9.201-4.165 13.797-5.826 3.467-1.253 17.679-5.568 19.913-6.046 20.03-4.289 28.989-5.387 44.377-5.436 19.113-.061 32.53 1.991 45.345 6.936 8.578 3.31 15.732 8.643 17.54 13.075 3.961 9.714-5.719 20.878-25.051 28.892-4.511 1.87-13.435 5.145-15.076 5.533-.47.111-1.575.487-2.455.837-.881.349-2.081.634-2.666.634s-1.785.305-2.665.677c-.881.373-1.797.634-2.034.581-.237-.052-1.517.174-2.844.503-1.328.329-5.102 1.101-8.387 1.716-3.286.615-6.614 1.253-7.396 1.418-.783.166-3.718.59-6.522.941-2.805.352-5.384.882-5.732 1.177-.347.296-.868.32-1.159.055-.836-.764-5.362-.066-5.362.828 0 .76 3.206.76 8.25 0 .938-.141 3.239-.425 5.112-.63 1.874-.205 3.538-.456 3.698-.557.16-.1 1.7-.354 3.421-.563 1.721-.209 3.898-.612 4.836-.894.939-.284 2.987-.675 4.552-.872 1.564-.196 3.741-.593 4.836-.882 1.095-.29 3.783-.96 5.974-1.491 2.19-.53 4.366-1.108 4.836-1.284.469-.175 1.442-.42 2.162-.545 2.56-.441 15.368-5.346 20.81-7.97 13.809-6.655 20.933-14.098 21.808-22.784.478-4.744-1.419-8.457-6.488-12.705-7.653-6.414-17.931-10.2-35.448-13.063C120.716.049 99.13-.361 90.013.372zM6.435 31.918c-.784 1.306-.782 1.307.432.2 1.304-1.187 1.472-1.512.787-1.512-.238 0-.787.59-1.22 1.311zM3.38 35.651c-4.735 7.724-4.518 12.681.794 18.12 2.44 2.499 11.66 7.727 13.625 7.727.527 0 1.876.394 3 .875 2.54 1.087 2.648 1.085 2.648-.049 0-.507-.32-.805-.712-.661-.39.143-1.22-.009-1.843-.339s-1.681-.661-2.352-.736c-.67-.076-3.162-1.082-5.536-2.236-2.374-1.155-4.465-2.1-4.645-2.1-.612 0-5.73-5.53-6.204-6.703C.396 45.197.993 40.465 3.844 36.16c.799-1.206 1.33-2.318 1.182-2.472-.15-.152-.89.73-1.646 1.964zM24.3 63.16c.313.326 1.644.717 2.957.87 1.313.152 2.621.424 2.906.604.285.18 2.113.465 4.06.632 1.948.167 3.736.427 3.975.578.46.291 13.04 1.089 18.2 1.154 1.814.022 3.169-.232 3.295-.62.152-.465-1.626-.636-6.068-.583-3.456.041-6.283-.078-6.283-.265 0-.403-.093-.412-6.115-.542-2.582-.056-4.822-.314-4.978-.574-.157-.26-1.566-.431-3.13-.382-1.566.05-2.911-.11-2.99-.353-.078-.243-1.55-.593-3.27-.777-2.12-.228-2.945-.144-2.559.258zm42.216 2.526c-.346.22-1.315.259-2.152.088-.837-.172-1.69-.036-1.894.303-.25.415 1.439.621 5.194.634 6.345.023 10.4-.444 10.4-1.199 0-.719-4.403-.65-4.84.076-.198.326-.66.396-1.03.155-.844-.55-4.835-.59-5.678-.057zm-6.088.476c0 .32.256.583.569.583a.578.578 0 00.569-.583.578.578 0 00-.57-.583.578.578 0 00-.568.583z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default HandDrawnElementsIcon;
/* prettier-ignore-end */