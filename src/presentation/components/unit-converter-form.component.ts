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
}

export class UnitConverterFormComponent extends Component {
	protected $container: Element;
	protected onChange: (arg: IOnChangeArgs) => void;
	protected unitSelectsService: UnitSelectsService;
	protected $form = document.createElement('form') as HTMLFormElement;

	protected valueToConvert = 0;
	protected fromUnitSelected = '';
	protected toUnitSelected = '';

	constructor(config: IConverterFormConfig) {
		super();
		this.$container = config.container;
		this.onChange = config.onChange;
		this.unitSelectsService = config.unitSelectsService;

		this.onSubmit();
	}

	public render(): void {
		const $d = document;

		const $fieldSet = $d.createElement('fieldset') as HTMLFieldSetElement;
		this.createInput($fieldSet);
		this.createSelects($fieldSet);

		const $input = $d.createElement('input') as HTMLInputElement;
		$input.type = 'submit';
		$input.value = 'Convert';

		this.$form.append($fieldSet, $input);
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
				label: 'Enter the value to convert',
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
