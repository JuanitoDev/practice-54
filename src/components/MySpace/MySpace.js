import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {
  deleteStory,
  fetchASpace,
  spacesFetched,
} from "../../store/spaces/actions";

import { selectUserSpace } from "../../store/spaces/selectors";
import "./MySpace.css";
import moment from "moment";

export default function MySpace() {
  const dispatch = useDispatch();

  const mySpaceData = useSelector(selectUserSpace);
  console.log(mySpaceData);

  useEffect(() => {
    // dispatch
    dispatch(fetchASpace);
  }, [dispatch]);

  return (
    <div
      style={{
        backgroundColor: "white",
      }}
    >
      <div
        className="body-myspace"
        style={{
          alignContent: "center",
          width: "700px",
          margin: "auto",
        }}
      >
        <h5
          style={{
            margin: "1em",
            padding: "1.5em",
            textAlign: "center",
          }}
        >
          My stories
        </h5>

        <div
          className="sub-header"
          style={{
            padding: "1.5em",
            display: "inline",
          }}
        >
          <form
            action=""
            style={{
              display: "inline",
              margin: "1em",
            }}
          >
            <select name="stories" id="stories">
              <option value="all stories">All Stories</option>
              <option value="last m">Last month</option>
              <option value="last 3">Last 3 months</option>
              <option value="last 6">Last 6 months</option>
            </select>
          </form>
          <button
            style={{
              backgroundColor: "#FF5959",
              borderStyle: "none",
              color: "white",
              float: "right",
              padding: ".5em",
              marginRight: "3em",
            }}
          >
            New Story
          </button>
        </div>
        {!mySpaceData ? (
          "Loading"
        ) : (
          <div className="stories-section" style={{}}>
            {mySpaceData.stories.map((story) => {
              return (
                <div
                  style={{
                    padding: "2em",
                    margin: "1em",
                    border: "1px solid #e3e3e3",
                    marginTop: "2em",
                    backgroundColor: "white",
                  }}
                >
                  <h5
                    style={{
                      display: "inline",
                      fontWeight: "bold",
                    }}
                  >
                    {story.name}
                  </h5>
                  <p
                    style={{
                      float: "right",
                      display: "inline",
                      color: "grey",
                    }}
                  >
                    {moment(story.createdAt).format("MMM YYYY")}
                  </p>
                  <div>
                    <p
                      style={{
                        marginTop: "1em",
                        textAlign: "justify",
                      }}
                    >
                      {story.content}
                    </p>
                    <button
                      style={{
                        float: "right",
                        textDecoration: "underline",
                        border: "none",
                        backgroundColor: "white",
                      }}
                      onClick={() => dispatch(deleteStory(story.id))}
                    >
                      Delete
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
