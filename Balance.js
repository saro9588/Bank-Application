import React, { useContext } from "react";
import { CardContext } from "./CardContext";
import Card from "./Card";

const Balance = () => {
    const { balance } = useContext(CardContext)

  return (
    <Card 
        bgcolor="primary"
        header="Current Balance"
        body={(
          <>
            <h2>Current Balance</h2>
            <p>${balance}</p>
          </>
        )}
    />
  );
}
export default Balance;