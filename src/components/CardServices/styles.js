import styled from "styled-components";

export const ContainerServices = styled.section`
	width: 100%;
	max-width: 480px;

	padding-inline: 70px;
	padding-block: 50px;

	transition: ease 0.5s;

  cursor: pointer;
	background-color: #000;


	:hover {
		box-shadow: inset 0px 0px 70px #AF39E6;
	}

	@media(max-width: 1030px) {
		width: 100%;
		max-width: initial;
		flex: 1;
	}

	@media(max-width: 800px) {
		padding-inline: 20px;
		padding-block: 40px;
	}
`;


export const ContentServices = styled.div`
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;

	@media(max-width: 600px) {
		
	}
`;

export const BoxTexts = styled.div`
	width: 100%;
`

export const TitleServices = styled.h2`
	width: 100%;
	max-width: 150px;

	font-size: 30px;
	font-weight: normal;

	margin-top: 10px;
	margin-bottom: 36px;

	@media(max-width: 800px) {
		font-size: 25px;
		margin-bottom: 25px;
		margin-top: 0px;
	}

	@media(max-width: 350px) {
		font-size: 16px;

	}
`;


export const Description = styled.p`
	font-size: 20px;
	font-weight: 500;
	color: #7E7E7E;

	margin-bottom: 100px;

	@media(max-width: 800px) {
		margin-bottom: 30px;
	}
`;


export const LinkKnowMore = styled.div`
	display: flex;
	gap: 16px;

	img{
		width: 19px;
		cursor: pointer;
		@media(max-width: 768px){
			width: 15px;
		}
	}
	a {
		color: #AF39E6;
		font-size: 20px;
		font-weight: 500;
		text-decoration: none;

		@media(max-width: 768px){
			font-size: 16px;
		}
	}

	
`