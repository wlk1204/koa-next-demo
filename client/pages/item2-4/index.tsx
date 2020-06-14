import React from "react";
import axios from "axios";

interface Iprops {
  list: any[];
}

const Index = (props: Iprops) => {
  const { list } = props;

  const renderTree = (data) => {
    return (
      <ul>
        {data.map((x) => {
          if (x.name) {
            return (
              <>
                <li key={x.name}>{x.name}</li>
                {x.items && renderTree(x.items)}
              </>
            );
          }
        })}
      </ul>
    );
  };

  return <div>{renderTree(list)}</div>;
};

Index.getInitialProps = async (ctx) => {
  const list = await axios.get("http://localhost:3000/getDir").then((x) => {
    if (x.data.message) {
      return x.data.data;
    }
  });
  return { list };
};

export default Index;
