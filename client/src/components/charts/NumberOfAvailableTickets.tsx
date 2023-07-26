import { IoTicketSharp } from 'react-icons/io5';

import { Typography, Box, Stack} from '@pankod/refine-mui'
import { SatisfactionBoxProps } from 'interfaces/home'

const NumberOfAvailableTickets = ({title, value} : SatisfactionBoxProps) => {
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


    <Stack>
    <IoTicketSharp
    style={{ color: "white", width:"100px", height:"100px", margin:"20px"}}
    />
    </Stack>
      
    </Box>
  )
}

export default NumberOfAvailableTickets