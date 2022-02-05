import './style.css'

import svg from './NoCard.svg'


export default function CardVazio(){
    
    
    return (
        <div>
            <h3>Você ainda não tem nenhum lançamento</h3>
            
            <div className='rect'>
                <div className='rect-title'></div>
                <div className='rect-paragraph'></div>
            </div>
            <div className='rect'>
                <div className='rect-title'></div>
                <div className='rect-paragraph'></div>
            </div>
            <div className='rect'>
                <div className='rect-title'></div>
                <div className='rect-paragraph'></div>
            </div>

        </div>
        )
    
}