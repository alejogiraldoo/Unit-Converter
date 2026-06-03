import {
	lengthMeasurement,
	temperatureMeasurement,
	UnitConverter,
	weightMeasurement,
} from '../infraestructure';
import { UnitConverterComponent, type Component } from './components';
import { UnitSelectsService, UnitService } from './services';

interface IRoute {
	name: string;
	component: ($container: Element) => Component;
}

export type IRoutes = IRoute[];

const unitConverter = new UnitConverter();

export const routes: IRoutes = [
	{
		name: 'length',
		component: ($container: Element) =>
			new UnitConverterComponent({
				container: $container,
				unitConverter,
				unitService: new UnitService('length', lengthMeasurement),
				unitSelectsService: new UnitSelectsService(lengthMeasurement),
			}),
	},
	{
		name: 'weight',
		component: ($container: Element) =>
			new UnitConverterComponent({
				container: $container,
				unitConverter,
				unitService: new UnitService('weight', weightMeasurement),
				unitSelectsService: new UnitSelectsService(weightMeasurement),
			}),
	},
	{
		name: 'temperature',
		component: ($container: Element) =>
			new UnitConverterComponent({
				container: $container,
				unitConverter,
				unitService: new UnitService('temperature', temperatureMeasurement),
				unitSelectsService: new UnitSelectsService(temperatureMeasurement),
			}),
	},
];

export class Router {
	protected $container: Element;
	protected routes = routes;

	constructor(container: Element) {
		this.$container = container;

		document.addEventListener('DOMContentLoaded', this.loadRoutes);
		window.addEventListener('hashchange', this.loadRoutes);
	}

	private loadRoutes = () => {
		this.$container.innerHTML = '';

		let hash = location.hash;

		hash = hash.slice(2);
		const route = this.routes.find(({ name }) => name === hash);
		if (!route) {
			location.hash = '#/length';
			throw new Error('Not route found');
		}

		const component = route.component(this.$container);
		component.render();
	};
}
