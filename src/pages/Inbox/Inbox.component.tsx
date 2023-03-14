import React from "react";
import { InboxItems } from "./Inbox.styles.tsx";
const Inbox = () => {
  const data = JSON.parse(localStorage.getItem("task"));
  console.log(data);
  const changeHandler = (item) => {
    var chkBox = document.getElementById("taskCheckBox");
    if (chkBox?.checked) {
      console.log("checked", item);
    } else {
      console.log("unchecked", item);
    }
  };
  return (
    <InboxItems>
      <article>
        <h1>Tasks List</h1>
        <dl>
          {data.map((item) => {
            return (
              <>
                <dt>
                  <input
                    class="form-check-input"
                    type="checkbox"
                    onChange={changeHandler}
                    value=""
                    id="taskCheckBox"
                  ></input>
                  <span>{item.taskname}</span>
                </dt>
                <dd>{item.date}</dd>
              </>
            );
          })}
        </dl>
      </article>
    </InboxItems>
  );
};
export default Inbox;
