import './style.css'
import Card from './Card'
import CardVazio from './CardVazio'

import {useState} from 'react'

export default function List({
    listTransactions,
    setListTransaction,
    removeFromList,
    setFilterList,
    filterList,
    AllSelected,
    costSelected,
    entrySelected,
    changeSelection
}){

    return (
        <>
            <div className='list-header'>
                <h2>Resumo financeiro</h2>
                <div className='buttons-section'>
                    <button 
                    className={AllSelected && 'selected'}
                    onClick={()=>{
                        setFilterList( listTransactions )
                        changeSelection('Todos')
                    }}
                    >
                        Todos
                    </button>

                    <button
                    className={entrySelected && 'selected'}
                    onClick={()=>{
                        setFilterList(listTransactions)
                        setFilterList( listTransactions.filter(transaction=>transaction.type==='Entrada'))
                        changeSelection('Entrada')

                    }}
                    >
                        Entradas
                    </button>
                    
                    <button
                    className={costSelected && 'selected'}
                    onClick={()=>{
                        setFilterList(listTransactions)
                        setFilterList( listTransactions.filter(transaction=>transaction.type==='Saida') )
                        changeSelection('Despesa')
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
                    changeSelection={changeSelection}
                    filterList={filterList}
                    setFilterList={setFilterList}
                />)}
                
                
            </ul>
        </>
    )
}