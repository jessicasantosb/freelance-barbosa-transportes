import { Dispatch, SetStateAction } from "react";

export type StepsProps = "user" | "info" | "finish";

export type SetStepProps = { setStep: Dispatch<SetStateAction<StepsProps>> };
