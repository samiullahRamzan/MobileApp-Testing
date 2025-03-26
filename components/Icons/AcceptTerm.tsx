import * as React from "react";
import Svg, { Path } from "react-native-svg";

function AcceptTerm(props) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.536 0h6.936C14.184 0 16 1.904 16 4.736v6.537C16 14.096 14.184 16 11.472 16H4.536C1.824 16 0 14.096 0 11.273V4.736C0 1.904 1.824 0 4.536 0zm3.008 10.392l3.8-3.8a.705.705 0 000-.992.705.705 0 00-.992 0L7.048 8.904l-1.4-1.4a.705.705 0 00-.992 0 .705.705 0 000 .992l1.904 1.896c.136.136.312.2.488.2.184 0 .36-.064.496-.2z"
        fill="#36E0A2"
      />
    </Svg>
  );
}

export default AcceptTerm;
