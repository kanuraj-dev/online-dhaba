import { Steps } from "antd";
import useBreakpoint from "antd/lib/grid/hooks/useBreakpoint";
import React, { useMemo } from "react";
import { createUseStyles } from "react-jss";

function FormStepper({ children, steps, currentStep = 0 }) {
  const screens = useBreakpoint();
  const isLg = screens.lg;
  const classes = useStyles({ isLg });

  const views = useMemo(() => React.Children.toArray(children), [children]);
  const currentView = views[currentStep];

  return (
    <div className={classes.formStepper}>
      <Steps
        current={currentStep}
        size={isLg ? "default" : "small"}
        className={classes.steps}
      >
        {steps.map((step) => (
          <Steps.Step {...step} />
        ))}
      </Steps>
      <div className={classes.content}>{currentView}</div>
    </div>
  );
}

const useStyles = createUseStyles(() => ({
  formStepper: {
    width: "90%",
    maxWidth: 600,
    margin: "5vh auto 20px",
    padding: 15,
    background: "#fff",
    borderRadius: 10,
    boxShadow: "0 0px 5px rgba(0,0,0,0.12), 0 1px 5px rgba(0,0,0,0.24)",
  },
  steps: {
    padding: [5, 20],

    "& .ant-steps-item-title": {
      paddingTop: ({ isLg }) => (isLg ? 0 : 1.5),
      fontWeight: "600",
      color: "#505050",
      opacity: "0.8",
      paddingLeft: "6px",
      fontSize: ({ isLg }) => (isLg ? 17 : 14),
    },
    "& .anticon": {
      fontSize: ({ isLg }) => (isLg ? 24 : 20),
    },
  },
}));

export default FormStepper;
