import React from "react";
import Superscript from "../../Superscript";
import styles from "../../styles/Bunkering.module.scss";
import LabeledInputRow from "../../LabeledInputRow";

const BunkeringInputForm = () => {
  // density15DegCels * (1 - (temperatureDegCel - 15) * 0.00064);
  // TODO: get input data
  // TODO: setLocalStorage
  return (
    <form className={styles.form}>
      <div className={styles.row}>
        <LabeledInputRow
          labelClassName={styles.label}
          labelText={
            <span>
              Fuel density at 15<Superscript>&#8728;</Superscript>C:{" "}
            </span>
          }
          inputClassName={styles.input}
          inputId="density15DegCels"
          inputType="number"
          inputName="density15DegCels"
          inputPlaceholder="input"
          required={true}
        />
      </div>
    </form>
  );
};

export default BunkeringInputForm;
