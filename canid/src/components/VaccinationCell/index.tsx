import React from "react";
import {ColumnType} from "../customTable";
import {Table} from 'semantic-ui-react';
import DoseButton from "../doseButton";

type VaccinationCellType = {
    bgColor: string,
    column: ColumnType,
    vaccineLabel: string,
    givenDoses: number[],
    rowKey: number
}

const VaccinationCell = ({bgColor, column, vaccineLabel, givenDoses, rowKey}: VaccinationCellType) => {
    if (column.range) {
        return <Table.Cell selectable bgcolor={bgColor} key={column.id}>
            {givenDoses.length > 0 && <DoseButton
                rowKey={rowKey} givenDoses={givenDoses} column={column}/>}
        </Table.Cell>
    } else {
        return <Table.Cell>{vaccineLabel}</Table.Cell>
    }
};

export default VaccinationCell;