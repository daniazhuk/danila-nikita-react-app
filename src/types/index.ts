export type IProd = {
    id : number;
    type: string;
    brand: string;
    url: string;
    name:string;
    description: string;
    price: number;
    status: string;
}

export type ModalProps = {
    children: React.ReactNode
    title: string
    onClose: () => void
}



