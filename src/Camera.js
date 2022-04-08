import React, { useCallback, useRef } from "react";
import Webcam from "react-webcam";

const videoConstraints = {
  width: 390,
  height: 300,
  facingMode: "user"
};

const Camera = () => {
  const webcamRef = useRef(null);
  const [imageSrc, setImgSrc] = React.useState(null);

  const capture = useCallback(
    () => {
      const imageSrc = webcamRef.current.getScreenshot();
      setImgSrc(imageSrc);
    },
    [webcamRef]
  );
  return (
    <>
      <Webcam
        audio={false}
        height={240}
        ref={webcamRef}
        screenshotFormat="image/jpeg"
        width={240}
        videoConstraints={videoConstraints}
      />
    <button onClick={capture}>Capture photo</button>
    {imageSrc && (
        <img
          src={imageSrc}
          alt="trial file"
        />
      )}
    </>
  );
};

export default Camera;
