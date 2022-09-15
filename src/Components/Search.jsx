import React, { useState } from 'react'
import Actors from './Actors';
import Shows from './Shows';

const Search = () => {
    const [actor, setactor] = useState(false);
    const [show, setshow] = useState(false);

    const showfilter = () => {
        setactor(false);
        setshow(true);
    }
    const actorfilter = () => {
        setshow(false);
        setactor(true);
    }
    return (
        <div classname="md-12" id='main'>
            <div className="container ">

                <div className="row">
                    <div className="col-sm-5 p-4">
                        <input type="radio" name="movie" onChange={() => actorfilter()} /> By Actor
                        <input type="radio" name="movie" onChange={() => showfilter()} /> By Shows
                    </div>
                </div>
            </div>
            {actor ? <Actors /> : ""}
            {show ? <Shows /> : ""}
        </div>
    )
}

export default Search
