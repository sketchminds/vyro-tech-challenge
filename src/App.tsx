import React from "react";
import { useQuery } from '@apollo/client';
import BounceLoader from "react-spinners/BounceLoader";

import vyroSquareLogo from "./vyroSquareLogo.svg";
import styles from "./App.module.scss";
import Vehicle from "./components/Vehicle";
import { mockedVehicles } from "./mockedVehicles";
import { IVehicle } from "./interfaces/Vehicle";

function App() {
  const { loading, error, data } = useQuery(mockedVehicles);
  
  return (
    <div className={styles.app}>
      <img src={vyroSquareLogo} className={styles.logo} alt="Vyro logo" />
      <h1>Welcome to Vyro</h1>

      <BounceLoader
        color="#36d7b7"
        loading={loading}
        aria-label="Loading Spinner"
      />

      {
        error
          ?
            <h4>Something went wrong. Try again later or contact administrator.</h4>
          :
            <div className={styles.grid}>
              {data?.stocked_vehicles.map((vehicle: IVehicle, i: number) => (
                <Vehicle key={i} {...vehicle} />
              ))}
            </div>
      }
    </div>
  );
}

export default App;
