import React from 'react'

function Footer() {
  return (
    <>
    <section className='footer'>
    <div className='container-fluid bg-dark'>
        <div className='container'>
            <div className='row text-white'>
                <div className='col-md-4'>
                    <h6>CATEGORIES</h6>
                    <p>Web builder</p>
                    <p>Hosting</p>
                    <p>Data Center</p>
                    <p>Robotic Automation</p>
                </div>
                <div className='col-md-4'>
                <h6>CONTACT</h6>
                    <p>contact</p>
                    <p>privacy policy</p>
                    <p>Terms of Service</p>
                    <p>categories</p>
                    <p>About</p>
                </div>
                <div className='col-md-4'>
               <div className="dropdown">
  <p className="text-white" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false" style={{marginTop:"50px"}}>
    United States
  </p>
  <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
    <li><a className="dropdown-item" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
  </ul>
</div>

                </div>
            </div>
        </div>
    </div>
    </section>
    </>
  )
}

export default Footer