import React from 'react';

import Button from '../Button/Button';
import { CookieWrapper } from './CookiesStyle';

import ParagraphBodySmall from '../../styles/fontsStyles/ParagraphBodySmall';
import ParagraphBody from '../../styles/fontsStyles/ParagraphBody';
import { withTheme } from 'styled-components';

class Cookies extends React.Component {
	constructor(props) {
		super(props);
		this.state = { display: 'flex' };
	}

	componentDidMount() {
		const display = localStorage.getItem('displayMapaAyuda');
		this.setState({ ...this.state, display });
	}
	changeDisplay = () => {
		localStorage.setItem('displayMapaAyuda', 'none');
		const display = localStorage.getItem('displayMapaAyuda');
		this.setState({ ...this.state, display });
	};
	render() {
		const { backgroundColor, color, theme } = this.props;
		return (
			<CookieWrapper backgroundColor={backgroundColor} color={color} display={this.state.display}>
				<div className='text'>
					<div className='title'>
						<ParagraphBody size='30px'>🍪 </ParagraphBody>
						<ParagraphBody size='20px'> Pólitica de cookies</ParagraphBody>
					</div>
					<div className='paragraph'>
						<ParagraphBodySmall size='16px' height='24px' color={theme.colors.dark40}>
							Este sitio utiliza cookies técnicas y de rendimiento. Pulse el enlace{' '}
							<a href='' target='_blank'>
								Preferencias de privacidad
							</a>{' '}
							para acceder a información detallada sobre nuestras cookies.{' '}
						</ParagraphBodySmall>
					</div>
					<Button
						className='readmore'
						color={theme.colors.blue}
						backgroundColor='#D6F0F5'
						method={() => this.changeDisplay()}
					>
						¡Estoy de acuerdo!
					</Button>
				</div>
			</CookieWrapper>
		);
	}
}

export default withTheme(Cookies);
