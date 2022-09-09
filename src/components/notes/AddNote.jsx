import { useState, useRef, useContext } from 'react';

import { Box, TextField, ClickAwayListener } from "@mui/material";
import { styled } from "@mui/material/styles";
import { v4 as uuid } from 'uuid';

import { DataContext } from '../../context/AddText';

const Container = styled(Box)`
    width:500px;
    box-shadow:0 1px 2px 0 rgba(60,64,67,0.3),0 2px 6px 2px rgba(60,64,67,0.15);
    padding:10px 15px;
    border-radius:10px;
    border-color:#e0e0e0;
    display:flex;
    flex-direction:column;
    border:2px solid #0082F0;
    margin-left:24rem;
`;

const note = {
    id: '',
    title: '',
    tagline: '',
    text: ''
}

const AddNote = () => {
    const { notes} = useContext(DataContext);
    const [visibilityTextField, setVisibilityTextField] = useState(false);

    const [addNote, setAddNote] = useState({ ...note, id: uuid() });
    // const [addNote,setAddNote]=useState(prevArr=> [addNote,...prevArr]);

    const { setNotes } = useContext(DataContext);

    const containerRef = useRef();

    const onTakeANoteClick = () => {
        setVisibilityTextField(true);
        containerRef.current.style.minHeight = '100px';
        containerRef.current.style.border = '1px solid #0082F0';
    }
    const handleClickAway = () => {
        setVisibilityTextField(false);
        containerRef.current.style.minHeight = '30px';
        containerRef.current.style.border = '2px solid #0082F0';
        setAddNote({ ...note, id: uuid() })

        if (addNote.text || addNote.title || addNote.text) {
            setNotes(prevArr => [addNote, ...prevArr]);
            console.log('notes',notes)
        }
        
    }

    const onChangeText = (e) => {
        // console.group(e.target.name,e.target.value)
        let changeNote = { ...addNote, [e.target.name]: e.target.value }
        setAddNote(changeNote);
    }
    return (
        <>
            <ClickAwayListener onClickAway={handleClickAway}>

                <Container ref={containerRef}>
                    {visibilityTextField &&
                        <TextField
                            placeholder="Title"
                            variant="standard"
                            InputProps={{ disableUnderline: true, }}
                            
                            style={{ marginBottom: 8, borderBottom: '1px solid #e0e0e0' }}
                            onChange={(e) => onChangeText(e)}
                            name="title"
                            value={addNote.title}
                        />
                    }
                    {visibilityTextField &&
                        <TextField
                            placeholder="Add a Tagline(if any)"
                            variant="standard"
                            InputProps={{ disableUnderline: true }}
                            style={{ marginBottom: 8, borderBottom: '1px solid #e0e0e0' }}
                            onChange={(e) => onChangeText(e)}
                            name="tagline"
                            value={addNote.tagline}
                        />
                    }
                    <TextField
                        placeholder="Take a note..."
                        multiline
                        rowsMax={Infinity}
                        style={{width:'auto'}}
                        variant="standard"
                        InputProps={{ disableUnderline: true }}
                        onClick={onTakeANoteClick}
                        onChange={(e) => onChangeText(e)}
                        name="text"
                        value={addNote.text}
                        helperText="Create a note here and click outside to get the note..."
                    />
                </Container>
            </ClickAwayListener>
        </>
    )
}

export default AddNote;