import classes from "./newsletter-registration.module.css";
import { useRef, useContext, useState, useEffect } from "react";
import NotificationContext from "../../store/notification-context";
function NewsletterRegistration() {
  const ctx = useContext(NotificationContext);

  const inputRef = useRef();

  function registrationHandler(event) {
    event.preventDefault();

    const enteredEmail = inputRef.current.value;

    ctx.showNotification({
      title: "Sgining up...",
      message: "Registering for newsletter",
      status: "pending ...",
    });

    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        res.json().then((data) => {
          throw new Error("something went wrong ");
        });
      })
      .then((data) =>
        ctx.showNotification({
          title: "Success",
          message: "Successfully registered for newsletter",
          status: "success",
        })
      )
      .catch((error) => {
        ctx.showNotification({
          title: "Failed",
          message: "Failed registered for newsletter",
          status: "Failed",
        });
      });
  }

  return (
    <section className={classes.newsletter}>
      <h2>Sign up to stay updated!</h2>
      <form onSubmit={registrationHandler}>
        <div className={classes.control}>
          <input
            ref={inputRef}
            type="email"
            id="email"
            placeholder="Your email"
            aria-label="Your email"
          />
          <button>Register</button>
        </div>
      </form>
    </section>
  );
}

export default NewsletterRegistration;
