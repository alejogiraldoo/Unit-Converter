import { UnitConverter } from '../../infraestructure';
import { UnitSelectsService, UnitService } from '../services';
import { Component } from './component';
import { UnitConverterFormComponent } from './unit-converter-form.component';

interface IUnitConverterConfig {
	container: Element;
	unitConverter: UnitConverter;
	unitService: UnitService;
	unitSelectsService: UnitSelectsService;
}

interface IResultValues {
	valueToConvert: number;
	valueConverted: number;
	fromUnitSelected: string;
	toUnitSelected: string;
}

export class UnitConverterComponent extends Component {
	protected $container: Element;
	protected unitConverter: UnitConverter;
	protected unitService: UnitService;
	protected unitSelectsService: UnitSelectsService;
	protected onChange = undefined;

	constructor(config: IUnitConverterConfig) {
		super();
		this.$container = config.container;
		this.unitConverter = config.unitConverter;
		this.unitService = config.unitService;
		this.unitSelectsService = config.unitSelectsService;
	}

	public render(): void {
		this.createForm();
	}

	private createForm() {
		new UnitConverterFormComponent({
			container: this.$container,
			onChange: ({ valueToConvert, fromUnitSelected, toUnitSelected }) => {
				const unitInstance = this.unitService.getUnitInstance(fromUnitSelected);
				this.unitConverter.setFromUnit(unitInstance);

				const valueConverted = this.unitConverter.convert(
					valueToConvert,
					toUnitSelected,
				);

				this.createResultContainer({
					valueToConvert,
					valueConverted,
					fromUnitSelected,
					toUnitSelected,
				});
			},
			unitSelectsService: this.unitSelectsService,
			measurement: this.unitService.getMeasurement,
		}).render();
	}

	private createResultContainer({
		valueToConvert,
		valueConverted,
		fromUnitSelected,
		toUnitSelected,
	}: IResultValues) {
		this.$container.innerHTML = '';

		const $d = document;
		const $div = $d.createElement('div') as HTMLDivElement;
		$div.classList.add('result_container');

		const $description = $d.createElement('p') as HTMLParagraphElement;
		$description.textContent = 'Result of your calculation';
		$description.classList.add('result_container__description');
		const $result = $d.createElement('p') as HTMLParagraphElement;
		$result.textContent = `${valueToConvert} ${fromUnitSelected} = ${valueConverted}  ${toUnitSelected}`;
		$result.classList.add('result_container__result');

		const $resetButton = $d.createElement('button') as HTMLButtonElement;
		$resetButton.textContent = 'Reset';
		$resetButton.classList.add('result_container__reset_button');

		$resetButton.addEventListener('click', () => {
			this.$container.innerHTML = '';
			this.createForm();
		});

		$div.append($description, $result, $resetButton);
		this.$container.appendChild($div);
	}
}
