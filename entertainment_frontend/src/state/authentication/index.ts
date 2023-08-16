import { IStore } from "@/interfaces/state/IStore";
import { IAuthCreds } from "@/interfaces/state/authentication/IAuthCreds";

export const authSlice = (set: any) => ({
	states: {
		userCreds: <IAuthCreds>{
			email: "",
			password: "",
			repeatPassword: "",
		},
	},

	actions: {
		useSearchBar: (inputData: string, credType: "email" | "password" | "repeatPassword") => {
			set((state: IStore) => ({
				auth: {
					...state.auth,
					states: {
						userCreds: {
							...state.auth.states.userCreds,
							[credType]: inputData,
						},
					},
				},
			}));
		},
	},
});
