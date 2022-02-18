import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sentSuccess, setSentSuccess] = useState(null);

  const clearForm = (success) => {
    setName("");
    setEmail("");
    setSubject("");
    setMessage("");
    setSending(false);
    setSentSuccess(success);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID);
    // console.log(process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID);
    // console.log(process.env.NEXT_PUBLIC_EMAILJS_USER_ID);

    setSending(true);
    setSentSuccess(null);

    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        e.target,
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID
      )
      .then(
        function (response) {
          // console.log("SUCCESS!", response.status, response.text);
          clearForm(true);
        },
        function (error) {
          console.log("FAILED...", error);
          clearForm(false);
        }
      );
  };

  return (
    <div className={styles.contact}>
      <div className={styles.heading_container}>
        <div className={styles.square} />
        <div className={styles.heading}>{"Let's Connect"}</div>
      </div>

      <p className={styles.text}>
        I&apos;m available for a developer position and would love to connect.
        If you have any questions or requests, don&apos;t hesitate to reach out.
      </p>

      <div className={styles.contact_box}>
        <form className={styles.form} onSubmit={handleSubmit}>
          <label className={styles.label}>
            Name
            <input
              className={styles.input}
              type="text"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              name="name"
            />
          </label>

          <label className={styles.label}>
            Email
            <input
              className={styles.input}
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              name="email"
            />
          </label>

          <label className={styles.label}>
            Subject
            <input
              className={styles.input}
              type="text"
              required
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              name="subject"
            />
          </label>

          <label className={styles.label}>
            Message
            <textarea
              className={styles.textarea}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            ></textarea>
          </label>

          <button type="submit" className={styles.submit_btn}>
            {sending ? "Sending..." : "Send"}
          </button>

          {!sending &&
            sentSuccess !== null &&
            (sentSuccess ? (
              <span className={styles.sentSuccessfully}>
                Email sent successfully!
              </span>
            ) : (
              <span className={styles.sentFail}>
                Email not sent, please try again!
              </span>
            ))}
        </form>
      </div>
    </div>
  );
};

export default Contact;
