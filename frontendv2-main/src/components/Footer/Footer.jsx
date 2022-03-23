import React from 'react';
import styles from '../Footer/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className={styles.footer} class="copyright">
        {' '}
        &copy; 2022 Favela{' '}
        <strong>
          <span>Delivery</span>
        </strong>
        . Todos os direitos reservados.
      </div>
    </footer>
  );
};

export default Footer;
