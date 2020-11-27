import React from 'react'
import {Row, Col, Button} from 'reactstrap'

const Article =
  ({title, text, createdDate, removeArticle, isAdmin, approveArticle, approved}) => {
  return(
    <div className="article">
      <div>
        <h2>{title}</h2>
      </div>
      <div>
        <p>{text}</p>
      </div>
      <div>
        <p>{createdDate}</p>
      </div>
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