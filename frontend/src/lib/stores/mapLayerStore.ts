import { writable, derived } from 'svelte/store';
import { ls } from '$lib/utils/localStorage';

interface IMapLayers {
	base: string | undefined;
	drone: boolean;
}

const getDefaultState = (): IMapLayers => {
	const isDark = window?.matchMedia('(prefers-color-scheme: dark)')?.matches ?? false;

	return {
		base: isDark ? 'OSM Dark' : 'OSM Light',
		drone: false
	};
};

export const mapLayerStore = writable<IMapLayers>(ls.read('mapLayerStore') ?? getDefaultState());

mapLayerStore.subscribe((value: IMapLayers) => {
	ls.write('mapLayerStore', value);
});

export const baseLayer = derived(mapLayerStore, ($mapState) => $mapState?.base);
export const droneLayer = derived(mapLayerStore, ($mapState) => $mapState?.drone);
