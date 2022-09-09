import { useContext,useState } from "react";
import { TextField,Container} from "@mui/material";
import { DataContext } from "../../context/AddText";


const newnote = {
    id:'',
    title: '',
    tagline: '',
    text: ''
}

const PopUpContent = ({ note,trigger,setTrigger}) => {
    const { notes, setNotes } = useContext(DataContext);

    const [AddNewNote, setAddNewNote] = useState({ ...note, id:note.id});

    const onEditText = (e) => {
        // console.group(e.target.name,e.target.value)
        let editedNote = { ...AddNewNote, [e.target.name]: e.target.value }
        setAddNewNote(editedNote);
        
    }

    const handledClick = () => {
        setAddNewNote({ ...newnote, id:note.id })
        // const editedNote =notes.filter(data => data.id === note.id);
        if (AddNewNote.text || AddNewNote.title || AddNewNote.text) {
            const index =notes.indexOf(note)
            console.log('ABC')
            console.log('note',note)
            console.log('notes',notes)
            console.log('index',index)
            // connotes.map(data=>data.id!==note.id)
            // setNotes(prevArr=>)    
            setNotes(prevArr =>{
                 let newArr=[...prevArr]
                 newArr.splice(index,1)
                 newArr.splice(index,0,AddNewNote)
                //  console.log('index',index)
                //  console.log('newArr',newArr)
                //  prevArr.splice(index,0)
                 return newArr});   
                  
            setTrigger(false);
        }
    }
      
    return (       
        <>
            <Container
             sx={{
                    width: '550px',
                    maxHeight: '270px',
                    overflow: 'auto',
                    marginLeft:'30px',
                    border:'1px solid #e0e0e0',
                    borderBottom:'1px solid #e0e0e0',
                    borderRadius:'8px',
                    display :'flex',
                    flexDirection:'column',
                    scrollbarWidth: 'thin',
                }}            
            >
           
                 <TextField
                id="outlined-basic"
                multiline
                InputProps={{ disableUnderline: true }}
                variant="standard"
                defaultValue ={note.title}
                style={{borderBottom:'1px solid #e0e0e0',fontWeight:'bold'}}
                placeholder="Title"
                onChange={(e) => onEditText(e)}
                name="title"
            >
            </TextField>
            <TextField
                id="outlined-basic"
                multiline
                InputProps={{ disableUnderline: true }}
                variant="standard"
                defaultValue ={note.tagline}
                style={{borderBottom:'1px solid #e0e0e0'}}
                placeholder="Tagline"
                onChange={(e) => onEditText(e)}
                name="tagline"
            >
            </TextField>
            <TextField
                id="outlined-basic"
                multiline
                InputProps={{ disableUnderline: true }}
                variant="standard"
                defaultValue ={note.text}
                placeholder="Note to be added"
                onChange={(e) => onEditText(e)}
                name="text"
            >
            </TextField>
            <button className="close-btn" onClick={handledClick}>
                        Close
                    </button> 
            </Container>
        </>
    )
}

export default PopUpContent;