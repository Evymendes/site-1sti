import React from 'react'
import * as S from './styles'

//components
import TextLeftSections from '../../TextLeftSections/index'

//images
import CognaImg from '../../../assets/images/cogna.png'
import SomosImg from '../../../assets/images/somos.png'
import CruzeiroImg from '../../../assets/images/cruzeiro.png'
import LaureateImg from '../../../assets/images/Laureate-Logo.png'
import SirioImg from '../../../assets/images/sirio.png'
import SulamericaImg from '../../../assets/images/sulamerica.png'

export default function JourneysActive(){


    return(
        <>
            <S.Journeys>
                <S.Left>
                    <TextLeftSections
                    title="Active Journeys"
                    text="Onde estamos e com quais soluções geramos impactos ampliados."
                    textButton="Start your journey"
                />
                </S.Left>
                <S.Right>
                    <S.Education>
                        <S.Title>Education</S.Title>
                        <S.LineCyan></S.LineCyan>
                        <S.Institutions>
                            <S.Cogna src={CognaImg}/>
                            <S.Somos src={SomosImg}/>
                            <S.Cruzeiro src={CruzeiroImg}/>
                            <S.Laureate src={LaureateImg}/>
                        </S.Institutions>
                    </S.Education>

                    <S.InstitutionsTwo>
                        <S.Health>
                            <S.Title>Health</S.Title>
                            <S.LineCyan></S.LineCyan>
                            <S.Sirio src={SirioImg}/>
                        </S.Health>

                        <S.Insurance>
                            <S.Title>Insurance</S.Title>
                            <S.LineCyan></S.LineCyan>
                            <S.Sulamerica src={SulamericaImg}/>
                        </S.Insurance>

                        <S.Retail>
                            <S.Title>Retail</S.Title>
                            <S.LineCyan></S.LineCyan>
                            <S.Sulamerica src={SulamericaImg}/>
                        </S.Retail>
                    </S.InstitutionsTwo>
                </S.Right>
            </S.Journeys>
        </>
    )
}