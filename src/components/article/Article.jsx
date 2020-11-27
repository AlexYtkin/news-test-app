import React from 'react'
import {Row, Col, Button} from 'reactstrap'

const Article =
  ({title, text, createdDate, removeArticle, isAdmin, approveArticle, approved}) => {
  return(
    <div className="article">
      <Row>
        <Col className="title">
          <h2>{title}</h2>
        </Col>
        <Row>
          <Col>
            <p>{text}</p>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>{createdDate}</p>
          </Col>
        </Row>
      </Row>
      { isAdmin &&
        <Row>
          <Col>
            <Button
              className="article__button"
              color="primary"
              onClick={approveArticle}
              disabled={approved}
            >
              {approved ? 'Одобрено' : 'Одобрить'}
            </Button>
            <Button
              className="article__button"
              color="danger"
              onClick={removeArticle}
            >
              Удалить
            </Button>
          </Col>
        </Row>
      }
    </div>
  )
}
export default Article