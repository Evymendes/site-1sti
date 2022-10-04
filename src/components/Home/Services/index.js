import React from "react";

import * as S from "./styled";
import Button from "../../../components/Button";


export default function Services({ data }) {
	const servicesList = [
		{
			title: 'Digital Strategy',
			description: 'Technology as a means for profound transformations',
		},
		{
			title: 'Backbones Digitais',
			description: 'Accelerating innovations with increased agility',
		},
		{
			title: 'Digital Platforms',
			description: 'The path to the present and future of business',
		},
		{
			title: 'Deep Tech Innovation',
			description: 'Visionary technologies for high-impact innovation',
		},
		{
			title: 'Deep Analytics',
			description: 'Amplifying data analytics to multiply opportunities',
		},
	];

	return (
		<S.ContainerServices>
			<S.ContentContainer>
				<S.BoxText>
					<S.Title>{data.title}</S.Title>
					<S.Description>{data.paragraph}</S.Description>
				</S.BoxText>

				{servicesList.map((service, i) => (
					<S.Card key={i} bg={service.bg}>
						<S.Title>{service.title}</S.Title>
						<S.DescriptionCard>{service.description}</S.DescriptionCard>
						<a href="#">Saiba mais +</a>
					</S.Card>
				))}
				<S.DivBlack></S.DivBlack>
			</S.ContentContainer>
		</S.ContainerServices>
	);
};