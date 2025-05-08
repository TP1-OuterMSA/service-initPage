import {
  BackgroundImage,
  BlockContent,
  BlockTitle,
  Button,
  ButtonWrapper,
  ContentBlock,
  ContentBlockLine,
  ContentContainer,
  ContentLongBlock,
  ContentTodayInformationBlock,
  LeftCategoryItemIcon,
  LeftCategoryItemName,
  LeftCategoryItemsWrapper,
  LeftContainer,
  LeftLogoWrapper,
  MainContainer,
  MiddleContainer,
  OuterContainer,
  TodayFoodWrapper,
  TodayLeftWrapper,
  TopContainer
} from "./mainStyle.ts";
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
          <LeftContainer>
            <LeftLogoWrapper> 학식 서비스 </LeftLogoWrapper>
            <LeftCategoryItemsWrapper onClick={ () => window.location.href = '/team4' }>
              <LeftCategoryItemIcon src="/list.svg" />
              <LeftCategoryItemName> 오늘의 학식 </LeftCategoryItemName>
            </LeftCategoryItemsWrapper>
            <LeftCategoryItemsWrapper onClick={ () => window.location.href = '/team5' }>
              <LeftCategoryItemIcon src="/board.svg" />
              <LeftCategoryItemName> 학식에 대해 </LeftCategoryItemName>
            </LeftCategoryItemsWrapper>
            <LeftCategoryItemsWrapper onClick={ () => window.location.href = '/team2' }>
              <LeftCategoryItemIcon src="/community.svg" />
              <LeftCategoryItemName> 자유 게시판 </LeftCategoryItemName>
            </LeftCategoryItemsWrapper>
            <LeftCategoryItemsWrapper onClick={ () => window.location.href = '/team6' }>
              <LeftCategoryItemIcon src="/person.svg" />
              <LeftCategoryItemName> 나만의 학식 </LeftCategoryItemName>
            </LeftCategoryItemsWrapper>
            <LeftCategoryItemsWrapper onClick={ () => window.location.href = '/team3' }>
              <LeftCategoryItemIcon src="/chart.svg" />
              <LeftCategoryItemName> 통계 관리 </LeftCategoryItemName>
            </LeftCategoryItemsWrapper>
            <LeftCategoryItemsWrapper onClick={ () => window.location.href = '/team1' }>
              <LeftCategoryItemIcon src="/setting.svg" />
              <LeftCategoryItemName> 식당 관리 </LeftCategoryItemName>
            </LeftCategoryItemsWrapper>
          </LeftContainer>
          <MiddleContainer>
            <TopContainer>
              <ButtonWrapper>
                <Button> 로그인 </Button>
              </ButtonWrapper>
            </TopContainer>
            <OuterContainer>
              <BackgroundImage />
              <ContentContainer>
                <ContentTodayInformationBlock>
                  2025년 05월 20일
                </ContentTodayInformationBlock>
                <ContentBlockLine>
                  <ContentBlock>
                    <BlockTitle> 오늘의 학식 </BlockTitle>
                    <BlockContent>
                      <TodayFoodWrapper> 흰쌀밥 </TodayFoodWrapper>
                      <TodayFoodWrapper> 소고기미역국 </TodayFoodWrapper>
                      <TodayFoodWrapper> 찹쌀탕수육 </TodayFoodWrapper>
                      <TodayFoodWrapper> 배추김치 </TodayFoodWrapper>
                      <TodayFoodWrapper> 시금치무침 </TodayFoodWrapper>
                      <TodayFoodWrapper> 간장소불고기 </TodayFoodWrapper>
                    </BlockContent>
                  </ContentBlock>
                  <ContentBlock>
                    <BlockTitle> 남은 식권 개수 </BlockTitle>
                    <BlockContent>
                      <TodayLeftWrapper> 1 </TodayLeftWrapper>
                    </BlockContent>
                  </ContentBlock>
                </ContentBlockLine>
                <ContentBlockLine>
                  <ContentLongBlock>
                    <BlockTitle> 최근 게시글 </BlockTitle>
                  </ContentLongBlock>
                </ContentBlockLine>
              </ContentContainer>
            </OuterContainer>
          </MiddleContainer>
        </MainContainer>
      </>
  )
}

export default App
