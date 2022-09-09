import { useContext, useState } from "react";
import { Card, CardActions, CardContent, Typography, Box } from "@mui/material"
import { styled } from "@mui/material/styles";
import { ArchiveOutlined as Archive, DeleteOutlined as Delete } from "@mui/icons-material";
import { Divider } from '@mui/material';

import { TbPinnedOff } from "react-icons/tb";
import { DataContext } from "../../context/AddText";
import PopUpNote from "../popup/PopUpNote";
import PopUpPin from "../popup/PopUpPin";
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

const PinNote = ({ note }) => {

    const { setNotes, pinNotes, setArchive, setDeletedNotes, setPinNotes } = useContext(DataContext);

    const [buttonPinPopup, setButtonPinPopup] = useState(false);

    const archiveNote = (note) => {
        const updatedNotes = pinNotes.filter(data => data.id !== note.id);
        setPinNotes(updatedNotes);
        setArchive(prevArr => [note, ...prevArr]);
    }
    const deleteNote = (note) => {
        const updatedNotes = pinNotes.filter(data => data.id !== note.id);
        setPinNotes(updatedNotes);
        setDeletedNotes(prevArr => [note, ...prevArr]);
    }
    const unPinNote = (note) => {
        const updatedNotes = pinNotes.filter(data => data.id !== note.id);
        setPinNotes(updatedNotes);
        setNotes(prevArr => [note, ...prevArr]);
    }
    return (
        <>
            <StyleCard>
                <CardContent onClick={() => setButtonPinPopup(true)}>
                    <Typography
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Box>
                            <h3>{note.title}</h3>
                        </Box>
                        <Box
                            sx={{
                                color: 'yellowgreen',
                                marginTop: '1px',
                                fontSize: '10px',
                                fontWeight: 'bold',
                                marginLeft: 'auto'
                            }}
                        >
                            pinned
                        </Box>
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
                        <Archive
                            fontSize="small"
                            style={{ display: 'flex', marginBottom: '5px', marginTop: '5px', color: 'white' }}
                            onClick={() => archiveNote(note)}
                        />
                    </Box>
                    <Box
                        sx={{ display: 'flex' }}
                    >
                        <Delete
                            fontSize="small"
                            style={{ marginBottom: '5px', marginTop: '5px', color: 'white' }}
                            onClick={() => deleteNote(note)}
                        />
                        <TbPinnedOff
                            fontSize="large"
                            style={{ marginBottom: '5px', marginTop: '5px', color: 'white', marginLeft: '5px' }}
                            onClick={() => unPinNote(note)}
                        />
                    </Box>
                </CardActions>
            </StyleCard>
            {buttonPinPopup ? (
                
                <PopUpNote trigger={buttonPinPopup} setTrigger={setButtonPinPopup}>
                    <PopUpPin note={note} trigger={buttonPinPopup} setTrigger={setButtonPinPopup} />
                </PopUpNote>

            ) : ""}
        </>


    )
}

export default PinNote;