import { useOne } from "@pankod/refine-core";
import { useParams } from "@pankod/refine-react-router-v6";

import { Profile } from "components";

const ManagerProfile = () => {
    const { id } = useParams();

    //prikazuje jedan resurs is tabele users i id od tog korisnika
    const { data, isLoading, isError } = useOne({
        resource: "users",
        id: id as string,
    });

    console.log(data);

    //koristi se opcionalni operator ?. da bi se izbeglo pristupanje undefined vrednostima 
    //u objektu data. Ako data ne postoji, uzmemo prazan niz umesto undefined vrednosti.
    const myProfile = data?.data ?? [];

    if (isLoading) return <div>loading...</div>;
    if (isError) return <div>error...</div>;

    return (
        <Profile
            type="Manager"
            name={myProfile.name}
            email={myProfile.email}
            avatar={myProfile.avatar}
            concerts={myProfile.allConcerts}
        />
    );
};

export default ManagerProfile;