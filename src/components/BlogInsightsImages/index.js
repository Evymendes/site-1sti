import React from "react";
import { graphql, useStaticQuery } from "gatsby";

import * as S from "./styled"

const BlockImages = () => {
  const {
    firsti: {
      blogs: [{ article, editorial, whatIsTitle, whatIsLink, deepTechTitle, deepTechLink, imageWhatIs, imageDeeptech}],
    },
  } = useStaticQuery(graphql`
  query MyQuery{
    firsti {
      blogs{
        article
        editorial
        whatIsTitle
        whatIsLink
        deepTechTitle
        deepTechLink
        imageWhatIs {
          url
        }
        imageDeeptech {
          url
        }
      }
    }
  }
`)


  return (    
    <S.Container>
      <S.Wrapper>
        <S.BlockLink to={whatIsLink}>
          <S.Block style={{ backgroundImage: `url(${imageWhatIs.url})`, backgroundRepeat: 'no-repeat', backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <span style={{ color: '#000', zIndex: '1' }}>
              <p>{article}</p>
              <h1>{whatIsTitle}</h1>
            </span>
          </S.Block>
        </S.BlockLink>
        <S.BlockLink to={deepTechLink}>
          <S.Block style={{ backgroundImage: `url(${imageDeeptech.url})`, backgroundRepeat: 'no-repeat', backgroundSize: '70%', backgroundPosition: 'center'}} color="#742698">
            <span>  
              <p>{editorial}</p>
              <h1>{deepTechTitle}</h1>
            </span>
          </S.Block>
        </S.BlockLink>
      </S.Wrapper>
    </S.Container>
  )
}

export default BlockImages