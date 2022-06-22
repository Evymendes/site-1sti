import React from "react";

import * as S from "./styled";
import Button from "../../Button";

const Purpose = ({ data }) => (
	<S.ContainerPurpose>
		<S.ContentContainer>
			<S.BoxText>
				<S.Title>{data.title}</S.Title>
				<S.Description>{data.paragraph}</S.Description>
				<Button to="">CTA</Button>
			</S.BoxText>
			<S.BoxImage>
				<S.ImagePurpose src={data.graphic.url} alt="" />
			</S.BoxImage>
		</S.ContentContainer>

		<S.ContainerCards>
			<S.BoxCards>
				{data.cards.map((card, i) => (
					<S.Card key={i}>
						<S.CardBox>
							<S.ImageCard src={card.icon} alt="" />
							<S.TitleCard>
								{Array.isArray(card.title) 
									? card.title.map((line, i) => <span key={i}>{line}</span>)
									: card.title
								}
							</S.TitleCard>
						</S.CardBox>
						<S.TextCard>{card.text}</S.TextCard>
					</S.Card>
				))}
			</S.BoxCards>
		</S.ContainerCards>

		<Button to="">Let's work</Button>
	</S.ContainerPurpose>
);

export default Purpose