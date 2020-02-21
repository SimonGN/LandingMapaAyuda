import styled from 'styled-components';

const LoginStyle = styled.div`
	display: flex;
	flex-direction: column;
	max-width: 384px;
	width: 384px;
	& .title {
		text-align: center;
		margin-bottom: 2rem;
		font-size: 32px;
		color: ${({ theme }) => theme.colors.turquoise};
		font-family: 'GT-Regular';
	}
	.social-buttons {
		display: flex;
		justify-content: space-between;
		& button {
			display: flex;
			align-items: center;
			width: calc(50% - 0.25rem);
			& img {
				margin-right: 0.5rem;
			}
			&:first-child {
				margin-right: 0.5rem;
			}
		}
	}
	.separator {
		position: relative;
		margin-top: 2rem;
		border-top: 1px solid ${({ theme }) => theme.colors.dark05};
		div {
			font-size: 12px;
			font-family: 'GT-Regular';
			color: ${({ theme }) => theme.colors.dark60};
			background-color: #fff;
			margin: auto;
			width: 3rem;
			text-align: center;
			position: absolute;
			left: calc(50% - 1.5rem);
			top: -10px;
		}
	}

	.login-form {
		margin-top: 1rem;
		& .bottom-section {
			display: flex;
			justify-content: space-between;
			margin: 1rem 1rem 1.5rem 1rem;
			& span {
				color: ${({ theme }) => theme.colors.dark40};
				font-size: 12px;
				font-family: 'GT-Regular';
				cursor: pointer;
				&:hover {
					color: ${({ theme }) => theme.colors.green};
					text-decoration: underline;
				}
			}
		}
	}

	.form-bottom {
		margin-top: 1rem;
		text-align: center;
		color: ${({ theme }) => theme.colors.dark60};
		font-family: 'GT-Regular';
		font-size: 12px;
		& .recover-password-message {
			margin-bottom: 1rem;
		}
		& span {
			color: ${({ theme }) => theme.colors.green};
			text-decoration: underline;
			cursor: pointer;
		}
	}
`;
export default LoginStyle;
