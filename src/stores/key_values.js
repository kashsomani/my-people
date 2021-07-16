import {
	writable
} from 'svelte/store';

export const key_values = writable([{
	key: "",
	id: Date.now(),
	value: "",
	added: false
}]);