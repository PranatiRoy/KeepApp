import { useContext,useState } from "react";
import { TextField,Container} from "@mui/material";
import { DataContext } from "../../context/AddText";


const newarchive = {
    id:'',
    title: '',
    tagline: '',
    text: ''
}

const PopUpArchive = ({ note,trigger,setTrigger}) => {
    const { archive, setArchive } = useContext(DataContext);

    const [AddArchive, setAddArchive] = useState({ ...note, id:note.id});

    const onEditArchive = (e) => {
        // console.group(e.target.name,e.target.value)
        let editedArchive = { ...AddArchive, [e.target.name]: e.target.value }
        setAddArchive(editedArchive);
        
    }

    const handledClickArchive = () => {
        setAddArchive({ ...newarchive, id:note.id })
        // const editedNote =notes.filter(data => data.id === note.id);
        if (AddArchive.text || AddArchive.title || AddArchive.text) {
            const indexA =archive.indexOf(note)  
            setArchive(prevArr =>{
                 let newArr=[...prevArr]
                 newArr.splice(indexA,1)
                 newArr.splice(indexA,0,AddArchive)
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
                onChange={(e) => onEditArchive(e)}
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
                onChange={(e) => onEditArchive(e)}
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
                onChange={(e) => onEditArchive(e)}
                name="text"
            >
            </TextField>
            <button className="close-btn" onClick={handledClickArchive}>
                        Close
                    </button> 
            </Container>
        </>
    )
}

export default PopUpArchive;