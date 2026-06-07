type ValidatorFuntion = (value: number) => boolean;

export class Validator {
	private validation: ValidatorFuntion;
	private errorMessage: string;

	constructor(validation: ValidatorFuntion, errorMessage: string) {
		this.validation = validation;
		this.errorMessage = errorMessage;
	}

	validate(value: number): string | null {
		if (this.validation(value)) return null;
		return this.errorMessage;
	}
}
