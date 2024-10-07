import React, { createContext, useContext, useMemo, useRef, useState } from "react"
import { userLogic } from "../userLogic";
import { ExcelRow } from "../excel-dropzone";
import { User } from "../userLogic/types";
import { UserLogicContextProps } from "./types";


const UserLogicContext = createContext<UserLogicContextProps | undefined>(undefined);

export const UserLogicProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [data, setData] = useState<any>(null);

    const insertDataList = (data: ExcelRow[]): void => {
        const success = userLogic.addDataList(data);
        if (!success) {
            alert("Could not add all data.");
            return;
        }
        setData({ nameList: userLogic.getUsersWithScoreList() })
    }

    const insertUserIdList = (userIdList: { _id: number, name: string }[]): void => {
        userLogic.addUserIdList(userIdList);
        setData({ nameList: userLogic.getUsersWithScoreList() })
    }

    const insertUserIdScoreList = (data: { userId: number, score: number }[]): void => {
        userLogic.addUserIdScoreList(data)
        setData({ nameList: userLogic.getUsersWithScoreList() })

    }

    const insertUserScore = (name: string, score: number): void => {
        userLogic.addUserWithScore(name, score)
        setData({ nameList: userLogic.getUsersWithScoreList() })
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