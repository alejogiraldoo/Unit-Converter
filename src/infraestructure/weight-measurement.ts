import { Unit } from './unit.ts';

export class Milligram extends Unit {
	protected unitName = 'Milligram';
	protected unitAbbr = 'mg';
	protected conversions = {
		g: (value: number) => value / 1000,
		kg: (value: number) => value / 1000000,
		oz: (value: number) => value / 28349.5,
		lb: (value: number) => value / 453592,
	};
}

export class Gram extends Unit {
	protected unitName = 'Gram';
	protected unitAbbr = 'g';
	protected conversions = {
		mg: (value: number) => value * 1000,
		kg: (value: number) => value / 1000,
		oz: (value: number) => value / 28.3495,
		lb: (value: number) => value / 453.592,
	};
}

export class Kilogram extends Unit {
	protected unitName = 'Kilogram';
	protected unitAbbr = 'kg';
	protected conversions = {
		mg: (value: number) => value * 1000000,
		g: (value: number) => value * 1000,
		oz: (value: number) => value * 35.274,
		lb: (value: number) => value * 2.20462,
	};
}

export class Ounce extends Unit {
	protected unitName = 'Ounce';
	protected unitAbbr = 'oz';
	protected conversions = {
		mg: (value: number) => value * 28349.5,
		g: (value: number) => value * 28.3495,
		kg: (value: number) => value / 35.274,
		lb: (value: number) => value / 16,
	};
}

export class Pound extends Unit {
	protected unitName = 'Pound';
	protected unitAbbr = 'lb';
	protected conversions = {
		mg: (value: number) => value * 453592,
		g: (value: number) => value * 453.592,
		kg: (value: number) => value / 2.20462,
		oz: (value: number) => value * 16,
	};
}
