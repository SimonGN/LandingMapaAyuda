import styled from 'styled-components';

const GalleryStyle = styled.div`
	margin: 0 auto;
	width: 89vw;
	margin-bottom: 120px;
	.galleryImg {
		position: relative;
		width: 100%;
		height: 225px;
		background-color: ${props => (props.photo ? '' : 'red')};
		background-image: ${props => (props.photo ? `url(${props.photo})` : '')};
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 16px;
		margin-bottom: 5%;
		img {
			position: absolute;
			left: 80%;
		}
	}
	.nextBack {
		margin-top: 2%;
	}
	.button {
		padding-top: 5%;
	}
	.buttonNextBack {
		display: flex;
		justify-content: space-between;
		width: 40%;
		margin-top: 10px;
		margin-bottom: 10px;
		cursor: pointer;
	}
	.buttonDiv {
		display: flex;
		justify-content: space-between;
		div {
			width: 75px;
			height: 4px;
			background-color: ${({ theme }) => theme.colors.dark05};
			border-radius: 50px;
			cursor: pointer;
		}
		div.active {
			background-color: ${({ theme }) => theme.colors.orange};
		}
	}
	.textImg {
		height: 230px;
		display: flex;
		flex-flow: column;
		justify-content: space-between;
		h2 {
			text-align: left;
			height: 50px;
			font-size: 22px;
			line-height: 24px;
			margin-bottom: 0;
		}
		& > p {
			font-size: 18px;
			color: ${({ theme }) => theme.colors.dark100};
		}
	}

	@media only screen and (min-width: 415px) and (max-width: 768px) {
		h2 {
			text-align: center;
		}
		.component {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.galleryImg {
			width: 50%;
			margin-bottom: 0;
		}
		.textImg {
			width: 40%;
		}
		.buttonDiv {
			div {
				width: 60px;
			}
		}
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		h2 {
			text-align: center;
		}
		.component {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.galleryImg {
			width: 50%;
			height: 340px;
			margin-bottom: 0;
		}
		.nextBack {
			margin-top: 10%;
		}
		.textImg {
			width: 45%;
			height: 330px;
			padding-left: 5%;
			padding-right: 10%;
			h2 {
				text-align: left;
				height: 115px;
				font-size: 20px;
				line-height: 24px;
			}
		}
		.buttonDiv {
			div {
				width: 75px;
			}
		}
		.textImg {
			height: 310px;
			padding: 0 8%;
			display: flex;
			flex-flow: column;
			justify-content: flex-end;
			display: flex;
			flex-flow: column;
			justify-content: flex-end;
			h2 {
				text-align: left;
				line-height: 40px;
				font-size: 32px;
			}
		}
	}
	@media only screen and (min-width: 1025px) {
		width: 1200px;
		margin-bottom: 145px;
		h2 {
			text-align: center;
			margin-bottom: 2.5%;
		}
		.component {
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.galleryImg {
			width: 55%;
			height: 460px;
			margin-bottom: 0;
			img {
				left: 88%;
			}
		}
		.nextBack {
			margin-top: 20%;
		}
		.textImg {
			width: 45%;
			height: 340px;
			padding-left: 10%;
			padding-right: 10%;
			h2 {
				text-align: left;
				height: 115px;
				font-size: 20px;
				line-height: 24px;
			}
		}
		.buttonDiv {
			div {
				width: 22%;
			}
		}
		.textImg {
			width: 40%;
			height: 360px;
			padding: 0 8%;
			display: flex;
			flex-flow: column;
			justify-content: flex-end;
			h2 {
				text-align: left;
				line-height: 40px;
				font-size: 32px;
			}
		}
		.button {
			width: 150px;
		}
		.buttonNextBack {
			width: 130px;
		}
	}
`;

export { GalleryStyle };
