import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc, documentId } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_KEY,
  authDomain: "gifttracker-94cad.firebaseapp.com",
  projectId: "gifttracker-94cad",
  storageBucket: "gifttracker-94cad.appspot.com",
  messagingSenderId: "1056825648352",
  appId: "1:1056825648352:web:393fcc23e9b81ae68fdc85"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let querySnapshot = await getDocs(collection(db, "Gifts"));

export default function Home() {
  const [list, setList] = useState([]);
  const showEvent= () => {
    alert("It's December 25th")
}


  function generateList () {
    let result = []
    let index = 0;
    querySnapshot.forEach((doc) => {
      result.push(<li className={styles.listitem} key={index}>
          {doc.data().name + ": "}
          <a className={styles.anchor} href={doc.data().link}>Link</a>
          {doc.data().wasPurchased ? bagCheck(doc) : bagDash(doc)}
        </li>);
        index ++;
    });
    return result;
  }

  useEffect(() => {
    setList(generateList);
  }, [querySnapshot]);

  async function onclick (docz) {
    await setDoc(doc(db, "Gifts", docz.id), {name: docz.data().name, link: docz.data().link, wasPurchased: !docz.data().wasPurchased})
    querySnapshot = await getDocs(collection(db, "Gifts"));
    setList(generateList);
  }
  
  const bagDash = (gift) => {
    return (<div className={styles.bagIcon} onClick={e => onclick(gift)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-bag-dash" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
        <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
      </svg>
    </div>);
  };
  
  const bagCheck = (gift) => {
    return (<div className={styles.bagIcon} onClick={e => onclick(gift)}>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
        <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
      </svg>
    </div>);
  };

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

        <h3>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="green" className="bi bi-bag-check-fill" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0m-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
            </svg> = Item has been purchased
          </div>
          <div>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="red" className="bi bi-bag-dash" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M5.5 10a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1H6a.5.5 0 0 1-.5-.5"/>
              <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1z"/>
            </svg> = Item has not been purchased
          </div>
        </h3>

        <h3>(Click the icon to toggle)</h3>

        <ul className={styles.list}>
          {list}
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
