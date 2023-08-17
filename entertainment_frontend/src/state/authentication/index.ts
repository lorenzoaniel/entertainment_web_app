import { IStore } from "@/interfaces/state/IStore";

export const authSlice = (set: any) => ({
	states: {
		isLoginFormType: true,
	},

	actions: {
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
		useSubmitForm: (formData: any) => {
			// TODO: replace with api this is for testing purposes
			alert(`submitted: ${JSON.stringify(formData, null, 2)}`);
		},
	},
});
