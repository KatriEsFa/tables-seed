import { DataGrid } from '@mui/x-data-grid';

export type ColumnsData = {
  name: string;
  title: string;
  sortable: boolean;
  icon: string;
  width?: number;
  valueGetter?: (data: any) => string;
};

interface DataTableProps {
  columns: ColumnsData[];
  rowsData: any[];
  pageSize: number;
  rowsPerPage: number;
  selectRows?: boolean;
  rowClick?: (data: any) => void;
};

export default function DataTable({columns, rowsData, pageSize, rowsPerPage, selectRows, rowClick}: DataTableProps) {

  const dataColumnMap =  columns.map(column => ({ ...column, field: column.name, headerName: column.title, valueGetter: column.valueGetter, width:column.width }));

  return (
    <div style={{ height: 400, width: '100%' }}>
      <DataGrid
        rows={rowsData}
        columns={dataColumnMap}
        pageSize={pageSize}
        rowsPerPageOptions={[rowsPerPage]}
        checkboxSelection = {selectRows}
        onRowClick={rowClick}//Conditional needed
      />
    </div>
    //!Using this will attach the usable properties to MUI properties
  );
}