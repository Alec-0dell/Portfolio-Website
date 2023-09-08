import { useState } from 'react';
import Arrow from './ArrowIcon.png'

function Dropdown( props ) {
    const [ display, setDisplay ] = useState( 'none' )
    const [ arrowDirection, setArrowDirection] = useState(false)

    function handleClick() {
        if ( display === 'none' ) {
            setDisplay( 'block' )
            setArrowDirection(true)
        } else {
            setDisplay( 'none' )
            setArrowDirection(false)
        }
    }

    return (
        <div> 
            <div onClick={handleClick}>
                <p>{props.name}</p>
                <img src={Arrow} style={arrowDirection? {height: "20px", width: "20px", rotate: "180deg"  } : {height: "20px", width: "20px"}}/>
            </div>   
            
            <div style={{display:display}}>
                { props.children }
            </div>
        </div>
    )

}

export { Dropdown }