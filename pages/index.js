import Head from "next/head";
import Image from "next/image";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import styles from "../styles/Home.module.css";
import image from "../public/portfolio.jpg";
import Link from "next/link";
import { style } from "@mui/system";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Henry Chon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.left}></div>
      <div className={styles.right}>sfv</div>

      <div className={styles.content}>
        <div className={styles.card}>
          <Image
            // loader={myLoader}
            className={styles.image}
            src={image}
            alt="Picture of the author"
            width={200}
            height={200}
          />
          <div className={styles.first_name}>Henry</div>
          <div className={styles.last_name}>Chon</div>
          <div className={styles.divider} />
          <div className={styles.title}>Software Engineer</div>
          <div className={styles.card_bottom}>
            <LinkedInIcon
              className={styles.icon}
              onClick={() =>
                window.open("https://www.linkedin.com/in/chonhenry/")
              }
            />
            <GitHubIcon
              className={styles.icon}
              onClick={() => window.open("https://github.com/chonhenry")}
            />
          </div>
        </div>

        <div className={styles.details}>
          <div className={styles.hello}>Hello</div>
          <div style={{ fontSize: "1.3rem" }}>
            {"Here's who I am & what I do"}
          </div>
          <div className={styles.btns}>
            <Link href="/">
              <a className={styles.btn}>resume</a>
            </Link>
            <Link href="/">
              <a className={styles.btn}>project</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
