import { useState } from 'react';
import Modal_04 from '../components/Modal_04';
import Backdrop_04 from '../components/Backdrop_04'

function Todo_04(props) {
    const [showModal, setShowModal] = useState();

    function showModalHandler() {
        setShowModal(true)
    }

    function closeModalHandler() {
        setShowModal(false)
    }

    return (
        <div >
            <div className="card">
                <h2>{props.text}</h2>
                <div className="actions">
                    <button className="btn" onClick={showModalHandler}>Delete</button>
                </div>
            </div>
            {showModal && <Backdrop_04 onClose={closeModalHandler} />}
            {showModal && <Modal_04 text='Are you sure?' onClose={closeModalHandler} />}
        </div>
    );
}

export default Todo_04;