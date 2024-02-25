import React from 'react'

function Header() {
  return (
    <>
    <ul className="nav justify-content-center bg-dark">
  <li className="nav-item">
    <div className="form-group has-search">
      <span className="fa fa-search form-control-feedback" />
      <input type="text" className="form-control" placeholder="Search" />
    </div>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Categories</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Website Builders</a>
  </li>
  <li className="nav-item">
    <a className="nav-link" href="#">Today's deals</a>
  </li>
</ul>

    </>
  )
}

export default Header