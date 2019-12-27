import * as React from 'react'
import styled from '@emotion/styled'
import * as emailjs from 'emailjs-com'
import { colors } from '../../styles/variables'

export default class Form extends React.Component {
  state = {
    name: '',
    email: '',
    content: '',
    nameEmpty: false,
    emailEmpty: false,
    contentEmpty: false,
    submitted: false
  }

  render() {
    const { name, email, content, nameEmpty, emailEmpty, contentEmpty, submitted } = this.state
    return (
      <StyledForm onSubmit={this.handleSubmit}>
        <FormRow>
          <label>Name</label>
        </FormRow>
        <FormRow>
          <input type="text" name="name" size={30} value={name} onChange={this.handleInputChange} />
        </FormRow>
        <ErrorLabel flag={nameEmpty}>Name must not be empty</ErrorLabel>
        <FormRow>
          <label>Email</label>
        </FormRow>
        <FormRow>
          <input type="text" name="email" size={30} value={email} onChange={this.handleInputChange} />
        </FormRow>
        <ErrorLabel flag={emailEmpty}>Email must not be empty</ErrorLabel>
        <FormRow>
          <label>Content</label>
        </FormRow>
        <FormRow>
          <textarea name="content" value={content} onChange={this.handleInputChange} rows={10} />
        </FormRow>
        <ErrorLabel flag={contentEmpty}>Content must not be empty</ErrorLabel>
        <FlexEnd>
          <SubmissionLabel flag={submitted}>Submitted!</SubmissionLabel>
          <SubmitButton type="submit">Submit</SubmitButton>
        </FlexEnd>
      </StyledForm>
    )
  }

  handleInputChange = (event: any) => {
    const value = event.target.value
    const name = event.target.name
    this.setState({
      [name]: value
    })
  }

  handleSubmit = (event: any) => {
    event.preventDefault()
    const { name, email, content } = this.state

    if (this.validateForm()) return

    console.log('will send email')

    const templateParams = {
      from_name: email,
      subject: `Message from ${name}`,
      message_html: content
    }

    emailjs.send('gmail', 'template_3eqLrrD2', templateParams, 'user_0vHnJRNAdwfKoPbosnVpL')

    this.resetForm()
  }

  resetForm() {
    this.setState({
      name: '',
      email: '',
      content: ''
    })
  }

  validateForm() {
    const { name, email, content } = this.state

    this.setState({
      nameEmpty: name === '',
      emailEmpty: email === '',
      contentEmpty: content === ''
    })

    const { nameEmpty, emailEmpty, contentEmpty } = this.state
    return nameEmpty || emailEmpty || contentEmpty
  }
}

const StyledForm = styled.form`
  display: block;
  margin: 0 auto 100px auto;
`

const FormRow = styled.div`
  padding: 10px;
  align-items: center;

  input,
  textarea {
    border: 1px solid black;
    background-color: lightgrey;
    width: 100%;
  }
`

const SubmitButton = styled.button`
  background-color: ${colors.blue};
  border: none;
  color: white;
  padding: 15px;
`

const StateLabel = styled.label`
  display: ${props => (props.flag ? 'inline-block' : 'none')};
`

const ErrorLabel = styled(StateLabel)`
  color: red;
`
const SubmissionLabel = styled(StateLabel)`
  color: ${colors.white};
  margin-right: 10px;
`

const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding: 30px 10px;
`
