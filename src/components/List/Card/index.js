import './style.css'

import trash from './trash.png'
import whiteTrash from './white-trash.png'

import {useState} from 'react'

export default function Card({listTransactions,setListTransaction,removeFromList,filterList,setFilterList}){
    

    
    return (
        filterList.map((transaction,index)=>{
            const {type}=transaction
            
            return(

                <li key={index} className={type==='Entrada' ? 'entrada' : 'saida'}>
                    <div className='col-left'>
                        <h3>{transaction.description}</h3>
                        <p>{transaction.type}</p>
                    </div>
                    <div className='col-right'>
                        <span>R$ {transaction.value.toFixed(2)}</span>
                        <button 
                        className='remover'
                        onClick={()=>removeFromList(index,transaction.id)}
                        ></button>
                    </div>
                </li>

            )

        })
    )
}