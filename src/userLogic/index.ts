import createUserLogic from "./UserLogic";
import createUserUtilityProvider from "./UserUtility";

const userLogic = createUserLogic({createUserUtilityProvider})

export { userLogic };