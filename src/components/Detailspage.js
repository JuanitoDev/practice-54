import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

export default function Detailspage() {
  const [spaces, setSpaces] = useState(null);
  const params = useParams();
  console.log("params:", params);
  async function fetchSpaces() {
    const response = await axios.get(
      `http://localhost:4000/spaces/${params.id}`
    );
    setSpaces(response.data);
    console.log("what's here?", response.data.stories);
  }

  useEffect(() => {
    fetchSpaces();
  }, []);
  console.log("what's spaces", spaces);

  // add conditionals!!!

  return (
    <div>
      {!spaces
        ? "No spaces"
        : spaces.stories.map((story) => {
            return (
              <div
                style={{
                  alignContent: "center",
                  boxSizing: "content-box",
                  width: "75%",
                  padding: "5px",
                  display: "flex",
                  boxShadow: "5px 5px 5px #e1e1e1",
                  margin: "5em",
                  height: "40rem",
                  textAlign: "left",
                  backgroundColor: "white",
                  alignItems: "center",
                }}
              >
                <ul style={{ listStyle: "none" }}>
                  <li>
                    <img
                      src={story.imageUrl}
                      style={{
                        height: "30rem",
                        width: "30rem",
                        objectFit: "cover",
                        marginBottom: "1em",
                      }}
                      alt="stories"
                    />
                    <h3
                      style={{
                        fontWeight: 600,
                        marginBottom: "0.3em",
                      }}
                    >
                      {story.content}
                    </h3>
                    <p
                      style={{
                        fontWeight: 300,
                        marginBottom: "1.8em",
                      }}
                    >
                      {" "}
                      <b>Created:</b>
                      {story.createdAt}
                    </p>
                  </li>
                </ul>
              </div>
            );
          })}
    </div>
  );
}

// <p>{spaces.stories[0].name}</p>
// <p>{spaces.stories[0].content}</p>
// <img src={spaces.stories[0].imgUrl} />
// <q>{spaces.stories[0].createdAt}</q>
