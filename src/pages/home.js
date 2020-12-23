import React from "react";
import Product from "../components/product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-na.ssl-images-amazon.com/images/G/01/AmazonExports/Events/2020/HolidayDeals/Desktop/Fuji_TallHero_HolidayDeals_en_US_1x._CB414278668_.jpg"
        />

        <div className="home__row">
          <Product
            id="1"
            title="Roku Streaming Stick+ | HD/4K/HDR Streaming Device with Long-range Wireless and Voice Remote with TV Controls"
            price={35.0}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41C4EsdONdL._AC_US480_FMwebp_QL65_.jpg"
          />
          <Product
            id="2"
            title="Samsung SSD 860 EVO 1TB 2.5 Inch SATA III Internal SSD (MZ-76E1T0B/AM)"
            price={99.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41qR7C253KL._AC_US400_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="3"
            title="Seagate Portable 2TB External Hard Drive Portable HDD – USB 3.0 for PC, Mac, PS4, & Xbox - 1-year Rescue Service (STGX2000400)"
            price={62.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/31jBba7+ySL._AC_US240_FMwebp_QL65_.jpg"
          />
          <Product
            id="4"
            title="Roku Premiere | HD/4K/HDR Streaming Media Player, Simple Remote and Premium HDMI Cable"
            price={27.0}
            rating={3}
            image="https://images-na.ssl-images-amazon.com/images/I/41bjpRqJneL._AC_US400_FMwebp_QL65_.jpg"
          />
          <Product
            id="5"
            title="Samsung Electronics EVO Select 256GB MicroSDXC UHS-I U3 100MB/s Full HD & 4K UHD Memory Card with Adapter (MB-ME256HA)"
            price={24.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/41UaR+6eAHL._AC_US320_FMwebp_QL65_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="6"
            title="Samsung (MZ-V7E1T0BW) 970 EVO SSD 1TB - M.2 NVMe Interface Internal Solid State Drive with V-NAND Technology, Black/Red"
            price={129.99}
            rating={5}
            image="https://images-na.ssl-images-amazon.com/images/I/41ztP8vgdwL._AC_US240_FMwebp_QL65_.jpg"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
