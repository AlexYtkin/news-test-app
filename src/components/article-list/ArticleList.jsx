import React from 'react'
import {
  Row,
  Col,
  Input,
  Button
} from 'reactstrap'
import {connect} from 'react-redux'
import {
  findArticle,
  addArticle,
  removeArticle,
  approveArticle
} from '../../actions/article/article'
import Article from '../article/Article'
import AddArticle from '../article/AddArticle'

class ArticleList extends React.Component {
  state={
    show: false,
    title: '',
    text: ''
  }

  findArticle = (e) => this.props.findArticle(e.target.value)

  showAddForm = () => this.setState({ show: !this.state.show})

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleAddArticle = () => {
    const {title, text} = this.state
    const data = {
      title,
      text,
      id: Date.now().toString(),
      createdDate: new Date().toLocaleDateString(),
      approved: false
    }
    this.props.addArticle(data)
  }

  handleRemoveArticle = id => this.props.removeArticle(id)
  handleApproveArticle = id => this.props.approveArticle(id)

  render() {
    const {articles, isUser, isAdmin} = this.props
    const {show, title, text} = this.state
    return(
      <div className="news__list">
        <div className="search">
          <Row>
            <Col md={9}>
              <Input
                name="search"
                type="text"
                onChange={this.findArticle}
              />
            </Col>
            <Col md={3}>
              <Button
                color="primary"
                onClick={this.findArticle}
              >
                Найти
              </Button>
            </Col>
          </Row>
          { isUser &&
            <>
              <div className="search__add-news">
                <Row>
                  <Col>
                    <Button
                      color="primary"
                      onClick={this.showAddForm}
                    >{show ? 'Скрыть' : 'Добавить новость'}</Button>
                  </Col>
                </Row>
              </div>
              {
                show &&
                <AddArticle
                  title={title}
                  text={text}
                  addArticle={this.handleAddArticle}
                  handleInputChange={this.handleInputChange}
                />
              }
            </>
          }
        </div>
        {
          articles.map(article => {
            const news = (
              <Article
                key={article.id}
                title={article.title}
                text={article.text}
                createdDate={article.createdDate}
                isAdmin={isAdmin}
                removeArticle={() => this.handleRemoveArticle(article.id)}
                approveArticle={() => this.handleApproveArticle(article.id)}
                approved={article.approved}
              />
            )
            if (article.approved && !isUser && !isAdmin) {
              return news
            } else if (isAdmin || isUser) {
              return news
            }
          })
        }
      </div>
  )
  }
}
const mapStateToProps = state => {
  const user = state.auth.user
  const filter = state.filterArticle
  return {
    articles: state.article.articles
      .filter(a => a.title.includes(filter) || a.text.includes(filter) || a.createdDate.includes(filter)),
    isUser: user ? (['employee'].indexOf(user.role) !== -1) : false,
    isAdmin: user ? (['admin'].indexOf(user.role) !== -1) : false,
  }
}
const mapDispatchToProps = {
  findArticle: findArticle,
  addArticle: addArticle,
  removeArticle: removeArticle,
  approveArticle: approveArticle
}
export default connect(mapStateToProps, mapDispatchToProps)(ArticleList)