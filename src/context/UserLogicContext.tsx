import React, { createContext, useContext, useMemo, useRef, useState } from "react"
import { userLogic } from "../userLogic";
import { ExcelRow } from "../excel-dropzone";
import { UserLogic } from "../userLogic/types";


interface UserLogicContextProps {
    instance: UserLogic,
    data: {nameList: {_id: number, name: string, score: number}[]};
    insertDataList: (data: ExcelRow[]) => void;
    insertUserIdList: (userIdList: { _id: number, name: string }[]) => void;
    insertUserIdScoreList: (data: { userId: number, score: number }[]) => void;
    insertUserScore: (name: string, score: number) => void;
}

const UserLogicContext = createContext<UserLogicContextProps | undefined>(undefined);

export const UserLogicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData]:any = useState();

    const insertDataList = (data: ExcelRow[]): void => {
        userLogic.addDataList(data);
        setData({nameList: userLogic.getUsersWithScoreList()})
    }

    const insertUserIdList = (userIdList: { _id: number, name: string }[]): void => {
        userLogic.addUserIdList(userIdList);
        setData({nameList: userLogic.getUsersWithScoreList()})
    }

    const insertUserIdScoreList = (data: { userId: number, score: number }[]): void => {
        userLogic.addUserIdScoreList(data)
        setData({nameList: userLogic.getUsersWithScoreList()})

    }

    const insertUserScore = (name: string, score: number): void => {
        userLogic.addUserWithScore(name, score)
        setData({nameList: userLogic.getUsersWithScoreList()})
    }

    const value = useMemo(() => ({
            instance: userLogic,
            data,
            insertDataList,
            insertUserIdList,
            insertUserIdScoreList,
            insertUserScore,
        }), [data])
       
    
    return <UserLogicContext.Provider value={value}>{children}</UserLogicContext.Provider>
}

export const useUserLogic = () => useContext(UserLogicContext)