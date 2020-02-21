import * as generalTypes from '../types/general';

export const updateNavHeight = height => {
	return { type: generalTypes.NAV_HEIGHT, payload: height };
};
