export const getLastDigit=(digit:number) => {
    const toText: string = digit.toString().slice(-1);
    return +(toText);
}

export const getOrdinal =(n:number) =>{
    let ord = ["st", "nd", "rd"]
    let exceptions = [11, 12, 13]
    let nth =
        ord[(n % 10) - 1] === undefined || exceptions.includes(n % 100) ? "th" : ord[(n % 10) - 1]
    return n + nth
}