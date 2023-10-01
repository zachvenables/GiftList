import Head from 'next/head';
import styles from '../styles/Home.module.css';

export default function Home() {

  const showBirthDate= () => {
    alert("It's Oct 13th")
  }

  const listItem = (content, anchor) => {
    return (
      <li className={styles.listitem}>{content}<a className={styles.anchor} href={anchor}>Click Here</a></li>

    );
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Zack's Birthday Stuff</title>
        <link rel="icon" href="/birthday-cake.png" />
      </Head>

      <main>
        <img className={styles.image} src="/birthday-cake.png"></img>
        <h1 className={styles.title}>
          Stuff for <a href="#" onClick={() => showBirthDate()}>Zack's birthday!</a>
        </h1>

        <h2 className={styles.description}>
          Here is a list of things you can buy Zack for his birthday:
        </h2>

        <ul className={styles.list}>
        {listItem("Flaming Bandana: ", "https://www.amazon.com/DANLCUPL-Cycling-Bandana-Motorcycle-Cooling/dp/B095MR28LG/ref=sr_1_9?keywords=flame+bandana&qid=1696172170&sr=8-9")}
          {listItem("Bike Headlight: ", "https://www.amazon.com/gp/product/B07H26DJSR/?smid=A26A9QLFNQPSCL&tag=thewire06-20")}
          {listItem("Cycling Shoes, size 12.5, Black/Silver/Gum: ", "https://www.competitivecyclist.com/crank-brothers-stamp-lace-cycling-shoe-mens?CMP_SKU=CRNH013&MER=0406&utm_source=Avantlink&utm_medium=Affiliate&CSPID=0920&avad=246073_a3399b005&SharedId=246073_a3399b005&utm_medium=Affiliate&utm_source=www.toptenreviews.com&utm_campaign=datafeed&utm_term=Content")}
          {listItem("Bike seat cover: ", "https://www.amazon.com/dp/B01H71AZ36?linkCode=ogi&tag=bicycling-auto-20&ascsubtag=%5Bartid%7C2143.g.40709971%5Bsrc%7Cwww.google.com%5Bch%7C%5Blt%7Cpsv%5Bpid%7Caab76536-c19f-4b49-aa5b-cde3c55f2786")}
          {listItem("Cycling Jacket, size M:  ", "https://www.decathlon.com/collections/bike-jackets/products/van-rysel-cold-weather-lightweight-road-cycling-jacket?avad=55097_c3399427d&variant=32498323030078")}
          {listItem("Headband, size S, black: ", "https://www.amazon.com/dp/B09991Z9JC?linkCode=ogi&tag=bicycling-auto-20&ascsubtag=%5Bartid%7C2143.g.20011461%5Bsrc%7Cwww.google.com%5Bch%7C%5Blt%7Csale%5Bpid%7Cd8081d73-7e58-40e0-b900-d6c705d7c40f&th=1&psc=1")}
          {listItem("Zagnut 6-pack: ", "https://www.amazon.com/Zagnut-Coconut-Multiple-CANDY-CABIN/dp/B08X31N4X4/ref=sr_1_6?keywords=Zagnut&qid=1696170891&sr=8-6")}
          {listItem("Beard Trimmer: ", "https://www.amazon.com/Hatteker-Grooming-Mustache-Cordless-Waterproof/dp/B07QTZCQ8Y?asc_source=&asc_campaign=5994b2d7d48ec673e16de420%7C86uV7tXbp9ss6poVb4j5WW&asc_refurl=https%3A%2F%2Fwww.gq.com%2Fstory%2Fbest-stuff-beard-trimmers&tag=gqgensqua-20&ascsubtag=5994b2d7d48ec673e16de420")}
          {listItem("Ankle Socks, size 6-12: ", "https://www.amazon.com/Dickies-Dri-Tech-Moisture-Control-6-Pack/dp/B0792FKBQZ/ref=sr_1_3?crid=1EBPQB2C4ESBA&keywords=dickies%2Bdri%2Btech%2Bankle%2Bsocks&qid=1696171391&sprefix=dickies%2Bdri%2Btech%2Bankle%2Bsokcs%2Caps%2C92&sr=8-3&th=1&psc=1")}
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
