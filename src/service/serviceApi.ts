import axiosInstance, {ApiResponse} from "./axiosInstance.ts";

// 가져온 API 결과 형태를 보고 수정 필요
interface MealItem {
    date: string,
    mealType: string,
    content: string,
    title: string,
    info: string
}
export const getThisWeekMeals = async (

): Promise<MealItem[]> => {
    const response: ApiResponse<MealItem[]> = await axiosInstance.get(
        "/api/team4/meal/items",
    );
    return response.data;
}

// 남은 식권 수를 가져오는 API 연동 필요
export const getLeftTicket = async (

): Promise<number> => {
    const response: ApiResponse<number> = await axiosInstance.get(
        "/api/team1/"
    );
    return response.data;
}

interface CommunityPost {
    id: number,
    imageLink: string,
    content: string,
    title: string,
    createdAt: string,
    likeCount: number,
    commentCount: number
}
export const getCommunityPost = async (

): Promise<CommunityPost[]> => {
    const response: ApiResponse<CommunityPost[]> = await axiosInstance.get(
        '/api/team2/community/getPosts',
        {
            params: {
                cursor: 0,
                count: 10,
                filter: 'ALL'
            }
        }
    );
    return response.data;
}