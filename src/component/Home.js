import React from 'react'
import Navbar from './Navbar'
import Body from './Body'
import Body1 from './Body1'
import Base from './Base'
import F from './F'

function Home() {
  return (
    <>
    <div className='container-fuild home'>
      <div className='container'>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8'>
            <h2 className='mt-5'>Best Website Builders in the US</h2>
            <hr/>
            <p><img src='https://cdn-icons-png.flaticon.com/128/1442/1442912.png'/> Last Updated-Feburary 22,2020  <img src='https://cdn-icons-png.flaticon.com/128/9446/9446643.png'/> Advertising Disclosure <b className='b'>Top Relevent</b> <img src='https://cdn-icons-png.flaticon.com/128/2951/2951226.png'/></p>
            <hr/>
            <Navbar/>
            <Body/>
            <Body1/>
            <Base/>
            <F/>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Home