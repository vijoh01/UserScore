import { ExcelRow } from "../excel-dropzone";

export interface UserLogic {
    addUserWithScore: (name: string, score: number) => boolean;
    addDataList: (data: ExcelRow[]) => boolean;
    addUserIdList: (data: { _id: number, name: string }[]) => boolean;
    addUserIdScoreList: (data: { userId: number, score: number }[]) => boolean;
    getScoresForName: (name: string) => number[] | undefined;
    getScoresForId: (userId: number) => number[] | undefined;
    getUsersWithScoreList: () => User[];
    clear: () => void;
}

export interface UserUtilityProvider {
    getHighestId: () => number;
    getHighestScoreForId: (_id: number) => number;
    findUser: (name: string) => { _id: number, name: string } | undefined;
    highToLow: (numberArray: number[] | undefined) => number[];
    addScore: (userId: number, score: number) => boolean;
}

export interface UserUtilityHandler {
    createUserUtilityProvider: ({ userNameMap, userScoreMap }: {
        userNameMap: Map<number, string>,
        userScoreMap: Map<number, number[]>
    }) => UserUtilityProvider;
}

export interface User {
    _id: number; 
    name: string;
    score: number;
}