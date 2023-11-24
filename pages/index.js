import Head from 'next/head';
import styles from '../styles/Home.module.css';

import { useEffect, useState } from 'react';
import { initializeApp } from "firebase/app";
import { getFirestore, collection, doc, getDocs, setDoc } from "firebase/firestore";
import { firebaseConfig } from '../configs/firebaseConfig';

import { BagCheckSmallSvg, BagCheckSvg, BagDashSmallSvg, BagDashSvg } from '../icons/icons.js';

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

  const dimensions = "24";
  
  const bagDash = (gift) => {
    return (<div className={styles.bagIcon} onClick={e => onclick(gift)}>
      <BagDashSvg />
    </div>);
  };
  
  const bagCheck = (gift) => {
    return (<div className={styles.bagIcon} onClick={e => onclick(gift)}>
      <BagCheckSvg />
    </div>);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Zack's Christmas Stuff</title>
        <link rel="icon" href="/christmas-tree.png" />
      </Head>

      <main className="main">
        <img className={styles.image} src="/christmas-tree.png"></img>
        <h1 className={styles.title}>
          Stuff for <a href="#" onClick={() => showEvent()}>Christmas!</a>
        </h1>

        <h2 className={styles.description}>
          Here is a list of things you can buy Zack for <s>his birthday</s> Christmas:
        </h2>

        <h3 className={styles.legend}>
          <div>
            <BagCheckSmallSvg /> = Item has been purchased
          </div>
          <div>
            <BagDashSmallSvg /> = Item has not been purchased
          </div>
        </h3>

        <h3 className={styles.legend}>(Click the icon to toggle)</h3>

        <ul className={styles.list}>
          {list}
        </ul>

      </main>

      <footer className={styles.footer}>
        <p>Ok, that's it. Why are you still here?</p>
      </footer>


    </div>
  );
}
