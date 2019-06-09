import React from 'react';
import PropTypes from 'prop-types';

import styles from './Modal.module.scss';

const Modal = ({ handleClose, show, children }) => {
  const className = [styles.modal];
  if (show) {
    className.push(styles.show);
  } else {
    className.push(styles.hide);
  }

  return (
    <div className={className.join(' ')}>
      <section className={styles.main}>
        {children}
        <button onClick={handleClose}>close</button>
      </section>
    </div>
  );
};

Modal.propTypes = {
  handleClose: PropTypes.func,
  show: PropTypes.bool,
  children: PropTypes.element
};

export default Modal;
