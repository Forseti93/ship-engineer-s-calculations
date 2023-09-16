import React from "react";
import styles from "../styles/Bunkering.module.scss";
import Table from "../components/Table/Table";

const Bunkering = () => {
  return (
    <div className={styles.bunkering}>
      <Table
        isLoading={false}
        columnsHeaders={[
          "",
          "Tank",
          "Grade",
          "ULG",
          "Quantity (CBM)",
          "Density of fuel at 15C",
          "Temperature",
          "Corrected density",
          "Quantity (MT)",
        ]}
        rows={[]}
      />
    </div>
  );
};

export default Bunkering;
