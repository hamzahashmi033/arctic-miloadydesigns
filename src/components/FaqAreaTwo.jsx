"use client";
import TrackVisibility from "react-on-screen";
import CountUp from "react-countup";
const FaqAreaTwo = () => {
  return (
    <section className="faq-area-2 space">
      <div className="container">
        <div className="row align-items-center gx-60 flex-row-reverse">
          <div className="col-xl-6">
            <div className="faq-thumb2 mb-xl-0 mb-50">
              <img src="assets/img/normal/faqs.jpg" alt="Fixturbo" />
            </div>
          </div>
          <div className="col-xl-6">
            <div className="title-area">
              <span className="sub-title">ask anything</span>
              <h2 className="sec-title">
                Repeated Questions <br /> Asked By Our Clients{" "}
                <img
                  className="title-bg-shape"
                  src="assets/img/bg/title-bg-shape.png"
                  alt="Fixturbo"
                />
              </h2>
            </div>
            <div className="accordion-area accordion" id="faqAccordion">
              <div className="accordion-card style2 active">
                <div className="accordion-header" id="collapse-item-1">
                  <button
                    className="accordion-button "
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-1"
                    aria-expanded="true"
                    aria-controls="collapse-1"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse?
                  </button>
                </div>
                <div
                  id="collapse-1"
                  className="accordion-collapse collapse show"
                  aria-labelledby="collapse-item-1"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  <p className="faq-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iusto et ipsam, dignissimos temporibus explicabo provident inventore iure modi placeat esse vero iste odio. Consequatur minus omnis, optio perspiciatis perferendis, dolore vitae sequi ea, sunt illo eligendi. Asperiores, consequuntur voluptatibus?
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-2">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-2"
                    aria-expanded="false"
                    aria-controls="collapse-2"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse?
                  </button>
                </div>
                <div
                  id="collapse-2"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-2"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  <p className="faq-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iusto et ipsam, dignissimos temporibus explicabo provident inventore iure modi placeat esse vero iste odio. Consequatur minus omnis, optio perspiciatis perferendis, dolore vitae sequi ea, sunt illo eligendi. Asperiores, consequuntur voluptatibus?
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-3">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-3"
                    aria-expanded="false"
                    aria-controls="collapse-3"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse?
                  </button>
                </div>
                <div
                  id="collapse-3"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-3"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                  <p className="faq-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iusto et ipsam, dignissimos temporibus explicabo provident inventore iure modi placeat esse vero iste odio. Consequatur minus omnis, optio perspiciatis perferendis, dolore vitae sequi ea, sunt illo eligendi. Asperiores, consequuntur voluptatibus?
                    </p>
                  </div>
                </div>
              </div>
              <div className="accordion-card style2">
                <div className="accordion-header" id="collapse-item-4">
                  <button
                    className="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#collapse-4"
                    aria-expanded="false"
                    aria-controls="collapse-4"
                  >
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Esse?
                  </button>
                </div>
                <div
                  id="collapse-4"
                  className="accordion-collapse collapse "
                  aria-labelledby="collapse-item-4"
                  data-bs-parent="#faqAccordion"
                >
                  <div className="accordion-body">
                    <p className="faq-text">
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod iusto et ipsam, dignissimos temporibus explicabo provident inventore iure modi placeat esse vero iste odio. Consequatur minus omnis, optio perspiciatis perferendis, dolore vitae sequi ea, sunt illo eligendi. Asperiores, consequuntur voluptatibus?
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FaqAreaTwo;
