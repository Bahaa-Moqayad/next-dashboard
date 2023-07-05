import SiteLayout from "@/components/SiteLayout";
import React from "react";

const Page = () => {
  return (
    <>
      <div class="details-section">
        <div class="breakpages">
          {" "}
          <span> home + Products + Wallets </span>{" "}
        </div>
        <div class="details-header-preview">
          <div class="header-preview-image">
            <img src="./images/about-3.png" />
            <img src="./images/dot-vector.svg" class="dot-vector" />
          </div>
          <div class="details-team-item">
            <img src="./images/teams.png" class="team-person-bg" />
            <img src="./images/teams2.png" class="team-person" />
            <div class="desc-team" data-aos="fade-right">
              <h3> Eng. Salah Kht </h3>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur. Mauris augue feugiat ut
                vulputate libero. Elementum nulla faucibus diam velit. A augue
                mattis libero at augue pellentesque. Vitae rhoncus ut
                ullamcorper et faucibus viverra morbi bibendum. Fringilla
                posuere laoreet faucibus non. Amet proin ipsum vitae tortor.
                Cras dictumst netus lorem at in aenean vitae. Praesent tempus a
                congue pharetra nullam.{" "}
              </p>
              <div class="social-links">
                <a href="#">
                  {" "}
                  <img src="./images/call.svg" />{" "}
                </a>
                <a href="#">
                  {" "}
                  <img src="./images/LinkedIn.png" />{" "}
                </a>
                <a href="#">
                  {" "}
                  <img src="./images/Facebook.png" />{" "}
                </a>
                <a href="#">
                  {" "}
                  <img src="./images/Instagram.png" />{" "}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;
export default Page;
