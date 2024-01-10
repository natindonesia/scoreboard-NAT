import React, { useEffect, useState } from "react";
import styles from "./FootballFormation.module.css"; // Assuming you have a CSS module for styling
import axios from "axios";

const Formation4231 = ({ players }) => {
  const [playerAway, setPlayerAway] = useState([]);
  useEffect(() => {
    const fetchPlayerAway = async () => {
      try {
        const response = await axios.get("http://localhost:5500/playerAway");
        setPlayerAway(response.data);
      } catch (error) {
        console.error("Error fetching player away:", error);
      }
    };

    fetchPlayerAway();
  }, []);
  return (
    <div className={styles.parentContainer}>
      <div className={styles.footballPitch}>
        <div className={`${styles.player} ${styles.goalkeeper}`}>
          <div className={styles.playerCircle}>GK</div>
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[0]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <div className={`${styles.player} ${styles.defender1}`}>
          <div className={styles.playerCircle}>DL</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[1]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <div className={`${styles.player} ${styles.defender2}`}>
          <div className={styles.playerCircle}>DC</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[2]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <div className={`${styles.player} ${styles.defender3}`}>
          <div className={styles.playerCircle}>DC</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[3]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <div className={`${styles.player} ${styles.defender4}`}>
          <div className={styles.playerCircle}>DR</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[4]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        {/* <div className={`${styles.player} ${styles.defender5}`}>d5</div> */}
        {/* <div className={`${styles.player} ${styles.dm1}`}>dm1</div>
      <div className={`${styles.player} ${styles.dm2}`}>dm2</div>
      <div className={`${styles.player} ${styles.dm3}`}>dm3</div>
      <div className={`${styles.player} ${styles.dm4}`}>dm4</div>
      <div className={`${styles.player} ${styles.dm5}`}>dm5</div> */}
        {/* <div className={`${styles.player} ${styles.mid1}`}>m1</div> */}
        <div className={`${styles.player} ${styles.mid2}`}>
          <div className={styles.playerCircle}>MC</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[5]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <div className={`${styles.player} ${styles.mid3}`}>
          <div className={styles.playerCircle}>MC</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[6]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        {/* <div className={`${styles.player} ${styles.mid4}`}>m4</div> */}
        {/* <div className={`${styles.player} ${styles.mid5}`}>m5</div> */}
        <div className={`${styles.player} ${styles.mid4}`}>
          <div className={styles.playerCircle}>MR</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[7]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        {/* <div className={`${styles.player} ${styles.am2}`}>am2</div>
      <div className={`${styles.player} ${styles.am3}`}>am3</div> */}
        <div className={`${styles.player} ${styles.mid1}`}>
          <div className={styles.playerCircle}>ML</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[8]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        <div className={`${styles.player} ${styles.striker1}`}>
          <div className={styles.playerCircle}>ST</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[9]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        {/* <div className={`${styles.player} ${styles.midfielder1}`}>mid1</div>
      <div className={`${styles.player} ${styles.midfielder2}`}>mid2</div>
      <div className={`${styles.player} ${styles.midfielder3}`}>mid2</div>
      <div className={`${styles.player} ${styles.midfielder4}`}>mid2</div>
      <div className={`${styles.player} ${styles.midfielder5}`}>mid2</div> */}
        {/* <div className={`${styles.player} ${styles.striker1}`}>st1</div> */}
        <div className={`${styles.player} ${styles.striker3}`}>
          <div className={styles.playerCircle}>ST</div>{" "}
          {playerAway.length > 0 ? (
            <span className={styles.playerName}>{playerAway[10]?.name}</span>
          ) : (
            <span>Loading...</span>
          )}
        </div>
        {/* <div className={`${styles.player} ${styles.striker3}`}>st3</div> */}
      </div>
    </div>
  );
};

export default Formation4231;
