type UseLocalStorageType<T> = [getItem: T, setItem: (newValue: T) => void];

/**
 * useLocalStorage hook.
 *
 * @example
 * const [getItem, setItem] = useLocalStorage<boolean>('some-item', false);
 *
 * @param name								 name of local storage item.
 * @param [defaultItem]        default item value.
 */
export const useLocalStorage = <T>(
	name: string,
	defaultItem?: T
): UseLocalStorageType<T> => {
	// Item from local storage
	const getItem = localStorage.getItem(name);

	// Check if state is not created
	if (!getItem) {
		localStorage.setItem(name, JSON.stringify(defaultItem));
	}

	return [
		getItem ? JSON.parse(getItem) : defaultItem,
		newValue => {
			localStorage.setItem(name, JSON.stringify(newValue));
		},
	];
};
