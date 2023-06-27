import { j as jsxs, a as jsx } from "../ssr.mjs";
import { Link } from "@inertiajs/inertia-react";
import { N as Nav, F as Footer } from "./Nav-e2495d23.mjs";
import "react/jsx-runtime";
import "react-dom/server";
import "process";
import "http";
function Quote() {
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsx(Nav, {}),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "container-fluid page-header page-header-quote py-5 mb-5 wow fadeIn",
        "data-wow-delay": "0.1s",
        children: /* @__PURE__ */ jsxs("div", { className: "container text-center mt-5 py-5", children: [
          /* @__PURE__ */ jsx("h1", { className: "display-3 text-white mt-5 animated slideInDown", children: "Quote" }),
          /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb animated slideInDown", children: /* @__PURE__ */ jsxs("ol", { className: "breadcrumb justify-content-center mb-0", children: [
            /* @__PURE__ */ jsx("li", { className: "breadcrumb-item", children: /* @__PURE__ */ jsx(Link, { href: "/", children: "Home" }) }),
            /* @__PURE__ */ jsx("li", { className: "breadcrumb-item active", "aria-current": "page", children: "Quote" })
          ] }) })
        ] })
      }
    ),
    /* @__PURE__ */ jsx("div", { className: "container-fluid py-5", children: /* @__PURE__ */ jsxs("div", { className: "container", children: [
      /* @__PURE__ */ jsx(
        "div",
        {
          className: "text-center mx-auto wow fadeInUp",
          "data-wow-delay": "0.1s",
          style: { maxWidth: 500 },
          children: /* @__PURE__ */ jsx("h1", { className: "display-5 mb-5 text-primary", children: "Get A Quote" })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "row justify-content-center", children: /* @__PURE__ */ jsx("div", { className: "col-lg-7", children: /* @__PURE__ */ jsx(
        "div",
        {
          className: "bg-light rounded p-4 p-sm-5 wow fadeInUp",
          "data-wow-delay": "0.1s",
          children: /* @__PURE__ */ jsxs("div", { className: "row g-3", children: [
            /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  className: "form-control border-0",
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
                  className: "form-control border-0",
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
                  className: "form-control border-0",
                  id: "cname",
                  placeholder: "Child Name"
                }
              ),
              /* @__PURE__ */ jsx("label", { htmlFor: "cname", children: "Your Mobile" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-sm-6", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
              /* @__PURE__ */ jsxs("select", { className: "form-control border-0 bg-white", name: "", id: "", children: [
                /* @__PURE__ */ jsx("option", { value: "" }),
                /* @__PURE__ */ jsx("option", { value: "", children: "Large Format Printing" }),
                /* @__PURE__ */ jsx("option", { value: "", children: "Industrial & Commercial Print" }),
                /* @__PURE__ */ jsx("option", { value: "", children: "Graphic Design" }),
                /* @__PURE__ */ jsx("option", { value: "", children: "Colour Separation" }),
                /* @__PURE__ */ jsx("option", { value: "", children: "Offset Press" }),
                /* @__PURE__ */ jsx("option", { value: "", children: "Security Printing" })
              ] }),
              /* @__PURE__ */ jsx("label", { htmlFor: "cage", children: "Service Type" })
            ] }) }),
            /* @__PURE__ */ jsx("div", { className: "col-12", children: /* @__PURE__ */ jsxs("div", { className: "form-floating", children: [
              /* @__PURE__ */ jsx(
                "textarea",
                {
                  className: "form-control border-0",
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
        }
      ) }) })
    ] }) }),
    /* @__PURE__ */ jsx(Footer, {})
  ] });
}
export {
  Quote as default
};
