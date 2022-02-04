import './style.css'
import Card from './Card'
import CardVazio from './CardVazio'

import {useState} from 'react'

export default function List({listTransactions,setListTransaction,removeFromList,setFilterList,filterList}){
    
    const [AllSelected,setAllSelected]=useState(true)
    const [costSelected,setCostSelected]=useState(false)
    const [entrySelected,setEntrySelected]=useState(false)

    return (
        <>
            <div className='list-header'>
                <h2>Resumo financeiro</h2>
                <div className='buttons-section'>
                    <button 
                    className={AllSelected && 'selected'}
                    onClick={()=>{
                        setFilterList( listTransactions )
                        setAllSelected(true)
                        setCostSelected(false)
                        setEntrySelected(false)
                    }}
                    >
                        Todos
                    </button>

                    <button
                    className={entrySelected && 'selected'}
                    onClick={()=>{
                        setFilterList(listTransactions)
                        setFilterList( listTransactions.filter(transaction=>transaction.type==='Entrada'))
                        setAllSelected(false)
                        setCostSelected(false)
                        setEntrySelected(true)
                    }}
                    >
                        Entradas
                    </button>
                    
                    <button
                    className={costSelected && 'selected'}
                    onClick={()=>{
                        setFilterList(listTransactions)
                        setFilterList( listTransactions.filter(transaction=>transaction.type==='Saida') )
                        setAllSelected(false)
                        setCostSelected(true)
                        setEntrySelected(false)
                    }}>
                        Despesas
                    </button>

                </div>
            </div>
            <ul>
                {listTransactions.length===0 ? <CardVazio/> : (
                <Card 
                    listTransactions={listTransactions} 
                    setListTransaction={setListTransaction}
                    removeFromList={removeFromList}
                    
                    filterList={filterList}
                    setFilterList={setFilterList}
                />)}
                
                
            </ul>
        </>
    )
}