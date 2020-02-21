import React, { useState } from 'react';
import { GalleryStyle } from './GalleryStyle';
import Button from '../Button/Button';

import ParagraphBodyRegular from '../../styles/fontsStyles/ParagraphBodyRegular';
import ParagraphSubTitle from '../../styles/fontsStyles/ParagraphSubTitle';
import ParagraphTitle from '../../styles/fontsStyles/ParagraphTitle';
import galleryItems from '../../content/gallery.json';

import { withTranslation } from '../../i18n';
import { withTheme } from 'styled-components';

const Gallery = props => {
	const { t, theme } = props;
	const [tab, setTab] = useState(0);
	const [galleryItem, setGalleryItem] = useState(galleryItems[0]);

	const changeItem = number => {
		setGalleryItem(galleryItems[number]);
	};

	const changeTab = number => {
		if (number >= 0 && number < 4) {
			setTab(number);
			changeItem(number);
		}
	};

	const { photo, description, title } = galleryItem;
	return (
		<GalleryStyle photo={photo}>
			<ParagraphSubTitle className='description'>{t('galeryIntro')}</ParagraphSubTitle>
			<div className='component'>
				<div className='galleryImg'>
					<img src={'/static/svg/iconFavo.svg'} />
				</div>
				<div className='textImg'>
					<ParagraphTitle color={theme.colors.orange}>{title}</ParagraphTitle>
					<ParagraphBodyRegular>{description}</ParagraphBodyRegular>
					<div className='button'>
						<Button backgroundColor={theme.colors.washedOrange} color={theme.colors.orange}>
							{t('button1')}
						</Button>
					</div>
					<div className='nextBack'>
						<div className='buttonNextBack'>
							<ParagraphBodyRegular color={theme.colors.dark60} onClick={() => changeTab(tab - 1)}>
								Atrás
							</ParagraphBodyRegular>
							<ParagraphBodyRegular color={theme.colors.dark60}>·</ParagraphBodyRegular>
							<ParagraphBodyRegular color={theme.colors.dark60} onClick={() => changeTab(tab + 1)}>
								Siguiente
							</ParagraphBodyRegular>
						</div>
						<div className='buttonDiv'>
							<div className={`${tab === 0 && 'active'}`} onClick={() => changeTab(0)}></div>
							<div className={`${tab === 1 && 'active'}`} onClick={() => changeTab(1)}></div>
							<div className={`${tab === 2 && 'active'}`} onClick={() => changeTab(2)}></div>
							<div className={`${tab === 3 && 'active'}`} onClick={() => changeTab(3)}></div>
						</div>
					</div>
				</div>
			</div>
		</GalleryStyle>
	);
};

export default withTranslation('home')(withTheme(Gallery));
