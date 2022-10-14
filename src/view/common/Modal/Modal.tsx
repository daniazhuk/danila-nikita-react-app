import React from "react";
import { ModalProps } from "../../../types";

const Modal = ({children, title, onClose}: ModalProps) => {
    return (
        <>
            <div
                className="modal" onClick={onClose}
            />
            <div>
                <h1 className="modal-main-tag">{title}</h1>
                {children}
            </div>
        </>
    )
};

export default Modal;