import './PopUp.css';

const PopUpNote = (props) => {
    return (props.trigger) ? (
        <>
            <div className="popup">
                <div className="popup-inner">
                    {props.children}
                </div>
            </div>
        </>
    ) : "";
}

export default PopUpNote;