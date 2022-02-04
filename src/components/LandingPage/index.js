import './style.css'

import NukenzieWhite from './NuKenzieWhite.png'

export default function LandingPage({setIniciated}){
    
    return (

    <main className='landingPage-main'>
        <div className='container-main'>
            <div className='main-col-left'>
                <figure>
                    <figcaption>Logo Nukenzie</figcaption>
                    <img src={NukenzieWhite} alt='Logo Nukenzie branca' />
                </figure>
                <h1 className='landingPage-title'>
                    Centralize o Controle de suas Finanças
                </h1>
                <span className='landingPage-text'>
                    De forma rápida e segura
                </span>
                <button 
                className='landingPage-btn'
                onClick={()=>setIniciated(true)}>
                    Iniciar
                </button>
            </div>

            <div className='main-col-right'>

                <div className='externalCircle circle'>
                    <div className='mediumCircle circle'>
                        <div className='internalCircle circle'>

                            <div className='larger-rect'>
                                <div className='colored-circle1'></div>
                                <div className='colored-circle2'></div>
                                <div className='colored-circle3'></div>

                                <div className='grey-rect-section'>
                                    <div className='grey-rect'></div>
                                    <div className='grey-rect'></div>
                                    <div className='grey-rect'></div>
                                    <div className='grey-rect'></div>
                                    <div className='grey-rect'></div>
                                    <div className='grey-rect'></div>
                                </div>
                            </div>

                            <div className='first-rect'>
                                <div className='first-rect-icon'>

                                    <div className='little-rect-White'>
                                        <div className='little-rect-1'> </div>
                                        <div className='little-rect-2'> </div>

                                    </div>

                                </div>
                                <div className='first-rect-title'></div>
                                <div className='first-rect-text'></div>
                            </div>
                            <div className='second-rect'>
                                <div className='second-rect-icon'>
                                    
                                    <div className='little-rect-White'>
                                        <div className='little-rect2-1'> </div>
                                        <div className='little-rect2-2'> </div>

                                    </div>
                                </div>
                                <div className='second-rect-title'></div>
                                <div className='second-rect-text'></div>
                            </div>

                        </div>
                    </div>

                </div>

            </div>
        </div>
    </main>
    )

}