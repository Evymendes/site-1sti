import React from "react";

import * as S from "./styled";
import Button from "../../../components/Button";

import Backbones from "../../../assets/images/ScreenShot2021-09-15at19.29.36.png";
import Platforms from "../../../assets/images/ScreenShot2021-09-15at18.32.12.png";
import Technologies from "../../../assets/images/ScreenShot2021-09-15at18.32.21.png";

export default function Services({ data }) {
	const servicesList = [
		{
			bg: Backbones,
			title: 'Digital Backbones',
			description: 'The Foundation of Scalable Digital Platforms',
		},
		{
			bg: Platforms,
			title: 'Deep Tech Platforms',
			description: 'Elevation, Scaling and Amplification',
		},
		{
			bg: Technologies,
			title: 'Visionary Technologies',
			description: 'Fit for the future, now',
		},
		{
			bg: Technologies,
			title: 'Digital Intelligence',
			description: 'Tagline here',
		}
	];

	return (
		<S.ContainerServices>
			<S.ContentContainer>
				<S.BoxText>
					<S.Title>{data.title}</S.Title>
					<S.Description>{data.paragraph}</S.Description>
					<Button to=''>See more</Button>
				</S.BoxText>

				<S.CardsContainer>
					{servicesList.map((service, i) => (
						<S.Card key={i} bg={service.bg}>
							<S.Title>{service.title}</S.Title>
							<S.DescriptionCard>{service.description}</S.DescriptionCard>
							<S.Title id="card-id">0{i + 1}</S.Title>
						</S.Card>
					))}
				</S.CardsContainer>
					
				<Button to=''>See more</Button>
			</S.ContentContainer>
		</S.ContainerServices>
	);
};