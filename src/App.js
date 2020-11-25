import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Main from './components/main/Main'
import NewsList from './components/news-list/NewsList'

class App extends React.Component {
  state={show: false}

  toggle = (e) => {
    e.preventDefault()
    this.setState({show: !this.state.show})
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    const {user} = this.props
    if (user && prevState.show) {
      this.setState({show: false})
    }
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <Login
            show={this.state.show}
            toggle={this.toggle}
          />
          <Header
            toggle={this.toggle}
          />
          <Switch>
            <Route exact path="/" component={Main} />
            <Route path="/news" component={NewsList} />
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    user: state.auth.user,
    error: state.auth.error
  }
}
export default connect(mapStateToProps)(App)
