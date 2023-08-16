import { IAuthActions } from "./IAuthActions";
import { IAuthStates } from "./IAuthStates";

export interface IAuthSlice {
	states: IAuthStates;
	actions: IAuthActions;
}
