import DashboardBox from "@/components/DashboardBox";
import {
  useGetKpisQuery,
  useGetProductsQuery,
  useGetTransactionsQuery,
} from "@/state/api";
import { Box, Typography } from "@mui/material";
import { useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { GridCellParams } from "@mui/x-data-grid/models";
import BoxHeader from "@/components/BoxHeader";
import FlexBetween from "@/components/FlexBetween";
import { Cell, Pie, PieChart } from "recharts";
import { useMemo } from "react";

const Row3 = () => {
  const { palette } = useTheme();
  const pieColors = [palette.primary[800], palette.primary[500]];
  const { data: kpiData } = useGetKpisQuery();
  const { data: productData } = useGetProductsQuery();
  const { data: transactionData } = useGetTransactionsQuery();
  // console.log(transactionsData);
  const pieChartData = useMemo(() => {
    if (kpiData) {
      const totalExpenses = kpiData[0].totalExpenses;
      return Object.entries(kpiData[0].expensesByCategory).map(
        ([key, value]) => {
          return [
            {
              name: key,
              value: value,
            },
            {
              name: `${key} of Total`,
              value: totalExpenses - value,
            },
          ];
        }
      );
    }
  }, [kpiData]);

  const productColumns = [
    {
      // to grab the individual data
      field: "_id",
      // name of column
      headerName: "id",
      // speread it
      flex: 1,
    },
    {
      // to grab the individual data
      field: "expense",
      // name of column
      headerName: "Expense",
      // speread it
      flex: 0.5,
      renderCell: (params: GridCellParams) => `INR ${params.value}`,
    },

    {
      // to grab the individual data
      field: "price",
      // name of column
      headerName: "Price",
      // speread it
      flex: 0.5,
      renderCell: (params: GridCellParams) => `INR ${params.value}`,
    },
  ];

  const transactionsColumns = [
    {
      // to grab the individual data
      field: "_id",
      // name of column
      headerName: "id",
      // speread it
      flex: 1,
    },
    {
      // to grab the individual data
      field: "buyer",
      // name of column
      headerName: "Buyer",
      // speread it
      flex: 0.67,
    },

    {
      // to grab the individual data
      field: "amount",
      // name of column
      headerName: "Amount",
      // speread it
      flex: 0.35,
      renderCell: (params: GridCellParams) => `INR ${params.value}`,
    },

    {
      // to grab the individual data
      field: "productIds",
      // name of column
      headerName: "Count",
      // speread it
      flex: 0.1,
      renderCell: (params: GridCellParams) =>
        (params.value as Array<string>).length,
    },
  ];
  return (
    <>
      <DashboardBox gridArea="g">
        <BoxHeader
          title="List of Products"
          sideText={`${productData?.length} products`}
        />
        <Box
          mt="0.5rem"
          p="0 0.5rem"
          height="75%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeperator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={productData || []}
            columns={productColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="h">
        <BoxHeader
          title="Recent Orders"
          sideText={`${transactionData?.length} latest transactions`}
        />
        <Box
          mt="1rem"
          p="0 0.5rem"
          height="80%"
          sx={{
            "& .MuiDataGrid-root": {
              color: palette.grey[300],
              border: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnHeaders": {
              borderBottom: `1px solid ${palette.grey[800]} !important`,
            },
            "& .MuiDataGrid-columnSeperator": {
              visibility: "hidden",
            },
          }}
        >
          <DataGrid
            columnHeaderHeight={25}
            rowHeight={35}
            hideFooter={true}
            rows={transactionData || []}
            columns={transactionsColumns}
          />
        </Box>
      </DashboardBox>
      <DashboardBox gridArea="i">
        <BoxHeader title="Expense Breakdown By Category" sideText="+4%" />
        <FlexBetween mt="0.5rem" gap="0.5rem" p="0 1rem" textAlign="center">
          {pieChartData?.map((data, i) => (
            <Box key={`${data[0].name}-${i}`}>
              <PieChart width={80} height={70}>
                <Pie
                  stroke="none"
                  data={data}
                  innerRadius={18}
                  outerRadius={35}
                  paddingAngle={2}
                  dataKey="value"
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={pieColors[index]} />
                  ))}
                </Pie>
              </PieChart>
              <Typography variant="h5">{data[0].name}</Typography>
            </Box>
          ))}
        </FlexBetween>
      </DashboardBox>
      <DashboardBox gridArea="j">
        <BoxHeader
          title="Overall Summary and Explaination Data"
          sideText="+15%"
        />
        <Box
          height="15px"
          margin="1.25rem 1rem 0.4rem 1rem"
          bgcolor={palette.primary[800]}
          borderRadius="1rem"
        >
          <Box
            height="15px"
            bgcolor={palette.primary[600]}
            borderRadius="1rem"
            width="40%"
          ></Box>
        </Box>
        <Typography margin="0 1rem" variant="h5">
          Total gain recorded is 15%
        </Typography>
      </DashboardBox>
    </>
  );
};

export default Row3;
