import React, { Component } from "react"; 
import { Input, Icon } from 'semantic-ui-react';
import '../presentational/Input.less';
class FormContainer extends Component {
  constructor() {
    super();
    this.state = {
      emailNewsletter: ""
    };
    this.handleMailChange = this.handleMailChange.bind(this);
  }

  handleMailChange(e) {
    this.setState({ emailNewsletter: e.target.value })
  }

  render() {
    const { emailNewsletter } = this.state;
    return (
      <form id="article-form">
        <Input  
          fluid
          onChange={this.handleMailChange}
          type="text"
          id="email_newsletter"
          value={emailNewsletter}
          iconPosition="left"
          placeholder="¡Se acabó! Déjanos tu email y te contamos el secreto..."
          icon={<Icon name='envelope outline' className="positive" />}
        />   
      </form>
    );
  }
}

export default FormContainer;

