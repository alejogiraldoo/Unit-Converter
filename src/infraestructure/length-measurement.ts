import { Unit } from './unit.ts';
import { Validator } from './validator.ts';

export class Millimeter extends Unit {
	protected unitName = 'Millimeter';
	protected unitAbbr = 'mm';
	protected conversions = {
		cm: (value: number) => value / 10,
		m: (value: number) => value / 1000,
		km: (value: number) => value / 1000000,
		in: (value: number) => value / 25.4,
		ft: (value: number) => value / 304.8,
		yd: (value: number) => value / 914.4,
		mi: (value: number) => value / 1609344,
	};
	protected rules = [
		new Validator(
			(value: number) => value >= 0,
			'Millimeters must be 0 or greater',
		),
	];
}

export class Centimeter extends Unit {
	protected unitName = 'Centimeter';
	protected unitAbbr = 'cm';
	protected conversions = {
		mm: (value: number) => value * 10,
		m: (value: number) => value / 100,
		km: (value: number) => value / 100000,
		in: (value: number) => value / 2.54,
		ft: (value: number) => value / 30.48,
		yd: (value: number) => value / 91.44,
		mi: (value: number) => value / 160934.4,
	};
	protected rules = [
		new Validator(
			(value: number) => value >= 0,
			'Centimeters must be 0 or greater',
		),
	];
}

export class Meter extends Unit {
	protected unitName = 'Meter';
	protected unitAbbr = 'm';
	protected conversions = {
		mm: (value: number) => value * 1000,
		cm: (value: number) => value * 100,
		km: (value: number) => value / 1000,
		in: (value: number) => value * 39.3701,
		ft: (value: number) => value * 3.28084,
		yd: (value: number) => value * 1.09361,
		mi: (value: number) => value / 1609.344,
	};
	protected rules = [
		new Validator((value: number) => value >= 0, 'Meters must be 0 or greater'),
	];
}

export class Kilometer extends Unit {
	protected unitName = 'Kilometer';
	protected unitAbbr = 'km';
	protected conversions = {
		mm: (value: number) => value * 1000000,
		cm: (value: number) => value * 100000,
		m: (value: number) => value * 1000,
		in: (value: number) => value * 39370.1,
		ft: (value: number) => value * 3280.84,
		yd: (value: number) => value * 1093.61,
		mi: (value: number) => value / 1.60934,
	};
	protected rules = [
		new Validator(
			(value: number) => value >= 0,
			'Kilometers must be 0 or greater',
		),
	];
}

export class Inch extends Unit {
	protected unitName = 'Inch';
	protected unitAbbr = 'in';
	protected conversions = {
		mm: (value: number) => value * 25.4,
		cm: (value: number) => value * 2.54,
		m: (value: number) => value / 39.3701,
		km: (value: number) => value / 39370.1,
		ft: (value: number) => value / 12,
		yd: (value: number) => value / 36,
		mi: (value: number) => value / 63360,
	};
	protected rules = [
		new Validator((value: number) => value >= 0, 'Inches must be 0 or greater'),
	];
}

export class Foot extends Unit {
	protected unitName = 'Foot';
	protected unitAbbr = 'ft';
	protected conversions = {
		mm: (value: number) => value * 304.8,
		cm: (value: number) => value * 30.48,
		m: (value: number) => value / 3.28084,
		km: (value: number) => value / 3280.84,
		in: (value: number) => value * 12,
		yd: (value: number) => value / 3,
		mi: (value: number) => value / 5280,
	};
	protected rules = [
		new Validator((value: number) => value >= 0, 'Feet must be 0 or greater'),
	];
}

export class Yard extends Unit {
	protected unitName = 'Yard';
	protected unitAbbr = 'yd';
	protected conversions = {
		mm: (value: number) => value * 914.4,
		cm: (value: number) => value * 91.44,
		m: (value: number) => value / 1.09361,
		km: (value: number) => value / 1093.61,
		in: (value: number) => value * 36,
		ft: (value: number) => value * 3,
		mi: (value: number) => value / 1760,
	};
	protected rules = [
		new Validator((value: number) => value >= 0, 'Yards must be 0 or greater'),
	];
}

export class Mile extends Unit {
	protected unitName = 'Mile';
	protected unitAbbr = 'mi';
	protected conversions = {
		mm: (value: number) => value * 1609344,
		cm: (value: number) => value * 160934.4,
		m: (value: number) => value * 1609.344,
		km: (value: number) => value * 1.60934,
		in: (value: number) => value * 63360,
		ft: (value: number) => value * 5280,
		yd: (value: number) => value * 1760,
	};
	protected rules = [
		new Validator((value: number) => value >= 0, 'Miles must be 0 or greater'),
	];
}

export const lengthMeasurement = [
	new Millimeter(),
	new Centimeter(),
	new Meter(),
	new Kilometer(),
	new Inch(),
	new Foot(),
	new Yard(),
	new Mile(),
];
