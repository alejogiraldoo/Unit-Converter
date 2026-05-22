import { Component } from './component';

export interface ISelectOptions {
	value: string;
	text: string;
}

interface ISelectProps {
	label: string;
	id: string;
	options?: ISelectOptions[];
}

interface ISelectConfig {
	container: Element;
	onChange?: (value: string) => void;
	props: ISelectProps;
}

export class SelectComponent extends Component {
	protected $container: Element;
	protected onChange?: (value: string) => void;

	protected $select = document.createElement('select') as HTMLSelectElement;
	protected onChangeEvent = new Event('change');
	protected props: ISelectProps;

	constructor(config: ISelectConfig) {
		super();
		this.$container = config.container;
		this.props = config.props;
		this.onChange = config.onChange;
	}

	public setOptions(options: ISelectProps['options']) {
		this.$select.innerHTML = '';
		this.loadSelectOptions(document, options);
		this.$select.dispatchEvent(this.onChangeEvent);
	}

	public render(): void {
		const { label, id, options } = this.props;
		const $d = document;

		const $label = $d.createElement('label');
		$label.textContent = label;
		$label.htmlFor = id;

		if (this.onChange)
			this.$select.addEventListener('change', (e) =>
				this.onChange!((e.target as HTMLSelectElement).value),
			);

		this.$select.id = id;
		this.loadSelectOptions($d, options);
		this.$select.dispatchEvent(this.onChangeEvent);

		const $div = $d.createElement('div');
		$div.append($label, this.$select);

		this.$container.appendChild($div);
	}

	protected loadSelectOptions($d: Document, options: ISelectProps['options']) {
		if (!Array.isArray(options)) return;

		const $options = $d.createDocumentFragment();
		options.forEach(({ value, text }) => {
			const $option = $d.createElement('option');
			$option.value = value;
			$option.textContent = text;
			$options.appendChild($option);
		});

		this.$select.appendChild($options);
	}
}
