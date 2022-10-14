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

<<<<<<< HEAD
export type ModalProps = {
    children: React.ReactNode
    title: string
    onClose: () => void
}



=======
type IOption = {
    value: string;
    name: string
}

export type ISelect = {
    options : IOption[];
    defaultValue: string;
    value?: number | undefined;
    onChange: (sort: number)=> void;
    
}


>>>>>>> 5f42409aefcba157e061ee97d265aa27a5879cad
