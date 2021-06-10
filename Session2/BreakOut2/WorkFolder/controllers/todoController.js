import * as dbService from "../services/dbServices.js"
export const read = () => {
	return dbService.getData()
}
