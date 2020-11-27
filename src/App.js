import React from 'react'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './components/header/Header'
import Login from './components/login/Login'
import Main from './components/main/Main'
import ArticleList from './components/article-list/ArticleList'

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
      <div className="news">
        <BrowserRouter>
          <Login
            show={this.state.show}
            toggle={this.toggle}
          />
          <Header
            toggle={this.toggle}
          />
          <div className="container">
            <Switch>
              <Route exact path="/" component={Main} />
              <Route path="/news" component={ArticleList} />
            </Switch>
          </div>
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
