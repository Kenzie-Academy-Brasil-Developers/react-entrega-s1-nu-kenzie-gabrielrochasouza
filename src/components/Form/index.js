import "./style.css";

import { useState } from "react";

export default function Form({ 
    listTransactions, 
    setListTransaction,
    filterList,
    setFilterList,

    setAllSelected,
    setCostSelected,
    setEntrySelected
  }){

  const [description,setDescription]=useState('')
  const [value,setValue]=useState(0)
  const [type,setType]=useState('Entrada')
  
  return (
    
  <form>
      <label>Descrição</label>
      <input 
        type='text'
        placeholder="Descrição"
        name='description'
        onChange={(e)=>{ setDescription(e.target.value) }}
      />
      <label className="exemplo">Ex: compra de roupas</label>

      <div className="form-col">

        <div className="form-col-left">

          <label>Valor</label>
          <input 
            type='number'
            placeholder="Valor"
            name='value'
            onChange={(e)=>{ setValue(Number(e.target.value)) }}

          />

        </div>

        <div className="form-col-right">

          <label>Tipo</label>
          <select 
            name="type"
            onChange={(e)=>{setType(e.target.value)}}
          >
            <option>Entrada</option>
            <option>Saida</option>
          </select>

        </div>
      </div>


      <button 
        onClick={(e)=>{
            e.preventDefault()

            const id = listTransactions.length===0 ? 0 : listTransactions.reduce((acc,elem)=> acc>elem.id ? acc : elem.id,0) + 1
            const obj={
                description,
                value,
                type,
                id:id
            }
            if(obj.description.length!==0 ){
              setAllSelected(true)
              setCostSelected(false)
              setEntrySelected(false)
              setListTransaction([...listTransactions,obj])
              setFilterList([...listTransactions,obj])
            }
        }}
      >
          Enviar
      </button>
  </form>
  
  )
}
