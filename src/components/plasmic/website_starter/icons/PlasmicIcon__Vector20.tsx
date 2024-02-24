// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector20IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector20Icon(props: Vector20IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 38"}
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
          "M47.503.422h2.47v17.655H56v2.269h-8.497V.422zm-25.979 9.962c0 4.547 3.633 8.062 7.923 8.062 4.291 0 7.924-3.515 7.924-8.062 0-4.388-3.264-8.062-7.924-8.062s-7.923 3.674-7.923 8.062zm-2.47 0C19.054 4.674 23.762 0 29.448 0c5.685 0 10.394 4.674 10.394 10.384 0 5.92-4.655 10.384-10.394 10.384s-10.394-4.463-10.394-10.384zM6.735 0c2.212 0 4.028 1.082 5.105 3.01L9.87 4.198c-.737-1.242-1.686-1.877-3.186-1.877-1.58 0-3.318 1.084-3.318 2.828 0 1.56 1.527 2.379 2.765 2.855l1.422.555c2.817 1.11 4.92 2.67 4.92 6.001 0 3.62-2.787 6.207-6.342 6.207-3.211 0-5.71-2.374-6.13-5.573l2.498-.528c-.027 2.193 1.71 3.779 3.843 3.779 2.132 0 3.66-1.797 3.66-3.885 0-2.141-1.712-3.067-3.423-3.78l-1.37-.582C2.946 9.221.896 7.926.896 5.15.895 1.926 3.734 0 6.735 0zM26.4 31.756l-2.024 4.42-2.044-4.42h-.27l-.783 5.858h.756l.473-3.715 1.72 3.715h.289l1.699-3.684.475 3.685h.764l-.786-5.86H26.4zm3.27 5.859h3.217V36.8H30.44v-1.932h2.448v-.814H30.44V32.57h2.469v-.814H29.67v5.859zm10.077-.001h.772v-5.858h-.772v5.858zm-3.962-5.858h-.772v5.859h2.778v-.807h-2.006v-5.052zm9.469 0h-.287l-2.582 5.858h.856l.813-1.84h2.091l.82 1.84h.838l-2.55-5.858zm-.843 3.212l.697-1.579.694 1.579H44.41zm.15-4.864c.108 0 .273.06.493.178.307.146.528.218.663.218.397 0 .71-.25.944-.745l-.462-.412c-.164.28-.314.42-.45.42-.072 0-.234-.07-.485-.207-.249-.135-.467-.202-.656-.202-.082 0-.16.01-.228.032a.586.586 0 00-.203.097.999.999 0 00-.193.174c-.063.07-.128.156-.196.26l-.104.16.474.431c.135-.27.27-.404.402-.404zM8.475 36.749v-1.911h.268c.483 0 .864.086 1.142.258.277.173.416.403.416.693 0 .219-.124.434-.371.645-.248.21-.712.315-1.391.315h-.064zm0-2.573v-1.653c.054-.006.12-.008.195-.008.35 0 .63.07.838.212a.655.655 0 01.313.568.731.731 0 01-.347.64c-.231.155-.564.235-.999.24zm.136-2.328h-.915v5.585h.947c.752 0 1.353-.148 1.801-.444.449-.295.673-.684.673-1.166 0-.694-.435-1.18-1.305-1.461.562-.315.843-.708.843-1.178 0-.386-.19-.704-.571-.957-.381-.252-.872-.379-1.473-.379zm4.659 0h-.785l1.695 3.034v2.55h.708v-2.56l1.703-3.024h-.786l-1.26 2.249-1.275-2.249z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector20Icon;
/* prettier-ignore-end */