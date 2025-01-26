import { apiClient } from '$lib/api';
import { authState } from '$lib/stores/auth';
import { get } from 'svelte/store';
import { toast } from '@zerodevx/svelte-toast';

type LoginData = {
	credentials: string;
};

export const googleCallbackHandler = async (user: LoginData) => {
	const token = user.credential;

	const res = await apiClient.loginWithGoogle(token);

	if (res.status === 200) {
		authState.set(res.data);
		console.info(`Logged in as ${res.data.name}`);
	} else {
		toast.push(`Error ${res.status} getting an authentication token.`);
	}
};

export const validateStoredToken = async () => {
	const auth = get(authState);

	if (auth === undefined) {
		console.debug('[auth] Not authenticated.');
		return;
	}

	if (auth.token === undefined) {
		console.debug('[auth] No auth token stored.');
		authState.update(() => undefined);
		return;
	}

	console.debug('[auth] Validating stored auth token...', auth.token);

	const res = await apiClient.validateToken(auth.token);

	if (res.status === 401) {
		console.info('[auth] Token expired.');
		authState.update(() => undefined);
		return;
	}

	console.debug('[auth] Token is OK.');
};
