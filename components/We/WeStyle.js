import styled from 'styled-components';

const WeStyle = styled.div`
	width: 89%;
	margin: 25% auto;
	display: flex;
	flex-flow: column;
	align-items: center;

	.img {
		width: 100%;
		height: 20vh;
		background-image: url(/static/svg/iconOlas.svg);
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
		margin-bottom: 20%;
		display: flex;
		object-fit: cover;
	}
	.icon {
		position: relative;
		left: 37%;
		top: 73%;
	}
	.iconWord {
		position: relative;
		width: 50%;
		left: 72%;
		top: 80%;
	}
	.iconTicket {
		position: absolute;
		width: 30%;
		top: -19%;
		left: 42%;
	}
	.text {
		width: 100%;
		text-align: left;
	}
	.title,
	.subTitle {
		margin-bottom: 4%;
	}
	.paragraph {
		margin-bottom: 10%;
	}

	@media only screen and (min-width: 415px) and (max-width: 768px) {
		margin: 15% auto;
		flex-flow: row;
		justify-content: space-between;
		.img {
			width: 44%;
			height: 50vh;
			margin-bottom: 0%;
		}
		.text {
			width: 45%;
			margin: 0 auto;
		}
		.icon {
			left: 45%;
			top: 65%;
		}
	}
	@media only screen and (min-width: 769px) and (max-width: 1024px) {
		margin: 0 auto;
		flex-flow: row;
		justify-content: space-between;
		.img {
			width: 40%;
			height: 60vh;
			margin-bottom: 0%;
		}
		.text {
			width: 45%;
			margin: 0 auto;
			margin-right: 0px;
		}
		.icon {
			left: 42%;
			top: 55%;
			width: 60%;
		}
	}
	@media only screen and (min-width: 1025px) {
		margin: 0 auto;
		margin-bottom: 145px;
		width: 1200px;
		flex-flow: row;
		justify-content: space-between;
		.button {
			width: 250px;
		}
		.img {
			width: 35%;
			height: 65vh;
			margin-bottom: 0%;
		}
		.text {
			width: 30%;
			margin: 0 auto;
		}
		.icon {
			left: 67%;
			top: 33%;
		}
		.iconWord {
			width: 80%;
		}
		.iconTicket {
			top: 21%;
		}
	}
`;

export { WeStyle };
