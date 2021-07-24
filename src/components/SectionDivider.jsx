import { Divider } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";

function SectionDivider() {
  const classes = useStyles();

  return <Divider className={classes.sectionDivider} />;
}

const useStyles = createUseStyles(() => ({
  sectionDivider: {
    width: "50%",
    minWidth: "50%",
    margin: "25px auto",
    borderRadius: 10,
    borderTop: "3px solid rgba(0,0,0,0.5)",
  },
}));

export default SectionDivider;
