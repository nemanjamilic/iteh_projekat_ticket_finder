import { Email, Phone } from "@mui/icons-material";
import { Box, Stack, Typography } from "@pankod/refine-mui";

import { ProfileProps, ConcertProps } from "interfaces/common";
import ConcertCard from "./ConcertCard";

//provera url slike
function checkImage(url: any) {
    const img = new Image();
    img.src = url;
    return img.width !== 0 && img.height !== 0;
}
//iygled profila
const Profile = ({ type, name, avatar, email, concerts }: ProfileProps) => (
    <Box>
        <Typography fontSize={25} fontWeight={700} color="#11142D">
            {type} Profile
        </Typography>

        <Box mt="20px" borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2.5,
                }}
            >
                <img
                    src="https://img.freepik.com/free-photo/joyful-young-pretty-caucasian-girl-holding-airplane-tickets-doing-yes-gesture-isolated-purple-wall_141793-112321.jpg?w=996&t=st=1691794420~exp=1691795020~hmac=cf18b496ea2c68383e84326ae06d4b8f08bba89a3904f6b1191b2b1bc974a077"
                    width={280}
                    height={250}
                    alt="abstract"
                    className="my_profile-bg"
                />
                <Box
                    flex={1}
                    sx={{
                        marginTop: { md: "58px" },
                        marginLeft: { xs: "20px", md: "0px" },
                    }}
                >
                    <Box
                        flex={1}
                        display="flex"
                        flexDirection={{ xs: "column", md: "row" }}
                        gap="20px"
                    >
                        <img
                            src={
                                checkImage(avatar)
                                    ? avatar
                                    : "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png"
                            }
                            width={78}
                            height={78}
                            alt="user_profile"
                            className="my_profile_user-img"
                        />

                        <Box
                            flex={1}
                            display="flex"
                            flexDirection="column"
                            justifyContent="space-between"
                            gap="30px"
                        >
                            <Stack direction="column">
                                <Typography
                                    fontSize={22}
                                    fontWeight={600}
                                    color="#11142D"
                                >
                                    {name}
                                </Typography>
                                <Typography fontSize={16} color="#808191">
                                    Ticket Manager
                                </Typography>
                            </Stack>

                            <Stack direction="column" gap="30px">
                                
                                <Stack
                                    direction="row"
                                    flexWrap="wrap"
                                    gap="20px"
                                    pb={4}
                                >
                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={14}
                                            fontWeight={500}
                                            color="#808191"
                                        >
                                            Contact
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Phone sx={{ color: "#11142D" }} />
                                            <Typography
                                                fontSize={14}
                                                color="#11142D"
                                                noWrap
                                            >
                                                +381 444 789
                                            </Typography>
                                        </Box>
                                    </Stack>

                                    <Stack flex={1} gap="15px">
                                        <Typography
                                            fontSize={14}
                                            fontWeight={500}
                                            color="#808191"
                                        >
                                            Email address
                                        </Typography>
                                        <Box
                                            display="flex"
                                            flexDirection="row"
                                            alignItems="center"
                                            gap="10px"
                                        >
                                            <Email sx={{ color: "#11142D" }} />
                                            <Typography
                                                fontSize={14}
                                                color="#11142D"
                                            >
                                                {email}
                                            </Typography>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Stack>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>

        {concerts.length > 0 && (
            <Box mt={2.5} borderRadius="15px" padding="20px" bgcolor="#FCFCFC">
                <Typography fontSize={18} fontWeight={600} color="#11142D">
                    {type} Concerts
                </Typography>

                <Box
                    mt={2.5}
                    sx={{
                        display: "flex",
                        flexWrap: "wrap",
                        gap: 2.5,
                    }}
                >
                    {concerts?.map((concert: ConcertProps) => (
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
        )}
    </Box>
);

export default Profile;