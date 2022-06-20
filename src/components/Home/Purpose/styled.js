import styled from "styled-components";
import ImgCard from "../../../assets/images/purpose_card.svg";

export const ContainerPurpose = styled.section`
	width: 100%;
	background: #0B1617;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;

	@media (min-width: 768px) {
		& > a {
			display: none;
		}
	}
`;

export const ContentContainer = styled.div`
	padding-top: 6rem;
	display: flex;
	justify-content: space-between;
	width: 90%;
	max-width: 1440px;

	@media (max-width: 768px) {
		display: flex;
		flex-direction: column;
		padding-top: 2rem;
		width: 100%;
	}
`;

export const BoxText = styled.div`
	margin-right: 1rem;
	width: 30%;

	@media (max-width: 768px) {
		margin: 0 auto;
		width: 75%;
		font-size: .9em;

		p {
			margin-bottom: 1rem;
		}

		& > a {
			display: none;
		}
	}
`;

export const Title = styled.h2`
	margin-bottom: 1rem;
	font-size: 2.875em;
`;

export const Description = styled.p`
	margin-bottom: 3rem;
	font-size: 1.5em;
`;

export const BoxImage = styled.div`
	padding-right: 3rem;
	max-width: 55rem;

	@media (min-width: 1440px) {
		padding-right: 10rem;
		max-width: 65rem;
	}

	@media (max-width: 768px) {
		padding-left: 1rem;
		width: 100vw;
		overflow-x: scroll;
	}
`;

export const ImagePurpose = styled.img`
    @media (max-width: 768px) {
        width: 175vw;
    }
`;

export const ContainerCards = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	max-width: 1440px;
	width: 90%;
	height: 45%;

	@media (max-width: 768px) {
		display: flex;
		width: 100%;
		font-size: 1.2rem;
		overflow-x: scroll;
	}
`;

export const BoxCards = styled.div`
	display: flex;
	justify-content: flex-end;
	flex-wrap: wrap;
	margin: 2rem 0;
	max-width: 65rem;

	@media (min-width: 1440px) {
		max-width: 80rem;
	}

	@media (max-width: 768px) {
		flex-wrap: nowrap;
		justify-content: flex-start;
		padding-left: 3rem;
		min-width: 100vw;
	}
`;

export const Card = styled.div`
	margin: .5rem;
	padding: 1.5rem 1.1rem;
	display: flex;
	flex-direction: column;
	align-items: center;
	width: 14.25rem;
	height: 20rem;
	border-radius: 20px;
	background-image: url(${ImgCard});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;

	&:hover {
		box-shadow: inset 0 0 40px #de0dbf;

		h2 {
			color: #FF0070;
		}
	}

	@media (min-width: 1440px) {
		width: 17rem;
		height: 25rem;
	}

	@media (max-width: 900px) {
		width: 12.8rem;
		height: 18rem;
	}

	@media (max-width: 768px) {
		margin: 2rem .5rem;
		min-width: 17rem;
		height: 24rem;
	}
`;

export const CardBox = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	min-height: 8.4rem;
`;

export const ImageCard = styled.img`
	margin-bottom: .5rem;
	width: 3rem;
`;

export const TitleCard = styled.h2`
	display: flex;
	flex-direction: column;
	font-size: 1.2em;
	font-weight: 300;
	line-height: 1.2;
	letter-spacing: 1.5px;
	text-align: center;
	color: #fff;
	transition: .2s;
`;

export const TextCard = styled.p`
	font-size: .9em;
	font-weight: 100;
	line-height: 1.5;
	text-align: left;
`;