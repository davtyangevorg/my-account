import styled from "styled-components";

export const CircularChartWrapper = styled.div`
    position: relative;
`;
export const Svg = styled.svg`
    max-width: 80%;
    max-height: 250px;
`;
export const WrapperCirclePath = styled.path`
    fill: none;
    stroke: #eef5ff;
    stroke-width: 3.5;
`;
export const MainCirclePath = styled.path`
    fill: none;
    stroke-width: 3;
`;
export const Title = styled.p`
    position: absolute;
    top: 70px;
    left: 50%;
    transform: translateX(-50%);
    color: #7683a8;
    font-size: 12px;
    font-weight: 600;
`;
export const UsedPercent = styled.p`
    display: flex;
    align-items: center;
    position: absolute;
    top: 87px;
    left: 50%;
    transform: translateX(-50%);
    color: #363f5a;
    font-size: 50px;
    font-weight: 700;
`;
export const PercentSpan = styled.span`
    display: inline-block;
    height: 40px;
    padding-top: 12px;
    margin-left: 1px;
    font-size: 22px;
`;
export const UsedSize = styled.p`
    position: absolute;
    top: 150px;
    left: 50%;
    transform: translateX(-50%);
    color: #7683a8;
    font-size: 14px;
    font-weight: 600;
`;
