import React from 'react'
import * as S from './styles'

export default function Wrapper({children, className}) {
  return (
    <S.Container className={className}>
      {children}
    </S.Container>
  )
}
