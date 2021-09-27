export const getLastDigit: (digit:number)=>number = (digit:number) => {
    const toText: string = digit.toString().slice(-1);
    return +(toText);
}