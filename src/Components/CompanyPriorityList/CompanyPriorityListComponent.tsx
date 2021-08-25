import React from "react";
import { useState } from "@hookstate/core";
import { getCompanyPriorityList } from "../../APICalls/Interview/getCompanyPriorityList";
import {cpStore} from "../../store";

import BTable from 'react-bootstrap/Table';
import styled from "styled-components";
import { useTable, useSortBy } from "react-table";

const Styles = styled.div`
  padding: 1rem;

  table {
    border-spacing: 0;
    border: 1px solid black;

    tr {
      :last-child {
        td {
          border-bottom: 0;
        }
      }
    }

    th,
    td {
      margin: 0;
      padding: 0.5rem;
      border-bottom: 1px solid black;
      border-right: 1px solid black;

      :last-child {
        border-right: 0;
      }
    }
  }
`

// @ts-ignore
const Table = ({columns, data}) => {
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  // We don't want to render all 2000 rows for this example, so cap
  // it at 20 for this use case
  const firstPageRows = rows.slice(0, 20)

  return (
    <>
      <BTable {...getTableProps()}>
        <thead>
        {headerGroups.map((headerGroup: any)=> (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map((column: any) => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {firstPageRows.map(
          (row: any, i: number) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map((cell: any) => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })}
              </tr>
            )}
        )}
        </tbody>
      </BTable>
      <br />
      <div>Showing the first 20 results of {rows.length} rows</div>
    </>
  )
};

export const CompanyPriorityListComponent = () => {
  const { companyPriority } = useState(cpStore);
  const fetchResource = () => getCompanyPriorityList()
    .then((r) => {
      return r.json();
    })
    .then((data) => {
      console.log(data);
      companyPriority.set(data);
      return data;
    });
  const state = useState(fetchResource);

  const columns = React.useMemo(
    () => [
      {
        Header: 'ID',
        accessor: 'companyPriorityId',
      },
      {
        Header: 'Company',
        accessor: 'company',
      },
      {
        Header: 'Priority',
        accessor: 'priority',
      },
    ],
    []
  )

  if (state.promised) {
    return (
        <p>Loading...</p>
    );
  }

  if (state.error) {
    return (
    <p>Failed to load<br />
    <code style={{ color: 'red' }}>{state.error.toString()}</code><br />
    <button onClick={() => state.set(fetchResource)}>Retry</button>
    </p>
    );
  }

  return (
    <div>
      <Table columns={columns} data={companyPriority.get()} />
    </div>
  );
}