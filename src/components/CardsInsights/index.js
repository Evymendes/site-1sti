import React from "react"
import { graphql, Link, useStaticQuery } from "gatsby"

// styles
import * as S from "./styled"

// i18n
import { i18n } from "../../translate/i18n"

const Cards = () => {
  const data = useStaticQuery(graphql`
    query {
      firsti {
        posts {
          slug
          imageCardOne {
            url
          }
          textCard
          paragraphCard
        }
      }
    }
  `)

  i18n.addResourceBundle("en", "translations", data)
  i18n.addResourceBundle("pt", "translations", data)

  return (
    <S.Container>
      <S.Wrapper>
        <S.BoxCard>
          {data.firsti.posts.map((item, index) => {
            return (
              <>
                <S.Card to={`/blog/${item.slug}`}>
                  <img
                    src={item.imageCardOne.url}
                    alt="Imagem Ideia"
                    layout="fixed"
                    style={{

                      width: 293,
                      height: 264,
                    }}
                  />
                  <span>
                    <p>{item.textCard}</p>
                    <h1>{item.paragraphCard}</h1>
                  </span>
                </S.Card>
              </>
            )
          })}
        </S.BoxCard>

      </S.Wrapper>
    </S.Container>
  )
}

export default Cards
