export interface IAuthActions {
	useInputCreds: (inputData: string, credType: "email" | "password" | "repeatPassword") => void;
}
