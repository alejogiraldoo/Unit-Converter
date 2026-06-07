import type { Unit } from '../../infraestructure';
import { UnitSelectsService, UnitService } from '../services';
import { Component } from './component';
import { InputComponent } from './input.component';
import { UnitSelectsComponent } from './unit-selects.component';

interface IOnChangeArgs {
	valueToConvert: number;
	fromUnitSelected: Unit;
	toUnitSelected: string;
}

interface IConverterFormConfig {
	container: Element;
	onChange: (arg: IOnChangeArgs) => void;
	unitSelectsService: UnitSelectsService;
	unitService: UnitService;
}

export class UnitConverterFormComponent extends Component {
	protected $container: Element;
	protected onChange: (arg: IOnChangeArgs) => void;
	protected unitSelectsService: UnitSelectsService;
	protected unitService: UnitService;

	protected inputComponent!: InputComponent;
	protected $form = document.createElement('form') as HTMLFormElement;

	protected valueToConvert = 0;
	protected fromUnitSelected!: Unit;
	protected toUnitSelected = '';

	constructor(config: IConverterFormConfig) {
		super();
		this.$container = config.container;
		this.onChange = config.onChange;
		this.unitSelectsService = config.unitSelectsService;
		this.unitService = config.unitService;

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
			if (!this.inputComponent.isStatusValid()) return;

			this.onChange({
				valueToConvert: this.valueToConvert,
				fromUnitSelected: this.fromUnitSelected,
				toUnitSelected: this.toUnitSelected,
			});
		});
	}

	private createInput(container: Element) {
		this.inputComponent = new InputComponent({
			container,
			props: {
				label: `Enter the ${this.unitService.getMeasurement} to convert`,
				id: 'valueToConvert',
			},
			onChange: (value: number) => (this.valueToConvert = value),
		});
		this.inputComponent.render();
	}

	private createSelects(container: Element) {
		return new UnitSelectsComponent({
			container,
			unitSelectsService: this.unitSelectsService,
			onChange: ({ fromUnit, toUnit }) => {
				this.fromUnitSelected = this.unitService.getUnitInstance(fromUnit);
				this.toUnitSelected = toUnit;

				this.inputComponent.setValidators = this.fromUnitSelected.getRules;
			},
		}).render();
	}
}
