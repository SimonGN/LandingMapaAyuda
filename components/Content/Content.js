import React from 'react';

import { ContentStyle } from './ContentStyle';
import Button from '../Button/Button';

import { withTheme } from 'styled-components';

import ParagraphTitle from '../../styles/fontsStyles/ParagraphTitle';

import { withTranslation } from '../../i18n';

const Content = props => {
	const { t, theme } = props;

	return (
		<ContentStyle>
			<div className='yellow'>
				<ParagraphTitle align='left' color={theme.colors.red}>
					{t('intro4')}
				</ParagraphTitle>
				<div className='iconOlas'>
					<img src='/static/svg/iconOlasOrange.svg' />
				</div>
			</div>
			<div className='opacityYellow'>
				<div className='icons'>
					<img src='/static/svg/iconTalk.svg' />
					<div className='iconPlant'>
						<img src='/static/svg/iconPlant.svg' />
					</div>
				</div>
				<ParagraphTitle align='left' color={theme.colors.red}>
					{t('description4')}
				</ParagraphTitle>
				<div className='button'>
					<Button backgroundColor='#ED5C1850' color={theme.colors.red}>
						{t('button5')}
					</Button>
				</div>
			</div>
		</ContentStyle>
	);
};

export default withTranslation('home')(withTheme(Content));
