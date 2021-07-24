import { UserOutlined } from "@ant-design/icons";
import { Button } from "antd";
import Avatar from "antd/lib/avatar/avatar";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React from "react";
import { createUseStyles } from "react-jss";
import SearchBar from "./SearchBar";

function HomeHeader() {
  const classes = useStyles();
  const screens = useBreakpoint();
  const isMd = screens.md;

  return (
    <div className={classes.homeHeader}>
      <div className={classes.headerTitle}>
        Online<b>Dhaba</b>
      </div>
      <div className={classes.headerRight}>
        {isMd && (
          <>
            <Button size={isMd ? "middle" : "small"} type="line">
              Sign Up
            </Button>
            <Button
              size={isMd ? "middle" : "small"}
              type="primary"
              shape="round"
            >
              Sign In
            </Button>
          </>
        )}
        <Avatar size={isMd ? "large" : "middle"} icon={<UserOutlined />} />
      </div>
      <div className={classes.searchBarWrapper}>
        <SearchBar />
      </div>
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  homeHeader: {
    minheight: 120,
    padding: [0, 15],
    borderBottom: "3px solid #f88379",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    flexWrap: "wrap",
  },
  headerTitle: {
    color: "#505050",
    fontSize: 40,
    fontWeight: 700,
    textAlign: "center",
    paddingLeft: "3vw",

    "& b": {
      color: "#ffa500",
      fontWeight: 700,
      fontStyle: "italic",
    },
  },
  headerRight: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "center",

    "& .ant-btn": {
      width: 100,
      fontWeight: 600,
      border: "none",
    },

    "& .ant-avatar": {
      margin: [0, 20],
      backgroundColor: "#87d068",
    },
  },
  searchBarWrapper: { width: "100%", padding: [5, 10, 20] },

  "@media (max-width: 570px)": {
    homeHeader: { padding: [5, 5, 0] },
    headerTitle: {
      fontSize: 27,
      paddingLeft: 20,
    },
    headerRight: {
      "& .ant-btn": {
        width: 80,
      },
      "& .ant-avatar": { margin: [0, 15] },
    },
    searchBarWrapper: { padding: [10, 10, 15] },
  },
}));

export default HomeHeader;
