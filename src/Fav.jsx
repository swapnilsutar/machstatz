import React from "react";




function Fav(props){
    return (<>

        <div class="container">
        <br/>
    
        <h4> Favourite Planets</h4>
            <br/>
            <h5>
                {props.value}
            </h5>

        
        </div>
    </>);


}

export default Fav;

