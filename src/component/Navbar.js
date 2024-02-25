import React from 'react'

function Navbar() {
  return (
    <>
    <div className='container-fluid'>
        <div className='container'>
            <div className='row'>
                <div className='col-md-2'><p>Tools</p></div>
                <div className='col-md-2'><p>AWS Builder</p></div>
                <div className='col-md-2'><p>Start Build</p></div>
                <div className='col-md-2'><p>Build Supplies</p></div>
                <div className='col-md-2'><p>Tooling</p></div>
                <div className='col-md-2'><p>BlueHosting</p></div>
            </div>
            <div className='row nav'>
                <p>Home <img src='https://cdn-icons-png.flaticon.com/128/4718/4718675.png'/>
                  Hosting to all <img src='https://cdn-icons-png.flaticon.com/128/4718/4718675.png'/>
                  Hosting <img src='https://cdn-icons-png.flaticon.com/128/4718/4718675.png'/>
                  Hosting6 <img src='https://cdn-icons-png.flaticon.com/128/4718/4718675.png'/>
                  Hosting5</p>
            </div>
            <div className='row'>
              <div className='col-md-3'>
              <button className='btn btn-warning text-white'><img src='https://cdn-icons-png.flaticon.com/128/1152/1152912.png'/> Best Choice</button>
            </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Navbar