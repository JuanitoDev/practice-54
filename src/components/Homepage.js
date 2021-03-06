import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../store/spaces/actions";
import { selectSpaces } from "../store/spaces/selectors";
import { Link } from "react-router-dom";
import "./Homepage.css";

export default function Homepage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  // console.log("Is spaces rendering?", spaces);

  useEffect(() => {
    dispatch(fetchSpaces);
  }, []);

  return (
    <div>
      <h5>Spaces for you</h5>
      <div className="body">
        {!spaces
          ? "No spaces"
          : spaces.map((space, i) => {
              return (
                <div
                  className="container"
                  key={i}
                  style={{
                    boxSizing: "inherit",
                    boxShadow: "5px 5px 5px #e1e1e1",
                    margin: "1em",
                    padding: "1em",
                    backgroundColor: "white",
                    display: "inline-grid",
                  }}
                >
                  <ul className="list-spaces">
                    <li>
                      <h3
                        style={{
                          fontWeight: 600,
                          marginBottom: "1em",
                        }}
                      >
                        {space.title}
                      </h3>
                      <p
                        style={{
                          fontWeight: 300,
                          marginBottom: "1.8em",
                        }}
                      >
                        {space.description}
                      </p>
                      <Link to={`/spaces/${space.id}`}>
                        <button
                          className="btn"
                          style={{
                            backgroundColor: "#ff5959",
                            border: "none",
                            textAlign: "center",
                            color: "white",
                          }}
                        >
                          Visit Space
                        </button>
                      </Link>
                    </li>
                  </ul>
                </div>
              );
            })}
      </div>
    </div>
  );
}
