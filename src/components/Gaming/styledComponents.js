import styled from 'styled-components'

export const TrendingPage = styled.div`
  display: flex;
`

export const TrendingContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const TrendingBanner = styled.div`
  background-color: ${props => (props.isDark ? '#181818' : '#f1f1f1')};
  padding: 10px 20px;
  display: flex;
  align-items: center;
  width: 100%;
  height: 15vh;
  @media screen and (min-width: 768px) {
    height: 20vh;
  }
`
export const IconContainer = styled.div`
  background-color: ${props => (props.isDark ? '#313131' : '#cbd5e1')};
  height: 60px;
  width: 60px;
  border-radius: 30px;
  margin-right: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (min-width: 768px) {
    height: 80px;
    width: 80px;
    border-radius: 40px;
    margin-left: 20px;
  }
`
export const Icon = styled.img`
  color: #ff0000;
  height: 30px;
  width: 30px;
`
export const Heading = styled.h1`
  font-family: 'Roboto';
  color: ${props => (props.isDark ? 'white' : '#1e293b')};
  font-size: 25px;
  @media screen and (min-width: 768px) {
    font-size: 35px;
  }
`
export const TrendingVideosContainer = styled.div`
  background-color: ${props => (props.isDark ? '#0f0f0f' : '#f9f9f9 ')};
  overflow-y: auto;
  height: 100vh;
`
export const TrendingListContainer = styled.ul`
  list-style-type: none;
  padding-top: 25px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  @media screen and (min-width: 768px) {
    padding-top: 40px;
  }
`
