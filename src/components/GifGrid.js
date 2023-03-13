import React from "react";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

export const GifGrid = ({ category }) => {
  const { data, loading } = useFetchGifs(category); // este 'category' va a caer en useFetchGifs como props

  return (
    <>
      <h3>{category}</h3>

      {loading && <p>Loading</p>}

      <div className="card-grid">
        {data.map((img) => {
          return <GifGridItem key={img.id} {...img} />;
        })}
      </div>
    </>
  );
};
