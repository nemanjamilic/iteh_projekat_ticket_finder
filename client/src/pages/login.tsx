import { useEffect, useRef } from "react";
import { useLogin } from "@pankod/refine-core";
import { Container, Box, color } from "@pankod/refine-mui";

// Logo...
import { ticket_finder } from '../assets';

import { CredentialResponse } from "../interfaces/google";

export const Login: React.FC = () => {
  //definisemo funkciju useLogin() koja poziva funkciju mutate koja se kosristi za proveru kredincijala korisnika pre prijave na server.
  //prijava se vrsi klikom na google dugme.
  const { mutate: login } = useLogin<CredentialResponse>();

  //Google dugme za prijavu. Predstavljeno je kao funkcija.
  const GoogleButton = (): JSX.Element => {
    //useRef() React hook da bi se dobio referenca na HTML div element u kome će se prikazati Google dugme. 
    const divRef = useRef<HTMLDivElement>(null);
    //useEffect() React hook se koristi za inicijalizaciju Google API-ja i prikazivanje Google dugmeta
    useEffect(() => {
      if (typeof window === "undefined" || !window.google || !divRef.current) {
        return;
      }

      try {
        // Ova funkcija se izvršava samo jednom, kada se komponenta učita.
        window.google.accounts.id.initialize({
          ux_mode: "popup",
          client_id: process.env.REACT_APP_GOOGLE_CLIENT_ID,
          //callback funkcija koja će se izvršiti kada korisnik uspešno prijavi 
          //se na Google nalog. Callback funkcija poziva login() funkciju, koja se 
          //dobija iz useLogin() funkcije, sa CredentialResponse objektom koji predstavlja kredencijale korisnika.
          callback: async (res: CredentialResponse) => {
            if (res.credential) {
              login(res);
            }
          },
        });
        //izgled Google button-a
        window.google.accounts.id.renderButton(divRef.current, {
          theme: "filled_blue",
          size: "large",
          type: "standard",
        });
        //Login neuspesan
      } catch (error) {
        console.log(error);
      }
    }, []); 

    return <div ref={divRef} />;
  };

  return (
    <Box
      component="div"
      sx={{
        backgroundImage: "url('https://cdn.tourismontheedge.com/wp-content/uploads/2021/05/music-festivals-2021.jpg')",
        backgroundSize: 'cover',
      }}
    >
      <Container
        component="main"
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundImage: 'linear-gradient(0deg, rgba(197,136,221,1) 25%, rgba(82,49,180,1) 91%)',
            width: '1200px',
            height: '200px',
            marginLeft: '-400px',
            opacity: '80%',
            borderRadius: "10px",
            padding: "15px"
          }}
        >
          <div>
            <img src={ticket_finder} alt="Ticket_finder Logo" />
          </div>
          <Box mt={4}>
            <GoogleButton />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};
