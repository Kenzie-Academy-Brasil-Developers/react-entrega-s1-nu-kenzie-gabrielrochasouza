import './style.css'

import {useState} from 'react'

export default function TotalMoney({listTransactions,setListTransaction,filterList,setFilterList}){
    
    return (
        <div className='total'>
            <span>Valor Total:</span>
            <span>R$: {filterList.reduce((acc,transaction)=>{
                return transaction.type==='Entrada' ? acc+transaction.value : acc-transaction.value
            },0
            ).toFixed(2)}</span>
        </div>
    )
}