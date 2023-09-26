import "./Form.css";

import { useRef } from "react";
import { serviceId, templateId, publicKey } from "../../utils/config";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";
import emailjs from "@emailjs/browser";

const Form = () => {
  const form = useRef();
  console.log(serviceId, templateId, publicKey )

  function isValidEmail(email) {
    return email.match(
      /^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    );
  }

  const sendEmail = (e) => {
    e.preventDefault();
    if (e.target.name.value.length < 3) {
      return toast.error("Name must should be greater than 3 character", {
        type: "warning",
        theme: "dark",
      });
    }
    if (e.target.email.value.length < 3) {
      return toast.error("Email must should be greater than 3 character", {
        type: "warning",
        theme: "dark",
      });
    } else {
      if (isValidEmail(e.target.email.value)) {
        console.log("THis email is valid");
      } else {
        return toast.error("Email is not valid", {
          type: "error",
          theme: "light",
        });
      }
    }
    if (e.target.subject.value.length < 3) {
      return toast.error("Subject characters cannot be less than 3", {
        type: "warning",
        theme: "dark",
      });
    }
    if (e.target.message.value.length < 10) {
      return toast.error("Please write a meaningful message", {
        type: "warning",
        theme: "dark",
      });
    }
    emailjs.sendForm(serviceId, templateId, form.current, publicKey).then(
      (result) => {
        return toast.error("Message sent", {
          type: "success",
          theme: "dark",
          autoClose: 4000,
        });
      },
      (error) => {
        return toast.error("Opps! An error ocurred, please try again", {
          type: "info",
          theme: "dark",
        });
      }
    );
    e.target.reset();
  };

  return (
    <>
      <div className="form">
        <form ref={form} onSubmit={sendEmail} novalidate noValidate>
          <label htmlFor="name">Your name:</label>
          <input type="text" name="name" />
          <label htmlFor="name">Email:</label>
          <input type="email" name="email" />
          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Type your message"
          ></textarea>
          <button type="submit" className="btn">
            submit
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-left" newestOnTop />
    </>
  );
};

export default Form;
