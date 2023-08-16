import { IAuthSlice } from "./authentication/IAuthSlice";

export interface IStore {
	auth: IAuthSlice;
}
