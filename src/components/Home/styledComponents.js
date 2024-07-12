import styled from 'styled-components'

export const HomePage = styled.div`
  display: flex;
`
export const HomeContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  overflow-y: auto;
  height: 100vh;
  background-color: ${props => (props.isDark ? '#181818' : '#f9f9f9')};
`
export const SearchContainer = styled.div`
  border: 1px solid #7e858e;
  width: 45%;
  display: flex;
  background-color: transparent;
  margin: 20px;
`
export const Search = styled.input`
  border: none;
  outline: none;
  background-color: ${props => (props.isDark ? '#181818' : 'white')};
  font-family: 'Roboto';
  font-size: 15px;
  color: #7e858e;
  padding: 8px 15px;
  width: 100%;
`
export const SearchButton = styled.button`
  border: none;
  border-left: 1px solid #7e858e;
  height: 100%;
  width: 80px;
  background-color: ${props => (props.isDark ? '#313131' : '#ebebeb')};
  outline: none;
  cursor: pointer;
`
export const SearchIcon = styled.img`
  height: 15px;
  width: 15px;
  color: #7e858e;
`
export const HomeListContainer = styled.ul`
  list-style-type: none;
  padding: 0;
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding-left: 20px;
  @media screen and (max-width: 575px) {
    padding-left: 0px;
  }
`
export const NoVideosContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 70vh;
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
`
export const NoVideosText = styled.p`
  font-family: 'Roboto';
  font-size: 18px;
  font-weight: 500;
  color: #94a3b8;
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
