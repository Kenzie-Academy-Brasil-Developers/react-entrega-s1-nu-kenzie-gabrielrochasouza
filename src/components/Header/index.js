import './style.css'

 import nuKenzie from './NuKenzie(1).png'



export default function Header({setIniciated}){
    
    
    return (
        <header>
            <div className='containerHeader'>
                <figure>
                    <figcaption>Logo Nu Kenzie</figcaption>
                    <img src={nuKenzie} alt='Logo Nu kenzie'/>
                </figure>

                <button 
                className='btn-claro'
                onClick={()=>setIniciated(false)}
                >Voltar</button>
            </div>
        </header>
    )
}