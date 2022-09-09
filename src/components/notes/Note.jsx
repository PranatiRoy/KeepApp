import { useContext,useState } from "react";

import { Card, CardActions, CardContent, Typography,Box } from "@mui/material"
import { styled} from "@mui/material/styles";
import { ArchiveOutlined as Archive, DeleteOutlined as Delete,PushPin as Pin } from "@mui/icons-material";



import { DataContext } from "../../context/AddText";
import PopUpContent from "../popup/PopUpContent";
import PopUpNote from "../popup/PopUpNote";
import '../../App.css';


const StyleCard = styled(Card)`
    width:300px;
    margin: 15px;
    border:1px solid #9ACD32;
    border-radius:5px;
    margin-right:350px;
    box-shadow:none;
    margin-bottom:40px;
    cursor:context-menu;
`
// onClick={() => setButtonPopup(true)}
const Note = ({ note }) => {
    

    const {notes, setNotes, setArchive, setDeletedNotes,pinNotes,setPinNotes } = useContext(DataContext);

    const [buttonPopup,setButtonPopup]=useState(false);

    const archiveNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setArchive(prevArr => [note, ...prevArr]);
    }
    const deleteNote = (note) => {
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }
    const pinNote = (note) => {
        console.log('pinNotes',pinNotes)
        const updatedNotes = notes.filter(data => data.id !== note.id);
        setNotes(updatedNotes);
        setPinNotes(prevArr => [note, ...prevArr]);
        
        
    }
    return (
        <>
            {/* <Card
            sx={{maxWidth:'300px', borderRadius:'10px',border:'0.5px solid rgba(0,0,0,0.2)'}}
            
            >
                <CardHeader 
                action={
                    <IconButton>
                    <Delete style={{fontSize:'large'}}/>
                    <Archive style={{fontSize:'large'}}/>
                    <Pin style={{fontSize:'large'}}/>
                    </IconButton>
                }
                title={note.title}
                subheader={note.tagline}
                />
                <CardContent onClick={() => setButtonPopup(true)}>
                    <Typography >
                    <Box
                    sx={{
                        flexWrap: 'wrap',
                        wordWrap: 'break-word',
                    }}>

                        {note.text}
                    </Box>                
                    </Typography>
                </CardContent>
            </Card> */}

           
            <StyleCard >
                <CardContent onClick={() => setButtonPopup(true)} >
                    <Typography sx={{}}>
                        <h3>{note.title}</h3>
                    </Typography>
                    <Typography>
                        <h5>{note.tagline}</h5>
                    </Typography>
               
                    <Typography>

                    <Box
                    sx={{
                        flexWrap: 'wrap',
                        wordWrap: 'break-word',
                    }}
                   
                    >
                    {note.text}

                    </Box>
                        
                    </Typography>
                   
                </CardContent>
                
                <CardActions sx={{ height: '20px', paddingBottom: '2px', paddingTop: '2px', display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(0,130,240,30%)',marginBottom:'-1px' }}>
                    <div>
                        <Archive
                            fontSize="small"
                            style={{ marginBottom: '5px', marginTop: '5px', color: 'white' }}
                            onClick={() => archiveNote(note)}
                        />
                    </div>
                    <div>
                        <Delete
                            fontSize="small"
                            style={{ marginBottom: '5px', marginTop: '5px', color: 'white' }}
                            onClick={() => deleteNote(note)}
                        />
                        <Pin
                            fontSize="small"
                            style={{ marginBottom: '5px', marginTop: '5px', color: 'white' }}
                            onClick={() => pinNote(note)}
                        />
                    </div>

                </CardActions>
            </StyleCard>  
           
             {buttonPopup ? (
                    <PopUpNote trigger={buttonPopup} setTrigger={setButtonPopup}>
                    <PopUpContent note={note} trigger={buttonPopup} setTrigger={setButtonPopup}/> 
                    </PopUpNote>
               
             ):""}
            
        </>


    )
}

export default Note;