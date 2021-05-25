import React, { useRef } from "react";

import * as Styled from "./styled.js";

import styled from "styled-components";

import ChartItems from "./ChartItems/index.jsx";

// PATH_COMMANDS is a commands for svg path data for create circle
const PATH_COMMANDS = "M18 2 a 15 15 0 0 1 0 31 a 15 15 0 0 1 0 -31";

const CircularChart = ({ totalSize, data, usedSize }) => {
    const chartRef = useRef();

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
                />
            </Styled.Svg>
            <Styled.Title>Used</Styled.Title>
            <Styled.UsedPercent>
                {((usedSize * 100) / totalSize).toFixed(1)}
                <Styled.PercentSpan>%</Styled.PercentSpan>
            </Styled.UsedPercent>
            <Styled.UsedSize>{usedSize} GB</Styled.UsedSize>
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
