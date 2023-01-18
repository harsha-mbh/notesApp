import styled from 'styled-components'

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`
export const AppHeading = styled.h1`
  color: #4c63b6;
  font-family: 'Bree Serif';
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`
export const NotesForm = styled.form`
  display: flex;
  flex-direction: column;
  padding: 15px;
  width: 90%;
  max-width: 900px;
  box-shadow: 2px 2px 2px 2px #cbd5e1;
  align-self: center;
`
export const NotesTitleInput = styled.input`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 22px;
  border: none;
  margin-bottom: 20px;
  outline: none;
`

export const NotesTextInput = styled.textarea`
  color: #1e293b;
  font-family: 'Roboto';
  font-size: 22px;
  border: none;
  margin-bottom: 30px;
  outline: none;
`
export const AddButton = styled.button`
  background-color: #4c63b6;
  color: #ffffff;
  font-size: 12px;
  padding: 10px;
  border: none;
  align-self: flex-end;
  border-radius: 10px;
`
export const NotesListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-top: 30px;
  padding: 12px;
  align-self: center;
  width: 90%;
  max-width: 900px;
`
export const EmptyViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  padding: 30px;
`
export const EmptyViewImage = styled.img`
  width: 100px;
  height: 100px;
`
export const EmptyViewHeading = styled.h1`
  font-family: 'Roboto';
  font-size: 26px;
  color: #334155;
  font-weight: bold;
`
export const EmptyViewDescription = styled.p`
  font-family: 'Roboto';
  font-size: 16px;
  color: #334155;
`
