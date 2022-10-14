import {createContext, useState} from "react";

interface IModalContext {
    modal: boolean
    close: () => void,
    open: () => void
}

export const ModalContext = createContext<IModalContext>({
    modal: true,
    close: () => {},
    open: () => {}
})

export const ModalState = ({children}: {children: React.ReactNode}) => {
    const [modal, setModal] = useState(true)

    const close = () => setModal(false)

    const open = () => setModal(true)

    return (
        <ModalContext.Provider value={{modal, close, open}}>
            {children}
        </ModalContext.Provider>
    )
}