import { IAuthSlice } from "./authentication/IAuthSlice";

export interface IStore {
	mainState: {
		auth: IAuthSlice;
	};
}
