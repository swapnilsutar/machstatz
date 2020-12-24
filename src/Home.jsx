import React, {  useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Fav from "./Fav";
import Data from "./Data";


function Home() {
    const [list, setList] = useState([]);
    const [name,setName] = useState([]);

    useEffect(() => { 
        async function getData(){
            const res = await axios.get('https://assignment-machstatz.herokuapp.com/planet');
            setName(res.data);
        }
        getData();
    });

    const selectme = (id,name,isfav)=>{
        const info = {id:id,name:name,isFavourite:isfav};

        console.log(info);
        setList((all)=>{
            return[...all,info];
        })

    }    


return (
    <div >
        <h1 className="text-center">Welcome</h1>
        <br/>
        <div className="container">

            <h4>All planets</h4>
        <div className="row">


            <div className="col-lg-6">
                <table border="1">
                    <tbody>
                    {
                    name.map((p,index)=>{
                        return(
                        <>
                            <Data 
                                key={index}
                                id={p.id}
                                name={p.name}
                                fav={p.isFavourite}
                                selectme={selectme}
                            />
                        </>
                        );
                    })
                    }
                    </tbody>
                </table>
            </div>

            <div className="col-lg-6">
            

                <br/>

                    <ol>
                        
                    <Fav value={
                        list.map((l)=>{
                            return<>
                        <li>
                        {l.name}
                        </li>
                        </>;
                        })
                    }/>

                    </ol>

                </div>
            
            </div>
        </div>
        </div>
    );
}

export default Home;


