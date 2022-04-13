import { useContext } from "react";
import Context from "./context";


function Outputarea() {
const a = useContext(Context);

    return(
        <>
        <div>
<div className='outputpostdiv'>
        {a.postvalue ? (
                    <div>
                        {a.postvalue.map((post)=> {
                            return (
                                <div className='postbox'>
                            <div >{post.text}</div>
                            <div><img className='postedgif' src={post.image}></img></div>
                                </div>
                            )
                        })}
                    </div>
                ) : (null)}
        </div>
</div>
        </>
    )
}

export default Outputarea;