import type { Validator } from '../../infraestructure';
import { Component } from './component';

interface IInputProps {
	label: string;
	id: string;
}

interface IInputConfig {
	container: Element;
	onChange?: (value: number) => void;
	props: IInputProps;
}

export class InputComponent extends Component {
	protected $container: Element;
	protected onChange?: (value: number) => void;

	protected $input = document.createElement('input') as HTMLInputElement;
	protected $errorMessage = document.createElement('span') as HTMLSpanElement;
	protected onInputEvent = new Event('input');
	protected props: IInputProps;
	protected validators?: Validator[];
	protected isValid = true;

	constructor(config: IInputConfig) {
		super();
		this.$container = config.container;
		this.onChange = config.onChange;
		this.props = config.props;
	}

	public render(): void {
		const { label, id } = this.props;
		const $d = document;

		const $label = $d.createElement('label');
		$label.classList.add('user_field__label');
		$label.textContent = label;
		$label.htmlFor = id;

		if (this.onChange)
			this.$input.addEventListener('input', (e) =>
				this.onChange!(parseInt((e.target as HTMLInputElement).value)),
			);

		this.$input.id = id;
		this.$input.classList.add('user_field__input');
		this.$input.type = 'number';
		this.$input.required = true;
		this.$input.step = 'any';

		this.$errorMessage.classList.add('user_field__error');
		this.$errorMessage.style.display = 'none';

		const $div = $d.createElement('div');
		$div.classList.add('user_field');
		$div.append($label, this.$input, this.$errorMessage);

		this.$container.appendChild($div);
	}

	set setValidators(validators: Validator[]) {
		this.validators = validators;
		this.onValidateValue();
	}

	isStatusValid() {
		return this.isValid;
	}

	private onValidateValue() {
		this.cleanError();
		this.$input.removeEventListener('input', this.validate);
		this.$input.addEventListener('input', this.validate);
		this.$input.dispatchEvent(this.onInputEvent);
	}

	private validate = () => {
		this.cleanError();
		this.validators?.forEach((validator) => {
			const value = this.$input.value;
			const error = validator.validate(Number(value));

			if (!error) return (this.isValid = true);

			this.isValid = false;
			this.showError(error);
		});
	};

	private showError(message: string) {
		this.$errorMessage.style.display = 'block';
		this.$errorMessage.textContent = message;
	}

	private cleanError() {
		this.$errorMessage.style.display = 'none';
		this.$errorMessage.textContent = '';
	}
}
