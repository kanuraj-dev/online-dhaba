import { FacebookOutlined, InstagramOutlined } from "@ant-design/icons";
import { Button } from "antd";
import React from "react";
import { createUseStyles } from "react-jss";

function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.footer}>
      <div className={classes.footerLogo}>
        Online<b>Dhaba</b>
      </div>
      <div className={classes.socialMedia}>
        <Button shape="circle" size="large" icon={<InstagramOutlined />} />
        <span>&</span>
        <Button shape="circle" size="large" icon={<FacebookOutlined />} />
        <div>...Follow us on Social Media.!</div>
      </div>
      <div className={classes.footerBottom}>
        Made with ❤️️ by <b>Karan Rajput</b>... ...Also known as{" "}
        <b>WEBBYWOLF</b> 🐺
      </div>
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  footer: {
    height: 150,
    background: "#ededed",
    padding: 10,
    display: "flex",
    justifyContent: "space-evenly",
    flexWrap: "wrap",
  },
  footerLogo: {
    color: "#505050",
    fontSize: 40,
    fontWeight: 700,
    paddingRight: "10vw",

    "& b": {
      color: "#ffa500",
    },
  },
  socialMedia: {
    height: 70,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexWrap: "wrap",
    color: "#505050",

    "& span": {
      fontWeight: 700,
      margin: [0, 10],
    },
    "& div": {
      //   width: "100%"
      paddingLeft: 20,
      textAlign: "center",
      marginLeft: "auto",
      fontWeight: 500,
      fontSize: 18,
    },
  },
  footerBottom: {
    width: "100%",
    textAlign: "center",
    fontSize: 16,
    fontWeight: 600,

    "& b": {
      color: "#505050",
      fontWeight: 700,
    },
  },
  "@media (max-width: 570px)": {
    footer: {
      height: 180,
      paddingBottom: 0,
    },
    footerLogo: {
      fontSize: 25,
      paddingRight: "0w",
      marginBottom: -15,
      "& b": {
        fontWeight: 700,
      },
    },
    socialMedia: {
      width: "100%",
      flexWrap: "nowrap",
      justifyContent: "center",

      "& div": {
        paddingLeft: 5,
        fontSize: 12,
        marginLeft: 10,
      },
    },
    footerBottom: {
      fontSize: 13,
    },
  },
}));

export default Footer;
