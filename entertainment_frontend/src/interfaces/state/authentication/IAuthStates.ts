export interface IAuthStates {
	userCreds: {
		email: string;
		password: string;
		repeatPassword?: string;
	};
	isLoginFormType: boolean;
}
