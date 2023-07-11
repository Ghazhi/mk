import { j as jsxs, a as jsx, F as Fragment } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
import { N as Nav, F as Footer } from "./Nav-e8c912fc.mjs";
import "react-bootstrap/Modal";
import "react-bootstrap/Carousel";
import { useState } from "react";
import { useKeenSlider } from "keen-slider/react.js";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
const counter = "";
const styles = "";
const keenSlider_min = "";
const Files = [
  "template/img/banners/3.jpg",
  "template/img/portfolio/Resized/vehicle.jpg",
  "template/img/portfolio/Branding/Branding.jpg",
  //
  "template/img/portfolio/Resized/dtf.jpg",
  "template/img/portfolio/Embroidery/Embroidery1.jpg",
  "template/img/portfolio/Embroidery/Embroidery2.jpg",
  "template/img/portfolio/Embroidery/Embroidery3.jpg",
  "template/img/portfolio/Embroidery/Embroidery4.jpg",
  "template/img/portfolio/Embroidery/Embroidery5.jpg",
  "template/img/portfolio/Embroidery/Embroidery6.jpg",
  "template/img/portfolio/Embroidery/Embroidery7.jpg",
  "template/img/portfolio/Embroidery/Embroidery8.jpg",
  "template/img/portfolio/Embroidery/Embroidery9.jpg",
  "template/img/portfolio/Embroidery/Embroidery10.jpg",
  "template/img/portfolio/Embroidery/Embroidery11.jpg",
  // 
  "template/img/portfolio/Resized/commercial.jpg",
  "template/img/portfolio/Off/Offset&Digital1.jpg",
  "template/img/portfolio/Off/Offset&Digital2.jpg",
  // 
  "template/img/portfolio/Resized/gifts.jpg",
  "template/img/portfolio/Mug&tomblerPress/Mug&tomblerPress1.jpg",
  "template/img/portfolio/Mug&tomblerPress/Mug&tomblerPress2.jpg",
  "template/img/portfolio/Mug&tomblerPress/Mug&tomblerPress3.jpg",
  "template/img/portfolio/Mug&tomblerPress/Mug&tomblerPress4.jpg",
  "template/img/portfolio/Mug&tomblerPress/Mug&tomblerPress5.webp",
  "template/img/portfolio/Mug&tomblerPress/Mug&tomblerPress6.jpg"
];
const Files$1 = Files;
function ThumbnailPlugin(mainRef) {
  return (slider) => {
    function removeActive() {
      slider.slides.forEach((slide) => {
        slide.classList.remove("active");
      });
    }
    function addActive(idx) {
      slider.slides[idx].classList.add("active");
    }
    function addClickEvents() {
      slider.slides.forEach((slide, idx) => {
        slide.addEventListener("click", () => {
          if (mainRef.current)
            mainRef.current.moveToIdx(idx);
        });
      });
    }
    slider.on("created", () => {
      if (!mainRef.current)
        return;
      addActive(slider.track.details.rel);
      addClickEvents();
      mainRef.current.on("animationStarted", (main) => {
        removeActive();
        const next = main.animator.targetIdx || 0;
        addActive(main.track.absToRel(next));
        slider.moveToIdx(Math.min(slider.track.details.maxIdx, next));
      });
    });
  };
}
function Portfolio() {
  useState();
  useState(-1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0
  });
  const [thumbnailRef] = useKeenSlider(
    {
      initial: 0,
      slides: {
        perView: 5,
        spacing: 5
      },
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel);
      },
      created() {
        setLoaded(true);
      }
    },
    [ThumbnailPlugin(instanceRef)]
  );
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "container-fluid page-header page-header-portfolio  py-5 mb-5 wow fadeIn",
        "data-wow-delay": "0.1s",
        children: /* @__PURE__ */ jsxs("div", { className: "container mt-5 text-center py-5", children: [
          /* @__PURE__ */ jsx("h1", { className: "display-3 text-white  mt-5 animated slideInDown", children: "Portfolio" }),
          /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb animated slideInDown", children: /* @__PURE__ */ jsxs("ol", { className: "breadcrumb justify-content-center mb-0", children: [
            /* @__PURE__ */ jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { className: "breadcrumb-item active", "aria-current": "page", children: "Portfolio" })
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
            /* @__PURE__ */ jsx("p", { className: "fs-5 fw-bold text-primary", children: "Our Projects" }),
            /* @__PURE__ */ jsx("h1", { className: "display-5 mb-5 text-primary", children: "Some Of Our Awesome Projects" })
          ]
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "row wow fadeInUp", "data-wow-delay": "0.3s", children: /* @__PURE__ */ jsx("div", { className: "col-12 text-center" }) }),
      /* @__PURE__ */ jsxs("div", { className: "pt-4", children: [
        /* @__PURE__ */ jsx("div", { ref: sliderRef, className: "keen-slider", children: Files$1.map((itm, ind) => /* @__PURE__ */ jsx("div", { className: `keen-slider__slide number-slide${ind} `, children: /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("div", { className: "pb-3", children: /* @__PURE__ */ jsx("img", { src: itm, className: "img-fluid", style: { height: "30rem" }, alt: "" }) }) }) })) }),
        /* @__PURE__ */ jsx("div", { style: { paddingLeft: "6rem", paddingRight: "6rem" }, children: /* @__PURE__ */ jsx("div", { ref: thumbnailRef, className: "keen-slider thumbnail", children: Files$1.map((itm, ind) => /* @__PURE__ */ jsx("div", { className: "", children: /* @__PURE__ */ jsx("div", { className: ` keen-slider__slide number-slide${ind} `, children: /* @__PURE__ */ jsx("img", { src: itm, className: "img-fluid", style: { height: "9rem", width: "100%" }, alt: "" }) }) })) }) }),
        /* @__PURE__ */ jsx("div", { className: "", children: loaded && instanceRef.current && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            Arrow,
            {
              left: true,
              onClick: (e) => {
                var _a;
                return e.stopPropagation() || ((_a = instanceRef.current) == null ? void 0 : _a.prev());
              },
              disabled: currentSlide === 0
            }
          ),
          /* @__PURE__ */ jsx(
            Arrow,
            {
              right: true,
              onClick: (e) => {
                var _a;
                return e.stopPropagation() || ((_a = instanceRef.current) == null ? void 0 : _a.next());
              },
              disabled: currentSlide === instanceRef.current.track.details.slides.length - 1
            }
          )
        ] }) })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: " col ", children: /* @__PURE__ */ jsx("div", { className: "container   py-5", children: /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-7", children: /* @__PURE__ */ jsxs(
      "div",
      {
        className: "bg-white rounded border shadow p-4 p-sm-5 wow fadeIn",
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
    ) }) }) }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
function Arrow(props) {
  const disabeld = props.disabled ? " arrow--disabled" : "";
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      onClick: props.onClick,
      className: `arrow ${props.left ? "arrow--left" : "arrow--right"} ${disabeld}`,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      children: [
        props.left && /* @__PURE__ */ jsx("path", { d: "M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" }),
        !props.left && /* @__PURE__ */ jsx("path", { d: "M5 3l3.057-3 11.943 12-11.943 12-3.057-3 9-9z" })
      ]
    }
  );
}
export {
  Portfolio as default
};
