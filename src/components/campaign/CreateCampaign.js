import React, { Component } from 'react';
import { connect } from 'react-redux';
import { createCampaign } from '../../services/campaign/action';
import { Form, Button, Container } from 'react-bootstrap';

class CreateCampaign extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      file: '',
    };
  }

  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    });
  };

  handleChangeFile = (e) => {
    e.stopPropagation();
    e.preventDefault();
    this.setState({
      file: e.target.files[0],
    });
  };
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.createCampaign(this.state.title, this.state.file);
  };
  render() {
    return (
      <Container fluid>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group className="input-field first">
            <Form.Label htmlFor="title">Nhập tiêu đề</Form.Label>
            <Form.Control
              type="text"
              id="title"
              autoFocus
              onChange={this.handleChange}
              required
              autoComplete="off"
            />
          </Form.Group>

          <Form.Group className="input-field last">
            <Form.Label htmlFor="file">Tải file</Form.Label>
            <Form.Control type="file" id="file" onChange={this.handleChangeFile} />
          </Form.Group>

          <Form.Group>
            <Button variant="primary" type="submit">
              Bắt đầu
            </Button>
            <span className="p-2"></span>
            {/* <Button onClick={() => this.props.refContainer.current.hide()}>Đóng</Button> */}
          </Form.Group>
        </Form>
      </Container>
    );
  }
}

const mapActionToProps = {
  createCampaign,
};

export default connect(null, mapActionToProps)(CreateCampaign);
