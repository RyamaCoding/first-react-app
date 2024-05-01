import './Modal.css'

function Modal({ title }) {
  function cancelButton() {
    console.log('Cancel')
  }

  function confirmButton() {
    console.log('Confirm')
  }
  return (
    <>
      <div className="modal">
        <p>{title}</p>
        <div className="modal__buttons">
          <button className="btn btn__cancel" onClick={cancelButton} >Cancel</button>
          <button className="btn" onClick={confirmButton}>Confirm</button>
        </div>
      </div>
      <div className="backdrop" />
    </>
  );
}

export default Modal;
