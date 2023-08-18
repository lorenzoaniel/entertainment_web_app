"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";
import { Store } from "@/state/store";
import { IFormInputs } from "@/interfaces/form/IFormInputs";
import { _input_mixins } from "@/style/mixins/_input_mixins";

const schemaLogin = yup
	.object({
		email: yup.string().email("Invalid email address").required("Email is required"),
		password: yup.string().required("Password is required"),
	})
	.required();

const schemaSignUp = yup
	.object({
		email: yup.string().email("Invalid email address").required("Email is required"),
		password: yup
			.string()
			.min(8, "Password must be at least 8 characters")
			.required("Password is required"),
		repeatPassword: yup
			.string()
			.oneOf([yup.ref("password"), undefined], "Passwords must match")
			.required("Repeat password is required"),
	})
	.required();

const CredentialsForm: React.FC = () => {
	//DISPATCH
	let dispatch = {
		useSubmitForm: Store((state) => state.mainState.auth.actions.useSubmitForm),
		useToggleFormType: Store((state) => state.mainState.auth.actions.useToggleFormType),
	};

	// SELECTORS
	let selector = {
		isLoginFormTypeState: Store((state) => state.mainState.auth.states.isLoginFormType),
	};

	//FORM
	const {
		register,
		handleSubmit,
		formState: { errors },
		clearErrors,
		reset, // reset input elements
	} = useForm<IFormInputs>({
		resolver: yupResolver(selector.isLoginFormTypeState ? schemaLogin : schemaSignUp),
	});

	return (
		<form
			onSubmit={handleSubmit(dispatch.useSubmitForm)}
			className={clsx(
				"credentials-form",
				`
					${selector.isLoginFormTypeState ? "h-[36.5rem]" : "h-[42rem]"} w-[30rem]
					md:${selector.isLoginFormTypeState ? "h-[37.3rem]" : "h-[41.8rem]"} md:w-[40rem]
					flex flex-col items-center justify-between
					bg-blue-semidark
					rounded-[1rem]
					p-[2.4rem] pb-[3.2rem]

					md:p-[3.2rem]
				`
			)}
		>
			<h1
				className={clsx(
					"credentials-form-title",
					`
						self-start
						text-heading-l text-white-pure
					`
				)}
			>
				{selector.isLoginFormTypeState ? "Login" : "Sign Up"}
			</h1>

			<input
				className={clsx(
					"credentials-form-input-email",
					_input_mixins.formInputs,
					`${errors.email ? "border-red-default" : "border-blue-greyish"}`
				)}
				{...register("email")}
				onChange={() => clearErrors()}
				placeholder="Email address"
			/>

			{errors.email && (
				<p className="text-red-default" role="alert">
					{errors.email.message}
				</p>
			)}

			<input
				className={clsx(
					"credentials-form-input-password",
					_input_mixins.formInputs,
					`${errors.password ? "border-red-default" : "border-blue-greyish"}`
				)}
				{...register("password")}
				onChange={() => clearErrors()}
				placeholder="Password"
				type="password"
			/>

			{errors.password && (
				<p className="text-red-default" role="alert">
					{errors.password.message}
				</p>
			)}

			{selector.isLoginFormTypeState ? null : (
				<>
					<input
						className={clsx(
							"credentials-form-input-passwordrepeat",
							_input_mixins.formInputs,
							`${errors.repeatPassword ? "border-red-default" : "border-blue-greyish"}`
						)}
						{...register("repeatPassword")}
						onChange={() => clearErrors()}
						placeholder="Repeat Password"
						type="password"
					/>

					{errors.repeatPassword && (
						<p className="text-red-default" role="alert">
							{errors.repeatPassword.message}
						</p>
					)}
				</>
			)}

			<button
				className={clsx(
					"credentials-form-submit",
					`
						w-full h-[4.8rem]
						bg-red-default hover:bg-white-pure
						rounded-[0.6rem]

						text-white-pure text-body-m hover:text-blue-semidark
					`
				)}
				type="submit"
			>
				{selector.isLoginFormTypeState ? "Login to your account" : "Create an account"}
			</button>

			<div
				className={clsx(
					"credentials-form-CTA-wrapper",
					`
						h-fit w-fit
						flex gap-[0.9rem]
					`
				)}
			>
				<span
					className={clsx(
						"credentials-form-CTA-wrapper-desc",
						`
							text-body-m text-white-pure
						`
					)}
				>
					{selector.isLoginFormTypeState
						? "Don\u2019t have an account?"
						: "Already have an account?"}
				</span>
				<a
					onClick={() => {
						clearErrors();
						reset();
						dispatch.useToggleFormType();
					}}
					className={clsx(
						"credentials-form-CTA-wrapper-redirect",
						`
							text-body-m text-red-default
							hover:cursor-pointer
						`
					)}
				>
					{selector.isLoginFormTypeState ? "Sign Up" : "Login"}
				</a>
			</div>
		</form>
	);
};

export default CredentialsForm;
