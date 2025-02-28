import React from "react";
import requests from "../../../Utils/requests";
import Row from "../Row/Row";

const RowList = () => {
  return (
    <>
      <Row
        title="Netflix Originals"
        url={requests.originals}
        isLargeRow={true}
      />
      <Row title="Latest Trending" url={requests.trending} />
      <Row title="Top Rated" url={requests.top_rated} />
      <Row title="Action Movies" url={requests.Action} />
      <Row title="Adventure Movies" url={requests.Adventure} />
      <Row title="Animation" url={requests.Animation} />
      <Row title="Drama Movies" url={requests.Drama} />
      <Row title="Documentary" url={requests.Documentary} />
    </>
  );
};

export default RowList;
