import styled from 'styled-components'

export const CirclePath = styled.path`
    stroke: ${(props) => props.color};
    fill: none;
    stroke-width: 3;
    stroke-linecap: round;
    stroke-dasharray: ${(props) => `${props.prevFakePercent},100`};
    animation: progress 1s ease-out forwards;
    position: relative;
    @keyframes progress {
        0% {
            stroke-dasharray: 0 100;
        }
    }
    &::after {
        content: "";
        width: 10px;
        height: 10px;
        position: absolute;
        background-color: black;
    }
`;