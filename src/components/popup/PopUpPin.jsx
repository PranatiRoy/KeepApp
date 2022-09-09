import { useContext,useState } from "react";
import { TextField,Container} from "@mui/material";
import { DataContext } from "../../context/AddText";


const newpinnote = {
    id:'',
    title: '',
    tagline: '',
    text: ''
}

const PopUpPin = ({ note,trigger,setTrigger}) => {
    const { pinNotes, setPinNotes } = useContext(DataContext);

    const [AddNewPin, setAddNewPin] = useState({ ...note, id:note.id});

    const onEditPinText = (e) => {
        // console.group(e.target.name,e.target.value)
        let editedPinNote = { ...AddNewPin, [e.target.name]: e.target.value }
        setAddNewPin(editedPinNote);
        
    }

    const handledPinClick = () => {
        setAddNewPin({ ...newpinnote, id:note.id })
        // const editedNote =notes.filter(data => data.id === note.id);
        if (AddNewPin.text || AddNewPin.title || AddNewPin.text) {
            const indexP =pinNotes.indexOf(note)
            console.log('note',note)
            // console.log('notes',notes)
            console.log('index',indexP)
            console.log('PopUpPinNotes',pinNotes)
            setPinNotes(prevArr =>{
                 let newArr=[...prevArr]
                 newArr.splice(indexP,1)
                 newArr.splice(indexP,0,AddNewPin)
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
                onChange={(e) => onEditPinText(e)}
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
                onChange={(e) => onEditPinText(e)}
                name="tagline"
            >
            </TextField>
            <TextField
                id="outlined-basic"
                multiline
                InputProps={{ disableUnderline: true }}
                variant="standard"
                defaultValue ={note.text}
                placeholder="Note Section"
                onChange={(e) => onEditPinText(e)}
                name="text"
            >
            </TextField>
            <button className="close-btn" onClick={handledPinClick}>
                        Close
                    </button> 
            </Container>
        </>
    )
}

export default PopUpPin;