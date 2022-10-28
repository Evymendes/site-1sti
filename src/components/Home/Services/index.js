import React from "react";

import * as S from "./styled";
import Button from "../../../components/Button";

//images
import IconPlus from '../../../assets/images/plus_icon.svg'

export default function Services(props) {

	return (
		<S.ContainerServices>
			<S.ContentServices>
				<div>
					<S.TitleServices>{props.title}</S.TitleServices>
					<S.Description>{props.subscription}</S.Description>
				</div>

				<S.LinkKnowMore>
					<a href="#">Saiba mais</a>
					<img src={IconPlus} alt="Ícone de um +"/>
				</S.LinkKnowMore>
			</S.ContentServices>
		</S.ContainerServices>
	);
};