import React, { useState } from 'react';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { updateNavHeight } from '../../redux/actions/general';
import { withContentRect } from 'react-measure';

import { NavStyle } from './NavStyle';

import ParagraphBody from '../../styles/fontsStyles/ParagraphBody';
import ParagraphHeader from '../../styles/fontsStyles/ParagraphHeader';

import { withTheme } from 'styled-components';
import { withTranslation } from '../../i18n';

const Nav = props => {
	const { t, measureRef, contentRect, theme } = props;
	const dispatch = useDispatch();
	const [view, setView] = useState(false);
	dispatch(updateNavHeight(contentRect.client.height));
	const handleOpen = () => {
		const value = !view;
		setView(value);
	};

	return (
		<NavStyle view={view} ref={measureRef}>
			<header className='mobile'>
				<div className='symbol'>
					<Link href='/index'>
						<img src='/static/svg/symbolMapaAyuda.svg' />
					</Link>
					<img onClick={handleOpen} cursor={'true'} src='/static/svg/openMenu.svg' />
				</div>
				<nav>
					<div className='navColor'></div>
					<div className='navMobile'>
						<img cursor={'true'} onClick={handleOpen} src='/static/svg/closeMenu.svg' />

						<div className='navMenuMobile'>
							<div className='navMenu1'>
								<Link href=''>
									<ParagraphHeader>{t('nav1')}</ParagraphHeader>
								</Link>
								<Link href=''>
									<ParagraphHeader>{t('nav2')}</ParagraphHeader>
								</Link>
							</div>
							<div className='navMenu2'>
								<Link href=''>
									<button>{t('nav5')}</button>
								</Link>
								<div>
									<ParagraphHeader size='16px' color={theme.colors.green}>
										{t('text')}
									</ParagraphHeader>
									<Link href=''>
										<ParagraphHeader size='16px' color={theme.colors.green}>
											{t('nav6')}
										</ParagraphHeader>
									</Link>
								</div>
								<img src='/static/svg/logoMapaAyuda.svg' />
							</div>
						</div>
					</div>
				</nav>
			</header>

			<header className='desktop'>
				<div className='logo'>
					<Link href='/index'>
						<img src='/static/svg/logoMapaAyuda.svg' />
					</Link>
				</div>
				<nav>
					<Link href='/'>
						<ParagraphBody>{t('nav1')}</ParagraphBody>
					</Link>
					<Link href='/'>
						<ParagraphBody>{t('nav2')}</ParagraphBody>
					</Link>
					<Link href='/'>
						<ParagraphBody color={theme.colors.orange}>{t('nav3')}</ParagraphBody>
					</Link>
					<Link href='/login'>
						<ParagraphBody color={theme.colors.green}>{t('nav4')}</ParagraphBody>
					</Link>
					<Link href='/'>
						<button>{t('nav5')}</button>
					</Link>
				</nav>
			</header>
		</NavStyle>
	);
};

export default withTranslation('nav')(withContentRect('client')(withTheme(Nav)));
