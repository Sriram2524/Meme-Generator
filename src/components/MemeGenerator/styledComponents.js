// Style your components here
import styled from 'styled-components'

export const Divcontainer = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  flex-direction: row;
  margin: 30px;
  padding: 20px;
`
export const Divinputcontainer = styled.div`
  display: flex;
  width: 50%;
  flex-direction: column;
  margin: 30px;
  padding: 20px;
`
export const Heading = styled.h1`
  color: #1e293b;
  font-weight: bold;
  font-size: 40px;
  font-family: roboto;
`
export const Label = styled.label`
  color: #7e858e;
  margin-bottom: 10px;
  font-family: roboto;
`
export const Input = styled.input`
  border-radius: 4px;
  border: 1px solid #7e858e;
  width: 100%;
  padding: 10px;
  overflow: hidden;
  margin-bottom: 10px;
`
export const Select = styled.select`
  border-radius: 4px;
  border: 1px solid #7e858e;
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
`
export const Button = styled.button`
  border-radius: 5px;
  border: none;
  background-color: #0b69ff;
  color: white;
  padding: 10px;
  padding-left: 30px;
  padding-right: 30px;
  font-family: roboto;
  font-weight: bold;
  margin-top: 10px;
`
export const NatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url(${props => props.showImg});
  background-size: cover;
  width: 90%;
  height: 80vh;
`
export const ToptextContainer = styled.p`
  color: white;
  font-size: ${props => props.activeId}px;
  font-family: roboto;
`
export const BottomtextContainer = styled.p`
  color: white;
  font-size: ${props => props.activeId}px;
  font-family: roboto;
`
