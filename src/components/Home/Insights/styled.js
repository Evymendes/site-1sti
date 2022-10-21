import styled from "styled-components";

export const ContainerInsights = styled.section`
	width: 100%;
	background: #0B1617;
	margin-top: 10rem;
	@media(max-width: 1250px){
		margin-top: -4rem;
	}
	@media(max-width: 768px){
		margin-top: -110rem;
	}
`;

export const ContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 5rem 0 4.563rem;
	height: 100%;
	padding: 7rem 0;
	& > a {
		padding-top: 1.5rem;

		@media (min-width: 1024px) {
			display: none;
		}
	}
	@media (max-width: 1024px) {
		flex-direction: column;
		font-size: .8rem;

		div a {
			display: none;
		}
	}
	@media (max-width: 768px) {
		margin-left: 1.5rem;
		padding: 2rem 0;
		width: 85%;
	}
	@media(min-width: 1600px){
		max-width: 100%;
	}
`;

export const BoxText = styled.div`
	width: 18%;
	align-self: start;

	@media (max-width: 768px) {
		width: 60%;
	}
`;

export const Title = styled.h2`
	font-size: 2.875em;
	line-height: 1.1;
`;

export const Description = styled.p`
	display: flex;
	flex-direction: column;
	margin: 1.5rem 0 2.5rem;
	font-size: 1.2em;
	font-weight: 200;
`;

export const CardsContainer = styled.div`
	width: 100%;
	position: relative;
	@media (max-width: 1024px) {
		width: 100%;
	}
	@media (max-width: 768px) {
		min-width: 128%;
		overflow-x: scroll;
	}
	@media (max-width: 400px){
		min-width: 118%;
	}
`;

export const CardsBox = styled.div`
	over-flow: hidden;
	display: flex;
	justify-content: space-between;
	padding-top: 5rem;

	@media (max-width: 1024px) {
		margin: 0 auto;
		padding: 0;
		width: 80%;
	}
`;

export const Card = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 32%;
	
	&:hover {
		img {
			-webkit-transform: scale(1.05);
			-ms-transform: scale(1.05);
			transform: scale(1.05);
		}

		h2 {
			text-decoration: underline;
		}
	}

	@media (max-width: 768px) {
		margin-right: 1rem;
		min-width: 55%;
	}

	@media (max-width: 400px) {
		min-width: 98%;
	}
`;

export const ImageCard = styled.img`
	width: 100%;
	transition: .3s;
`;

export const DescriptionCard = styled.p`
	margin: 1rem 0;
	text-align: center;
	text-transform: uppercase;
	font-size: 0.875em;
	color: #999999;
`;

export const TitleCard = styled.h2`
	display: flex;
	flex-direction: column;
	min-height: 4.5rem;
	font-size: 1.75em;
	line-height: 1.2;
	text-align: center;
	color: #FFFFFF;
	font-weight: bold;
`;
