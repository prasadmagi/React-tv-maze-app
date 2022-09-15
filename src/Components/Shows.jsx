import React, { useState, useEffect } from 'react'
import axios from 'axios';
const Shows = () => {
  const [input, setinput] = useState("");
  const [showdata, setshowdata] = useState([]);

  let URL = "";

  if (input.length > 0) {
    URL = `https://api.tvmaze.com/search/shows?q=${input}`

  } else {
    URL = `https://api.tvmaze.com/search/shows?q=friends`;
  }

  useEffect(() => {
    axios.get(URL)
      .then(res => {
        console.log(res);
        setshowdata(res.data);
      })
      .catch(err => {
        console.log(err);
      })


  }, [input, URL])

  return (
    <div>
      <>
        <section className="mt-5">
          <div className="container">
            <div className="row">
              <div className="col-md-50">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setinput(e.target.value)}
                  className="form-control shadow-lg p-2 mb-3 bg-white rounded"
                  placeholder="Search by Shows name...."
                />
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="container mt-5">
            <div className="row">
              {showdata.map((element) => {
                return (
                  <div className="col-sm-3 mb-7 ">
                    <div className="card shadow p-1 mb-5 bg-white rounded ">
                      {element.show.image ? (
                        <img
                          src={element.show.image.medium}
                          class="poster"
                          alt={
                            element.show.name != null
                              ? element.show.name
                              : "Not found"
                          }
                        />
                      ) : (
                        <div>
                          <img
                            class="img-fluid poster"
                            src="http://www.movienewz.com/img/films/poster-holder.jpg"
                            alt="images"
                            
                          />
                        </div>
                      )}
                      <div className="card-body">
                        <p
                          className="card-text overflow-auto text-size"
                          style={{ height: "200px" }}
                          dangerouslySetInnerHTML={{ __html: `${element.show.summary}` }}
                        >
                        
                        </p>
                
                      </div>

                      <h5 className="text-center">
                        <p class="text-success">{element.show.name}</p>
                        <p class="text-primary" >{element.show.rating.average}</p>

                      </h5>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      </>
    </div>
  )
}

export default Shows
