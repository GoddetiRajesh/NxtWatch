import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 100%;
  margin-bottom: 60px;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 575px) {
    margin-bottom: 15px;
    flex-direction: column;
  }
`
export const VideoLink = styled.div`
  text-decoration: none;
  color: transparent;
`
export const VideoImage = styled.img`
  width: 45%;
  height: 270px;
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`
export const DisplayContainer = styled.div`
  display: ${props => (props.mobile ? 'flex' : 'none')};
  padding: 20px;
  @media screen and (min-width: 576px) {
    display: ${props => (props.mobile ? 'none' : 'flex')};
    flex-direction: column;
    width: 45%;
    padding-top: 0px;
  }
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 30px;
`
export const ChannelContainer = styled.div`
  margin-left: 15px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  line-height: 1.5;
  margin: 0;
  font-weight: 500;
  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`
export const TextContainer = styled.div`
  display: flex;
  align-items: center;
`
export const DotIcon = styled.img`
  height: 18px;
  width: 18px;
  color: #475569;
  margin-left: 3px;
  margin-right: 3px;
`
export const Text = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  font-weight: 500;
  color: #475569;
  line-height: 1.5;
  margin-top: 5px;
  margin-bottom: 5px;
  @media screen and (min-width: 768px) {
    font-size: 15px;
  }
`
