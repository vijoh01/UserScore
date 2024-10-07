import { ExcelRow } from "../excel-dropzone";
import { UserLogic } from "../userLogic/types";

export interface UserLogicContextProps {
    instance: UserLogic,
    data: { nameList: { _id: number, name: string, score: number }[] };
    insertDataList: (data: ExcelRow[]) => void;
    insertUserIdList: (userIdList: { _id: number, name: string }[]) => void;
    insertUserIdScoreList: (data: { userId: number, score: number }[]) => void;
    insertUserScore: (name: string, score: number) => void;
}