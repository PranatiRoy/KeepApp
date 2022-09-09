import { useContext, useState } from "react";
import { Box, Grid, Divider } from "@mui/material";
import { styled } from "@mui/material/styles";
import ReactPaginate from "react-paginate";
import '../../App.css';

//components
import AddNote from "./AddNote";
import Note from "./Note";
import PinNote from "./PinNote";
import EmptyNote from "./EmptyNote";
import EmptyPinNote from "./EmptyPinNote";

import { DataContext } from "../../context/AddText";



const DrawerHeader = styled('div')(({ theme }) => ({
    ...theme.mixins.toolbar,
}));

const Notes = () => {
    const { notes, pinNotes } = useContext(DataContext);

   

    const [pageNumber, setPageNumber] = useState(0);
    const cardsPerPage = 6;

    const pagesVisited = pageNumber * cardsPerPage;

   

    const displayCards = notes
        .slice(pagesVisited, pagesVisited + cardsPerPage)
        .map((note) => {
            return (
                <Grid item xs={6} md={4} 
                > 
                <Note note={note} />
                </Grid>
            )
        });





    const pageCount = Math.ceil((notes.length+pinNotes.length)/ cardsPerPage);

    const changePage = ({ selected }) => {
        setPageNumber(selected)
    }

    return (
        <>
            <Box sx={{ display: 'flex',position:'absolute' }}>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <DrawerHeader />
                    <AddNote />
                    <Grid container style={{ display: 'flex', flexDirection: 'column' }}>
                       <Grid item>
                            {
                                pinNotes.length > 0 ?
                                    <Grid container style={{ marginTop: 50, marginLeft: 100, marginRight: 60, width: '90%' }} justify="flex-end">
                                        {
                                            pinNotes.map(note => <Grid item xs={6} md={4} > <PinNote note={note} /> </Grid>)
                                        }
                                    </Grid>
                                    : <EmptyPinNote text={"EmptyPinnedSection"}/>
                            }

                        </Grid>
                        <Divider
                            sx={{
                                width: '1100px',
                                marginLeft:'100px'
                            }}
                        /> 
                        <Grid item
                            sx={{
                                minHeight: '280px',
                                height: 'auto',
                            }}
                        >
                            {
                                notes.length > 0 ?
                                    <Grid container spacing={6} style={{ marginTop: 10, marginLeft: 50, marginRight: 60, width: '90%' }} justify="flex-end">
                                        {displayCards}

                                    </Grid>
                                    : <EmptyNote />
                            }
                        </Grid>
                        <Divider
                            sx={{
                                width: '1100px',
                                marginLeft:'100px'
                            }}
                        />
                        <Grid item
                            sx={{
                                margin: 'auto',
                                marginTop: '10px',
                            }}
                        >
                            <ReactPaginate
                                previousLabel={"Previous"}
                                nextLabel={"Next"}
                                pageCount={pageCount}
                                onPageChange={changePage}
                                containerClassName={"paginationBttns"}
                                previousLinkClassName={"previousBttn"}
                                nextLinkClassName={"nextBttn"}
                                disabledClassName={"paginationDisabled"}
                                activeClassName={"paginationActive"}

                            />
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </>
    )
}

export default Notes;