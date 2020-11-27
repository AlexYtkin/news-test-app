import React, {Component} from 'react'
import {connect} from 'react-redux'
import {fetchLoginRequest} from '../../actions/auth/login'
import {
  Button,
  Col,
  FormGroup,
  Modal,
  ModalBody,
  Row,
  FormFeedback,
  Label,
  Input,
  Alert
} from 'reactstrap'

class Login extends Component {
  state={
    name: '',
    password: ''
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let { name, password } = this.state;
    name = name.trim();
    password = password.trim();
    const user = { name, password };
    this.props.fetchLogin({ user });
  }

  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      e.stopPropagation();
      this.handleSubmit(e);
    }
  }

  render(){
    const {
      show,
      className,
      toggle,
      error
    } = this.props;
    console.log("error", error)
    const {
      name,
      password
    } = this.state;
    return(
      <>
        <Modal
          isOpen={show}
          toggle={toggle}
          className={'modal-md ' + className}
        >
          <ModalBody>
            <Row>
              <Col>
                <FormGroup>
                  <h2>Вход</h2>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Имя</Label>
                  <Input
                    type="input"
                    name="name"
                    id="name"
                    placeholder="Введите имя"
                    value={name}
                    onChange={this.handleInputChange}
                  />
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                <FormGroup>
                  <Label>Пароль</Label>
                  <Input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Введите пароль"
                    value={password}
                    onChange={this.handleInputChange}
                  />
                  <FormFeedback invalid>{error}</FormFeedback>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col md={9}>
                <FormGroup>
                  <Button
                    active
                    color="primary"
                    onClick={this.handleSubmit}
                    onKeyDown={this.handleKeyDown}
                  >Войти</Button>
                </FormGroup>
              </Col>
              <Col md={3}>
                <FormGroup>
                  <Button
                    active
                    block
                    color="primary"
                    aria-pressed="true"
                    onClick={toggle}
                  >Отмена</Button>
                </FormGroup>
              </Col>
            </Row>
            <Row>
              <Col>
                { error &&
                <Alert color="danger">
                  {error}
                </Alert>
                }
              </Col>
            </Row>
          </ModalBody>
        </Modal>
      </>
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
  fetchLogin: fetchLoginRequest
}
export default connect(mapStateToProps, mapDispatchToProps)(Login)