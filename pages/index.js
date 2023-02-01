import styles from "../styles/Home.module.css";
import Navbar from "../components/navbar";
import { useState, useEffect } from "react";
import NFTCard from "../components/NFTCard";
import { useAddress, useChainId } from "@thirdweb-dev/react";
import axios from "axios";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';



export default function Home() {

  const chainID = useChainId()
  const address = useAddress();
  const [nfts, setNFTs] = useState([]);
  const [loaded, setLoaded] = useState(false)
  const [nftsListed, setNFTsListed] = useState([])


  const chainMapping = {
    1: "mainnet",
    5: "goerli",
    10: "optimism",
    56: "binancesmartchainmainnet",
    137: "polygon",
    250: "fantom",
    1337: "localhost",
    43114: "avalanche",
    42161: "arbitrum"
  }

  useEffect(() => {
    if (address) {
      axios.get(`https://app-mhw23.vercel.app/api/nft?address=${address}&chain=${chainMapping[chainID]}`).then((response) => {
        console.log(response)
      });
    }
  //setNFTs(response);
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [loaded, address])

  return (
    <div className={styles.container}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <h1 className={styles.title}>   
              Welcome to <div className={styles.principal}>Cacao</div>
          </h1>
        </div>
        <p className={styles.description}>
          Uncollateralized NFT lending
        </p>
        <div>
            <h2>Borrow NFTs</h2>
        </div>
        <div className={styles.grid}>
          <a href="https://portal.thirdweb.com/" className={styles.card}>
            <h2>NFT 1</h2>
            <Button variant="contained">Rent</Button>
          </a>

          <a href="https://thirdweb.com/dashboard" className={styles.card}>
            <h2>NFT 2</h2>
            <Button variant="contained">Rent</Button>
          </a>

          <a
            href="https://portal.thirdweb.com/templates"
            className={styles.card}
          >
            <h2>NFT 3</h2>
            <Button variant="contained">Rent</Button>
          </a>
        </div>
        <div>
            <h2>My NFTs</h2>
          {nfts?.map (
          (nft) => <NFTCard data={nft} />)}
        </div>
        <div className="listed-nfts-container">
          <h2>My Listed NFTs</h2>
          {nftsListed?.map((nft, i) => {
            return (
                <Link 
                  href='/nfts/[nft]'
                  as={`nfts/${nft.token_hash}-${user.address}`} 
                  key={i}
                >
                    <div className="nft-card">
                        <img
                            loading="lazy"
                            width={100}
                            src={getNFTimgs(nft.metadata)}
                            alt={`${i}image`}
                            style={{ borderRadius: "5px", marginTop: "10px" }}
                        />
                        <div key={i}>
                            {`${nft.name}\n${nft.token_id}`}
                        </div>
                    </div>
                </Link>
            )
          })}
        </div>
      </main>
    </div>
  );
}
