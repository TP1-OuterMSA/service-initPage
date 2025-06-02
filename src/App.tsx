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
  OuterContainer, PostCommentCount, PostCreatedAt, PostLikeCount, PostLine, PostTitle, PostWrapper,
  TodayFoodWrapper,
  TopContainer
} from "./mainStyle.ts";
import { createGlobalStyle } from 'styled-components';
import {useEffect, useState} from "react";
import {getCommunityPost, getThisWeekMeals} from "./service/serviceApi.ts";

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

interface Post {
  id: number;
  title: string;
  createdAt: string;
  commentCount: number;
  likeCount: number;
}

interface Meal {
  id: string,
  content: string,
}

function App() {
  const [ breakfast, setBreakfast ] = useState<Meal[]>([]);
  const [ lunch, setLunch ] = useState<Meal[]>([]);
  const [ dinner, setDinner ] = useState<Meal[]>([]);
  const [ posts, setPosts ] = useState<Post[]>([]);
  //const [ tickets, setTickets ] = useState<number>(0);

  const now = new Date();

  useEffect(() => {

    const postSetting = async () => {
      try{
        const postResponse = await getCommunityPost();
        const postList: Post[] = [];
        for( const post of postResponse ){
          const temp: Post = {
            id: post.id,
            title: post.title,
            createdAt: post.createdAt,
            commentCount: post.commentCount,
            likeCount: post.likeCount
          }
          postList.push( temp )
        }
        setPosts(postList);
      } catch ( err ) {
        console.error( "커뮤니티 게시글 API 호출 중 에러가 발생했습니다", err );
        console.log( "게시글 조회에 실패했습니다" )
      }
    }

    const mealSetting = async () => {
      try {
        const today = new Date();
        const dateString = today.toISOString().split('T')[0];

        const mealResponse = await getThisWeekMeals();
        for( const meal of mealResponse ){
          if( meal.date.toString() == dateString ) {
            console.log( meal )
            const currentList: Meal[] = []
            let idHash = 0
            //const foodList = meal.foods
            const foodList = meal.menuContent.split(" ")
            for( const food of foodList ) {
              currentList.push( {
                //id: food.mealId + idHash,
                //content: food.mealName
                id: meal.menuId + idHash,
                content: food
              })
              idHash++
            }
            if( meal.mealType == 'breakfast' ) setBreakfast(currentList);
            else if( meal.mealType == 'lunch' ) setLunch(currentList);
            else if( meal.mealType == 'dinner' ) setDinner(currentList);
          }
        }

      } catch ( err ) {
        console.error( "학식 메뉴 조회 API 호출 중 에러가 발생했습니다", err );
        console.log( "학식 메뉴 조회에 실패했습니다" )
      }
    }
    postSetting();
    mealSetting();
  }, []);



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
                  { now.getFullYear() + "년 " + ( now.getMonth() + 1 ) + "월 " + now.getDate() + "일" }
                </ContentTodayInformationBlock>
                <ContentBlockLine>
                  <ContentBlock>
                    <BlockTitle> 오늘의 아침 </BlockTitle>
                    <BlockContent>
                      {
                        breakfast.map(
                            ( meal ) => (
                                <TodayFoodWrapper key={ "1" + meal.id }> { meal.content} </TodayFoodWrapper>
                            )
                        )
                      }
                    </BlockContent>
                  </ContentBlock>
                  <ContentBlock>
                    <BlockTitle> 오늘의 점심 </BlockTitle>
                    <BlockContent>
                      {
                        lunch.map(
                            ( meal ) => (
                                <TodayFoodWrapper key={ "2" + meal.id }> { meal.content} </TodayFoodWrapper>
                            )
                        )
                      }
                    </BlockContent>
                  </ContentBlock>
                  <ContentBlock>
                    <BlockTitle> 오늘의 저녁 </BlockTitle>
                    <BlockContent>
                      {
                        dinner.map(
                            ( meal ) => (
                                <TodayFoodWrapper key={ "3" + meal.id }> { meal.content} </TodayFoodWrapper>
                            )
                        )
                      }
                    </BlockContent>
                  </ContentBlock>
                </ContentBlockLine>
                <ContentBlockLine>
                  <ContentLongBlock>
                    <BlockTitle> 최근 게시글 </BlockTitle>
                    <PostWrapper>
                      {
                        posts.map(
                            ( p ) => (
                                <PostLine key={ p.id }>
                                  <PostCommentCount> { p.id } </PostCommentCount>
                                  <PostTitle> { p.title } </PostTitle>
                                  <PostCreatedAt> { p.createdAt } </PostCreatedAt>
                                  <PostLikeCount> { p.likeCount } </PostLikeCount>
                                </PostLine>
                            )
                        )
                      }
                    </PostWrapper>
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
