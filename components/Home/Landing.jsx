import React from "react";
import LandingBox from "./LandingBox";
import { Fade } from "react-awesome-reveal";

const Landing = () => {
  return (
    <div className="flex flex-col lg:flex-row mt-[10px] mb-[30px] gap-2">
      {/* First Section */}

      <div className="lg:w-1/2 lg:order-1">
        <LandingBox
          img="/cat1.jpg"
          title="Clothes’s fashion"
          height="600px"
          link="/all-products/cat=Clothing"
          text="Sitamet, consectetur adipiscing elit, sed do eiusmod tempor incidid-unt labore edolore magna aliquapendisse ultrices gravida."
        />
      </div>

      {/* Second Section */}
      <div className="lg:w-1/2 lg:order-2 ">
        {/* First Row */}
        <div className="lg:flex lg:flex-row gap-2">
          <div className="lg:w-1/2">
            <LandingBox
              img="/category-2.jpg.webp"
              title="Electronics"
              height="300px"
              link="/all-products?cat=Electronics"
              text="358 items"
            />
          </div>
          <div className="lg:w-1/2">
            <LandingBox
              img="/category-3.jpg.webp"
              title="Beauty"
              link="/all-products?cat=Beauty"
              height="300px"
              text="158 items"
            />
          </div>
        </div>

        {/* Second Row */}
        <div className="lg:flex lg:flex-row gap-2">
          <div className="lg:w-1/2">
            <LandingBox
              img="/cat2.jpg"
              title="Sports fashion"
              height="300px"
              link="/all-products?cat=Sports"
              text="458 items"
            />
          </div>
          <div className="lg:w-1/2">
            <LandingBox
              img="/category-5.jpg.webp"
              title="Accessories"
              link="/all-products?cat=Accessories"
              height="300px"
              text="589 items"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
