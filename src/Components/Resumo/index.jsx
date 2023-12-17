import React from 'react'
import { Caixa } from './style'
import { ResumoItem } from '../ResumoItem'
import {
  FaRegArrowAltCircleUp,
  FaRegArrowAltCircleDown,
  FaDollarSign,
} from "react-icons/fa";

export const  Resumo = ({income, expense, total}) => {
  return (
    <Caixa>
        <ResumoItem title="Entradas" Icon={FaRegArrowAltCircleUp} value={income} />
        <ResumoItem title="Saídas" Icon={FaRegArrowAltCircleDown} value={expense}/>
        <ResumoItem title="Total" Icon={FaDollarSign} value={total}/>
    </Caixa>
  )
}

