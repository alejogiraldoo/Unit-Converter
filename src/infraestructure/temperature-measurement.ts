import { Unit } from './unit.ts';

export class Celsius extends Unit {
	protected unitName = 'Celsius';
	protected unitAbbr = 'C';
	protected conversions = {
		F: (value: number) => (value * 9) / 5 + 32,
		K: (value: number) => value + 273.15,
	};
}

export class Fahrenheit extends Unit {
	protected unitName = 'Fahrenheit';
	protected unitAbbr = 'F';
	protected conversions = {
		C: (value: number) => ((value - 32) * 5) / 9,
		K: (value: number) => ((value - 32) * 5) / 9 + 273.15,
	};
}

export class Kelvin extends Unit {
	protected unitName = 'Kelvin';
	protected unitAbbr = 'K';
	protected conversions = {
		C: (value: number) => value - 273.15,
		F: (value: number) => ((value - 273.15) * 9) / 5 + 32,
	};
}

export const temperatureMeasurement = [
	new Celsius(),
	new Fahrenheit(),
	new Kelvin(),
];
