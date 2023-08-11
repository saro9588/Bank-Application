import React, { useContext } from "react";
import { CardContext } from "./CardContext";
import Card from "./Card";

function AllData(){
    const ctx = useContext(CardContext);
    return (
      <Card 
      bgcolor="primary"
      header="All Data in Store"
      body={(
          <div>
             <h5>{JSON.stringify(ctx)}</h5>
          </div>
      )}
      />
    );
  }
    
  export default AllData;