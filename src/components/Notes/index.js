import {useState} from 'react'
import {v4 as uuidv4} from 'uuid'
import NoteItem from '../NoteItem'
import {
  AppContainer,
  AppHeading,
  NotesForm,
  NotesTitleInput,
  NotesTextInput,
  AddButton,
  NotesListContainer,
  EmptyViewContainer,
  EmptyViewDescription,
  EmptyViewHeading,
  EmptyViewImage,
} from './styledComponents'

const Notes = () => {
  const [notesList, updateNotesList] = useState([])
  const [noteTitle, setTitle] = useState('')
  const [noteText, setText] = useState('')
  const onAddNote = event => {
    event.preventDefault()
    const newNote = {id: uuidv4(), noteTitle, noteText}
    updateNotesList(prevList => [...prevList, newNote])
    setTitle('')
    setText('')
  }

  const onChangeTitle = event => setTitle(event.target.value)
  const onChangeText = event => setText(event.target.value)

  const emptyViewContainer = () => (
    <EmptyViewContainer>
      <EmptyViewImage
        src="https://assets.ccbp.in/frontend/hooks/empty-notes-img.png"
        alt="notes empty"
      />
      <EmptyViewHeading>No Notes Yet</EmptyViewHeading>
      <EmptyViewDescription>
        Notes you add will appear here
      </EmptyViewDescription>
    </EmptyViewContainer>
  )

  const notesListContainer = () => (
    <NotesListContainer>
      {notesList.map(eachNote => (
        <NoteItem key={eachNote.id} noteDetails={eachNote} />
      ))}
    </NotesListContainer>
  )

  return (
    <AppContainer>
      <AppHeading>Notes</AppHeading>
      <NotesForm onSubmit={onAddNote}>
        <NotesTitleInput
          value={noteTitle}
          placeholder="Title"
          onChange={onChangeTitle}
        />
        <NotesTextInput
          placeholder="Take a Note..."
          value={noteText}
          onChange={onChangeText}
        />
        <AddButton type="submit">Add</AddButton>
      </NotesForm>
      {notesList.length === 0 ? emptyViewContainer() : notesListContainer()}
    </AppContainer>
  )
}

export default Notes
