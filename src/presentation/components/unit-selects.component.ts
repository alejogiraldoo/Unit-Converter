import { UnitSelectsService } from '../services';
import { Component } from './component';
import { SelectComponent } from './select.component';

interface IUnitSelectsConfig {
	container: Element;
	onChange: (arg: { fromUnit: string; toUnit: string }) => void;
	unitSelectsService: UnitSelectsService;
}

export class UnitSelectsComponent extends Component {
	protected $container: Element;
	protected onChange: (arg: { fromUnit: string; toUnit: string }) => void;

	protected unitSelectsService: UnitSelectsService;
	protected fromUnit!: string;
	protected toUnit!: string;

	constructor(config: IUnitSelectsConfig) {
		super();
		this.$container = config.container;
		this.onChange = config.onChange;
		this.unitSelectsService = config.unitSelectsService;
	}

	public render(): void {
		const toUnitSelectComponent = this.createToUnitSelect();
		const fromUnitSelectComponent = this.createFromUnitSelect(
			toUnitSelectComponent,
		);
		fromUnitSelectComponent.render();
		toUnitSelectComponent.render();
	}

	private emitChangeEvent() {
		this.onChange({ fromUnit: this.fromUnit, toUnit: this.toUnit });
	}

	private createFromUnitSelect(toUnitSelectComponent: SelectComponent) {
		const fromUnitSelectComponent = new SelectComponent({
			container: this.$container,
			props: {
				label: 'Unit to Convert From',
				id: 'fromUnit',
				options: this.unitSelectsService.getFromUnits,
			},
			onChange: (value: string) => {
				this.fromUnit = value;

				toUnitSelectComponent.setOptions(
					this.unitSelectsService.getToUnits(this.fromUnit),
				);
			},
		});

		return fromUnitSelectComponent;
	}

	private createToUnitSelect() {
		const toUnitSelectComponent = new SelectComponent({
			container: this.$container,
			props: {
				label: 'Unit to Convert To',
				id: 'toUnit',
			},
			onChange: (value: string) => {
				this.toUnit = value;
				this.emitChangeEvent();
			},
		});

		return toUnitSelectComponent;
	}
}
