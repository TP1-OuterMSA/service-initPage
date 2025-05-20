import styled from "styled-components";
import "./font.css"

export const MainContainer = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    font-family: '210manbok';
`
export const MiddleContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 80%;
    background-color: whitesmoke;
    background-size: 35%;
    gap: 5%;
`

// 좌측 메뉴 카테고리 컨테이너
export const LeftContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    width: 20%;
    background-color: white;
    border-right: 1px solid lightgray;
`
export const LeftLogoWrapper = styled.div`
    font-size: 1.7rem;
    font-weight: bold;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 15px;
    height: 15%;
    color: deepskyblue;

    &:hover {
        cursor: pointer;
    }
`
export const LeftCategoryItemsWrapper = styled.div`
    font-size: 1.2rem;
    width: 60%;
    padding-block: 10px;
    padding-left: 15px;
    display: flex;
    gap: 10px;
    justify-content: left;
    align-items: center;
    
    &:hover {
        cursor: pointer;
        font-weight: bold;
    }
`
export const LeftCategoryItemIcon = styled.img`
    width: 30px;
    height: 30px;
`
export const LeftCategoryItemName = styled.span`

`

// 상단 메뉴 탭 컨테이너
export const TopContainer = styled.div`
    width: 100%;
    height: 7%;
    display: flex;
    justify-content: right;
    border-bottom: 1px solid lightgray;
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;
    padding-inline: 15px;
`
export const Button = styled.div`
    border: 1px solid lightgray;
    border-radius: 5px;
    padding-block: 6px;
    padding-inline: 8px;
    font-size: 0.9rem;
    
    &:hover {
        cursor: pointer;
        background-color: lightgray;
    }
`

// 중단 컨텐츠 내용 컨테이너 
export const OuterContainer = styled.div`
    width: 100%;
    height: 100%;
    position: relative;
`

export const BackgroundImage = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('/mju_logo.png');
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 0.3;
`

export const ContentContainer = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`
export const ContentTodayInformationBlock = styled.div`
    width: 85%;
    background-color: white;
    font-weight: bold;
    font-size: 1.3rem;
    padding: 15px;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`
export const ContentBlockLine = styled.div`
    display: flex;
    width: 100%;
    justify-content: center;
    gap: 5%;
`
export const ContentBlock = styled.div`
    border-radius: 5px;
    background-color: white;
    width: 25%;
    height: 40vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`
export const ContentLongBlock = styled.div`
    border-radius: 5px;
    background-color: white;
    width: 85%;
    height: 30vh;
    display: flex;
    flex-direction: column;
    box-shadow: 0 6px 8px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08);
`
export const BlockTitle = styled.div`
    text-align: center;
    padding: 15px;
    font-weight: bold;
    font-size: 1.2rem;
    width: 100%;
    border-bottom: 1px dotted lightgray;
`
export const BlockContent = styled.div`
    padding-top: 5px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
`

// 오늘의 식단
export const TodayFoodWrapper = styled.div`
    text-align: center;
`

// 남은 식권 개수
export const TodayLeftWrapper = styled.div`
    font-size: 3rem;
    font-weight: bold;
`

// 커뮤니티 게시글
export const PostWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    padding-block: 10px;
`
export const PostLine = styled.div`
    width: 95%;
    display: flex;
    text-align: center;
    
    &:hover {
        cursor: pointer;
        opacity: 0.8;
    }
`
export const PostTitle = styled.div`
    flex: 5;
`
export const PostLikeCount = styled.div`
    flex: 1;
`
export const PostCommentCount = styled.div`
    flex: 1;
`
export const PostCreatedAt = styled.div`
    flex: 3;
`