import styled from 'styled-components';

const ParagraphBodySmall = styled.p`
	font-family: 'GT-Regular';
	cursor: ${props => (props.showCursor ? 'cursor' : 'auto')};
	color: ${props => (props.color ? props.color : props.theme.colors.dark60)};
	font-size: ${props => (props.size ? props.size : '16px')};
	line-height: ${props => (props.height ? props.height : '18px')};
	text-align: ${props => (props.align === 'center' ? 'center' : 'left')};
	letter-spacing: 0.8px;

	@media only screen and (min-width: 415px) and (max-width: 768px) {
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
	}
	@media only screen and (min-width: 1025px) and (max-width: 1440px) {
	}
	@media only screen and (min-width: 1441px) {
	}
`;

export default ParagraphBodySmall;
