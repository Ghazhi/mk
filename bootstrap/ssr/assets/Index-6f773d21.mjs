import { j as jsxs, a as jsx } from "../ssr.mjs";
import { N as Nav, F as Footer } from "./Nav-e2495d23.mjs";
import { GiArcheryTarget, GiWorld, GiSandsOfTime, GiReceiveMoney } from "react-icons/gi";
import { MdGppGood, MdOutlineDraw } from "react-icons/md";
import { BiTargetLock } from "react-icons/bi";
import { BsPrinter } from "react-icons/bs";
import { AiOutlineBgColors } from "react-icons/ai";
import "react/jsx-runtime";
import "react-dom/server";
import "@inertiajs/inertia-react";
import "process";
import "http";
function Index() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx("div", { className: "container-fluid p-0 wow fadeIn", "data-wow-delay": "0.1s", children: /* @__PURE__ */ jsxs(
      "div",
      {
        id: "header-carousel",
        className: "carousel slide",
        "data-bs-ride": "carousel",
        children: [
          /* @__PURE__ */ jsxs("div", { className: "carousel-inner", children: [
            /* @__PURE__ */ jsx("div", { className: "carousel-item active", children: /* @__PURE__ */ jsx("img", { className: "w-100", style: { width: "100%", height: "40rem" }, src: "template/img/banners/3.jpg", alt: "Image" }) }),
            /* @__PURE__ */ jsx("div", { className: "carousel-item", children: /* @__PURE__ */ jsx("img", { className: "w-100", style: { width: "100%", height: "40rem" }, src: "template/img/portfolio/Resized/commercial.jpg", alt: "Image" }) }),
            /* @__PURE__ */ jsx("div", { className: "carousel-item", children: /* @__PURE__ */ jsx("img", { className: "w-100", style: { width: "100%", height: "40rem" }, src: "template/img/portfolio/Resized/gifts.jpg", alt: "Image" }) })
          ] }),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "carousel-control-prev",
              type: "button",
              "data-bs-target": "#header-carousel",
              "data-bs-slide": "prev",
              children: [
                /* @__PURE__ */ jsx("span", { className: "carousel-control-prev-icon", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Previous" })
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "button",
            {
              className: "carousel-control-next",
              type: "button",
              "data-bs-target": "#header-carousel",
              "data-bs-slide": "next",
              children: [
                /* @__PURE__ */ jsx("span", { className: "carousel-control-next-icon", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { className: "visually-hidden", children: "Next" })
              ]
            }
          )
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsx("div", { className: "container-xxl py-5", children: /* @__PURE__ */ jsx("div", { className: "container", children: /* @__PURE__ */ jsxs("div", { className: "row g-5 align-items-center", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-lg-6 wow fadeInUp", "data-wow-delay": "0.1s", children: [
        /* @__PURE__ */ jsx("p", { className: "fs-5 fw-bold text-primary", children: "Why Choose Us!" }),
        /* @__PURE__ */ jsx("h1", { className: " mb-4 text-primary", children: "Customer Relationship Management" }),
        /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Mork Impression provides a dedicated and accountable Client Service Person to ensure that your print needs are fully met." }),
        /* @__PURE__ */ jsx("a", { className: "btn btn-primary py-3 px-4", href: "/about", children: "About Us" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "col-lg-6", children: /* @__PURE__ */ jsxs("div", { className: "row g-4 align-items-center", children: [
        /* @__PURE__ */ jsx("div", { className: "col-md-6", children: /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-12 wow fadeIn", "data-wow-delay": "0.3s", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "text-center rounded py-5 px-4",
              style: { boxShadow: "0 0 45px rgba(0,0,0,.08)" },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "btn-square bg-light rounded-circle mx-auto mb-4",
                    style: { width: 90, height: 90 },
                    children: /* @__PURE__ */ jsx(GiArcheryTarget, { style: { width: 60, height: 60, color: "red" } })
                  }
                ),
                /* @__PURE__ */ jsx("h4", { className: "mb-0 text-primary", children: "OUR VISION" }),
                /* @__PURE__ */ jsx("p", { className: "pt-2", style: { fontSize: "15px" }, children: "We seek to be the leading producers of both Primary and Secondary Packaging materials in Ghana and the Sub-Region as a whole." })
              ]
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-12 wow fadeIn", "data-wow-delay": "0.5s", children: /* @__PURE__ */ jsxs(
            "div",
            {
              className: "text-center rounded py-5 px-4",
              style: { boxShadow: "0 0 45px rgba(0,0,0,.08)" },
              children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: "btn-square bg-light rounded-circle mx-auto mb-4",
                    style: { width: 90, height: 90 },
                    children: /* @__PURE__ */ jsx(GiWorld, { style: { width: 60, height: 60, color: "red" } })
                  }
                ),
                /* @__PURE__ */ jsx("h4", { className: "mb-0 text-primary", children: "OUR MISSION" }),
                /* @__PURE__ */ jsx("p", { className: "pt-2", children: "To deliver what we promise with accuracy, speed and add value beyond what our clients expect." })
              ]
            }
          ) })
        ] }) }),
        /* @__PURE__ */ jsx("div", { className: "col-md-6 wow fadeIn", "data-wow-delay": "0.7s", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "text-center rounded py-5 px-4",
            style: { boxShadow: "0 0 45px rgba(0,0,0,.08)" },
            children: [
              /* @__PURE__ */ jsx(
                "div",
                {
                  className: "btn-square bg-light rounded-circle mx-auto mb-4",
                  style: { width: 90, height: 90 },
                  children: /* @__PURE__ */ jsx(MdGppGood, { style: { width: 60, height: 60, color: "red" } })
                }
              ),
              /* @__PURE__ */ jsx("h4", { className: "mb-0 text-primary", children: "QUALITY" }),
              /* @__PURE__ */ jsx("p", { children: "We are dedicated to the pursuit of the highest quality in all our work for clients." })
            ]
          }
        ) })
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "container-fluid facts my-5 py-5",
        style: {
          backgroundImage: "url('template/img/new.png')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        },
        children: /* @__PURE__ */ jsx("div", { className: "container  py-5", children: /* @__PURE__ */ jsxs("div", { className: "row g-5", children: [
          /* @__PURE__ */ jsx("div", { className: "col-lg-4 wow fadeIn", "data-wow-delay": "0.1s", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-white shadow d-flex align-items-center h-100 px-5",
              style: { minHeight: 160 },
              children: /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 btn-lg-square rounded-circle bg-light", children: /* @__PURE__ */ jsx(BiTargetLock, { style: { width: 30, height: 30, color: "gray" } }) }),
                /* @__PURE__ */ jsx("div", { className: "ps-3", children: /* @__PURE__ */ jsx("h4", { style: { color: "rgb(236,42,145)" }, children: "Uncompromising Quality" }) })
              ] })
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-lg-4 wow fadeIn", "data-wow-delay": "0.1s", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-white shadow d-flex align-items-center h-100 px-5",
              style: { minHeight: 160 },
              children: /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 btn-lg-square rounded-circle bg-light", children: /* @__PURE__ */ jsx(GiSandsOfTime, { style: { width: 30, height: 30, color: "gray" } }) }),
                /* @__PURE__ */ jsx("div", { className: "ps-3", children: /* @__PURE__ */ jsx("h4", { style: { color: "rgb(236,42,145)" }, children: "Timely Deliveries" }) })
              ] })
            }
          ) }),
          /* @__PURE__ */ jsx("div", { className: "col-lg-4 wow fadeIn", "data-wow-delay": "0.1s", children: /* @__PURE__ */ jsx(
            "div",
            {
              className: "bg-white shadow d-flex align-items-center h-100 px-5",
              style: { minHeight: 160 },
              children: /* @__PURE__ */ jsxs("div", { className: "d-flex", children: [
                /* @__PURE__ */ jsx("div", { className: "flex-shrink-0 btn-lg-square rounded-circle bg-light", children: /* @__PURE__ */ jsx(GiReceiveMoney, { style: { width: 30, height: 30, color: "grey" } }) }),
                /* @__PURE__ */ jsx("div", { className: "ps-3", children: /* @__PURE__ */ jsx("h4", { style: { color: "rgb(236,42,145)" }, children: "Competitive Prices" }) })
              ] })
            }
          ) })
        ] }) })
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "container-xxl py-", children: [
      /* @__PURE__ */ jsxs("div", { className: "container", children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: "text-center mx-auto wow fadeInUp",
            "data-wow-delay": "0.1s",
            style: { maxWidth: 500 },
            children: [
              /* @__PURE__ */ jsx("p", { className: "fs-5 fw-bold text-primary", children: "Our Services" }),
              /* @__PURE__ */ jsx("h1", { className: "display-5 mb-5 text-primary", children: "The Services We Offer " })
            ]
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "row g-4", children: [
          /* @__PURE__ */ jsx("div", { className: "col-lg-4 col-md-6 wow fadeInUp", "data-wow-delay": "0.1s", children: /* @__PURE__ */ jsxs("div", { className: "service-item rounded d-flex h-100", children: [
            /* @__PURE__ */ jsxs("div", { className: "service-img rounded", children: [
              /* @__PURE__ */ jsx("div", { className: "serviceTitle border", children: /* @__PURE__ */ jsx("h4", { children: "Industrial & Commercial Print" }) }),
              /* @__PURE__ */ jsx("img", { className: "img-fluid", src: "template/img/service/ICprint/1.jpg", alt: "" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "service-text rounded p-5", children: [
              /* @__PURE__ */ jsx("div", { className: "btn-square  rounded-circle mx-auto mb-3", children: /* @__PURE__ */ jsx(BsPrinter, { style: { width: "3rem", height: "3rem" } }) }),
              /* @__PURE__ */ jsx("h4", { className: "mb-3", children: "Industrial & Commercial Print" }),
              /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Our printers produce clean, concise and clear text for easy reading." })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "col-lg-4 col-md-6 wow fadeInUp", "data-wow-delay": "0.3s", children: /* @__PURE__ */ jsxs("div", { className: "service-item rounded d-flex h-100", children: [
            /* @__PURE__ */ jsxs("div", { className: "service-img rounded", children: [
              /* @__PURE__ */ jsx("div", { className: "serviceTitle border", children: /* @__PURE__ */ jsx("h4", { children: "Graphic Design" }) }),
              /* @__PURE__ */ jsx("img", { className: "img-fluid", src: "template/img/service/Design/1.jpg", alt: "" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "service-text rounded p-5", children: [
              /* @__PURE__ */ jsx("div", { className: "btn-square rounded-circle mx-auto mb-3", children: /* @__PURE__ */ jsx(MdOutlineDraw, { style: { width: "3rem", height: "3rem" } }) }),
              /* @__PURE__ */ jsx("h4", { className: "mb-3", children: "Graphic Design" }),
              /* @__PURE__ */ jsx("p", { className: "mb-4", children: "Creative, innovative and communicative designs for your events and prints." })
            ] })
          ] }) }),
          /* @__PURE__ */ jsx("div", { className: "col-lg-4 col-md-6 wow fadeInUp", "data-wow-delay": "0.5s", children: /* @__PURE__ */ jsxs("div", { className: "service-item rounded d-flex h-100", children: [
            /* @__PURE__ */ jsxs("div", { className: "service-img rounded", children: [
              /* @__PURE__ */ jsx("div", { className: "serviceTitle border", children: /* @__PURE__ */ jsx("h4", { children: "Digital Colour Press" }) }),
              /* @__PURE__ */ jsx("img", { className: "img-fluid", src: "template/img/service/Op.png", alt: "" })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "service-text rounded p-5", children: [
              /* @__PURE__ */ jsx("div", { className: "btn-square rounded-circle mx-auto mb-3", children: /* @__PURE__ */ jsx(AiOutlineBgColors, { style: { width: "3rem", height: "3rem" } }) }),
              /* @__PURE__ */ jsx("h4", { className: "mb-3", children: "Offset Press" }),
              /* @__PURE__ */ jsx("p", { className: "mb-4", children: "We use wide range of materials in a variety of colors and in high volumes to print books, magazines, newspapers, packaging, and posters of good and high quality standard." })
            ] })
          ] }) })
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "pt-5 text-center", children: /* @__PURE__ */ jsx("a", { className: "btn btn-primary py-3 px-4 ", style: { width: "30%" }, href: "/services", children: "View All" }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "container-xxl ", style: { paddingTop: "6rem" }, children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsxs(
        "div",
        {
          className: "text-center mx-auto wow fadeInUp",
          "data-wow-delay": "0.1s",
          style: { maxWidth: 500 },
          children: [
            /* @__PURE__ */ jsx("p", { className: "fs-5 fw-bold text-primary" }),
            /* @__PURE__ */ jsx("h1", { className: "display-5  text-primary", children: "Our Partners " })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { className: "d-flex", style: { justifyContent: "center" }, children: /* @__PURE__ */ jsx("img", { className: "img-fluid", src: "template/img/banners/partners.jpg", style: { width: "60rem" }, alt: "" }) }) })
    ] }) }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "container-fluid facts my-5 py-5",
        style: {
          backgroundImage: "url('template/img/quote.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        },
        children: /* @__PURE__ */ jsx("div", { className: "container py-5", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-7", children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: "bg-white rounded p-4 p-sm-5 wow fadeIn",
            "data-wow-delay": "0.5s",
            children: [
              /* @__PURE__ */ jsx("h1", { className: "display-5 text-center mb-5 text-primary", children: "Get A Quote" }),
              /* @__PURE__ */ jsxs("div", { className: "row g-3", children: [
                /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control bg-light border-0",
                      id: "gname",
                      placeholder: "Gurdian Name"
                    }
                  ),
                  /* @__PURE__ */ jsx("label", { htmlFor: "gname", children: "Your Name" })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "email",
                      className: "form-control bg-light border-0",
                      id: "gmail",
                      placeholder: "Gurdian Email"
                    }
                  ),
                  /* @__PURE__ */ jsx("label", { htmlFor: "gmail", children: "Your Email" })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "text",
                      className: "form-control bg-light border-0",
                      id: "cname",
                      placeholder: "Child Name"
                    }
                  ),
                  /* @__PURE__ */ jsx("label", { htmlFor: "cname", children: "Your Mobile" })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
                  /* @__PURE__ */ jsxs(
                    "select",
                    {
                      name: "",
                      type: "text",
                      className: "form-control bg-light border-0",
                      placeholder: "Select A Service",
                      id: "",
                      children: [
                        /* @__PURE__ */ jsx("option", { value: "" }),
                        /* @__PURE__ */ jsx("option", { value: "", children: "Large Format Printing" }),
                        /* @__PURE__ */ jsx("option", { value: "", children: "Industrial & Commercial Print" }),
                        /* @__PURE__ */ jsx("option", { value: "", children: "Graphic Design" }),
                        /* @__PURE__ */ jsx("option", { value: "", children: "Colour Separation" }),
                        /* @__PURE__ */ jsx("option", { value: "", children: "Offset Press" }),
                        /* @__PURE__ */ jsx("option", { value: "", children: "Security Printing" })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsx("label", { htmlFor: "cage pb-3", children: "Service Type" })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
                  /* @__PURE__ */ jsx(
                    "textarea",
                    {
                      className: "form-control bg-light border-0",
                      placeholder: "Leave a message here",
                      id: "message",
                      style: { height: 100 },
                      defaultValue: ""
                    }
                  ),
                  /* @__PURE__ */ jsx("label", { htmlFor: "message", children: "Message" })
                ] }) }),
                /* @__PURE__ */ jsx("div", { className: "col-12 text-center", children: /* @__PURE__ */ jsx("button", { className: "btn btn-primary py-3 px-4", type: "submit", children: "Submit Now" }) })
              ] })
            ]
          }
        ) }) }) })
      }
    ),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Index as default
};
