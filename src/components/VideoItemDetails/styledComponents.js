import styled from 'styled-components'

export const VideoDetailsPageContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9')};
`

export const VideoDetailsPage = styled.div`
  display: flex;
`

export const VideoDetailsContainer = styled.div`
  width: 100%;
  min-height: 100vh;
`

export const VideoContainer = styled.div`
  width: 97%;
  height: 450px;
  margin: 15px;
  @media screen and (max-width: 768px) {
    width: 100%;
    height: 300px;
    margin-left: 0px;
    margin-right: 0px;
  }
`
export const DetailsContainer = styled.div`
  padding: 15px;
`
export const DetailsHeading = styled.p`
  font-family: 'Roboto';
  font-size: ${props => (props.channelName ? '17px' : '20px')};
  color: ${props => (props.isDark ? 'white' : '#212121')};
  margin-top: 0px;
  marign-bottom: 5px;
  font-weight: 500;
`
export const CardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #475569;
  padding-bottom: 20px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
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
  color: #475569;
  margin-top: 8px;
  marign-bottom: 5px;
`
export const Button = styled.button`
  border: none;
  outline: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  align-items: center;
  margin-right: 20px;
  padding: 0;
`
export const IconText = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  font-weight: 500;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`
export const Icon = styled.img`
  height: 20px;
  width: 20px;
  margin-right: 5px;
  color: ${props => (props.active ? '#2563eb' : '#64748b')};
`
export const ProfileContainer = styled.div`
  display: flex;
  margin-top: 30px;
  margin-bottom: 50px;
`
export const ProfileImage = styled.img`
  height: 50px;
  width: 50px;
`
export const ChannelContainer = styled.div`
  margin-left: 15px;
`
export const VideoDescription = styled.p`
  font-family: 'Roboto';
  font-size: 15px;
  margin-top: 30px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
`
