const customeScrollbarStyle = {
  scrollbarWidth: "thin",

  "&::-webkit-scrollbar": {
    display: "none",
    width: "4px",
    height: "4px",
    backgroundColor: "transparent",
    transition: "all 0.5s",
  },
  "&::-webkit-scrollbar-thumb": {
    borderRadius: "10px",
    WebkitBoxShadow: "inset 0 0 6px rgba(0,0,0,.3)",
    backgroundColor: "#d8d8d8",
  },
  "&:hover::-webkit-scrollbar-thumb": {
    backgroundColor: "#c4c4c4",
  },
};

export default customeScrollbarStyle;
