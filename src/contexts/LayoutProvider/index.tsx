import { createContext, FormEvent, useContext, useEffect, useState } from "react"
import { BrowserRouter } from "react-router-dom"
import { Content, Layout, Menu } from "../../components/gui"
import { navConfig } from "../../util/navigation.config"
import { dark, globalStyles, light } from "../../util/stitches.config"
import { ILayout, ILayoutContextData, ILayoutsProviderProps } from "./types"

export const LayoutContext = createContext<ILayoutContextData>({} as ILayoutContextData)

export const LayoutProvider = ({children}: ILayoutsProviderProps) => {
    const [theme, setTheme] = useState<string>(light)
    const [search, setSearch] = useState('')
    const [navigation, setILayout] = useState<ILayout[]>(navConfig)

    useEffect(() => {
      
    }, [])

    const handleSearchChange = (event: FormEvent<HTMLInputElement>) => {
        setSearch(event.currentTarget.value.toLowerCase())
        
        if(search.length > 1){
            setILayout([...navConfig].filter(item => item.Label.toLowerCase().indexOf(search) !== -1))
        }
        else{
            setILayout(navConfig)
        }
    }

    const handleToggleTheme = () => {
        setTheme(theme === light ? dark : light)
    }

    globalStyles()
    return (
        <LayoutContext.Provider value={{ navigation, handleSearch: handleSearchChange, theme, handleToggleTheme}}>
            <BrowserRouter>
                <Layout className={theme}>
                    <Menu />
                    <Content>
                        {children}
                    </Content>
                </Layout>
            </BrowserRouter>
        </LayoutContext.Provider>
    )

}