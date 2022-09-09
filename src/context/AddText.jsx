import { createContext, useState} from "react";

export const DataContext=createContext(null);

const AddText=({children})=>{
   
    const[notes,setNotes]=useState([]);   
    const[archive,setArchive]=useState([]);
    const[deletedNotes,setDeletedNotes]=useState([]);
    const[pinNotes,setPinNotes]=useState([]);
    // const[open,setOpen]=useState(false)
    const [buttonPopup, setButtonPopup] = useState(false)
    return(
        <>
            <DataContext.Provider value={{
                notes,
                setNotes,
                archive,
                setArchive,
                deletedNotes,
                setDeletedNotes,
                pinNotes,
                setPinNotes,
                buttonPopup,
                setButtonPopup
            }}>
            {children}
            </DataContext.Provider>
        </>
    )
}

export default AddText;