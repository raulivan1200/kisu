"use client"

import React from 'react'
import axios from "axios";
import { useForm } from "react-hook-form";
import { useState } from "react";
import styles from "../../styles/Form.module.css"
export default function Form() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting,errors },
  } = useForm();
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  function onSubmit(data) {
    axios
      .post("https://eoxmsrv4pmr4g9p.m.pipedream.net", data)
      .then((response) => {
        setSuccessMessage(
          `Thanks, wait for a reply under 30 mins`
        );
        setErrorMessage(""); // Clear any previous error message
      })
      .catch((e) => console.error(e));
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.formcon}>
      <div className={styles.formh}>
        <h1>CONTACT US</h1>
        <p>
          Use the form below to contact us. We look forward to learning more about you, your organization, and how we can help you achieve even greater success.
        </p>
      </div>
      <div className={styles.ef}>
        <h6>email:</h6>
        <input
          className={styles.c}
          {...register("email", {
            required: <span style={{ color: 'red' }}>Email is required - use client</span>,
            validate: {
              maxLength: (v) =>
                v.length <= 50 || "The email should have at most 50 characters",
              matchPattern: (v) =>
                /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(v) ||
                "Email address must be a valid address",
            }
          })}
          placeholder="me@gmail.com"
        ></input>
        {errors.email && (
          <p className={styles.error} style={{ color: 'red' }}>{errors.email.message}</p>
        )}
        {errorMessage && <p className={styles.error} style={{ color: 'red' }}>{errorMessage}</p>}
      </div>

      <div>
        <h5>Project details:</h5>
        <textarea className={styles.inputbody} {...register("body")} placeholder="Project Details"></textarea>
      </div>

      <div className={styles.butonform}>
        <div className={styles.buttons}>
          <button className={styles.btn} role="submit"><span></span><p data-start="Get Started!" data-text="Call us!" data-title="Get Started!"></p></button>
        </div>
      </div>

      {successMessage && <h3>{successMessage}</h3>}
    </form>
  );
}