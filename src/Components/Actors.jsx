import React, { useState, useEffect } from 'react'
import axios from 'axios'
const Actors = () => {
    const [input, setinput] = useState("");
    const [actorsdata, setactorsdata] = useState([]);

    let URL = "";

    if (input.length > 0) {
        URL = `https://api.tvmaze.com/search/people?q=${input}`;
    } else {
        URL = `https://api.tvmaze.com/search/people?q=akon`;
    }

    useEffect(() => {
        axios.get(URL)
            .then(res => {
                console.log(res);
                setactorsdata(res.data);
            })
            .catch(err => {
                console.log(err);
            })


    }, [input, URL])

    return (
        <>
            <section className="mt-4">
                <div className="container">
                    <div className="row">
                        <div className="col-md-50">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setinput(e.target.value)}
                                className="form-control shadow-lg p-2 mb-3 bg-white rounded"
                                placeholder="Search Actors name  Here...."
                            />
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container mt-5">
                    <div className="row">
                        {actorsdata.map((element) => {
                            return (
                                <div className="col-md-2 mb-5">
                                    <div className="card shadow p-1 mb-5 bg-white rounded">
                                        {element.person.image ? (
                                            <img
                                                src={element.person.image.medium}
                                                class="poster"
                                                alt={
                                                    element.person.name != null
                                                        ? element.person.name
                                                        : "Not found"
                                                }
                                            />
                                        ) : (
                                            <div>
                                                <img
                                                    class="img-fluid poster"
                                                    src="http://www.movienewz.com/img/films/poster-holder.jpg"
                                                    alt="images"
                                                    style={{}}
                                                />
                                            </div>
                                        )}
                                        <div className="card-body">
                                            <p
                                                className="card-text overflow-hidden"
                                                style={{ height: "10px" }}
                                            >

                                            </p>
                                        </div>

                                        <h5 className="text-center">
                                            <p class="text-success">{element.person.name}</p>
                                            <p class="text-primary" >{element.person.gender}</p>

                                        </h5>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    )
}

export default Actors
