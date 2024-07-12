import styled from 'styled-components'

export const ItemLink = styled.div`
  text-decoration: none;
  color: transparent;
  width: 100%;
`

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${props => props.activeTab && '#ebebeb'};
  background-color: ${props => props.isDark && props.activeTab && '#313131'};
  cursor: pointer;
`
export const Icon = styled.img`
  height: 25px;
  width: 25px;
  margin-right: 20px;
  color: ${props => (props.activeTab ? '#ff0000' : '#7e858e')};
`
export const Text = styled.p`
  width: ${props => (props.itemWidth ? '70%' : '30%')};
  font-family: 'Roboto';
  font-size: 16px;
  font-weight: ${props => props.activeTab && 700};
  color: ${props => (props.isDark ? 'white' : '#212121')};
  @media screen and (max-width: 1000px) {
    width: ${props => (props.itemWidth ? '60%' : '30%')};
  }
`
