import { IAuthActions } from "./IAuthActions";
import { IAuthCreds } from "./IAuthCreds";

export interface IAuthSlice {
	states: {
		userCreds: IAuthCreds;
	};
	actions: IAuthActions;
}
