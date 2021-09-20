import React from 'react';
import {Table} from 'semantic-ui-react';

type ColumnType = {
    id: number,
    label: string,
}
type RowType = {
    label: string,
    content: any[],
}
type TableType = {
    rows: RowType[],
    columns: ColumnType[]
}

const CustomTable = ({rows, columns}: TableType) => {
    return <Table definition>
        <Table.Header>
            <Table.Row>
                {columns.map((column: ColumnType) =>
                    <Table.HeaderCell>{column.label}</Table.HeaderCell>)}
            </Table.Row>
        </Table.Header>

        <Table.Body>
            {rows.map((row) =>
                <Table.Row>
                    <Table.Cell>{row.label}</Table.Cell>
                    {columns.map((column: ColumnType) =>
                        <Table.Cell>{row.content[column.id]}</Table.Cell>
                    )}
                </Table.Row>)}

        </Table.Body>
    </Table>
};

export default CustomTable;