import React from 'react'
import styled from 'styled-components'
import Button from '../../components/Button/index'

const Title = styled.h2`
    font-size: 2.875rem;
    font-family: GoshaSans;
    @media(max-width: 1266px){
        font-size: 2.3rem
    }
`
const Text = styled.p`
    margin-top: 2.25rem;
    font-size: 1.125rem;
    font-family: CabinetGrotesk;
    @media(max-width: 1266px){
        font-size: 1rem;
    }
    
`

export default function SectionLeftHome(props){    
    return(
        <>
            <Title>{props.title}</Title>
            <Text>{props.text}</Text>
            <Button>{props.textButton}</Button>
        </>
    )
}