import React, {useContext, useState} from 'react';
import {ModalContext} from "../../common/Modal/ModalContext";


const ModalQuestion = () => {
    const {close} = useContext(ModalContext)

    return (
        <div className="modal-background">
            <div className="modal-container">
                <div>
                    <p>
                        The items are awesome! you should move forward, you will enjoy it!
                    </p>
                </div>
                <div>
                    <button
                        className="modal-continue-buttom">Continue
                    </button>
                    <button
                        className="modal-cancel-buttom"
                        onClick={close}
                    >Cancel</button>
                </div>
            </div>

        </div>
    );
};

export default ModalQuestion;