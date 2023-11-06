import React from 'react'

export default function Banner(props) {
  return (
    <>
         <section className="banner_section">
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-sm-12">
                <div className="banner_content">
                  <h1 className="my_class">{props.title}</h1>
                  <p className="my_class">{props.description}</p>
                  {/* <nav aria-label="breadcrumb" className="breadcrumb">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item"><a href="#">Home</a></li>
                      <li className="breadcrumb-item">Overseas Mediclaim</li>
                      <li className="breadcrumb-item active" aria-current="page">Business &amp; Holiday</li>
                    </ol>
                  </nav> */}
                </div>
              </div>
             
            </div>
          </div>
        </div>
      </section>

    
    </>
  )
}
