import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces } from "../store/spaces/actions";
import { selectSpaces } from "../store/spaces/selectors";
import { Link } from "react-router-dom";

export default function Homepage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  console.log("Is spaces rendering?", spaces);

  useEffect(() => {
    dispatch(fetchSpaces);
  }, []);
  return (
    <div className="body">
      {!spaces
        ? "No spaces"
        : spaces.map((space, i) => {
            return (
              <div key={i}>
                <h3>{space.title}</h3>
                <Link to={`/spaces/${space.id}`}>
                  <button className="btn">Visit Space</button>
                </Link>
              </div>
            );
          })}
    </div>
  );
}
