import { UserUtilityProvider } from "./types";

const createUserUtilityProvider = ({ userNameMap, userScoreMap }: {
    userNameMap: Map<number, string>,
    userScoreMap: Map<number, number[]>
}): UserUtilityProvider => {

    return Object.freeze({
        getHighestId(): number {
            const ids = Array.from(userNameMap.keys());
            return ids.length > 0 ? Math.max(...ids) : 0;
        },

        getHighestScoreForId(_id: number): number {
            const user = this.highToLow(userScoreMap.get(_id));
            return user && user.length > 0 ? user[0] : 0;
        },

        findUser(name: string): { _id: number, name: string } | undefined {
            const foundUserId = [...userNameMap.entries()].find(([_id, userName]) => userName === name);

            if (foundUserId) {
                return { _id: foundUserId[0], name: foundUserId[1] };
            }
            return undefined;
        },

        highToLow(numberArray: number[] | undefined): number[] {
            return numberArray?.sort((a, b) => b - a) || [];
        },

        addScore(userId: number, score: number): boolean {

            if (typeof score !== "number" || score < 0) {
                console.error(`Failed to add score for User ID ${userId}: (score: ${score})`);
                return false;
            }

            if (!userScoreMap.has(userId)) {
                userScoreMap.set(userId, []);
            }

            userScoreMap.get(userId)!.push(score);
            return true;
        },


    });
}

export default createUserUtilityProvider;