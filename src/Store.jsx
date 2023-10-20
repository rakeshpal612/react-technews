import React from "react";
// import { useContext } from 'react';
// import { AppContext } from './context';
import { useGlobalContext } from "./context";

const Store = () => {
  const { removePost, hits, isLoading } = useGlobalContext();
  // let fetchApi = "https://hn.algolia.com/api/v1/search?query=html"
  // let isLoading = true;
  // const fetchApiData = async (url)=>{
  //     try {
  //         const res = await fetch(url);
  //         const data = await res.json();
  //         // isLoading = false;
  //         console.log(data)

  //     } catch (error) {
  //         console.log(error)
  //     }
  // }

  // useEffect(()=>{
  //     fetchApiData(fetchApi);
  // },[])
  if (isLoading) {
    return (
      <>
        <h2>Loading...</h2>
      </>
    );
  }
  return (
    <>
      <div className="stories-div">
        {hits.map((curPost) => {
          const { title, author, objectID, num_comments, url } = curPost;
          return (
            <div className="card" key={objectID}>
              <h2>{title}</h2>
              <p>
                By <span> {author} </span> | <span>{num_comments}</span>{" "}
                comments
              </p>
              <div className="card_buttons">
                <a href={url} target="_blank" rel="noreferrer">
                  Read More
                </a>
                <a href="#" onClick={() => removePost(objectID)}>
                  Remove
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default Store;
