import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {

  const showEvent= () => {
    alert("It's December 25th")
  }

  const listItem = (content, anchor) => {
    return (
      <li className={styles.listitem}>{content}<a className={styles.anchor} href={anchor}>Click Here</a></li>

    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Zack's Christmas Stuff</title>
        <link rel="icon" href="/christmas-tree.png" />
      </Head>

      <main>
        <img className={styles.image} src="/christmas-tree.png"></img>
        <h1 className={styles.title}>
          Stuff for <a href="#" onClick={() => showEvent()}>Christmas!</a>
        </h1>

        <h2 className={styles.description}>
          Here is a list of things you can buy Zack for <s>his birthday</s> Christmas:
        </h2>

        <ul className={styles.list}>
          {listItem("Adjustable Kettle Bell: ", "https://www.bowflex.com/selecttech/840-kettlebell/100790.html?irgwc=1&adID=DFBAFFIMPACT&clickid=QakzDfUz9xyPRnTyotQz3z4CUkFVE4w5WU3a1A0&utm_source=impact&utm_medium=affiliate&utm_campaign=NessWell&utm_term=3285732&utm_content=")}
          {listItem("Raspberry Pi 5 8GB (Board Only): ", "https://www.canakit.com/raspberry-pi-5-8gb.html?cid=USD")}
          {listItem("Raspberry Pi 5 Case: ", "https://www.canakit.com/official-raspberry-pi-5-case.html")}
          {listItem("Raspberry Pi 5 Power Supply: ", "https://www.canakit.com/official-raspberry-pi-5-power-supply-27w-usb-c-white.html")}
          {listItem("Micro SD Card: ", "https://www.amazon.com/gp/product/B09WB1857W/ref=ox_sc_act_title_3?smid=ATVPDKIKX0DER&psc=1")}
          {listItem("Micro SD Card Reader: ", "https://www.amazon.com/Beikell-Connector-Adapter-Supports-Compatible-Windows/dp/B0BNJ9RGVP/ref=sr_1_3?crid=2V9TCVH9M6VYB&keywords=sd%2Bcard%2Breader&qid=1699754335&s=electronics&sprefix=sd%2Bcard%2Breader%2Celectronics%2C91&sr=1-3&th=1")}
          {listItem("Slippers", "")}
          {listItem("Weight Tree", "https://www.amazon.com/CAP-Barbell-Frame-Olympic-Plate/dp/B00ZEYG9WK/ref=sr_1_7?keywords=weight+tree&qid=1700229365&sr=8-7")}
          {listItem("Stretching strap", "https://www.amazon.com/Gradient-Fitness-Stretching-Multi-loop-Neoprene/dp/B01A4CG3PE/ref=sr_1_54?qid=1700264325&s=exercise-and-fitness&sr=1-54&th=1")}
        </ul>

      </main>

      <footer>
        <p>Ok, that's it. Why are you still here?</p>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        footer img {
          margin-left: 0.5rem;
        }
        footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          color: inherit;
        }
        code {
          background: #fafafa;
          border-radius: 5px;
          padding: 0.75rem;
          font-size: 1.1rem;
          font-family:
            Menlo,
            Monaco,
            Lucida Console,
            Liberation Mono,
            DejaVu Sans Mono,
            Bitstream Vera Sans Mono,
            Courier New,
            monospace;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family:
            -apple-system,
            BlinkMacSystemFont,
            Segoe UI,
            Roboto,
            Oxygen,
            Ubuntu,
            Cantarell,
            Fira Sans,
            Droid Sans,
            Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
