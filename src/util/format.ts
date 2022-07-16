
export const moneyFormat = (value: number) => {
    return new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    }).format(value)
}

export const percentFormat = (value: number) => {
    const percent = value * 100
    const formatedPercent = percent.toLocaleString('pt-BR', { style: 'percent' })
    return `${percent > 0 ? '+'+formatedPercent : formatedPercent}`
}
    
export const percentDiff = (currentTotal: number, prevTotal: number) => {
    let diff = currentTotal - prevTotal
    let percent = diff / (prevTotal * 100)
    return percent
}