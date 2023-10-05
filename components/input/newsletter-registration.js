import classes from "./newsletter-registration.module.css";
import { useRef } from "react";
function NewsletterRegistration() {
  const inputRef = useRef();
  function registrationHandler(event) {
    event.preventDefault();
    // console.log(inputRef.current.value);
    const enteredEmail = inputRef.current.value;
    fetch("/api/newsletter", {
      method: "POST",
      body: JSON.stringify({ email: enteredEmail }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data.message));
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
