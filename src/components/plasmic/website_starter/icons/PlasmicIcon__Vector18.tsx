// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type Vector18IconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function Vector18Icon(props: Vector18IconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 46"}
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
          "M5.754 0c.098.3.098.2.243.496.733 1.491.576 2.944.626 4.515.07 2.145.693 4.126 1.388 6.13.485 1.397 1.164 2.97 2.88 2.824 1.545-.132 3.027-1.597 3.987-2.738.173-.206.337-.421.5-.637 1.127-1.491 3.636-2.996 4.303-4.78.49-1.304 1.11-2.39 1.775-3.613.412-.757.86-.551 1.432-.957.63-.448 1.938.097 2.278.644.774 1.14-.434 5.981-.55 8.57-.092 2.026-.642 4.345-.768 6.242-.152 2.297-.205 4.303.217 6.564.201 1.092-.126 2.39.22 3.437.13.4.337.779.513 1.146.265.554.529 1.111.69 1.7.163.6.075.838-.558.948-.632.11-1.016-.358-1.473-.712-.214-.168-.434-.329-.651-.496a6.982 6.982 0 01-.834-.731 4.337 4.337 0 01-1.051-1.936c-.756-3.137-.935-6.342-.337-9.53.422-2.242.856-5.965.85-8.754h-.387c-1.407 2.432-5.212 4.464-7.538 6.052-.919.644-1.938.644-3.053 1.14-.922.4-2.955 1.787-4.362.844-.68-.248-1.356-1.34-1.696-1.984-.05.048-.05.1-.097.148-.271.28-.202.812-.164 1.166.28 2.618-1.114 5.755.648 8.11.34.496 1.067.348 1.31.992 1.29 1.91-3.375 5.275-4.665 2.457-.834-1.817-.746-4.106-.777-6.062-.025-1.694.097-3.384.013-5.075a331.421 331.421 0 01-.347-9.186C.3 6.05-.124 5.095.036 4.216.47 1.936 3.43.048 5.754 0zm30.972.686c.43-.1.579-.187.639.267.11.822.025 1.736.025 2.567a15.518 15.518 0 018.79-2.515c.626.013 1.265.07 1.841.322.576.251 1.09.73 1.25 1.35.242.924-.331 1.867-1.008 2.528-.157.154-.343.309-.563.312-.532.006-.642-.763-.57-1.301-3.112-1.189-6.731-.899-9.63.766-.135.08-.274.165-.365.29-.132.18-.151.419-.167.641a118.566 118.566 0 00-.245 5.482c-.004.167-.004.35.1.48.218.277.649.09.941-.1a11.053 11.053 0 016.697-1.73c.797.055 1.684.258 2.115.947.098.155.252.38.303.554.04.152.031.322.019.477-.19 2.55-1.86 3.932-3.497 4.95-1.092.68-2.382 1.314-3.506 1.926-.563.306-1.101.654-1.646.992-.264.164-.529.329-.8.487-.1.057-.776.566-.79.644-.122.808.032 1.633.045 2.402.003.232.091 2.574.192 2.56 2.068-.286 5.611-.843 7.65-1.278A87.14 87.14 0 0155.99 23.06c.104.574-.594.912-1.142 1.034-5.86 1.388-13.306 4.142-18.902 4.886a9.296 9.296 0 01-.591.061c-.576.087-1.108.139-1.454.103-1.385-.138-2.219-1.104-3.43-1.626-.992-.425-1.363-1.617-.81-3.05.548-1.417 1.92-1.813 3.015-2.731.057-.049.214-.161.378-.294-.091-1.748-.173-3.407-.1-5.639-.67.1-3.755.644-3.359-.792.161-.58.75-1.147 1.174-1.533.463-.422.995-.77 1.568-1.021.198-.087.412-.17.525-.355.085-.135.1-.3.113-.46a58.88 58.88 0 00.196-4.406c-.488.09-1.02-.19-1.228-.65-.072-.455 1.303-.5 1.36-.99.057-.489.214-.966.295-1.452.076-.441.215-.87.413-1.269a4.248 4.248 0 011.794-1.842 3.78 3.78 0 01.922-.348zm-3.585 22.648c-.371.332-.503.712-.692 1.082-.227.445-.217.805-.13 1.28.174.93.863.63.866.63.01-.235.026-.44.022-.596a74.056 74.056 0 00-.066-2.396zm8.983-10.728c-.712-.155-1.452-.03-2.169.113-1.004.196-2.08.46-2.738 1.262-.563.69-.57 1.614-.598 2.464-.031.947.006 3.282-.006 3.427.034-.039.09-.068.135-.097l.054-.032c.289-.18.607-.303.909-.454.312-.155.608-.335.922-.483 1.092-.522 2.203-1.005 3.232-1.65 1.014-.637 2.046-1.603 1.863-2.943a2.552 2.552 0 00-.038-.222c-.166-.725-.852-1.23-1.566-1.385zM4.996 40.436h.834c.548 0 .993.12 1.341.362.348.241.52.546.52.911 0 .448-.256.822-.767 1.124.793.267 1.188.733 1.188 1.393 0 .46-.204.832-.615 1.111-.407.283-.956.423-1.64.423h-.861v-5.324zm.709.645v1.574c.395-.006.699-.083.909-.229a.71.71 0 00.316-.609.634.634 0 00-.285-.543c-.191-.136-.445-.203-.765-.203-.066 0-.125.003-.175.01zm0 2.206v1.822h.056c.62 0 1.04-.102 1.266-.302.226-.2.339-.406.339-.616 0-.276-.126-.495-.38-.66-.253-.165-.598-.247-1.04-.247h-.241v.003zm3.1-2.85h.792l1.292 2.142 1.28-2.143h.795l-1.724 2.883v2.44h-.718v-2.43l-1.718-2.893zm30.776-1.512c.104 0 .264.054.477.162.297.133.507.197.639.197.383 0 .684-.225.909-.68l-.445-.374c-.16.254-.304.381-.433.381-.068 0-.225-.063-.467-.187-.241-.124-.451-.184-.633-.184a.792.792 0 00-.22.028.537.537 0 00-.194.09.93.93 0 00-.185.158 1.831 1.831 0 00-.188.238l-.1.146.458.394c.125-.248.257-.369.382-.369zm-.144 4.429l.671-1.439.668 1.439h-1.339zm.812-2.927h-.276l-2.489 5.333h.825l.783-1.677h2.016l.79 1.677h.805l-2.454-5.333zm-9.122 0h-.743v5.333h2.677v-.734h-1.934v-4.6zm3.818 5.336h.743V40.43h-.743v5.333zm-9.711 0h3.1v-.74h-2.358v-1.759h2.358v-.739h-2.358v-1.352h2.38v-.74h-3.12v5.33h-.002zm-3.151-5.336l-1.95 4.025-1.968-4.025h-.26l-.756 5.333h.727l.455-3.381 1.658 3.38h.276l1.636-3.355.458 3.356h.737l-.759-5.333h-.254z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Vector18Icon;
/* prettier-ignore-end */