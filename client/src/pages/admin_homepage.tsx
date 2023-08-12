import { useList } from '@pankod/refine-core';

import{ Typography, Box, Stack} from '@pankod/refine-mui'


import{
    PieChart,
    ConcertReferrals,
    TotalRevenue,
    ConcertCard,
} from 'components';
 

const AdminHome = () => {
    {/*za vracanje propertija koristimo ovu kuku */}
    const {data, isLoading, isError} = useList({
        resource:'concerts',
        config: {
            pagination:{
            pageSize: 6
            }
        }


    })
//koristi se opcionalni operator ?. da bi se izbeglo pristupanje undefined vrednostima 
//u objektu data. Ako data ne postoji, uzmemo prazan niz umesto undefined vrednosti.
    const latestProperties = data?.data ?? [];

    if(isLoading) return <Typography>Loading...</Typography>
    if(isError) return <Typography>Something went wrong!</Typography>


    return(

        <Box sx = {{backgroundImage: "linear-gradient(90deg, rgba(152,150,241,1) 0%, rgba(177,186,241,1) 100%)",
        padding:'20px', borderRadius:'25px'}}>
            <Typography fontSize={25} fontWeight={700} color="white">
                Admin Dashboard
            </Typography>


            <Stack mt="25px" width="100%" direction={{xs: 'column', lg: 'row'}} gap={4}>
                <TotalRevenue/>
                <ConcertReferrals/>
            </Stack>


            <Box mt="20px" display="flex" flexWrap="wrap" gap={4}>
                <PieChart
                    title="Tickets for Sale"
                    value={684}
                    series={[75,25]}
                    colors={['#9896f1', '#d59bf6']}                
                />
                <PieChart
                    title="Total customers"
                    value={5684}
                    series={[75,25]}
                    colors={['#9896f1', '#d59bf6']}                
                />
                <PieChart
                    title="Successful sales"
                    value={555}
                    series={[75,25]}
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
                sx={{backgroundColor:'#d59bf6', padding:'20px', borderRadius:'25px'}}
                >
                <Typography fontSize="18px" fontWeight={600} color="white"> Latest concerts </Typography>
                <Box mt={2.5} sx={{display: 'flex', flexWrap:'wrap', gap:4, }}>
                {latestProperties.map((concert) => (

                    <ConcertCard
                    key={concert._id}
                    id={concert._id}
                    title={concert.title}
                    location={concert.location}
                    price={concert.price}
                    photo={concert.photo}
                    />
                ))}
                </Box>

            </Box>
        </Box>
        
    )
}

export default AdminHome