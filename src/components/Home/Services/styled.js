import styled from "styled-components";

export const ContainerServices = styled.section`
	width: 100%;
	background: #0B1617;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Card = styled.div`
	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	padding: 1.4rem 2rem;
	width: 100%;
	min-height: 35vh;
	z-index: 1;

	&:before {
		content: '';
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-image: url(${props => props.bg});
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 8px;
		border: 1px solid #000;
		transition: .3s;
		z-index: -2;
	}

	&:hover {
		&:before {
			border-color: #00C8DB;
			-webkit-transform: scale(1.05);
			-ms-transform: scale(1.05);
			transform: scale(1.05);
		}
	}

	#card-id {
		display: none;
		text-align: center;
	}

	@media (max-width: 1200px) {
		padding: 1.2rem 1.5rem 2rem;
		min-height: 50vh;
		font-size: .7em;
	}

	@media (max-width: 1024px) {
		flex-direction: column-reverse;
		font-size: .9em;

		p {
			padding: 10rem 0 1rem;
		}

		#card-id {
			display: block;
		}
	}
`;

export const ContentContainer = styled.div`
	padding: 5rem 0 3rem;
	display: flex;
	justify-content: space-between;
	width: 90%;
	max-width: 1440px;

	@media (max-width: 768px) {
		width: 75%;
	}

	& > a {
		margin: 3rem auto 0;

		@media (min-width: 1024px) {
			display: none;
		}
	}

	@media (max-width: 1024px) {
		flex-direction: column;
	}
`;

export const BoxText = styled.div`
	a {
		display: none;
	}

	@media (min-width: 1024px) {
		padding-top: 4rem;
		width: 18%;

		a {
			display: block;
		}
	}
`;

export const Description = styled.p`
	display: flex;
	flex-direction: column;
	margin: 1.5rem 0 2.5rem;
	font-size: 1.2em;
	font-weight: 200;
`;

export const CardsContainer = styled.div`
	display: grid;
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 1fr 1fr;
	grid-gap: 1rem;
	width: 75%;

	@media (max-width: 768px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr;
		grid-gap: 2rem;
		width: 100%;
	}
`;

export const ImageCard = styled.img`
	font-size: 1.5rem;
	width: 100%;
`;

export const Title = styled.h2`
	max-width: 80%;
	font-size: 2.5em;
	line-height: 1.2;
`;

export const DescriptionCard = styled.p`
	display: flex;
	flex-direction: column;
	font-size: 1.1em;
	font-weight: 200;
	z-index: 1;
`;