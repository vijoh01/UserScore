import { ExcelRow } from "../excel-dropzone";
import { UserLogic, UserUtilityHandler} from "./types";

const createUserLogic = ({ createUserUtilityProvider }: UserUtilityHandler): UserLogic => {
    const userNameMap = new Map<number, string>();
    const userScoreMap = new Map<number, number[]>();

    const utils = createUserUtilityProvider({ userNameMap, userScoreMap });

    return Object.freeze({

        addDataList(data: ExcelRow[]): boolean {
            let success = true;
            for (const { name, score } of data) {
                if (!name || score === undefined) {
                    console.error(`Failed to insert values (name: ${name}, score: ${score})`);
                    success = false;
                    continue;
                }
                this.addUserWithScore(name, score);
            };
            return success;
        },

        addUserWithScore(name: string, score: number): boolean {

            let userId: number | undefined;

            const user = utils.findUser(name);

            if (user) {
                userId = user._id;
            } else {
                userId = utils.getHighestId() + 1;
                userNameMap.set(userId, name);
            }

            return utils.addScore(userId, score);

        },

        addUserIdList(data: { _id: number, name: string }[]): boolean {
            let success = true;
            for (const { _id, name } of data) {
                if (userNameMap.has(_id)) {
                    console.error(`A user already exist with (ID: ${_id}, name: ${name}`);
                    success = false;
                    continue;
                }
                userNameMap.set(_id, name);
            };
            return success;
        },

        addUserIdScoreList(data: { userId: number, score: number }[]): boolean {
            let success = true;
            for (const { userId, score } of data) {
                if (!userNameMap.has(userId)) {
                    console.error("Could not find user with user ID: " + userId);
                    success = false;
                    continue;
                }

                utils.addScore(userId, score);
            };
            return success;
        },

        getScoresForName(name: string): number[] | undefined {
            const user = utils.findUser(name);
            if (user) {
                return utils.highToLow(userScoreMap.get(user._id));
            }
            return undefined;
        },

        getUsersWithScoreList(): { _id: number, name: string, score: number }[] {

            const userScoreList = [...userNameMap.entries()].map((([_id, name]) => {
                return { _id, name, score: utils.getHighestScoreForId(_id) }
            }))

            return userScoreList.sort(((a, b) => b.score - a.score));
        },

        getScoresForId(userId: number): number[] | undefined {
            if (!userScoreMap.has(userId)) {
                console.log(`No user with ID: ${userId}`)
                return undefined;
            }
            console.log("userId: " + userNameMap.get(userId));
            return utils.highToLow(userScoreMap.get(userId));
        },

        clear(): void {
            userNameMap.clear();
            userScoreMap.clear();
        }
    })
}

export default createUserLogic;