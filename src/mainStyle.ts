import styled from "styled-components";

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
`

export const TopContainer = styled.div`
    width: 100vw;
    height: 50px;
    background-color: darkblue;
`
export const MiddleContainer = styled.div`
    width: 100%;
    height: calc( 100vh - 150px );
    display: flex;
    justify-content: center;
    align-items: center;
    background-image: url('/mju_logo.png');
    background-repeat: no-repeat;
    background-position: center center;
    background-size: 35%;
    gap: 5%;
`

export const LinkBubble = styled.div`
    border-radius: 100%;
    background-color: ${props => props.color };
    width: 10%;
    aspect-ratio: 1 / 1;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    color: white;
    font-size: 1.2rem;
    
    &:hover {
        cursor: pointer;
        opacity: 1;
    }
`
export const BottomContainer = styled.div`
    width: 100vw;
    height: 100px;
    background-color: black;
`