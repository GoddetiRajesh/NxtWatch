import styled from 'styled-components'

export const NotFoundPage = styled.div`
  display: flex;
`

export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 100%;
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`
export const NoVideosImage = styled.img`
  width: 30%;
  @media screen and (max-width: 768px) {
    width: 50%;
  }
`
export const NoVideosHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 25px;
  font-weight: 500;
  color: ${props => (props.isDark ? 'white' : '#212121')};
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const NoVideosText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: #94a3b8;
  text-align: center;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`
