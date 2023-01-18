import {NoteListItem, NoteHeading, NoteDescription} from './styledComponents'

const NoteItem = props => {
  const {noteDetails} = props
  console.log(noteDetails)
  const {noteText, noteTitle} = noteDetails
  return (
    <NoteListItem>
      <NoteHeading>{noteTitle}</NoteHeading>
      <NoteDescription>{noteText}</NoteDescription>
    </NoteListItem>
  )
}

export default NoteItem
