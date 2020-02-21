import React from 'react';

import { CommingSoonStyle } from './CommingSoonStyle';

import ParagraphTitle from '../../styles/fontsStyles/ParagraphTitle';
import ParagraphBodyRegular from '../../styles/fontsStyles/ParagraphBodyRegular';

import { withTheme } from 'styled-components';
import { withTranslation } from '../../i18n';

const ComingSoon = props => {
	const { t, theme } = props;
	return (
		<CommingSoonStyle display={props.display}>
			<div className='green'>
				<div className='logo'>
					<img className='iconLogo' src='/static/svg/logoMapaAyuda.svg' />
				</div>
				<div className='textGreen'>
					<ParagraphTitle align='center'>{t('csTitle')}</ParagraphTitle>
					<div className='subTitle'>
						<ParagraphBodyRegular color={theme.color.back100} align='center'>
							{t('csSubTitle')}
						</ParagraphBodyRegular>
					</div>
				</div>
				<div className='links'>
					<a href='https://twitter.com/mapayuda' target='_blank'>
						<img className='iconRrss' src='/static/svg/iconTw.svg' />
					</a>
					<a href='https://www.facebook.com/mapayudaorg/' target='_blank'>
						<img className='iconRrss' src='/static/svg/iconFb.svg' />
					</a>
					<a href='https://www.linkedin.com/company/mapayuda.org/?originalSubdomain=cl' target='_blank'>
						<img className='iconRrss' src='/static/svg/iconIn.svg' />
					</a>
					<a href='https://www.instagram.com/mapayudaorg/' target='_blank'>
						<img className='iconRrss' src='/static/svg/iconIg.svg' />
					</a>
				</div>
			</div>

			<div className='greenOpacity'>
				<div className='iconWord'>
					<img src='/static/svg/iconMapaAyuda.svg' />
				</div>
			</div>
		</CommingSoonStyle>
	);
};

export default withTranslation('footer')(withTheme(ComingSoon));
