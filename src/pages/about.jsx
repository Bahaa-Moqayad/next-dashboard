import SiteLayout from "@/components/SiteLayout";

const Page = () => {
  return (
    <>
      <div class="about-page-sections">
        <div class="breakpages">
          {" "}
          <span> home + Products + Wallets </span>{" "}
        </div>
        <div class="about-header-body">
          <div class="about-desc-header" data-aos="fade-right">
            <h1>
              {" "}
              <span> Wallets </span>{" "}
            </h1>
            <h2> Dial The Future </h2>
            <p>
              {" "}
              Lorem ipsum dolor sit amet consectetur. Mauris augue feugiat ut
              vulputate libero. Elementum nulla faucibus diam velit. A augue
              mattis libero at augue pellentesque. Vitae rhoncus ut ullamcorper
              et faucibus viverra morbi bibendum. Fringilla posuere laoreet
              faucibus non. Amet proin ipsum vitae tortor. Cras dictumst netus
              lorem at in aenean vitae. Praesent tempus a congue pharetra
              nullam.{" "}
            </p>
          </div>
          <div class="about-image-header">
            <img src="./images/about-3.png" alt="header-image" />
            <img src="./images/dot-vector.svg" class="dot-vector" />
          </div>
        </div>
        <div class="about-preview">
          <div class="about-text">
            <p>
              Lorem ipsum dolor sit amet consectetur. Mauris augue feugiat ut
              vulputate libero. Elementum nulla faucibus diam velit. A augue
              mattis libero at augue pellentesque. Vitae rhoncus ut ullamcorper
              et faucibus viverra morbi bibendum. Fringilla posuere laoreet
              faucibus non. Amet proin ipsum vitae tortor. Cras dictumst netus
              lorem at in aenean vitae. Praesent tempus a congue pharetra
              nullam. Lorem ipsum dolor sit amet consectetur. Mauris augue
              feugiat ut vulputate libero. Elementum nulla faucibus diam velit.
              A augue mattis libero at augue pellentesque. Vitae rhoncus ut
              ullamcorper et faucibus viverra morbi bibendum. Fringilla posuere
              laoreet faucibus non. Amet proin ipsum vitae tortor. Cras dictumst
              netus lorem at in aenean vitae. Praesent tempus a congue pharetra
              nullam.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur. Mauris augue feugiat ut
              vulputate libero. Elementum nulla faucibus diam velit. A augue
              mattis libero at augue pellentesque. Vitae rhoncus ut ullamcorper
              et faucibus viverra morbi bibendum. Fringilla posuere laoreet
              faucibus non. Amet proin ipsum vitae tortor. Cras dictumst netus
              lorem at in aenean vitae. Praesent tempus a congue pharetra
              nullam. Lorem ipsum dolor sit amet consectetur. Mauris augue
              feugiat ut vulputate libero. Elementum nulla faucibus diam velit.
              A augue mattis libero at augue pellentesque. Vitae rhoncus ut
              ullamcorper et faucibus viverra morbi bibendum. Fringilla posuere
              laoreet faucibus non. Amet proin ipsum vitae tortor. Cras dictumst
              netus lorem at in aenean vitae. Praesent tempus a congue pharetra
              nullam.
            </p>
          </div>
          <div class="about-image">
            <img src="./images/about-page-preview.png" class="about-image" />
            <img src="./images/about-preview-image.png" class="about-bg" />
          </div>
        </div>
      </div>
    </>
  );
};

Page.getLayout = (page) => <SiteLayout>{page}</SiteLayout>;

export default Page;
