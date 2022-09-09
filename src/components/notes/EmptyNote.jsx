import { Typography } from "@mui/material";
import {Lightbulb as Bulb} from '@mui/icons-material';

const EmptyNote=()=>{
    
    return(
        <>
            <Bulb 
                style={{color:'rgba(220,220,220,0.8)', fontSize:'78px',marginLeft:'52%', marginTop:'60px'}}
            />
            
            <Typography 
            sx={{marginLeft:'38%', 
                marginTop:'5px',
                fontSize:"32px",
                color:'rgba(220,220,220,0.8)',
                cursor:'context-menu'
                }}>
                Notes you add appear here
            </Typography>

        </>
    )
}

export default EmptyNote;