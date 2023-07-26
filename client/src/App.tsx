import React from "react";

import { Refine, AuthProvider } from "@pankod/refine-core";
import {
  notificationProvider,
  RefineSnackbarProvider,
  CssBaseline,
  GlobalStyles,
  ReadyPage,
  ErrorComponent,
} from "@pankod/refine-mui";

import{
  AccountCircleOutlined,
  PeopleAltOutlined,
  VillaOutlined,
} from '@mui/icons-material';

import InfoIcon from '@mui/icons-material/Info';

import dataProvider from "@pankod/refine-simple-rest";
import { MuiInferencer } from "@pankod/refine-inferencer/mui";
import routerProvider from "@pankod/refine-react-router-v6";
import axios, { AxiosRequestConfig } from "axios";
import { ColorModeContextProvider } from "contexts";
import { Title, Sider, Layout, Header } from "components/layout";
import { CredentialResponse } from "interfaces/google";
import { parseJwt } from "utils/parse-jwt";

import { 
  Login,
  Home,

} from "pages";

function App() {

  return (
    <ColorModeContextProvider>
      <CssBaseline />
      <GlobalStyles styles={{ html: { WebkitFontSmoothing: "auto" } }} />
      <RefineSnackbarProvider>
        <Refine
          dataProvider={dataProvider("http://localhost:8080/api/v1")}
          notificationProvider={notificationProvider}
          ReadyPage={ReadyPage}
          catchAll={<ErrorComponent />}
          resources={[
            {
              name: "properties",
              options:{ label: 'Properties'},
              icon: <VillaOutlined></VillaOutlined>
            },
            {
              name: "agents",
              options:{ label: 'Agents'},
              icon: <PeopleAltOutlined></PeopleAltOutlined>
            },
            {
              name: "about-us",
              options:{ label: 'About us'},
              icon: <InfoIcon></InfoIcon>
            },
            {
              name: "my-profile",
              options:{ label: 'My profile'},
              icon: <AccountCircleOutlined></AccountCircleOutlined>
            },
          ]}
          Title={Title}
          Sider={Sider}
          Layout={Layout}
          Header={Header}
          routerProvider={routerProvider}
          LoginPage={Login}
          DashboardPage={Home}
        />
      </RefineSnackbarProvider>
    </ColorModeContextProvider>
  );
}

export default App;
