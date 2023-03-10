import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: ["Student", "Developer", "Ready To Learn"],
        autoStart: true,
        loop: true,
        deleteSpeed: 75
      }}
    />
  );
}

export default Type;
