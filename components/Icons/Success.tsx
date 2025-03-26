import * as React from "react";
import Svg, { Circle, Path } from "react-native-svg";

function Success(props) {
  return (
    <Svg
      width={101}
      height={100}
      viewBox="0 0 101 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Circle opacity={0.1} cx={50.5} cy={50} r={50} fill="#fff" />
      <Path
        d="M33.565 50L45.66 62.097l24.194-24.194"
        stroke="#fff"
        strokeWidth={4.83871}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default Success;
