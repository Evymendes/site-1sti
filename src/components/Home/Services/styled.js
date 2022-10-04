import styled from "styled-components";

export const ContainerServices = styled.section`
	width: 100%;
	background: #0B1617;
	display: flex;
	justify-content: center;
	align-items: center;
	@media(max-width: 768px){
		flex-wrap: wrap;
	}
`;

export const Card = styled.div`
	background-color: #000000;
	position: relative;
	display: flex;
	flex-direction: column;
	padding: 3.813rem 4.5rem;
	width: 33%;
	height: 470px;
	transition: 0.4s;
	a{
		margin-top: 7rem;
		color: #AF39E6;
		font-size: 1.25rem;
		font-weight: 100;
		font-family: Cabinet Grotesk;
		text-decoration: none;
		position: absolute;
		top: 16rem;
	}
	h2{
		font-size: 2rem;
		font-weight: 500;
		@media(max-width: 768px){
			font-size: 1.5rem;
			width: 100px;
		}
	}
	&:hover{
		box-shadow: inset 0px 0px 70px #AF39E6;
		p{
			color: #38EEFF;
		}
		h2{
			font-weight: bold;
		}
	}
	@media(max-width: 768px){
		padding: 4rem 2rem;
	}
	@media(max-width: 1024px){
		width: 49.7%;
		height: 440px;
		border-bottom: solid 3px #0B1617;
	}
	
`;

export const ContentContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
	width: 100%;
	height: 955px;

`;

export const BoxText = styled.div`
	padding-left: 4.563rem;
	width: 33%;
	height: 455px;
	padding-top: 4rem;
	@media(max-width: 900px){
		width: 50%;
	}
	@media(max-width: 768px){
		margin-top: 4rem;
		width: 100%;
		height: auto;
		padding-left: 4.5rem;
	}
`;

export const Description = styled.p`
	display: flex;
	flex-direction: column;
	margin: 1.5rem 0 2.5rem;
	font-size: 1.2em;
	font-weight: 200;
	font-family: CabinetGrotesk;
	width: 80%;
`;

export const Title = styled.h2`
	max-width: 80%;
	font-family: GoshaSans;
	font-size: 2.875rem;
	font-weight: bold;
	line-height: 1.2;
`;

export const DescriptionCard = styled.p`
	margin-top: 3rem;
	font-family: Cabinet Grotesk;
	font-size: 1.375rem;
	color: #7E7E7E;
	z-index: 1;
	@media(max-width: 768px){
		font-size: 1.2rem;
	}
`;
export const DivBlack = styled.div`
	display: none;
	width: 49.7%;
	height: 440px;
	background-color: black;
	border-bottom: solid 3px #0B1617;
	@media(max-width: 768px){
		display: block;
	}
`