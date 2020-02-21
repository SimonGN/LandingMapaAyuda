import styled from 'styled-components';

const ParagraphBody = styled.p`
	font-family: 'GT–Medium';
	color: ${props => (props.color ? props.color : props.theme.colors.dark80)};
	font-style: normal;
	font-size: ${props => (props.size ? props.size : '16px')};
	line-height: 20px;
	letter-spacing: 0.2px;
	text-align: ${props => (props.align === 'center' ? 'center' : 'left')};

	@media only screen and (min-width: 415px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1440px) {
	}
	@media only screen and (min-width: 1441px) {
	}
`;

export default ParagraphBody;
