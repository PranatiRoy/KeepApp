import { Box } from '@mui/material';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
//components
import SwipeMenu from "./SwipeMenu";
import Notes from './notes/Notes';
import ArchiveNotes from './archive/ArchiveNotes';
import TrashNotes from './trash/TrashNotes';

const Homepage = () => {
    return (
        <>
            <Box style={{ display: 'flex', width: '100%',overflow:'hidden' }}>
                <Router>
                    <SwipeMenu />
                    <Routes>
                        <Route path="/" element=<Notes/> />
                        <Route path="/archive" element=<ArchiveNotes /> />
                        <Route path="/trash" element=<TrashNotes /> />
                    </Routes>
                </Router>
            </Box>
        </>
    )
}

export default Homepage;