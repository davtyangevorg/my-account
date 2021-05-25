import styled from "styled-components";

export const TooltipRootWrapper = styled.div.attrs((props) => ({
    style: {
        top: props.y,
        left: props.x,
    },
}))`
    position: fixed;
`;
