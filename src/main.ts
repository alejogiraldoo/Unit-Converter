import { NavigationComponent, Router } from './presentation';

import './style.css';

(() => {
	main();
})();

function main() {
	const $d = document;

	const $main = $d.querySelector('main')!;
	new NavigationComponent($main).render();

	const $router = $d.createElement('section');
	$router.classList.add('container');
	$main.appendChild($router);
	new Router($router);
}
