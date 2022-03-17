import React, { useState } from 'react';
import styles from './Counter.module.css';

export function Counter({ quantity, increment, decrement }) {

  return (
    <div>
      <div className={styles.row}>
        <button
          className={styles.button}
          aria-label="Decrement value"
          onClick={() => decrement()}
        >
          -
        </button>
        <span className={styles.value}>{quantity}</span>
        <button
          className={styles.button}
          aria-label="Increment value"
          onClick={() => increment()}
        >
          +
        </button>
      </div>
    </div>
  );
}
