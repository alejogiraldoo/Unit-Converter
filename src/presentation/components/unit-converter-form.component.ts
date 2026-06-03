import { UnitSelectsService } from '../services';
import { Component } from './component';
import { InputComponent } from './input.component';
import { UnitSelectsComponent } from './unit-selects.component';

interface IOnChangeArgs {
	valueToConvert: number;
	fromUnitSelected: string;
	toUnitSelected: string;
}

interface IConverterFormConfig {
	container: Element;
	onChange: (arg: IOnChangeArgs) => void;
	unitSelectsService: UnitSelectsService;
	measurement: string;
}

export class UnitConverterFormComponent extends Component {
	protected $container: Element;
	protected onChange: (arg: IOnChangeArgs) => void;
	protected unitSelectsService: UnitSelectsService;
	protected measurement: string;
	protected $form = document.createElement('form') as HTMLFormElement;

	protected valueToConvert = 0;
	protected fromUnitSelected = '';
	protected toUnitSelected = '';

	constructor(config: IConverterFormConfig) {
		super();
		this.$container = config.container;
		this.onChange = config.onChange;
		this.unitSelectsService = config.unitSelectsService;
		this.measurement = config.measurement;

		this.$form.classList.add('unit_converter_form');

		this.onSubmit();
	}

	public render(): void {
		const $d = document;

		const $fieldSet = $d.createElement('fieldset') as HTMLFieldSetElement;
		$fieldSet.classList.add('user_fields');
		this.createInput($fieldSet);
		this.createSelects($fieldSet);

		const $converterButton = $d.createElement('button') as HTMLButtonElement;
		$converterButton.type = 'submit';
		$converterButton.textContent = 'Convert';
		$converterButton.classList.add('unit_converter_form__convert_button');

		this.$form.append($fieldSet, $converterButton);
		this.$container.appendChild(this.$form);
	}

	private onSubmit() {
		this.$form.addEventListener('submit', (e) => {
			e.preventDefault();
			this.onChange({
				valueToConvert: this.valueToConvert,
				fromUnitSelected: this.fromUnitSelected,
				toUnitSelected: this.toUnitSelected,
			});
		});
	}

	private createInput(container: Element) {
		return new InputComponent({
			container,
			props: {
				label: `Enter the ${this.measurement} to convert`,
				id: 'valueToConvert',
				min: 1,
			},
			onChange: (value: number) => (this.valueToConvert = value),
		}).render();
	}

	private createSelects(container: Element) {
		return new UnitSelectsComponent({
			container,
			unitSelectsService: this.unitSelectsService,
			onChange: ({ fromUnit, toUnit }) => {
				this.fromUnitSelected = fromUnit;
				this.toUnitSelected = toUnit;
			},
		}).render();
	}
}
