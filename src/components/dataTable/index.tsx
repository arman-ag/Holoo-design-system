'use client';
import { DirectionProvider } from '@radix-ui/react-direction';
import {
  RankingInfo,
  compareItems,
  rankItem,
} from '@tanstack/match-sorter-utils';

import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  FilterFn,
  SortingFn,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  sortingFns,
  useReactTable,
} from '@tanstack/react-table';
import { ChevronLeft, ChevronRight, FilterIcon, Search } from 'lucide-react';
import * as React from 'react';
import { Button } from '../buttons';
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../dialog';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../table';
declare module '@tanstack/table-core' {
  interface FilterFns {
    fuzzy: FilterFn<unknown>;
  }
  interface FilterMeta {
    itemRank: RankingInfo;
  }
}

export function DataTable<TData, TValue>({ columns, data }) {
  // //FILTER
  // // A debounced input react component
  const rerender = React.useReducer(() => ({}), {})[1];

  const fuzzyFilter: FilterFn<any> = (row, columnId, value, addMeta) => {
    // Rank the item
    const itemRank = rankItem(row.getValue(columnId), value);

    // Store the itemRank info
    addMeta({
      itemRank,
    });

    // Return if the item should be filtered in/out
    return itemRank.passed;
  };
  const fuzzySort: SortingFn<any> = (rowA, rowB, columnId) => {
    let dir = 0;

    // Only sort by rank if the column has ranking information
    if (rowA.columnFiltersMeta[columnId]) {
      dir = compareItems(
        rowA.columnFiltersMeta[columnId]?.itemRank!,
        rowB.columnFiltersMeta[columnId]?.itemRank!,
      );
    }

    // Provide an alphanumeric fallback for when the item ranks are equal
    return dir === 0 ? sortingFns.alphanumeric(rowA, rowB, columnId) : dir;
  };
  interface DataTableProps<TData, TValue> {
    columns: ColumnDef<TData, TValue>[];
    data: TData[];
    searchComponent: JSX.Element[] | JSX.Element;
  }

  function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }: {
    value: string | number;
    onChange: (value: string | number) => void;
    debounce?: number;
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [value, setValue] = React.useState(initialValue);

    React.useEffect(() => {
      setValue(initialValue);
    }, [initialValue]);

    React.useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value);
      }, debounce);

      return () => clearTimeout(timeout);
    }, [value]);

    return (
      <input
        {...props}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    );
  }

  function Filter({
    column,
    table,
  }: {
    column: Column<any, unknown>;
    table: any;
  }) {
    const firstValue = table
      ?.getPreFilteredRowModel()
      .flatRows[0]?.getValue(column.id);

    const columnFilterValue = column?.getFilterValue();

    const sortedUniqueValues = React.useMemo(
      () =>
        typeof firstValue === 'number'
          ? []
          : Array.from(column.getFacetedUniqueValues().keys()).sort(),
      [column.getFacetedUniqueValues()],
    );

    return typeof firstValue === 'number' ? (
      <div>
        <div className='flex space-x-2'>
          {/* <DebouncedInput
            type='number'
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [
                value,
                old?.[1],
              ])
            }
            placeholder={`Min ${
              column.getFacetedMinMaxValues()?.[0]
                ? `(${column.getFacetedMinMaxValues()?.[0]})`
                : ''
            }`}
            className='w-24 border shadow rounded'
          /> */}
          {/* <DebouncedInput
            type='number'
            min={Number(column.getFacetedMinMaxValues()?.[0] ?? '')}
            max={Number(column.getFacetedMinMaxValues()?.[1] ?? '')}
            value={(columnFilterValue as [number, number])?.[1] ?? ''}
            onChange={(value) =>
              column.setFilterValue((old: [number, number]) => [
                old?.[0],
                value,
              ])
            }
            placeholder={`Max ${
              column.getFacetedMinMaxValues()?.[1]
                ? `(${column.getFacetedMinMaxValues()?.[1]})`
                : ''
            }`}
            className='w-24 border shadow rounded'
          /> */}
        </div>
        <div className='h-1' />
      </div>
    ) : (
      <>
        <datalist id={column.id + 'list'}>
          {sortedUniqueValues.slice(0, 5000).map((value: any) => (
            <option value={value} key={value} />
          ))}
        </datalist>
        <DebouncedInput
          type='text'
          value={(columnFilterValue ?? '') as string}
          onChange={(value) => column.setFilterValue(value)}
          placeholder={`Search... (${column.getFacetedUniqueValues().size})`}
          className='w-36 border shadow rounded'
          list={column.id + 'list'}
        />
        <div className='h-1' />
      </>
    );
  }
  const [globalFilter, setGlobalFilter] = React.useState('');
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>(
    [],
  );
  const [sorting, setSorting] = React.useState([]);

  const table = useReactTable({
    data,
    columns,
    onGlobalFilterChange: setGlobalFilter,
    getFilteredRowModel: getFilteredRowModel(),
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onSortingChange: setSorting,
    getSortedRowModel: getSortedRowModel(),
    onColumnFiltersChange: setColumnFilters,
    globalFilterFn: fuzzyFilter,
    filterFns: {
      fuzzy: fuzzyFilter,
    },
    state: {
      columnFilters,
      sorting,
      globalFilter,
    },
  });
  React.useEffect(() => {
    if (table.getState().columnFilters[0]?.id === 'fullName') {
      if (table.getState().sorting[0]?.id !== 'fullName') {
        table.setSorting([{ id: 'fullName', desc: false }]);
      }
    }
  }, [table.getState().columnFilters[0]?.id]);
  return (
    <div>
      <div className='flex items-baseline'>
        <div className='flex mb-6 items-center  justify-between w-[13.12rem] h-[2.06rem]  rounded-r-md bg-white'>
          <button
            type='submit'
            className='rounded-l-md bg-[#3354F4] flex-shrink-0 flex-grow-0 basis-[3rem] h-full  '
          >
            <Search
              className='mx-auto'
              color='white'
              width={'1.25rem'}
              height={'1.25rem'}
            />
          </button>
          <input
            dir='rtl'
            placeholder='جست وجو...'
            value={globalFilter ?? ''}
            onChange={(e) => setGlobalFilter(String(e.target.value))}
            className='outline-none rounded-r-md px-8  !w-full h-full border border-gray-200 '
          />
        </div>
        <select
          value={table.getState().pagination.pageSize}
          onChange={(e) => {
            table.setPageSize(Number(e.target.value));
          }}
        >
          {[10, 20, 30, 40, 50].map((pageSize) => (
            <option key={pageSize} value={pageSize}>
              Show {pageSize}
            </option>
          ))}
        </select>
        <DirectionProvider dir='rtl'>
          <Dialog>
            <DialogTrigger>
              <button className='rounded-md w-[3.25rem] h-[2.06rem] ml-[.4rem] border-2 border-primary100 text-primary100 hover:text-primary120 hover:bg-primary10 active:bg-primary10 active:text-primary120  '>
                <FilterIcon
                  className='mx-auto'
                  width={'1.25rem'}
                  height={'1.25rem'}
                />
              </button>
            </DialogTrigger>
            <DialogContent dir={'rtl'}>
              <DialogHeader dir={'rtl'}>
                <DialogTitle>
                  <div>فیلتر جدول</div>
                </DialogTitle>
              </DialogHeader>
              <DialogFooter>
                <div
                  style={{ height: '20px', justifyContent: 'space-around' }}
                  className='flex '
                >
                  <Button className='mx-8' size={'sm'}>
                    مشاهده
                  </Button>
                  <Button variant={'outline'} size={'sm'}>
                    لغو
                  </Button>
                </div>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        </DirectionProvider>
      </div>
      <div className='rounded-md border shadow-md'>
        <Table>
          <TableHeader className='bg-gray-50'>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead key={header.id}>
                      <Filter column={header.column} table={table} />
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext(),
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell key={cell.id}>
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
        <div>
          <button
            className='border rounded p-1'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            <ChevronLeft />
          </button>
          <button
            className='border rounded p-1'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            <ChevronRight />
          </button>
          <span className='flex items-center gap-1'>
            <div>Page</div>
            <strong>
              {table.getState().pagination.pageIndex + 1} of{' '}
              {table.getPageCount()}
            </strong>
          </span>
        </div>
      </div>
    </div>
  );
}
