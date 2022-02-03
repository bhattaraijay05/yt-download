import React from "react";
import { Quality } from "./type/Quality";

const AudioList = ({ quality }: { quality: Quality }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <p>
        {quality.audioBitrate} bit / {quality.container}
      </p>
      <img
        src="/download.png"
        alt="Download"
        width="30px"
        height="30px"
        onClick={(e) => {
          window.open(quality.url);
        }}
        style={{
          cursor: "pointer",
          marginLeft: 10,
        }}
      />
    </div>
  );
};

export default AudioList;
