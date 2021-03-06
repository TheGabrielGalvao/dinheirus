import {createStitches} from '@stitches/react'

export const {styled, css, globalCss, createTheme} = createStitches({
    theme: {
        colors: {
            defaultColor: '',
            primaryColor: '#4C49ED',
            primaryColorLight: '#F6F5FF',
            secondaryColor: '',
            dangerColor: '#D14F4F',
            dangerColorLight: '#F5DCDC',
            successColor: '#33CC95',
            successColorLight: '#DCF5E8',
            warningColor: '',
            infoColor: '',
            titleColor: '#000',
            textColor: '#707070',
            textColorLight: '#A1A0BD',
            moduleIconColor: '',
            shadowColor: '',
            moduleIconActiveColor: '#FFF',
            bodyColor: '#E4E9F7',
            sidebarColor: '#FFF',
            toggleBackgroundColor: '#DDD',
            toggleColor: '#DDD',
            white: '#fff',
        },
        transitions: {
            tran02: 'all 0.2s ease',
            tran03: 'all 0.3s ease',
            tran04: 'all 0.4s ease',
            tran05: 'all 0.5s ease',
        },
        
        shadows: {
            filterStyle: 'brightness(0.9)',
        }

    },
    utils: {
        px: (value: number) => ({
            width: value
        })
    }
})

export const light = createTheme({})

export const dark = createTheme({
    colors: {
        defaultColor: '',
        primaryColor: '#3a3b3c',
        secondaryColor: '',
        dangerColor: '#D14F4F',
        successColor: '#33CC95',
        warningColor: '',
        infoColor: '',
        titleColor: '',
        textColor: '#fff',
        moduleIconColor: '',
        shadowColor: '',
        moduleIconActiveColor: '#FFF',
        bodyColor: '#18191a',
        sidebarColor: '#242526',
        primaryColorLight: '#3a3b3c',
        toggleBackgroundColor: '#DDD',
        toggleColor: '#fff',
        filterStyle: 'brightness(2)',
    },
})

export const globalStyles = globalCss({
    '*': {
        margin: 0,
        padding: 0,
        boxSizing: 'border-box',
        fontFamily: 'Poppins, sans-serif',
    },

    body: {
        minHeight: '100vh',
        backgroundColor: '$bodyColor',
        transition: '$tran05',
        color: '$textColor'
    },

    '::selection': {
        backgroundColor: '$primaryColor',
        color: '$white',
    }
})
