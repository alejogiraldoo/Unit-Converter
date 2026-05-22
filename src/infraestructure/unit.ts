type ConverterFunction = (value: number) => number;

export type UnitOfMeasurement = Unit[];

export abstract class Unit {
	protected abstract unitName: string;
	protected abstract unitAbbr: string;
	protected abstract conversions: { [key: string]: ConverterFunction };

	public get getName() {
		return this.unitName;
	}

	public get getAbbr() {
		return this.unitAbbr;
	}

	public convert(value: number, toUnit: string): number {
		const converter = this.conversions[toUnit];

		if (!converter) throw new Error('Not Unit of Conversion found');
		return converter(value);
	}
}
