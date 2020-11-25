import React from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchLogoutRequest} from '../../actions/logout'

class Header extends React.Component {
  render() {
    const {
      toggle,
      user,
      fetchLogout
    } = this.props
    return(
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark news__header">
        <a href="" className="navbar-brand">News</a>
        <div className="collapse navbar-collapse">
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Главная</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/news" className="nav-link">Новости</NavLink>
              </li>
              <li className="nav-item">
                {
                  user
                    ? <a className="nav-link" onClick={() => fetchLogout()}>Выход</a>
                    : <a className="nav-link" onClick={toggle}>Вход</a>
                }
              </li>
            </ul>
          </div>
        </div>
      </nav>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    error: state.auth.error
  }
}
const mapDispatchToProps = {
  fetchLogout: fetchLogoutRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Header)