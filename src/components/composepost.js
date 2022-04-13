import React, { useContext } from "react";
import Context from "./context";




function Composepost() {
    
    const a = useContext(Context);

    function opencp() {
       a.setinputfield(true)
            }

            
            

    return(
        <>
        
                <button onClick={opencp}>Compose Post</button>

                

                

        </>
    )
}

export default Composepost;