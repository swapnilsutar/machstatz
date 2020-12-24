import React,{useState} from "react";
// import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';


function Data(props){

    const [isFavourite,setFavourite] = useState(false);
    
    
    const handle = () =>{

        setFavourite(true);
        
        if(isFavourite===false){
            props.selectme(props.id,props.name,isFavourite);
        }
        else{
            alert('You alredy added to Favourite List')
        }
    }

    return(
        <>
        <tr>
            <td>
            {props.id} 
            </td>
            <td>
                {props.name}
            </td>
            <td className="text-center">
                <span style={{color:'red',fontSize:'22px'}}>
                    {props.fav}
                    <FavoriteBorderIcon onClick={handle}/>
                </span>
            </td>

        </tr>
    </>
    );

}

export default Data