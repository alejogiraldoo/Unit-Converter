import { Router } from './presentation';

import './style.css';

(() => {
	main();
})();

function main() {
	const $router = document.getElementById('router') as Element;
	new Router($router);
}
