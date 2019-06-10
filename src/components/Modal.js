import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const Modal = ({ handleClose, children }) => {
  return (
    <div className={styles.modal}>
      <section className={styles.main}>
        {children}
        <button onClick={handleClose} className={styles.close}>
          close
        </button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  children: PropTypes.element
};

export default Modal;
