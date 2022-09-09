import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

//components
import TrashNote from "./TrashNote";
import EmptyPinNote from "../notes/EmptyPinNote";

import { DataContext } from "../../context/AddText";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const TrashNotes = () => {
    const { deletedNotes } = useContext(DataContext);
    return (
        <>
            <Box sx={{ display: 'flex',position:'absolute' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    {
                        deletedNotes.length > 0 ?

                            (<Grid container style={{ marginTop: 50, marginLeft: 80, marginRight: 60, width: '90%' }} justify="flex-end">
                                {
                                    deletedNotes.map(note => <Grid item xs={6} md={4} > <TrashNote note={note} /> </Grid>)
                                }
                            </Grid>) : <EmptyPinNote text={"TrashSection is Empty"} />
                    }


                </Box>
            </Box>
        </>
    )
}

export default TrashNotes;