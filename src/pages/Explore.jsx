import React from "react";
import { data } from "../assets/data";
import ProductPreview from "../components/ProductPreview";

const Explore = () => {
  return (
    <div className="">
        {data.furniture.map((item, idx) => (
            <ProductPreview key={idx} product={item}/>
        ))}
      
    </div>
  );
};

export default Explore;
