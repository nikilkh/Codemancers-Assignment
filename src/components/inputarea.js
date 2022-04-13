import { useContext, useState } from 'react';
import Picker from 'emoji-picker-react';
import Gif from './gif';
import Context from './context';

function Inputarea() {
   const a = useContext(Context);


    const onEmojiClick = (event, emojiObject) => {
        a.setinputvalue(prevInput => prevInput + emojiObject.emoji );
        a.setShowPicker(false);
      };
    
        
    
    
    
        function post() {
            if(a.inputvalue!=="" || a.imglink!=="") {
                a.setpostvalue([...a.postvalue, {text: a.inputvalue , image: a.imglink} ]);
                a.setimglink("");
                a.setinputvalue("")
            }
            else {
                
                
            }
            console.log(a.postvalue)
    
    
        }
    
        function getgif() {
            if(a.gifmenu===false) {
                a.setgifmenu(true);
    
            }
            else {
                a.setgifmenu(false)
            }
        }

    return(
        <>
        
<div className="inputarea">
            
{a.inputfield ? (<>
                    <div className='inputandemoji'>
                        <div className='textareadiv'>
                        <textarea
                        placeholder='Write Something/Add GIF and Post..!!' 
                        className='input'
                    value={a.inputvalue}
                    onChange={(e)=> {
                        a.setinputvalue(e.target.value)
                    }}></textarea>

                    {a.imglink?(<img className='confirmgif' src={a.imglink}></img>):(null)}
                        </div>

                  
                  <div className='emojiicondiv'>
                        <img
          className="emoji-icon"
          src="https://icons.getbootstrap.com/assets/icons/emoji-smile.svg"
          onClick={() => a.setShowPicker(val => !val)} />
        {a.showPicker && <Picker
          pickerStyle={{ width: '100%' }}
          onEmojiClick={onEmojiClick} />}
                        </div>
                        
                        <div className='gifdiv'>
                        <button className='gifbutton' onClick={getgif}>GIF</button>
                    </div>
                    {a.gifmenu ? <Gif/>: (null)}
                  


</div>
                    
<div className='postdiv'>
<button className='postbutton' onClick={post}>Post</button>

</div>
                   
                </>): (null)}

                

            </div>
            
        
        </>
    )
}

export default Inputarea;