import React from 'react';
import {getLastDigit, getOrdinal} from "../../utils/mathematics";
import {isDateInRange} from "../../utils/inRange";
import {ColumnType} from "../customTable";
import {vaccinationPalette} from "../../config";

type DoseButtonType = {
    rowKey: number,
    givenDoses: number[],
    column: ColumnType,
}

const DoseButton = ({rowKey, givenDoses, column}: DoseButtonType) => {

    const color = vaccinationPalette[getLastDigit(rowKey)];

    return <React.Fragment>{
        givenDoses.map((dose, keyDose) => {

            if (isDateInRange(dose, column.range[0], column.range[1], column.rangeType)) {

                return <div
                    key={`${keyDose}DoseButton`}
                    style={{
                        borderRadius: '2rem',

                        background: color,
                        color: "#FFF",
                        padding: "1rem",
                        margin: 'auto'
                    }}> {`${getOrdinal(keyDose + 1)} Dose`}</div>;
            }
            return null;
        })
    }</React.Fragment>;
};

export default DoseButton;