import React from 'react'
import PropTypes from 'prop-types';
import{
  Link 
} from "react-router-dom"
import './create.css';


export default function Header(props) {
  return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/"><b>{props.title}</b></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/about">About</Link>
        </li>
        
        {/* <li className="nav-item">
          <Link className="nav-link disabled" aria-disabled="true">Disabled</Link>
        </li> */}
      </ul>
      <form className="d-flex" role="search">
        <div className='create'><Link className="btn btn-outline-primary" to="/create">+ Create</Link></div>
        {/* <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/> */}
        <div className='login'><Link className="btn btn-outline-primary" to="/login">Login</Link></div>
      </form>
    </div>
  </div>
</nav>
)
}

Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
};
Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
};