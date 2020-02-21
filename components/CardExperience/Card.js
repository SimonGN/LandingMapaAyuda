import React from 'react';

import { CardStyle } from './CardStyle';
import ParagraphBody from '../../styles/fontsStyles/ParagraphBody';
import ParagraphBodySmall from '../../styles/fontsStyles/ParagraphBodySmall';

import Button from '../Button/Button';

import { withTranslation } from '../../i18n';
import { withTheme } from 'styled-components';

const Card = ({ country, description, photo, people, number, t, theme }) => {
	return (
		<CardStyle photo={photo} people={people} number={number % 2}>
			<div className='cardStyle'>
				<div className='img'>
					<div className='imgFondo'></div>
					<div className='imgPeople'></div>
				</div>
				<div className='text'>
					<ParagraphBodySmall className='country' color={theme.colors.dark40}>
						{country}
					</ParagraphBodySmall>
					<ParagraphBody className='description'>{description}</ParagraphBody>
					<div className='button'>
						<Button color={theme.colors.orange} backgroundColor={theme.colors.washedOrange}>
							{t('button1')}
						</Button>
					</div>
				</div>
			</div>
		</CardStyle>
	);
};

export default withTranslation('home')(withTheme(Card));
