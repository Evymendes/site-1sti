import React from "react"

import * as S from "./styles.js"

//images
import IconPlus from "../../assets/images/plus_icon.svg"
import { Link } from "gatsby";

export default function Services({title, subscription, link, onClick}) {

	return (
		<S.ContainerServices>
			<S.ContentServices>
				<div>
					<S.TitleServices>{title}</S.TitleServices>
					<S.Description>{subscription}</S.Description>
				</div>

				<S.LinkKnowMore>
					<Link onClick={onClick} to={link}>Saiba mais</Link>
					<img src={IconPlus} alt="Ícone de um +"/>
				</S.LinkKnowMore>
			</S.ContentServices>
		</S.ContainerServices>
	);
};
