"use client";

import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import clsx from "clsx";

/*
 TODO: add errors to input by putting conditional logic in placeholder 
*/

const mixins = {
	formInputs: `
		w-full h-[3.7rem]
		bg-transparent
		border-b-[0.1rem] border-blue-greyish
		pl-[1.6rem]
		
		text-body-m text-white-pure
	`,
};

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
	// SELECTORS
	// change to store
	let selector = {
		isLoginFormTypeState: true,
	};

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm({
		resolver: yupResolver(selector.isLoginFormTypeState ? schemaLogin : schemaSignUp),
	});
	const onSubmit = (data: any) => console.log(data); // replace with api

	return (
		<form
			onSubmit={handleSubmit(onSubmit)}
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
				className={clsx("credentials-form-input-email", mixins.formInputs)}
				{...register("email")}
				placeholder="Email address"
			/>

			<input
				className={clsx("credentials-form-input-password", mixins.formInputs)}
				{...register("password")}
				placeholder="Password"
			/>

			{selector.isLoginFormTypeState ? null : (
				<input
					className={clsx("credentials-form-input-passwordrepeat", mixins.formInputs)}
					{...register("repeatPassword")}
					placeholder="Repeat Password"
				/>
			)}

			<button
				className={clsx(
					"credentials-form-submit",
					`
						w-full h-[4.8rem]
						bg-red-default
						rounded-[0.6rem]

						text-white-pure text-body-m
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
					className={clsx(
						"credentials-form-CTA-wrapper-redirect",
						`
							text-body-m text-red-default
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
