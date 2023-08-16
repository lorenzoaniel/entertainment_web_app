import { IStore } from "@/interfaces/state/IStore";

export const authSlice = (set: any) => ({
	states: {
		userCreds: {
			email: "",
			password: "",
			repeatPassword: "",
		},
		isLoginFormType: true,
	},

	actions: {
		useInputCreds: (inputData: string, credType: "email" | "password" | "repeatPassword") => {
			set((state: IStore) => ({
				mainState: {
					...state.mainState,
					auth: {
						states: {
							userCreds: {
								...state.mainState.auth.states.userCreds,
								[credType]: inputData,
							},
						},
					},
				},
			}));
		},
		useToggleFormType: () => {
			set((state: IStore) => ({
				mainState: {
					...state.mainState,
					auth: {
						...state.mainState.auth,
						states: {
							...state.mainState.auth.states,
							isLoginFormType: !state.mainState.auth.states.isLoginFormType,
						},
					},
				},
			}));
		},
		useSubmitForm: () => {
			/* 
        take userCreds and send to api but for now in dev alert("form sent")
      */
		},
	},
});
