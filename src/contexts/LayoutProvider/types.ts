import { ChangeEventHandler, FormEvent, ReactNode } from "react"

export interface ILayout {
    Id: number
    Name: string
    Label: string
    Icon: ReactNode
    Position: 'main' | 'bottom'
    Route: string
    End?: boolean
}

export interface ILayoutContextData {
    navigation: ILayout[]
    handleSearch: ChangeEventHandler<HTMLInputElement>
    handleToggleTheme: () => void
    theme: string
}

export interface ILayoutsProviderProps {
    children: ReactNode
}