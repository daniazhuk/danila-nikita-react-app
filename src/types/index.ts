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


