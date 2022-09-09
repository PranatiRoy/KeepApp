import { Typography } from "@mui/material";

const EmptyPinNote=({text})=>{
    
    return(
        <>
            <Typography 
            sx={{marginLeft:'42%', 
                marginTop:'25px',
                marginBottom:'25px',
                width:'400px',
                fontSize:"32px",
                color:'rgba(220,220,220,0.8)',
                cursor:'context-menu'}}>
                {text}
            </Typography>

        </>
    )
}

export default EmptyPinNote;