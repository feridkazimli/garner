export interface example {
    path: string
    showMenu?: boolean
    component: React.LazyExoticComponent<() => JSX.Element>
}
