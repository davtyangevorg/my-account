import React from "react";

import * as Styled from "./styled.js";

import { reverseMap } from "../../../helpers.js";

const ChartItems = ({
    PATH_COMMANDS,
    totalSize,
    data,
    setIsShowTooltip,
    setTooltipPosition,
    setTooltipData,
}) => {
    const handleMouseMove = (event, tooltipData) => {
        setTooltipData(tooltipData);
        setIsShowTooltip(true);
        setTooltipPosition({
            x: event.clientX,
            y: event.clientY
        });
    };

    let prevFakePercent = 0;

    return (
        <>
            {reverseMap(data, (item, index) => {
                const percent = (item.size * 100) / totalSize;

                prevFakePercent = percent + (index === 0 ? 0 : prevFakePercent);

                return (
                    <React.Fragment key={item._id}>
                        {/* CirclePath is a animated svg path */}
                        {index !== data.length - 1 && (
                            <Styled.CirclePath
                                color={"#DCE2F0"}
                                prevFakePercent={prevFakePercent + 0.4}
                                d={PATH_COMMANDS}
                            />
                        )}
                        <Styled.CirclePath
                            onMouseMove={(e) => handleMouseMove(e, item)}
                            onMouseOut={() => setIsShowTooltip(false)}
                            color={item.color}
                            prevFakePercent={prevFakePercent}
                            d={PATH_COMMANDS}
                        />
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default ChartItems;
