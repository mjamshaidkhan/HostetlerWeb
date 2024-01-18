import React from "react";
import Viewer from "./ThreeSixtyViewer";
const ProductPreview = ({ product }) => {
  const img = product.imagesBaseURL;
  const colors = product.colors;

  return (
    <div>
      <main className="grid place-items-top px-40  bg-gray-50 dark:bg-[#121212]">
        <section className="flex flex-col md:flex-row gap-11 py-10 px-5 bg-white dark:bg-[#1f1b24] dark:hover:bg-[#121015]  rounded-xl shadow-xl hover:shadow-2xl  ">
          <div className="text-gray-500 dark:text-white flex flex-col justify-between">
            <div>
              <small className="uppercase">Drag to View All Images</small>
             
            </div>
            <Viewer />

            <div className="">
              <small className="uppercase">COLORS</small>
              <div className="flex flex-wrap md:flex-nowrap gap-1">
                {colors.map((clr, idx) => (
                  <a
                    key={idx}
                    href="#"
                    className="grid place-items-center border px-3 py-2 hover:bg-gray-500 hover:text-white transition"
                  >
                    <small>
                      <img href="#" src={"/colors/" + clr + ".jpg"}></img>
                    </small>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProductPreview;
