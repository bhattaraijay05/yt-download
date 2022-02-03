import axios from "axios";
import React, { useEffect, useState } from "react";
import AudioList from "./AudioList";
import Loader from "./Loader";
import { Quality } from "./type/Quality";
import VideoList from "./VideoList";

const HOST = "https://youtube-downloader-backend123.herokuapp.com";

const Main = () => {
  const [qualities, setQualities] = useState<any>([]);
  const [error, setError] = useState("");

  let url: any;
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    url = tabs[0].url;
  });
  useEffect(() => {
    const getQualities = async () => {
      if (url.includes("youtube")) {
        axios
          .get(`${HOST}/download`, {
            params: {
              link: url,
            },
          })
          .then((res) => {
            setQualities(res.data);
          });
      } else {
        setError("Please open a youtube link");
      }
    };
    getQualities();

    return () => {
      getQualities();
    };
  }, []);
  if (qualities.length === 0) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: "100vw",
          height: "100vh",
        }}
      >
        {error ? (
          <p style={{ color: "red", fontSize: 34 }}>{error}</p>
        ) : (
          <Loader />
        )}
      </div>
    );
  } else
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
          }}
        >
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                alignSelf: "center",
              }}
            >
              Video
            </h3>
            <div>
              {qualities
                .filter((quality: Quality) => {
                  return quality.mimeType.includes("video");
                })
                .map((quality: Quality, index: number) => {
                  return <VideoList quality={quality} key={index} />;
                })}
            </div>
          </div>
          <div
            style={{
              width: "50%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <h3
              style={{
                alignSelf: "center",
              }}
            >
              Audio
            </h3>
            <div>
              {qualities
                .filter((quality: Quality) => {
                  return quality.mimeType.includes("audio");
                })
                .map((quality: Quality, index: number) => {
                  return <AudioList quality={quality} key={index} />;
                })}
            </div>
          </div>
        </div>
      </div>
    );
};

export default Main;
