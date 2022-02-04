import Nukenzie from "./nuKenzie";
import { useState } from "react";
import LandingPage from "./components/LandingPage";

export default function App(){
    const [iniciated,setIniciated]= useState(false)

    return (
        <>
            {iniciated ? <Nukenzie setIniciated={setIniciated}/> : <LandingPage setIniciated={setIniciated}/> }
        </>
        
    )
} 