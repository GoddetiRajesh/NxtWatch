import styled from 'styled-components'

export const VideoLink = styled.div`
  text-decoration: none;
  color: transparent;
`

export const GamingVideoContainer = styled.li`
  width: 45%;
  margin-right: 15px;
  margin-bottom: 30px;
  @media screen and (min-width: 768px) {
    width: 30%;
  }
`
export const VideoImage = styled.img`
  width: 100%;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 8px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
export const Rating = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: #475569;
  margin: 0;
  @media screen and (min-width: 768px) {
    font-size: 17px;
  }
`
