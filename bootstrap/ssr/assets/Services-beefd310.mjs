import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import { useState } from "react";
import { N as Nav, F as Footer } from "./Nav-e8c912fc.mjs";
import Modal from "react-bootstrap/Modal";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "@inertiajs/inertia-react";
import { AiOutlineEye } from "react-icons/ai";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
const Filt = [
  {
    id: "1",
    name: "Large Format Printing",
    description: "Mork Impression is a leading provider of large format printing services.  We use the latest printing technology to ensure that our large format prints are of the highest quality. ",
    img1: "template/img/service/Large/3.jpg",
    img2: "template/img/service/Lfp.png ",
    img3: "template/img/service/Large/2.jpg"
    // img4: 'template/img/service/Large/1.jpg',
  },
  {
    id: "2",
    name: "Industrial & Commercial Print",
    description: " We print product descriptions for packaging, catalogs, safety instructions for machinery and manuals.  Our printers produce clean, concise and clear text for easy reading.",
    img1: "template/img/service/ICprint/1.jpg",
    img2: "template/img/service/Icp.png",
    img3: "template/img/service/ICprint/2.jpg",
    img4: "template/img/service/ICprint/3.jpg"
  },
  {
    id: "3",
    name: "Industrial Lamination",
    description: " Are you looking to create durable signs, transportation materials, billboards, parts and components for a variety of machines and equipment with a strong, durable, and versatile lamination solution, then our Industrial Lamination is the perfect option for you.",
    img1: "template/img/service/Lmtn.png",
    img2: "template/img/service/Lam/1.jpg",
    img3: "template/img/service/Lam/2.jpg",
    img4: "template/img/service/Lam/3.jpg"
  },
  {
    id: "4",
    name: "Digital Colour Press",
    description: " We offer printing solution that is fast, accurate, versatile, and cost-effective to produce high-quality color prints.   ",
    img1: "template/img/service/Color/1.jpg",
    img2: "template/img/service/Cp.png",
    img3: "template/img/service/Color/2.jpg",
    img4: "template/img/service/Color/3.jpg"
  },
  {
    id: "5",
    name: "Graphic Design",
    description: " At Mork Impression, our professional team of designers produces creative, innovative and communicative designs for your events and prints.",
    img1: "template/img/service/Design/1.jpg",
    img2: "template/img/service/direct.jpg",
    img3: "template/img/service/Design/2.png",
    img4: "template/img/service/Design/3.jpg"
  },
  {
    id: "6",
    name: "Colour Separation",
    description: "Mork impression prints full-colour and high quality images using colour separation.",
    img1: "template/img/service/cala.jpg",
    img2: "template/img/service/Sep/1.jpg",
    img3: "template/img/service/Sep/2.jpg",
    img4: "template/img/service/Sep/3.jpg"
  },
  {
    id: "7",
    name: "Offset Press",
    description: "We use wide range of materials in a variety of colors and in high volumes to print books, newspapers and posters of good and high quality standard.",
    img1: "template/img/service/Op.png",
    img2: "template/img/service/Press/1.jpg",
    img3: "template/img/service/Press/2.jpg",
    img4: "template/img/service/Press/3.jpg"
  },
  {
    id: "8",
    name: "Security Printing",
    description: "Are you looking to own watermarks, security threads, passports, security tapes, postage stamps and identity cards. We, at Mork Impression are experts in printing documents and items with features that make them difficult to counterfeit.",
    img1: "template/img/service/Security/2.jpg",
    img2: "template/img/service/Security/1.jpg",
    img3: "template/img/service/sp.png",
    img4: "template/img/service/Security/3.jpg"
  }
];
const Filt$1 = Filt;
function Services() {
  const [show, setShow] = useState(false);
  const [theId, setId] = useState(null);
  const [title, setTitle] = useState("");
  const [image1, seteImage1] = useState(null);
  const [image2, seteImage2] = useState(null);
  const [image3, seteImage3] = useState(null);
  const [desc, setDesc] = useState("");
  function doOpen(title2, idn, descrptn, img1, img2, img3) {
    setShow(true);
    setId(idn);
    setTitle(title2);
    setDesc(descrptn);
    seteImage1(img1);
    seteImage2(img2);
    seteImage3(img3);
  }
  const handleClose = () => setShow(false);
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "container-fluid  page-header page-header-service py-5 mb-5 wow fadeIn",
        "data-wow-delay": "0.1s",
        children: /* @__PURE__ */ jsxs("div", { className: "container text-center mt-5 py-5", children: [
          /* @__PURE__ */ jsx("h1", { className: "display-3 text-white mt-5 animated slideInDown", children: "Services" }),
          /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb animated slideInDown", children: /* @__PURE__ */ jsxs("ol", { className: "breadcrumb justify-content-center mb-0", children: [
            /* @__PURE__ */ jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { className: "breadcrumb-item active", "aria-current": "page", children: "Services" })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container-xxl py-5", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "text-center mx-auto wow fadeInUp",
          "data-wow-delay": "0.1s",
          style: { maxWidth: 500 },
          children: [
            /* @__PURE__ */ jsx("p", { className: "fs-5 fw-bold text-primary", children: "Our Services" }),
            /* @__PURE__ */ jsx("h1", { className: "display-5 mb-5 text-primary ", children: "The Services We Offer" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "row g-4", children: Filt$1.map((item, index) => /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "col-lg-6 col-md-6 wow fadeInUp",
            "data-wow-delay": "0.1s",
            children: /* @__PURE__ */ jsxs("div", { className: "service-item rounded d-flex h-100", children: [
              /* @__PURE__ */ jsxs("div", { className: "service-img rounded", children: [
                /* @__PURE__ */ jsx("div", { className: "serviceTitle border", children: /* @__PURE__ */ jsx("h4", { children: item.name }) }),
                /* @__PURE__ */ jsx("img", { className: "", src: item.img1, alt: "" })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "service-text rounded px-2 py-3", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "btn-square rounded-circle mx-auto mb-3",
                    onClick: () => doOpen(
                      item.name,
                      item.id,
                      item.description,
                      item.img1,
                      item.img2,
                      item.img3
                    ),
                    children: /* @__PURE__ */ jsx(
                      AiOutlineEye,
                      {
                        style: {
                          cursor: "pointer",
                          width: "2rem",
                          height: "2rem",
                          color: "orangered"
                        }
                      }
                    )
                  }
                ),
                /* @__PURE__ */ jsx("h4", { className: "mb-3", children: item.name }),
                /* @__PURE__ */ jsx("p", { className: "mb-4", children: item.description })
              ] })
            ] })
          },
          item.id
        ),
        /* @__PURE__ */ jsxs(Modal, { show, size: "lg", onHide: handleClose, children: [
          /* @__PURE__ */ jsx(Modal.Header, { closeButton: true, children: /* @__PURE__ */ jsx(Modal.Title, { children: /* @__PURE__ */ jsxs("span", { className: "text-center", children: [
            "  ",
            title
          ] }) }) }),
          /* @__PURE__ */ jsx(Modal.Body, { children: /* @__PURE__ */ jsx("div", { className: "p-2", children: /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsxs(Carousel, { fade: true, children: [
              /* @__PURE__ */ jsx(Carousel.Item, { children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "img-fluid w-full",
                  style: { height: "30rem", width: "50rem" },
                  src: image1,
                  alt: "First slide"
                }
              ) }),
              /* @__PURE__ */ jsx(Carousel.Item, { children: /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "img-fluid w-full ",
                  style: { height: "30rem", width: "50rem" },
                  src: image2,
                  alt: "Second slide mx-auto"
                }
              ) }) }),
              /* @__PURE__ */ jsx(Carousel.Item, { children: /* @__PURE__ */ jsx(
                "img",
                {
                  className: "img-fluid w-full",
                  style: { height: "30rem", width: "50rem" },
                  src: image3,
                  alt: "Third slide"
                }
              ) })
            ] }),
            /* @__PURE__ */ jsx("div", { className: "p-4", children: /* @__PURE__ */ jsx("p", {}) })
          ] }) }) })
        ] })
      ] })) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Services as default
};
