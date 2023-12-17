import React, { useEffect, useState } from 'react'
import {C_Button, Caixa_2, Input, InputContent, Label_1, RadioGroup } from './style'
import { Grid } from '../Grid'

export const Formulario = ({handleAdd, transactionsList, setTransactionsList}) => {
    const [desc, setDesc] = useState("")
    const [amount, setAmount] = useState("")
    const [isExpense, setExpense] = useState(false)

    const generateID = () => Math.round(Math.random() * 1000)


    const handleSave = () =>{
        if (!desc || !amount){
            alert("Informe a descrição e o valor!")
            return
        }else if(amount < 1 ){
            alert("O valor tem que ser positivo!")
            return
        }

    const transaction = {
        id:generateID(),
        desc: desc,
        amount: amount,
        expense: isExpense,
        }
    
    handleAdd(transaction)

    setDesc("")
    setAmount("")
    }

   
    


  return (
    <>
    
        <Caixa_2>
            <InputContent>
                <Label_1>Descrição</Label_1>
                <Input value={desc} onChange={(e)=> setDesc(e.target.value)}/>
            </InputContent>
            <InputContent>
                <Label_1>Valor</Label_1>
                <Input value={amount} type='number' onChange={(e)=> setAmount(e.target.value)}/>
            </InputContent>
            <RadioGroup>
                <Input type='radio' id='rIncome' defaultChecked name='group1' onChange={()=>setExpense(!isExpense)}/>
                <Label_1 htmlFor='rIncome'>Entrada</Label_1>
                <Input type='radio' id='rExpenses' name='group1' onChange={()=>setExpense(!isExpense)}/>
                <Label_1 htmlFor='rExpenses'>Saída</Label_1>
            </RadioGroup>
            <C_Button onClick={handleSave}>Adicionar</C_Button>

        </Caixa_2>
        <Grid itens={transactionsList} setItens={setTransactionsList}/>
    </>
  )
}

