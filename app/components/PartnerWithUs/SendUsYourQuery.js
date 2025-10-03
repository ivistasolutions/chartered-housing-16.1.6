import SendUsYourQueryForm from "./SendUsYourQueryForm";

const SendUsYourQuery = () => {
  return (
    <div className="px-5 lg:mt-16 mt-7">
      <div className="container mx-auto flex flex-col md:flex-row gap-5 justify-between">
        <div className="lg:w-[424px] space-y-5 text-[#646464] text-lg text-justify">
          <p className="">
            At Chartered Housing, we believe the strongest partnerships are
            built on shared values — clarity, integrity, and a long-term view of
            success.
          </p>
          <p>
            For over three decades, we’ve delivered high-quality residential
            communities across Bengaluru, earning the trust of customers and
            collaborators alike.
          </p>
          <p>
            If you’re a landowner, investor, or institution seeking a credible
            partner to bring your vision to life, we’d love to explore how we
            can work together.
          </p>
          {/* <p className="text-2xl">
            Reach Us:{" "}
            <a href="tel:+918660697659" className="">
              +91 8660697659
            </a>
          </p> */}
          {/* <p className="text-2xl">
            Email:{" "}
            <a href="mailto:info@charteredhousing.com" className="">
              info@charteredhousing.com
            </a>
          </p> */}
        </div>

        <SendUsYourQueryForm />
      </div>
    </div>
  );
};

export default SendUsYourQuery;
