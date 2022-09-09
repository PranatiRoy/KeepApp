import { useContext } from "react";
import { Box, Grid } from "@mui/material";
import { styled } from "@mui/material/styles";

//components
import ArchiveNote from "./ArchiveNote";
import EmptyPinNote from "../notes/EmptyPinNote";


import { DataContext } from "../../context/AddText";

const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const ArchiveNotes = () => {
    const { archive } = useContext(DataContext);
    return (
        <>
            <Box sx={{ display: 'flex',position:'absolute' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    {
                            archive.length > 0 ?
                            (<Grid container style={{ marginTop: 50, marginLeft: 80, marginRight: 60, width: '90%' }} justify="flex-end">
                                {
                                    archive.map(archive => <Grid item xs={6} md={4} > <ArchiveNote note={archive} /> </Grid>)
                                }
                            </Grid>):<EmptyPinNote text={"ArchiveSection is Empty"}/>
                    }
         
                </Box>
            </Box>
        </>
    )
}

export default ArchiveNotes;