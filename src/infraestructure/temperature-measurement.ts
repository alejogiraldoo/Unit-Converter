import { Unit } from './unit.ts';
import { Validator } from './validator.ts';

export class Celsius extends Unit {
	protected unitName = 'Celsius';
	protected unitAbbr = 'C';
	protected conversions = {
		F: (value: number) => (value * 9) / 5 + 32,
		K: (value: number) => value + 273.15,
	};
	protected rules = [
		new Validator(
			(value: number) => value >= -273.15,
			'Celsius must be -273.15 or greater',
		),
	];
}

export class Fahrenheit extends Unit {
	protected unitName = 'Fahrenheit';
	protected unitAbbr = 'F';
	protected conversions = {
		C: (value: number) => ((value - 32) * 5) / 9,
		K: (value: number) => ((value - 32) * 5) / 9 + 273.15,
	};
	protected rules = [
		new Validator(
			(value: number) => value >= -459.67,
			'Fahrenheit must be -459.67 or greater',
		),
	];
}

export class Kelvin extends Unit {
	protected unitName = 'Kelvin';
	protected unitAbbr = 'K';
	protected conversions = {
		C: (value: number) => value - 273.15,
		F: (value: number) => ((value - 273.15) * 9) / 5 + 32,
	};
	protected rules = [
		new Validator(
			(value: number) => value >= 0,
			'Kelvins must be 0 or greater',
		),
	];
}

export const temperatureMeasurement = [
	new Celsius(),
	new Fahrenheit(),
	new Kelvin(),
];
