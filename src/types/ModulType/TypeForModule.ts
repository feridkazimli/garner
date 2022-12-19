export interface exampletwo {
    path: string
    showMenu?: boolean
    component: React.LazyExoticComponent<() => JSX.Element>
}
export interface IFormInputs {
    email: string;
    password: string;
}

export type linkTypes = {
    name: string;
    iconName: string;
};

export type CustomTextFieldProps = {
    label: string;
    name: string;
    autoComplete: string;
    type: string;
    placeholder: string;
    error?: boolean;
    register?: any;
};

