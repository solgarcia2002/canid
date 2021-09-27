import React from 'react';
import {Table} from 'semantic-ui-react';
import {vaccinationPalette, vaccinationPaletteBackground} from "../../config";
import {getLastDigit} from "../../utils/mathematics";
import {isDateInRange, isMatchingDates, patientDateDifference} from "../../utils/inRange";

type ColumnType = {
    id: number,
    label: string,
    range: number[],
    rangeType: string,
}

type RangeType = {
    rangeUnit: string,
    range: number[],
}

type VaccineType = {
    vaccineId: number,
    doses: string[],
}

type RowType = {
    label: string,
    vaccineId: number,
    vaccinationRange: RangeType[],
    content: any[],
}

type TableType = {
    rows: RowType[],
    columns: ColumnType[],
    vaccinesPerPatient: any[],
    patientDoB: string,
}

const CustomTable = ({rows, columns, vaccinesPerPatient, patientDoB}: TableType) => (
    <Table definition>
        <Table.Header>
            <Table.Row>
                {columns.map((column: ColumnType, key: number) =>
                    <Table.HeaderCell key={key}>{column.label}</Table.HeaderCell>)}
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {rows.map((row: RowType, key: number) => {
                const vaccinePerPatient = vaccinesPerPatient.filter((vac: VaccineType) => vac.vaccineId === row.vaccineId);
                const givenDoses: number[] = [];
                if (vaccinePerPatient?.length > 0) {
                    vaccinePerPatient.map((vac: VaccineType) => {
                        vac.doses?.forEach((dose: string) => {
                            givenDoses.push(patientDateDifference(patientDoB, dose));
                        })
                    });
                }
                return <Table.Row key={key}>
                    <Table.Cell>{row.label}</Table.Cell>
                    {columns.map((column: ColumnType) => {
                        const isVaccineRange = row.vaccinationRange.map((vRange: RangeType) => {
                            if (!column.range || !vRange.range) {
                                return false
                            }
                            return isMatchingDates(vRange.range[0], vRange.range[1], column.range[0], column.range[1])
                        });

                        const bgcolor = isVaccineRange.includes(true) ? vaccinationPaletteBackground[getLastDigit(key)] : "#FFF";
                        const color = isVaccineRange.includes(true) ? vaccinationPalette[getLastDigit(key)] : "#FFF";
                        let doseButton = null;
                        if (givenDoses.length > 0 && column.range) {
                            doseButton = givenDoses.map((dose, keyDose) => {

                                if (isDateInRange(dose, column.range[0], column.range[1])) {

                                    return <div
                                        key={keyDose}
                                        style={{
                                        borderRadius: '2rem',
                                        background: color,
                                        color: "#FFF",
                                        padding: "1rem",
                                        margin: 'auto'
                                    }}> 1st Dose</div>
                                }
                            })
                        }

                        return <Table.Cell selectable bgcolor={bgcolor} key={column.id}>
                            {doseButton}
                        </Table.Cell>
                    })}
                </Table.Row>
            })}

        </Table.Body>
    </Table>);


export default CustomTable;