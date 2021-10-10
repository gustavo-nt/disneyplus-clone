import { css } from 'styled-components';
import { breakpoints } from './_variables';

export const mediaQuery = Object.keys(breakpoints).reduce(
	(accumulator, label) => {
		if (!breakpoints[label].minWidth && !breakpoints[label].maxWidth) {
			accumulator[label] = (...args) => css`
				@media only screen and (max-width: ${breakpoints[label]}) {
					${css(...args)};
				}
			`;
		} else {
			accumulator[label] = (...args) => css`
      			@media only screen and (min-width: ${breakpoints[label].minWidth}) and (max-width: ${breakpoints[label].maxWidth}) {
        			${css(...args)};
      			}
    		`;
		}
		
		return accumulator;
	}, {}
);