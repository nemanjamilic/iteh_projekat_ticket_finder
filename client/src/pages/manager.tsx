import { useList } from "@pankod/refine-core";
import { Box, Typography } from "@pankod/refine-mui";

import { ManagerCard } from "components";



const Managers = () => {

    const { data, isLoading, isError } = useList({ resource: "users" });

    //koristi se opcionalni operator ?. da bi se izbeglo pristupanje undefined vrednostima 
    //u objektu data. Ako data ne postoji, uzmemo prazan niz umesto undefined vrednosti.
    const allManagers = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Box>
            <Typography fontSize={25} fontWeight={700} color="#11142d">
                Managers List
            </Typography>

            <Box
                mt="20px"
                sx={{
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "20px",
                    backgroundColor: "#fcfcfc",
                }}
            >
                {allManagers.map((manager) => (
                    (manager.email !== "homenow.manager@gmail.com") && (
                        <ManagerCard
                        key={manager._id}
                        id={manager._id}
                        name={manager.name}
                        email={manager.email}
                        avatar={manager.avatar}
                        noOfConcerts={manager.allConcerts.length}
                        />
                    )
                    ))}

            </Box>
        </Box>
    );
};

export default Managers;