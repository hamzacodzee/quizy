import React from "react";
import { ProgressSpinner } from "primereact/progressspinner";

const Loader = () => {
     return (
          <div
               className="card"
               style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "100vh"
               }}
          >
               <ProgressSpinner />
          </div>
     );
};

export default Loader;
