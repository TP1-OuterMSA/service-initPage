import axiosInstance, {ApiResponse} from "./axiosInstance.ts";

// 가져온 API 결과 형태를 보고 수정 필요
interface MealItem {
    menuId: number,
    date: Date,
    mealType: string,
    menuContent: string,
    menuTitle: string,
    extraInfo: string,
    foods: FoodItem[]
}
interface FoodItem {
    mealId: number,
    mealName: string,
    mealCategory: string,
    nutrition: string,
    calorie: number,
    allergy: string
}
export const getThisWeekMeals = async (

): Promise<MealItem[]> => {
    return await axiosInstance.get(
        "/api/team4/meal/items",
    );
}

// 남은 식권 수를 가져오는 API 연동 필요
export const getTicket = async (

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
    const response: CommunityPost[] = await axiosInstance.get(
        '/api/team2/community/getPosts',
        {
            headers: {
                'userId': 1
            },
            params: {
                cursor: 0,
                count: 10,
                filter: 'ALL'
            }
        }
    );
    const result: CommunityPost[] = [];
    for( const post of response ){
        result.push( post );
    }
    return result;
}