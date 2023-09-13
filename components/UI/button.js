import React from "react";
import Link from "next/link";
import classes from "../UI/button.module.css";

const Button = ({ children, link }) => {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
};

export default Button;
