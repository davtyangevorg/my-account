import React, { useState, useRef, useLayoutEffect } from "react";

import * as Styled from "./styled.js";

import styled from "styled-components";

import ChartItems from "./ChartItems/index.jsx";

// PATH_COMMANDS is a commands for svg path data for create circle
const PATH_COMMANDS = "M18 2 a 15 15 0 0 1 0 31 a 15 15 0 0 1 0 -31";

const CircularChart = ({ totalSize, data, usedSize }) => {
    const [isShowTooltip, setIsShowTooltip] = useState(false);
    const [tooltipData, setTooltipData] = useState();
    const [chartWrapperPosition, setChartWrapperPosition] = useState({
        x: null,
        y: null,
    });
    const [tooltipPosition, setTooltipPosition] = useState({
        x: 0,
        y: 0,
    });
    const chartRef = useRef();

    useLayoutEffect(() => {
        setChartWrapperPosition({
            x: chartRef.current.getBoundingClientRect().x,
            y: chartRef.current.getBoundingClientRect().y,
        });
    }, []);
    //console.log(chartWrapperPosition);

    return (
        <Styled.CircularChartWrapper ref={chartRef}>
            <Styled.Svg viewBox="0 -2 36 40">
                <Styled.WrapperCirclePath d={PATH_COMMANDS} />
                {mainCircleShadow}
                <Styled.MainCirclePath
                    stroke="url(#rg1)"
                    d={PATH_COMMANDS}
                ></Styled.MainCirclePath>
                <ChartItems
                    PATH_COMMANDS={PATH_COMMANDS}
                    totalSize={totalSize}
                    data={data}
                    setIsShowTooltip={setIsShowTooltip}
                    setTooltipPosition={setTooltipPosition}
                    chartWrapperPosition={chartWrapperPosition}
                    setTooltipData={setTooltipData}
                />
            </Styled.Svg>
            <Styled.Title>Used</Styled.Title>
            <Styled.UsedPercent>
                {((usedSize * 100) / totalSize).toFixed(1)}
                <Styled.PercentSpan>%</Styled.PercentSpan>
            </Styled.UsedPercent>
            <Styled.UsedSize>{usedSize} GB</Styled.UsedSize>
            <Styled.Tooltip
                isShowTooltip={isShowTooltip}
                x={`${tooltipPosition.x}px`}
                y={`${tooltipPosition.y}px`}
            >
                {tooltipData?.name} {tooltipData?.size}GB
            </Styled.Tooltip>
        </Styled.CircularChartWrapper>
    );
};

export default CircularChart;

const mainCircleShadow = (
    <defs>
        <linearGradient id="rainbow">
            <stop stopColor="#C2D4F3" offset="0.65" />
            <stop stopColor="#DEE3F0" offset="0.955" />
        </linearGradient>
        <radialGradient
            xlinkHref="#rainbow"
            gradientUnits="userSpaceOnUse"
            cx="20.5"
            cy="17"
            r="19"
            fx="6.7"
            fy="20"
            id="rg1"
        />
        <linearGradient
            xlinkHref="#rainbow"
            gradientUnits="userSpaceOnUse"
            id="lg1"
        />
    </defs>
);
