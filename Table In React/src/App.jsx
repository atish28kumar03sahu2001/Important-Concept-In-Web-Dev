// import React from 'react';
// import { useTable, useSortBy, usePagination, useGlobalFilter, useFilters } from 'react-table';
// import { Data } from './Data';
// import { Column } from './Column';

// export const App = () => {
//   const {
//     getTableBodyProps,
//     getTableProps,
//     headerGroups,
//     page,
//     prepareRow,
//     nextPage,
//     previousPage,
//     canPreviousPage,
//     canNextPage,
//     state: { pageIndex, globalFilter },
//     pageCount,
//     gotoPage,
//     setGlobalFilter
//   } = useTable(
//     {
//       columns: Column,
//       data: Data,
//       initialState: { pageSize: 10, pageIndex: 0 }
//     },
//     useGlobalFilter,
//     useFilters,
//     useSortBy,
//     usePagination
//   );
//   const handleFilterChange = (e) => {
//     setGlobalFilter(e.target.value || undefined);
//   };

//   return (
//     <div className='container'>
//       <input
//         value={globalFilter || ''}
//         onChange={handleFilterChange}
//         placeholder={`Search...`}
//       />
      
//       <table {...getTableProps()}>
//         <thead>
//           {headerGroups.map((headerGroup) => (
//             <tr {...headerGroup.getHeaderGroupProps()}>
//               {headerGroup.headers.map((column) => (
//                 <th {...column.getHeaderProps(column.getSortByToggleProps())}>
//                   {column.render('Header')}
//                   {column.isSorted && <span>{column.isSortedDesc ? " Descending" : " Ascending"}</span>}
//                 </th>
//               ))}
//             </tr>
//           ))}
//         </thead>
//         <tbody {...getTableBodyProps()}>
//           {page.map((row) => {
//             prepareRow(row);
//             return (
//               <tr {...row.getRowProps()}>
//                 {row.cells.map((cell) => (
//                   <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
//                 ))}
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//       <div className='btnd'>
//         <button disabled={pageIndex === 0} onClick={() => gotoPage(0)}>First</button>
//         <button disabled={!canPreviousPage} onClick={previousPage}>Previous</button>
//         <span>
//           {pageIndex + 1} of {pageCount}
//         </span>
//         <button disabled={!canNextPage} onClick={nextPage}>Next</button>
//         <button disabled={pageIndex >= pageCount - 1} onClick={() => gotoPage(pageCount - 1)}>Last</button>
//       </div>
//     </div>
//   );
// };


// Part2
import React from 'react';
import { useTable, useSortBy, usePagination, useGlobalFilter, useFilters } from 'react-table';
import { Data } from './Data';
import { Column } from './Column';

export const App = () => {
  const {
    getTableBodyProps,
    getTableProps,
    headerGroups,
    page,
    prepareRow,
    nextPage,
    previousPage,
    canPreviousPage,
    canNextPage,
    state: { pageIndex, globalFilter },
    pageCount,
    gotoPage,
    setGlobalFilter
  } = useTable(
    {
      columns: Column,
      data: Data,
      initialState: { pageSize: 10, pageIndex: 0 }
    },
    useGlobalFilter,
    useFilters,
    useSortBy,
    usePagination
  );

  const handleFilterChange = (e) => {
    setGlobalFilter(e.target.value || undefined);
  };

  return (
    <div className='container'>
      <input
        value={globalFilter || ''}
        onChange={handleFilterChange}
        placeholder={`Search...`}
      />
      
      <table {...getTableProps()}>
        <thead>
          {headerGroups.map((headerGroup, headerGroupIndex) => (
            <tr {...headerGroup.getHeaderGroupProps()} key={`headerGroup-${headerGroupIndex}`}>
              {headerGroup.headers.map((column, columnIndex) => (
                <th
                  {...column.getHeaderProps(column.getSortByToggleProps())}
                  key={`header-${headerGroupIndex}-${columnIndex}-${column.id}`}
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {page.map((row, rowIndex) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} key={`row-${rowIndex}`}>
                {row.cells.map((cell, cellIndex) => (
                  <td {...cell.getCellProps()} key={`cell-${rowIndex}-${cellIndex}`}>
                    {cell.render('Cell')}
                  </td>
                ))}
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className='btnd'>
        <button disabled={pageIndex === 0} onClick={() => gotoPage(0)}>First</button>
        <button disabled={!canPreviousPage} onClick={previousPage}>Previous</button>
        <span>
          {pageIndex + 1} of {pageCount}
        </span>
        <button disabled={!canNextPage} onClick={nextPage}>Next</button>
        <button disabled={pageIndex >= pageCount - 1} onClick={() => gotoPage(pageCount - 1)}>Last</button>
      </div>
    </div>
  );
};