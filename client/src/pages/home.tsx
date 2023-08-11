import { useList } from '@pankod/refine-core';

import{ Typography, Box, Stack} from '@pankod/refine-mui'
import LocalActivityOutlinedIcon from '@mui/icons-material/LocalActivityOutlined';
import myImage from '../assets/crowd13.jpg'; 
import myImage2 from '../assets/concert12.jpg';

import{
    PieChart,
    PropertyReferrals,
    SatisfactionBox,
    TotalRevenue,
    NumberOfAvailableTickets
} from 'components';
 

const Home = () => {


    return(
        <Box sx={{ display: 'flex' , backgroundColor: '#9896f1', borderRadius:'35px'}}>
        <Box
        sx={{  flex: 1,
            backgroundColor: '#9896f1',
            zIndex: 1, 
            padding: '20px',
            borderRadius:'35px'}}
        >
            <Typography fontSize={25} fontWeight={700} color="#FFFFFF">
                Welcome to Ticket Finder <LocalActivityOutlinedIcon 
                sx={{ height: '35px', width: '35px', verticalAlign: 'middle' }}/>
                 
            </Typography>
            
            
            <Box
                flex = {1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
                sx={{ background: '#d59bf6'}}
                >
            <Typography fontSize={15} fontWeight={600} color="#FFFFFF">
            Welcome to Ticket Finder, your premier destination for securing tickets 
            to the most sought-after events, concerts, and shows! We are an online 
            ticket selling platform dedicated to bringing you unparalleled access 
            to a world of entertainment and unforgettable experiences.
            
            At Ticket Finder, we understand the thrill of attending 
            live events and the magic they create in our lives. 
            That's why we are passionate about connecting you with the tickets you desire, 
            providing a seamless and convenient way to explore a plethora of entertainment 
            options right at your fingertips.
            </Typography>
            <br></br>
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
            gap={8}
            borderRadius="15px"
            minHeight="110px"
            width="fit-content"
            sx={{ background: '#d59bf6'}}

            >
              <img 
            src= {myImage}
            alt='Concert'
            style={{ height: '241px', width: '500px', borderRadius: '35px' }}
            />

            <img 
            src= {myImage2}
            alt='Concert'
            style={{ height: '241px', width: '500px' , borderRadius: '35px' }}
            />  
            </Box>
            

            </Box>
 <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <SatisfactionBox
                title="Number of satisfied customers"
                value={550}
                
                />

                <NumberOfAvailableTickets
                 title="Number of available tickets"
                 value={1500}
                />
                
                <PieChart
                    title="Total number of events"
                    value={5684}
                    series={[70,30]}
                    colors={['#9896f1', '#d59bf6']}                
                />
            </Box>
            <Box
                flex = {1}
                borderRadius="15px"
                padding="20px"
                bgcolor="#fcfcfc"
                display="flex"
                flexDirection="column"
                minWidth="100%"
                mt="25px"
                sx={{ background: '#d59bf6'}}
                >
                <Typography fontSize="18px" fontWeight={600} color="#FFFFFF"> NEW CONCERTS</Typography>
                <Box mt={2.5} sx={{display: 'flex', flexWrap:'wrap', gap:4}}>
                        <div>...Latest concerts...</div>
                </Box>

            </Box>

           


            
        </Box>
        </Box>
        
    )
}

export default Home