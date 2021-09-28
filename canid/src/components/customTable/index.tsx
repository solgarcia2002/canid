import React from 'react';
import {Table} from 'semantic-ui-react';
import {vaccinationPaletteBackground} from "../../config";
import {isVaccineRange, patientDateDifference, RangeType} from "../../utils/inRange";
import {getLastDigit} from "../../utils/mathematics";
import VaccinationCell from "../VaccinationCell";

export type ColumnType = {
    id: number,
    label: string,
    range: number[],
    rangeType: string,
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
                    vaccinePerPatient.forEach((vac: VaccineType) => {
                        vac.doses?.forEach((dose: string) => {
                            givenDoses.push(patientDateDifference(patientDoB, dose));
                        })
                    });
                }
                return <Table.Row key={key}>
                    {columns.map((column: ColumnType) => {
                        const isInVaccineRange: boolean[] = isVaccineRange(row.vaccinationRange, column.range, column.rangeType);
                        const bgColor = isInVaccineRange.includes(true) ? vaccinationPaletteBackground[getLastDigit(key)] : "#FFF";

                       return  <VaccinationCell
                            key={`${column.id}VaccinationCell`}
                            bgColor={bgColor}
                            column={column}
                            vaccineLabel={row.label}
                            givenDoses={givenDoses}
                            rowKey={key}/>
                    })}
                </Table.Row>
            })}
        </Table.Body>
    </Table>);


export default CustomTable;