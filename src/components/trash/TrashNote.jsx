import { useContext, useState } from "react";

import { Card, CardActions, CardContent, Typography, Box } from "@mui/material"
import { styled } from "@mui/material/styles";
import { RestoreFromTrashOutlined as Restore, DeleteForeverOutlined as Del } from "@mui/icons-material";
import { Divider } from '@mui/material';

import { DataContext } from "../../context/AddText";
import PopUpTrash from "../popup/PopUpTrash";
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

const TrashNote = ({ note }) => {

    const { setNotes, deletedNotes, setDeletedNotes } = useContext(DataContext);

    const [buttonTrashPopup,setButtonTrashPopup] = useState(false);

    const restoreNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }
    const deleteNote = (note) => {
        const updatedNotes = deletedNotes.filter(data => data.id !== note.id);
        setDeletedNotes(updatedNotes);
    }
    return (
        <>
            <StyleCard>
                <CardContent onClick={() => setButtonTrashPopup(true)}>
                    <Typography>
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
                            }}>
                            {note.text}
                            

                        </Box>
                       
                    </Typography>
                </CardContent>
                <Divider />
                <CardActions sx={{ height: '20px', paddingBottom: '2px', paddingTop: '2px', display: 'flex', justifyContent: 'space-between', backgroundColor: 'rgba(0,130,240,30%)' }}>
                    <Del
                        fontSize="small"
                        style={{ marginBottom: '5px', marginTop: '5px', color: 'white' }}
                        onClick={() => deleteNote(note)}
                    />
                    <Restore
                        fontSize="small"
                        style={{ marginBottom: '5px', marginTop: '5px', color: 'white' }}
                        onClick={() => restoreNote(note)}
                    />

                </CardActions>
            </StyleCard>
            {buttonTrashPopup ? (
                
                <PopUpNote trigger={buttonTrashPopup} setTrigger={setButtonTrashPopup}>
                    <PopUpTrash note={note} trigger={buttonTrashPopup} setTrigger={setButtonTrashPopup} />
                </PopUpNote>

            ) : ""}
           
        </>


    )
}

export default TrashNote;