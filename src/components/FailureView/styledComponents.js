import styled from 'styled-components'

export const FailureContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`
export const FailureImage = styled.img`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`
export const FailureHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#212121')};
`
export const FailureText = styled.p`
  font-size: 18px;
  font-weight: 500;
  color: #94a3b8;
  text-align: center;
  font-family: 'Roboto';
`
export const RetryButton = styled.button`
  color: white;
  border-width: 0px;
  border-radius: 2px;
  background-color: #4f46e5;
  height: 40px;
  width: 100px;
  font-family: 'Roboto';
  font-size: 15px;
  outline: none;
  cursor: pointer;
`
