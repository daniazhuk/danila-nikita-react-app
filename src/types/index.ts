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



export type IOption = {
    value: string;
    name: string
}

export type ISelect = {
    options : IOption[];
    defaultValue: string;
    value?: number | undefined;
    onChange: (sort: number)=> void;
    
}
