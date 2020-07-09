import React from "react";
// import faker from 'faker';
import { isEmpty } from "lodash";
import { Redirect } from "react-router-dom";
import CreateComedian from "./CreateComedian";
import DisplayComedian from "./DisplayComedian";
import BackgroundCard from "./BackgroundCard";
import "../App.css";

const App = () => {
  const user = sessionStorage.getItem("user");
  if (user === null) {
    window.location.href = "/login";
  }

  return (
    <div>
      {!isEmpty(user) && (
        <main className="ui grid">
          <div className="sixteen wide center aligned column bogusHeader">
            <h1>Bogus Comedians</h1>
          </div>

          <div className="ui stackable sixteen wide column grid">
            <section className="listSection four wide column">
              <BackgroundCard divMargin="auto" />
            </section>
            <section
              className="createSection twelve wide column"
              style={{ paddingLeft: "50px" }}
            >
              <div className={"column row"}>
                <div className="ui container" style={{ marginBottom: "2rem" }}>
                  {!isEmpty(user) && (
                    <DisplayComedian user={JSON.parse(user)} />
                  )}
                </div>
                <div
                  className="ui column"
                  style={{ marginTop: "40px", margin: "1rem" }}
                >
                  <CreateComedian />
                </div>
              </div>
            </section>
          </div>
        </main>
      )}
    </div>
  );
};

export default App;
