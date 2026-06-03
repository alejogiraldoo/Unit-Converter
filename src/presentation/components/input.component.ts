import { Component } from './component';

interface IInputProps {
	label: string;
	id: string;
	min: number;
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
	protected props: IInputProps;

	constructor(config: IInputConfig) {
		super();
		this.$container = config.container;
		this.onChange = config.onChange;
		this.props = config.props;
	}

	public render(): void {
		const { label, id, min } = this.props;
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
		this.$input.min = String(min);

		const $div = $d.createElement('div');
		$div.classList.add('user_field');
		$div.append($label, this.$input);

		this.$container.appendChild($div);
	}
}
