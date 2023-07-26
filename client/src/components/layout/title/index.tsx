import React from "react";
import { useRouterContext, TitleProps } from "@pankod/refine-core";
import { Button } from "@pankod/refine-mui";
import {logo, ticket_finder} from 'assets';

export const Title: React.FC<TitleProps> = ({ collapsed }) => {
  const { Link } = useRouterContext();

  return (
    <Button fullWidth variant="text" disableRipple>
      <Link to="/">
        {collapsed ? (
          <img src={logo} alt="Ticket_finder" width="28px" />
        ) : (
          <img src={ticket_finder} alt="Ticket_finder" width="140px" />
        )}
      </Link>
    </Button>
  );
};
