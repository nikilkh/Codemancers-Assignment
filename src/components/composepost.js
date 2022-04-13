import React, { useContext } from "react";
import Context from "./context";




function Composepost() {
    
    const a = useContext(Context);

    function opencp() {
        if(a.inputfield===false)
       a.setinputfield(true)
            }
            a.setinputfield(false);

            
            

    return(
        <>
        
                <button onClick={opencp}>Compose Post</button>

                

                

        </>
    )
}

export default Composepost;