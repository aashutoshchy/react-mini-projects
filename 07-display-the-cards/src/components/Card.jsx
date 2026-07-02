import React from "react";

function Card({ id, title, subTitle }) {
  return (
    <div className="h-[140px]w-[50px] bg-gray-500">
      <h1>
        <b>ID: </b> {id}
      </h1>
      <p>
        <b>Title</b> {title}
      </p>
      <p>
        <b>Sub Title</b> {subTitle}
      </p>
    </div>
  );
}

export default Card;
