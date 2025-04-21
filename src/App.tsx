import {BottomContainer, LinkBubble, MainContainer, MiddleContainer, TopContainer} from "./mainStyle.ts";
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  
  body, html {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
    overflow: hidden;
  }
`;

function App() {

  return (
      <>
      <GlobalStyle />
        <MainContainer>
          <TopContainer />
          <MiddleContainer>
            <LinkBubble color={"darkblue"} onClick={ () => window.location.href = '/team1' }>
              서비스 1팀
            </LinkBubble>
            <LinkBubble color={"green"} onClick={ () => window.location.href = '/team2' }>
              서비스 2팀
            </LinkBubble>
            <LinkBubble color={"blue"} onClick={ () => window.location.href = '/team3' }>
              서비스 3팀
            </LinkBubble>
            <LinkBubble color={"darkgreen"} onClick={ () => window.location.href = '/team4' }>
              서비스 4팀
            </LinkBubble>
            <LinkBubble color={"green"} onClick={ () => window.location.href = '/team5' }>
              서비스 5팀
            </LinkBubble>
            <LinkBubble color={"brown"} onClick={ () => window.location.href = '/team6' }>
              서비스 6팀
            </LinkBubble>
          </MiddleContainer>
          <BottomContainer />
        </MainContainer>
      </>
  )
}

export default App
