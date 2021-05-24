import styled from 'styled-components'

export const TabWrapper = styled.div`
    flex-grow: 1;
    display: flex;
    flex-direction: column;
`

export const HeaderWrapper = styled.header`
    text-align: center;
`
export const NavBar = styled.ul`
    overflow-x: auto;
    white-space: nowrap; 
    &::-webkit-scrollbar {
        background-color: #efefef;
        border-radius: 20px;
        height: 6px;
    }
    &::-webkit-scrollbar-thumb {
        background-color: black;
        border-radius: 20px;
    }
`
export const Item = styled.li`
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
    color:#7683A8;
    font-weight: 600;
    font-size:14px;
    padding: 20px;
    position: relative;
    &::after{
        content: '';
        position: absolute;
        width: 100%;
        height: 5px;
        background-color: #387DFF;
        border-radius: 10px 10px 0 0;
        left: 0;
        bottom: 0;
        z-index: -1;
        transform:${props => props.selected ? 'scale(1)' : 'scale(0)'};
        transition: all 0.2s ease-in-out 0s;
    };
    &:hover::after{
        transform:scale(1);
    }
`
export const SectionWrapper = styled.section`
    background-color: #F7FBFF;
    padding: 30px 0 50px;
    text-align: center;
    flex-grow: 1;
`