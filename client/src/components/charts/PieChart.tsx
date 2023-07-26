import ReactApexChart from 'react-apexcharts'

import { Typography, Box, Stack} from '@pankod/refine-mui'
import { PieChartProps } from 'interfaces/home'

const PieChart = ({title, value, series, colors} : PieChartProps) => {
  return (
    <Box
      id="chart"
      flex={1}
      display="flex"
      bgcolor="#fcfcfc"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      pl={3.5}
      py={2}
      gap={2}
      borderRadius="15px"
      minHeight="110px"
      width="fit-content"
      sx={{ background: '#edb1f1'}}

    >
      <Stack direction="column">
        <Typography fontSize={20} color="white">{title}</Typography>
        <Typography fontSize={35} color="#9896f1" fontWeight={700} mt={1}>{value}</Typography>
      </Stack>

      <ReactApexChart
        options={{
          chart: {type: 'donut'},
          colors,
          legend: { show: false },
          dataLabels: { enabled: true },
        }}
        series={series}
        type="donut"
        width="200px"
      />
    </Box>
  )
}

export default PieChart