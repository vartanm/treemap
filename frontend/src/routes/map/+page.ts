import type { Load } from '@sveltejs/kit';

export const load: Load = ({
	url
}): Promise<{
	searchQuery: string | undefined;
}> => {
	const searchQuery = url.searchParams.get('q');

	console.debug(window.location.hash);

	return {
		searchQuery
	};
};
