import React from 'react'
import { Caixas, Header, HeaderTitle, Total } from './style'

export const ResumoItem = ({title, Icon, value}) => {
  return (
    <Caixas>
        <Header>
            <HeaderTitle>{title}</HeaderTitle>
            <Icon />
        </Header>
        <Total>{value}</Total>
    </Caixas>
  )
}

