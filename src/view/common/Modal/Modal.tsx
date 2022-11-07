import React from "react";
import { ModalProps } from "../../../types";
import "./modal.css"

const Modal = ({children, title, onClose}: ModalProps) => {
    return (
        <>
            <div
                className="modal" onClick={onClose}
            />
            <div className="modal-container">
                <h1>{title}</h1>
                {children}
            </div>
        </>
    )
};

export default Modal;