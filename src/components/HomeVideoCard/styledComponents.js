import styled from 'styled-components'

export const VideoItemContainer = styled.li`
  width: 30%;
  margin: 0px 15px 20px 0px;
  @media screen and (max-width: 1000px) {
    width: 45%;
  }
  @media screen and (max-width: 575px) {
    width: 100%;
  }
`
export const VideoLink = styled.div`
  text-decoration: none;
  color: transparent;
`

export const VideoImage = styled.img`
  width: 100%;
`
export const CardConatiner = styled.div`
  display: flex;
  padding: 10px;
`
export const ProfileImage = styled.img`
  height: 40px;
  width: 30px;
`
export const ChannelContainer = styled.div`
  margin-left: 10px;
`
export const Title = styled.p`
  font-family: 'Roboto';
  font-size: 13px;
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  line-height: 1.5;
  margin: 0;
  font-weight: 500;
`
export const DisplayContainer = styled.div`
  display: ${props => (props.mobile ? 'flex' : 'none')};
  align-items: center;
  @media screen and (min-width: 576px) {
    display: ${props => (props.mobile ? 'none' : 'flex')};
    flex-direction: column;
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
  font-weight: 500;
  color: #475569;
  line-height: 1.5;
  margin-top: 5px;
  margin-bottom: 5px;
`
