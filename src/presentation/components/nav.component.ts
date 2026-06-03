import { routes } from '../routes';
import { Component } from './component';

export class NavigationComponent extends Component {
	protected $container: Element;
	protected onChange = undefined;

	protected $navigation = document.createElement('nav');
	protected routes = routes;

	constructor(container: Element) {
		super();
		this.$container = container;

		this.$navigation.classList.add('navigation');
	}

	public render(): void {
		const $d = document;
		const $header = $d.createElement('header');
		$header.classList.add('header');

		const $title = $d.createElement('h1');
		$title.textContent = 'Unit Converter';
		$title.classList.add('header__title');
		$header.appendChild($title);

		this.createNavigationRoutes();

		$header.appendChild(this.$navigation);
		this.$container.append($header);
	}

	private createNavigationRoutes() {
		const $d = document;

		const $conversionOptions = $d.createElement('ul');
		$conversionOptions.classList.add('conversion_options');
		const options = $d.createDocumentFragment();

		this.routes.forEach(({ name }) => {
			const $option = $d.createElement('li');
			$option.classList.add('option');

			const $anchor = $d.createElement('a') as HTMLAnchorElement;
			$anchor.classList.add('option__link');
			$anchor.textContent = `${name[0].toUpperCase()}${name.slice(1)}`;
			$anchor.href = `#/${name}`;

			$option.appendChild($anchor);
			options.appendChild($option);

			this.onRouteActivated($anchor);
		});

		$conversionOptions.appendChild(options);
		this.$navigation.appendChild($conversionOptions);
	}

	private onRouteActivated(anchor: HTMLAnchorElement) {
		document.addEventListener('DOMContentLoaded', () =>
			this.isRouteActive(anchor),
		);
		window.addEventListener('hashchange', () => this.isRouteActive(anchor));
	}

	private isRouteActive(anchor: HTMLAnchorElement) {
		if (anchor.hash === location.hash)
			return anchor.classList.add('option__link--active');

		anchor.classList.remove('option__link--active');
	}
}
