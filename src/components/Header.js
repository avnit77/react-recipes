import React from 'react';
import styles from './Header.css';
import Icon from '../assets/logo.jpg';

const Header = () => {

  return (
    <section className={styles.Header}>
      <img width='200px' src={Icon} alt='recipe logo'/>
      <div className={styles.Text}>
        <h1>Food Finder</h1>
        <p>for finding food</p>
      </div>
    </section>
  );

};

export default Header;
