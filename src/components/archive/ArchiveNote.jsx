import { useContext, useState } from "react";
import { Card, CardActions, CardContent, Typography, Box } from "@mui/material"
import { styled } from "@mui/material/styles";
import { UnarchiveOutlined as Unarchive, DeleteOutlined as Delete } from "@mui/icons-material";
import { Divider } from '@mui/material';

import { DataContext } from "../../context/AddText";
import PopUpNote from "../popup/PopUpNote";
import PopUpContent from "../popup/PopUpContent";
import PopUpArchive from "../popup/PopUpArchive";
import '../popup/PopUp.css'

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

const ArchiveNote = ({ note }) => {

    const { setNotes, archive, setArchive, setDeletedNotes } = useContext(DataContext);

    const [ArchivePopup, setArchivePopup] = useState(false);


    const unArchiveNote = (note) => {
        const updatedNotes = archive.filter(data => data.id !== note.id);
        setArchive(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }
    const deleteNote = (note) => {
        const updatedNotes = archive.filter(data => data.id !== note.id);
        setArchive(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }
    return (
        <>
            <StyleCard>
                <CardContent onClick={() => setArchivePopup(true)}>
                    
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
                    <Box>
                        <Unarchive
                            fontSize="small"
                            style={{ display: 'flex', marginBottom: '5px', marginTop: '5px', color: 'white' }}
                            onClick={() => unArchiveNote(note)}
                        />
                    </Box>
                    <Box>
                        <Delete
                            fontSize="small"
                            style={{ marginBottom: '5px', marginTop: '5px', color: 'white' }}
                            onClick={() => deleteNote(note)}
                        />
                    </Box>

                </CardActions>
            </StyleCard>
            {ArchivePopup ? (
                
                <PopUpNote trigger={ArchivePopup} setTrigger={setArchivePopup}>
                    <PopUpArchive note={note} trigger={ArchivePopup} setTrigger={setArchivePopup} />
                    {/* <Typography
                    sx={{textAlign:'center',
                        color:'gray',
                        fontSize:'20px'
                    }}
                    >
                    You can edit the Note after Unarchive
                    <button className="close-btn" onClick={()=>setArchivePopup(false)}>
                        Close
                    </button> 

                    </Typography> */}
                    
                </PopUpNote>

            ) : ""}
        </>


    )
}

export default ArchiveNote;