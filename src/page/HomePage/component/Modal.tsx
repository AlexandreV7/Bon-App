import './Modal.css'

interface ModalProps{
    onClose: () => void;
    onConfirm: () => void;
}

export const Modal = ({onClose, onConfirm}: ModalProps) => {
  return (
    <div className="modal-style">
      <div className="confirmation-modal">
        <section className="modal-content">
          <h3>Confrim Removal</h3>
          <p>
            Are you sure that you want to remove this restaurant from favorites
            ?
          </p>
          <div className="modal-buttons">
            <button onClick={onConfirm} className='button-confirme'>V</button>
            <button onClick={onClose} className='button-close'>X</button>
          </div>
        </section>
      </div>
    </div>
  );
};