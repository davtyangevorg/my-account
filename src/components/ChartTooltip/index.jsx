import React from "react";
import ReactDom from "react-dom";

import * as Styled from "./styled.js";

const Tooltip = React.memo(({ tooltipPosition, children }) => {
    return ReactDom.createPortal(
        <Styled.TooltipRootWrapper
            x={`${tooltipPosition.x + 10}px`}
            y={`${tooltipPosition.y + 10}px`}
        >
            {children}
        </Styled.TooltipRootWrapper>,
        document.querySelector(".chart-tooltip-root")
    );
});

export default Tooltip;
