import { create } from "zustand";
import { authSlice } from "./authentication";
import { IStore } from "@/interfaces/state/IStore";

export const Store = create<IStore>((set) => ({
	auth: {
		actions: {
			...authSlice(set).actions,
		},
		states: {
			...authSlice(set).states,
		},
	},
}));
