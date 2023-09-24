import React, { useContext, useEffect, useRef, useState } from "react";
import { ICell, ICellId } from "./interfaces";
import { BunkeringContext } from "./BunkeringContext";
import { useOutsideClick } from "../../scriptsAndHooks/useOutsideAlerter";
import { alertIfNaN } from "../../scriptsAndHooks/usefulFunctions";

/* INFO:
    id={`${rowNum + 1}${collNum + 1}`}. On human language - count from 1
*/

/* TODO:
Cell logic:
+ if cell clicked first time => 
*Cell's state, [isFocused, setIsFocused] = useState(false);
*conditional rendering of a td or an input
  + cell border is slightly increased 
  *const styleForTd variable with style
  - if number (0-9) clicked
  *inputClickHandler on input element
  *useEffect to add an event listener
    - cells value can be edited
  - if clicked second time
    - cells value can be edited
  - if clicked outside
    - cell borders goes to default
*/
const Cell = ({ id, value }: ICell) => {
  // first click on cell
  const [isFocused, setIsFocused] = useState(false);
  const styleForTd = {
    padding: 0,
    margin: 0,
    outline: "2px solid black",
    outlineOffset: "-2px",
  };
  // second click on cell
  const [isEditing, setIsEditing] = useState(false);

  const context = useContext(BunkeringContext);
  // to see if click was done outside of that component
  const wrapperRef = useRef(null);
  let clickedOutside = useOutsideClick(wrapperRef);

  function cellClickedFirstTime(e: any) {
    wrapperRef.current = e.target;
    // clickedOutside = false;
    setIsFocused(true);
  }

  function cellPositionInState(id: any): ICellId {
    const rowId: number = +id.split(";")[0];
    const columnId: number = +id.split(";")[1];
    return { row: rowId, col: columnId };
  }

  function cellChangeHandler(e: any) {
    alertIfNaN(e);

    let value: number = +e.target.value;
    if (value < 0 || Number.isNaN(value)) value = 0;
    context?.dispatch({
      type: "change_value",
      payload: {
        cellId: cellPositionInState(e.target.id),
        value: value,
      },
    });
  }

  function inputClickHandler(e: any) {
    wrapperRef.current = e.target;
  }

  // to add an event listener, that can catch user input
  // and filter: cell is clicked 1 time (isFocused),
  // input is number
  useEffect(() => {
    clickedOutside ? setIsFocused(false) : "";
    wrapperRef.current = null;
  }, [clickedOutside]);

  useEffect(() => {
    const cellSelectedAndUserTyping = (e: any) => {
      alertIfNaN(e);
    };
    if (!isFocused) return;
    window.addEventListener("keydown", cellSelectedAndUserTyping);
    return () => {
      window.removeEventListener("keydown", cellSelectedAndUserTyping);
    };
  }, [isFocused]);

  // RETURN:
  if (isFocused === false) {
    return (
      <td ref={wrapperRef} id={id} key={id} onClick={cellClickedFirstTime}>
        {value}
      </td>
    );
  } else {
    return (
      <td ref={wrapperRef} id={id} key={id} style={styleForTd}>
        <input
          onClick={inputClickHandler}
          onChange={cellChangeHandler}
          value={
            context?.state.rows[cellPositionInState(id).row][
              cellPositionInState(id).col
            ]
          }
          style={{
            padding: 0,
            margin: 0,
            height: "100%",
            width: "100%",
            border: "none",
            borderRadius: "0",
          }}
        />
      </td>
    );
  }
};

export default Cell;
