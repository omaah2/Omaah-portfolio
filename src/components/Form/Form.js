import "./Form.css";

import { useRef } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/ReactToastify.min.css";

const Form = () => {
  const form = useRef();

  function isValidEmail(email) {
    return email.match(
      /^[a-zA-Z0-9][a-zA-Z0-9._-]*@[a-zA-Z0-9]+\.[a-zA-Z]{2,}$/
    );
  }

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);

    const data = {};
    formData.forEach((value, key) => {
      data[key] = value;
    });

    if (data.name.length < 3) {
      return toast.error("Name must be greater than 3 characters", {
        type: "warning",
        theme: "dark",
      });
    }

    if (data.email.length < 3) {
      return toast.error("Email must be greater than 3 characters", {
        type: "warning",
        theme: "dark",
      });
    } else {
      if (!isValidEmail(data.email)) {
        return toast.error("Email is not valid", {
          type: "error",
          theme: "light",
        });
      }
    }

    if (data.subject.length < 3) {
      return toast.error("Subject must be at least 3 characters", {
        type: "warning",
        theme: "dark",
      });
    }

    if (data.message.length < 10) {
      return toast.error("Please write a meaningful message", {
        type: "warning",
        theme: "dark",
      });
    }

    // Create an object with the email data to send
    const emailData = {
      from_email: data.email,
      from_name: data.name,
      subject: data.subject,
      message: data.message,
    };

    // Send the email using ImprovMX
    try {
      const response = await fetch(
        "https://api.improvmx.com/v1/messages/send",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer sk_f05b3e816433439082a953f3dde74d0c`, // Replace with your ImprovMX API key
          },
          body: JSON.stringify(emailData),
        }
      );

      if (response.status === 200) {
        return toast.success("Message sent", {
          type: "success",
          theme: "dark",
          autoClose: 4000,
        });
      } else {
        return toast.error("Oops! An error occurred, please try again", {
          type: "info",
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
      return toast.error("Oops! An error occurred, please try again", {
        type: "info",
        theme: "dark",
      });
    }

    e.target.reset();
  };

  return (
    <>
      <div className="form">
        <form ref={form} onSubmit={sendEmail} noValidate>
          <label htmlFor="name">Your name:</label>
          <input type="text" name="name" required />
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" required />
          <label htmlFor="subject">Subject:</label>
          <input type="text" name="subject" required />
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            rows="6"
            placeholder="Type your message"
            required
          ></textarea>

          <button type="submit" className="btn">
            Submit
          </button>
        </form>
      </div>
      <ToastContainer position="bottom-left" newestOnTop />
    </>
  );
};

export default Form;
