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

type IRoutes = IRoute[];

const unitConverter = new UnitConverter();

const routes: IRoutes = [
	{
		name: 'length',
		component: ($container: Element) =>
			new UnitConverterComponent({
				container: $container,
				unitConverter,
				unitService: new UnitService(lengthMeasurement),
				unitSelectsService: new UnitSelectsService(lengthMeasurement),
			}),
	},
	{
		name: 'weight',
		component: ($container: Element) =>
			new UnitConverterComponent({
				container: $container,
				unitConverter,
				unitService: new UnitService(weightMeasurement),
				unitSelectsService: new UnitSelectsService(weightMeasurement),
			}),
	},
	{
		name: 'temperature',
		component: ($container: Element) =>
			new UnitConverterComponent({
				container: $container,
				unitConverter,
				unitService: new UnitService(temperatureMeasurement),
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

		if (!hash || hash === '#/') hash = '#/length';

		hash = hash.slice(2);
		const route = this.routes.find(({ name }) => name === hash);
		if (!route) throw new Error('Not route found');

		const component = route.component(this.$container);
		component.render();
	};
}
