import React from 'react'
import {connect} from 'react-redux'

const Main = (props) => {
  console.log(props.user)
  const {user} = props
  return(
    <div className="news__main">
      <p>Привет, {user ? user.name : 'Гость'}</p>
    </div>
  )
}
const mapStateToProps = state => {
  return {
    user: state.auth.user
  }
}
export default connect(mapStateToProps)(Main)