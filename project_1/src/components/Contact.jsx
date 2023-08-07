import React from "react";

const Contact = () => {
  return (
    <div className="contact">
      <main>
        <h1> Contact Us </h1>{" "}
        <form>
          <div>
            <label> Name </label>{" "}
            <input type="text" required placeholder="Mat Smith" />
          </div>{" "}
          <div>
            <label> Email </label>{" "}
            <input type="email" required placeholder="mati@xyz.com" />
          </div>{" "}
          <div>
            <label> Query </label>{" "}
            <input
              type="text"
              required
              placeholder="Tell us about your problem..."
            />
          </div>{" "}
          <button type="submit"> Send </button>{" "}
        </form>{" "}
      </main>{" "}
    </div>
  );
};

export default Contact;
