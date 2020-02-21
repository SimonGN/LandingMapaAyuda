import React, { useState } from 'react';
import Link from 'next/link';

import { CardCountryStyle } from './CardCountryStyle';
import ParagraphBody from '../../styles/fontsStyles/ParagraphBody';
import ParagraphBodySmall from '../../styles/fontsStyles/ParagraphBodySmall';
import { withTheme } from 'styled-components';
import { i18n, withTranslation } from '../../i18n';

const CardCountry = ({ country, photo, type, t, theme }) => {
	return (
		<CardCountryStyle photo={photo} country={country}>
			<div className='imgs'>
				<img src={photo} />
			</div>
			<div className='text'>
				<ParagraphBody size='20px' className='description'>
					{country || type}
				</ParagraphBody>
				{!type && (
					<ParagraphBodySmall className='country' color={theme.colors.indigo}>
						{' '}
						XX {t('card')}
					</ParagraphBodySmall>
				)}
			</div>
		</CardCountryStyle>
	);
};

export default withTranslation('home')(withTheme(CardCountry));
