import "./boxicons.css";

const Footer = () => {
  return (
    // <ScrollFade>
      <footer className="bg-color-gold px-lg-5 py-4 font-roboto">
        <div className="mx-lg-5 px-lg-5">
          <a href="https://bit.ly/iitmelections2022" className="d-flex justify-content-center text-white" target={"_blank"} rel="noreferrer">https://bit.ly/iitmelections2022</a>
          <a href="https://forms.gle/Tinh6czKqeu6YSBu7" className="d-flex justify-content-center text-white" target={"_blank"} rel="noreferrer">Support Form Link</a>
          <div className="d-flex justify-content-center">
            <a href="https://twitter.com/iitm_bsc" target={"_blank"} className="social fs-5 bx-border-circle d-flex align-items-center text-decoration-none d-flex align-items-center text-decoration-none" rel="noreferrer">
              <i className="bx m-1 bxl-twitter"></i>
            </a>
            <a href="https://www.facebook.com/iitmadrasbscdegree/" target={"_blank"} className="social bx-border-circle d-flex align-items-center text-decoration-none fs-5" rel="noreferrer">
              <i className="bx m-1 bxl-facebook"></i>
            </a>
            <a href="https://instagram.com/iitmadras_bsc?utm_medium=copy_link" target={"_blank"} className="fs-5 social bx-border-circle d-flex align-items-center text-decoration-none" rel="noreferrer">
              <i className="bx m-1 bxl-instagram"></i>
            </a>
            <a href="https://www.linkedin.com/company/iit-madras-online-degree-programme" target={"_blank"} className="fs-5 social bx-border-circle d-flex align-items-center text-decoration-none" rel="noreferrer">
              <i className="bx m-1 bxl-linkedin"></i>
            </a>
            {/* <a href="https://wa.me/message/IVROM2UN7XIJL1" target={"_blank"} className="fs-5 social bx-border-circle" rel="noreferrer">
              <i className="bx m-1 bxl-messenger"></i>
            </a> */}
          </div>
          <div className="font-righteous px-2 mt-3 text-white w-100 row">
            <span className="text-start col-6">All rights reserved<br /><a href="mailto:webops@student.onlinedegree.iitm.ac.in" className="text-white" target={"_blank"} rel="noreferrer">WebOps 2022</a></span>
            <span className="text-end col-6">Crafted with care<br /><a href="https://noufal.me" className="text-white" target="_blank" rel="noreferrer">Noufal Rahman</a></span>
          </div>
        </div>
      </footer>
    // </ScrollFade>
  );
};

export default Footer;