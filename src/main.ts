import { lengthMeasurement, UnitConverter } from './infraestructure';
import {
	InputComponent,
	UnitSelectsComponent,
	UnitSelectsService,
	UnitService,
} from './presentation';

import './style.css';

(() => {
	main();
})();

function main() {
	const unitOfMeasurement = lengthMeasurement;
	const unitConverter = new UnitConverter();
	const unitService = new UnitService(unitOfMeasurement);

	let valueToConvert = 0;
	let fromUnitSelected = '';
	let toUnitSelected = '';

	const converterForm = document.getElementById(
		'converterForm',
	) as HTMLFormElement;

	converterForm?.addEventListener('submit', (e) => {
		e.preventDefault();

		const unitInstance = unitService.getUnitInstance(fromUnitSelected);
		unitConverter.setFromUnit(unitInstance);

		console.log(unitConverter.convert(valueToConvert, toUnitSelected));
	});

	const container = converterForm.elements[0];
	// Input Logic

	new InputComponent({
		container,
		props: {
			label: 'Enter the value to convert',
			id: 'valueToConvert',
			min: 1,
		},
		onChange: (value: number) => (valueToConvert = value),
	}).render();

	// Selects logic

	const unitSelectsService = new UnitSelectsService(unitOfMeasurement);
	new UnitSelectsComponent({
		container,
		unitSelectsService,
		onChange: ({ fromUnit, toUnit }) => {
			fromUnitSelected = fromUnit;
			toUnitSelected = toUnit;
		},
	}).render();
}
