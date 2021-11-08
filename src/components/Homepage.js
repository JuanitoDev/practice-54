import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSpaces, spacesFetched } from "../store/spaces/actions";
import { selectSpaces } from "../store/spaces/selectors";

export default function Homepage() {
  const dispatch = useDispatch();
  const spaces = useSelector(selectSpaces);
  console.log("Is spaces rendering?", spaces);

  useEffect(() => {
    dispatch(fetchSpaces);
  }, []);
  return (
    <div className="body">
      <h1>Hello from Homepage!</h1>
      {!spaces
        ? "No spaces"
        : spaces.map((space, i) => {
            return (
              <div key={i}>
                <p>{space.title}</p>
                {/* <button onClick={() => dispatch(removePost(i))}>x</button> */}
              </div>
            );
          })}
    </div>
  );
}
