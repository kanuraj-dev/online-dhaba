import { Col, Divider, Input, Row } from "antd";
import React, { useState, useEffect } from "react";
import { createUseStyles } from "react-jss";
import { EnvironmentFilled, SearchOutlined } from "@ant-design/icons";
import { useHistory, useRouteMatch } from "react-router-dom";

function SearchBar() {
  const {
    params: { searchValue },
  } = useRouteMatch() || {};
  const classes = useStyles();
  const history = useHistory();
  const [searchInputValue, setSearchInputValue] = useState("");

  useEffect(() => {
    if (searchValue !== undefined) {
      setSearchInputValue(searchValue.split("-").join(" "));
    }
  }, [searchValue]);

  const onSearch = () => {
    if (searchInputValue !== "") {
      let searchString = searchInputValue.split(" ").join("-");
      history.push(`/s/${searchString}`);
    }
  };

  return (
    <Row className={classes.searchInput} justify="center" align="middle">
      <Col xs={8} md={7}>
        <Input
          type="primary"
          prefix={<EnvironmentFilled />}
          placeholder="Location.."
          spellCheck={false}
        />
      </Col>
      <Col xs={1} md={2} style={{ textAlign: "center" }}>
        <Divider type="vertical" className={classes.searchBarDivider} />
      </Col>
      <Col xs={15} md={15}>
        <Input
          prefix={<SearchOutlined />}
          placeholder="Find food items near uhh.."
          value={searchInputValue}
          onChange={(e) => setSearchInputValue(e.target.value)}
          onPressEnter={onSearch}
          spellCheck={false}
        />
      </Col>
    </Row>
  );
}

const useStyles = createUseStyles(() => ({
  searchInput: {
    width: "100%",
    height: "55px",
    padding: "0 10px",
    overflow: "hidden",
    background: "rgb(255, 255, 255)",
    borderRadius: "0.8rem",
    boxShadow: "rgb(28 28 28 / 8%) 0px 2px 8px",
    border: "1px solid rgb(232, 232, 232)",

    "& .ant-input-affix-wrapper": {
      border: "none",
      outline: "none",
      boxShadow: "none",
    },

    "& .anticon": {
      paddingRight: 15,
      fontSize: 22,
      color: "#f88379",
    },

    "& .ant-input": {
      fontWeight: "700",
      fontSize: "15px",
      color: "#505050",
    },
  },
  searchBarDivider: {
    height: 25,
    borderLeft: "2px solid rgba(0, 0, 0, 0.35) !important",
  },
  "@media (max-width: 570px)": {
    searchInput: {
      height: "50px",

      "& .anticon": {
        paddingRight: 5,
        fontSize: 18,
      },
      "& .ant-input": {
        fontWeight: "600",
        fontSize: "12px",
      },
    },
  },
}));

export default SearchBar;
