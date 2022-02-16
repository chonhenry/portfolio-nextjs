import React, { useState } from "react";
import styles from "../../styles/Contact.module.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log("name: ", name);
    // console.log("email: ", email);
    // console.log("subject: ", subject);
    // console.log("message: ", message);
  };

  return (
    <div className={styles.contact}>
      <div className={styles.heading_container}>
        <div className={styles.square} />
        <div className={styles.heading}>{"Let's Connect"}</div>
      </div>

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
            />
          </label>

          <label className={styles.label}>
            Message
            <textarea
              className={styles.textarea}
              required
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </label>

          <button type="submit" className={styles.submit_btn}>
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
