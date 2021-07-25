const hideNumberInputArrows = {
  "& input::-webkit-outer-spin-button, & input::-webkit-inner-spin-button": {
    "-webkit-appearance": "none",
    margin: 0,
  },

  /* Firefox */
  "& input[type=number]": {
    "-moz-appearance": "textfield",
  },
};

export default hideNumberInputArrows;
