import styled from 'styled-components'

export const LoginPage = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const LoginForm = styled.form`
  width: 90%;
  height: 500px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 30px;
  background-color: ${props => (props.isDark ? 'black' : 'white')};
  border-radius: 15px;
  box-shadow: ${props => (props.isDark ? 'null' : '0px 4px 16px 0px #bfbfbf')};
  @media screen and (min-width: 768px) {
    width: 50%;
  }
`
export const WebLogo = styled.img`
  height: 50px;
  width: 150px;
  align-self: center;
  margin-bottom: 30px;
`
export const Label = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? 'white' : '#616e7c')};
  font-weight: 700;
  margin-bottom: 8px;
  margin-top: 20px;
`
export const Input = styled.input`
  border: ${props =>
    props.isDark ? '1px solid #94a3b8' : '1px solid #616e7c'};
  border-radius: 2px;
  padding: 10px 15px;
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 18px;
  ouline: none;
`
export const ShowPasswordConatiner = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-bottom: 40px;
`
export const CheckBox = styled.input`
  height: 20px;
  width: 20px;
  margin-right: 10px;
  margin-left: 0px;
`
export const Text = styled.label`
  font-family: 'Roboto';
  font-size: 20px;
  color: ${props => (props.isDark ? 'white' : '#181818')};
`
export const LoginButton = styled.button`
  background-color: #3b82f6;
  width: 100%;
  height: 40px;
  border-width: 0px;
  border-radius: 10px;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
`
export const Error = styled.p`
  color: #ff0b37;
  font-family: 'Roboto';
  font-size: 14px;
  margin-top: 5px;
`
