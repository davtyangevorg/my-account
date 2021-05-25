import React from "react";

import { reverseMap } from "../../../helpers.js";

import Item from "./Item/index.jsx";

const ChartItems = ({ PATH_COMMANDS, totalSize, data }) => {
    let prevFakePercent = 0;
    return (
        <>
            {reverseMap(data, (item, index) => {
                const percent = (item.size * 100) / totalSize;

                prevFakePercent = percent + (index === 0 ? 0 : prevFakePercent);

                return (
                    <React.Fragment key={item._id}>
                        <Item
                            index={index}
                            isLastItem={index === data.length - 1}
                            itemData={item}
                            prevFakePercent={prevFakePercent}
                            PATH_COMMANDS={PATH_COMMANDS}
                        />
                    </React.Fragment>
                );
            })}
        </>
    );
};

export default ChartItems;
