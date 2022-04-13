import { useState } from 'react';
import Picker from 'emoji-picker-react';
import Gif from './gif';
import Composepost from './composepost';
import Photovideo from './photovideo';
import Livevideo from './livevideo';
import X from './x'
import Inputarea from './inputarea';
import Context from './context';
import Outputarea from './outputarea';


function Main() {

const[inputfield, setinputfield] = useState(false);
const[inputvalue, setinputvalue] = useState("")
const[postvalue, setpostvalue] = useState([])
const [showPicker, setShowPicker] = useState(false);
const[gifmenu, setgifmenu] = useState(false);
const[imglink, setimglink] = useState("");



 


    return (
<>
<Context.Provider value={{inputfield, setinputfield, inputvalue, 
setinputvalue, postvalue, setpostvalue, showPicker, setShowPicker, 
gifmenu, setgifmenu, imglink, setimglink}
}>
    <div className="maincontainer">
        <div className='parentheader'>
            <div className="header">

                <Composepost/>
                <Photovideo/>
                <Livevideo/>
                <X/>
            </div>
        </div>
        <Inputarea/>
    </div>
           

<Outputarea/>
        

      
        </Context.Provider>
        </>
    )
}

export default Main;