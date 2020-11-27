import React from 'react'
import {
  Row,
  Col,
  Input,
  Button
} from 'reactstrap'

const AddArticle = ({title, text, addArticle, handleInputChange}) => {
  return(
    <div className="add-form">
      <Row>
        <Col md="6">
          <Input
            type="text"
            name="title"
            value={title}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col md="6">
          <Input
            type="textarea"
            name="text"
            value={text}
            onChange={handleInputChange}
          />
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            color="success"
            onClick={addArticle}
          >
            Добавить
          </Button>
        </Col>
      </Row>
    </div>
  )
}
export default AddArticle