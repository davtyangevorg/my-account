import React, { useState } from "react";

import * as Styled from "./styled.js";

import Tooltip from "../../../ChartTooltip/index.jsx";

const Item = ({
    index,
    isLastItem,
    itemData,
    prevFakePercent,
    PATH_COMMANDS,
}) => {
    const [isShowTooltip, setIsShowTooltip] = useState(false);
    const [tooltipPosition, setTooltipPosition] = useState({
        x: 0,
        y: 0,
    });
    const handleMouseMove = (event) => {
        setIsShowTooltip(true);
        setTooltipPosition({
            x: event.clientX,
            y: event.clientY,
        });
    };
    return (
        <>
            {/* CirclePath is a svg path */}
            {!isLastItem && (
                <Styled.CirclePath
                    color={"#DCE2F0"}
                    prevFakePercent={prevFakePercent + 0.4}
                    d={PATH_COMMANDS}
                />
            )}
            <Styled.CirclePath
                onMouseMove={(e) => handleMouseMove(e)}
                onMouseOut={() => setIsShowTooltip(false)}
                color={itemData.color}
                prevFakePercent={prevFakePercent}
                d={PATH_COMMANDS}
            />
            {isShowTooltip && (
                <Tooltip tooltipPosition={tooltipPosition}>
                    <Styled.TooltipInner>
                        {itemData.name} {itemData.size}GB
                    </Styled.TooltipInner>
                </Tooltip>
            )}
        </>
    );
};

export default Item;
