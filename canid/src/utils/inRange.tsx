export type RangeType = {
    rangeUnit: string,
    range: number[],
}


export const isMatchingDates = (startDate: number, endDate: number, startRange: number, endRange: number) => {

    return (startRange >= startDate && endRange <= endDate);
};

export const isDateInRange = (valuableDate: number, startDate: number, endDate: number, valuableDateType: string) => {
    const monthStartDate = valuableDateType === 'year' ? startDate * 12 : startDate;
    const monthEndDate = valuableDateType === 'year' ? endDate * 12 : endDate;
    return (valuableDate > monthStartDate && valuableDate <= monthEndDate);
};

export const patientDateDifference = (DoB: string, vaccine: string) => {

    const DoBDate = new Date(DoB);
    const vaccineDate = new Date(vaccine);
    const d1Y = DoBDate.getFullYear();
    const d2Y = vaccineDate.getFullYear();
    const d1M = DoBDate.getMonth();
    const d2M = vaccineDate.getMonth();

    return (d2M + 12 * d2Y) - (d1M + 12 * d1Y);

};
export const isVaccineRange: (vaccinationRange: RangeType[], columnRange: number[], columnRangeType: string) => boolean[] =
    (vaccinationRange: RangeType[], columnRange: number[], columnRangeType: string) => {
        return vaccinationRange.map((vRange: RangeType) => {
            try {
                const startRange = columnRangeType === 'year' ? columnRange[0] * 12 : columnRange[0];
                const endRange = columnRangeType === 'year' ? columnRange[1] * 12 : columnRange[1];

                return isMatchingDates(vRange.range[0], vRange.range[1], startRange, endRange);
            } catch (err) {
                return false;
            }
        })
    };