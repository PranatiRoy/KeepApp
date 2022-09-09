import { TextField, Container, Box } from "@mui/material";




const PopUpTrash = ({ note, trigger, setTrigger }) => {
    
    const handledClickTrash = () => {
        setTrigger(false);
    }
    
    return (
        <>
            <Container
                sx={{
                    width: '550px',
                    maxHeight: '270px',
                    overflow: 'auto',
                    marginLeft: '30px',
                    border: '1px solid #e0e0e0',
                    borderBottom: '1px solid #e0e0e0',
                    borderRadius: '8px',
                    display: 'flex',
                    flexDirection: 'column',
                    scrollbarWidth: 'thin',
                }}
            >

                <TextField
                    id="outlined-basic"
                    multiline
                    InputProps={{ disableUnderline: true }}
                    variant="standard"
                    defaultValue={note.title}
                    style={{ borderBottom: '1px solid #e0e0e0', fontWeight: 'bold' }}
                    placeholder="Title"
                    // onChange={(e) => onEditText(e)}
                    onKeyDown={(e) => e.preventDefault()}
                    name="title"
                    disabled={true}
                >
                </TextField>
                <TextField
                    id="outlined-basic"
                    multiline
                    InputProps={{ disableUnderline: true }}
                    variant="standard"
                    defaultValue={note.tagline}
                    style={{ borderBottom: '1px solid #e0e0e0' }}
                    placeholder="Tagline"
                    // onChange={(e) => onEditText(e)}
                    onKeyDown={(e) => e.preventDefault()}
                    name="tagline"
                    disabled={true}
                >
                </TextField>
                <TextField
                    id="outlined-basic"
                    multiline
                    InputProps={{ disableUnderline: true }}
                    variant="standard"
                    defaultValue={note.text}
                    placeholder="Note to be added"
                    // onChange={(e) => onEditText(e)}
                    onKeyDown={(e) => e.preventDefault()}
                    name="text"
                    style={{ marginBottom: '15px' }}
                    disabled={true}
                // helperText="You can't edit Note in Trash, Restore first."
                >
                </TextField>
                <button className="close-btn" onClick={handledClickTrash}>
                    Close
                </button>
                <Box
                    sx={{
                        color: 'gray',
                        fontSize: '12px',
                    }}
                >
                    You can't edit Note in Trash, Restore first.
                </Box>

            </Container>

        </>
    )
}

export default PopUpTrash;