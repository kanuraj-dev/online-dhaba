import React from "react";
import { createUseStyles } from "react-jss";

function Loader({ height }) {
  const classes = useStyles({ height });

  return (
    <div className={classes.loader}>
      <div className={classes.loaderWrapper}>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  loader: {
    height: ({ height }) => (height ? height : "100%"),
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  "@keyframes rotate": {
    "0%, 30%": {
      transform: "rotate(0)",
    },
    "65%": {
      transform: "rotate(-40deg)",
    },
    "100%": {
      transform: "rotate(-90deg)",
    },
  },
  "@keyframes animate": {
    "0%, 10%, 100%": {
      height: "40px",
      width: "40px",
    },
    "65%": {
      height: "70px",
      width: "70px",
    },
  },
  loaderWrapper: {
    position: "absolute",
    top: "50%",
    left: "50%",
    height: "40px",
    width: "40px",
    transform: "translate(-50%, -50%) rotate(45deg) translate3d(0, 0, 0)",
    animation: "$animate 1.2s ease-in-out infinite",

    "& span": {
      position: "absolute",
      display: "block",
      width: "20px",
      height: "20px",
      animation: "$rotate 1.2s linear both infinite",
    },

    "& span:nth-child(1)": {
      top: "0",
      left: "0",
      background: "rgb(255, 165, 0,0.8)",
    },
    "& span:nth-child(2)": {
      top: "0",
      right: "0",
      background: "rgb(248, 131, 121,0.8)",
    },
    "& span:nth-child(3)": {
      bottom: "0",
      left: "0",
      background: "rgb(248, 131, 121,0.8)",
    },
    "& span:nth-child(4)": {
      bottom: "0",
      right: "0",
      background: "rgb(255, 165, 0,0.8)",
    },
  },
}));

export default Loader;
