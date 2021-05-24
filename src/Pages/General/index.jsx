import React from "react";

import { useSelector } from "react-redux";
import { getChartData } from "../../redux/selectors/chart.js";

import { getSizeSum } from "../../helpers.js";

import * as Styled from "./styled.js";

import CircularChart from "../../components/CircularChart/index.jsx";

const General = () => {
    const chartData = useSelector((state) => getChartData(state));
    
    const usedSize = getSizeSum(chartData.items);
    const freeSize = chartData.totalSize - usedSize;
    
    return (
        <Styled.GeneralWrapper>
            <Styled.Title>Storage</Styled.Title>
            <CircularChart
                totalSize={chartData.totalSize}
                usedSize={usedSize}
                data={chartData.items}
            />
            <Styled.DigitalInformation>
                <div>
                    <Styled.InfoTitle>Total</Styled.InfoTitle>
                    <Styled.Text>{chartData.totalSize} GB</Styled.Text>
                </div>
                <Styled.VerticalLine></Styled.VerticalLine>
                <div>
                    <Styled.InfoTitle>Free</Styled.InfoTitle>
                    <Styled.Text>{freeSize} GB</Styled.Text>
                </div>
            </Styled.DigitalInformation>
            <Styled.ButtonWrapper>
                <Styled.Button>Show details</Styled.Button>
            </Styled.ButtonWrapper>
        </Styled.GeneralWrapper>
    );
};

export default General;
