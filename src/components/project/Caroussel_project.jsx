import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import ui from "../../assets/ui.png";
import ui2 from "../../assets/ui2.jpg";

function Caroussel_project() {
  return (
    <div className="caroussel_project">
      <section className="elements_project">
        <h3>TITRE TEST</h3>

        <span className="circle" id="circle_project" />

        <hr className="line_project" />
      </section>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={ui2} alt="image_projet" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ui} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={ui2} alt="" />
        </SwiperSlide>
      </Swiper>

      <div className="title_description_project">
        <h4>URL</h4>
        <p>
          <a
            href="https://www.google.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            TITRE TEST
          </a>
        </p>
      </div>

      <div className="infos_description_project">
        <h4>DESCRIPTION</h4>
        <p className="description_project">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis vel
          incidunt eos harum ratione beatae quos, aut quis ipsam temporibus
          sapiente voluptas placeat quaerat velit earum quam exercitationem,
          voluptates voluptatum eaque consectetur et nisi at asperiores unde.
          Odit, velit officiis. Ea iure dolorem beatae aut id cumque molestias
          at deleniti rerum quidem, repellat sunt ullam sed earum nam facere
          alias autem ab delectus?
        </p>{" "}
      </div>
    </div>
  );
}

export default Caroussel_project;
