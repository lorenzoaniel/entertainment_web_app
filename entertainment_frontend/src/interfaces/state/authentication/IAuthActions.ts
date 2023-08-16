export interface IAuthActions {
	useSearchBar: (inputData: string, credType: "email" | "password" | "repeatPassword") => void;
}
