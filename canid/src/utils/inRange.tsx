export const isMatchingDates = (startDate: number, endDate: number, startRange: number, endRange: number) => {

    return (startRange >= startDate && endRange <= endDate);
};

export const isDateInRange = (valuableDate: number, startDate: number, endDate: number) => {
    return (valuableDate >= startDate && valuableDate <= endDate);
};

export const patientDateDifference= (DoB:string,vaccine:string)=>{

    const DoBDate= new Date(DoB);
    const vaccineDate= new Date(vaccine);
    const d1Y = DoBDate.getFullYear();
    const d2Y = vaccineDate.getFullYear();
    const d1M = DoBDate.getMonth();
    const d2M = vaccineDate.getMonth();

    return (d2M+12*d2Y)-(d1M+12*d1Y);

};