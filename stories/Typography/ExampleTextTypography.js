import React from 'react';

import Text from 'wix-style-react/Text';
import styles from './styles.scss';

export default () =>
  <div>
    <h3>Text</h3>
    <ul className={`ltr ${styles.styleList}`}>
      <li><Text appearance="T1">T1 - Helvetica_45 / 16px / 24px</Text></li>
      <li><Text appearance="T1.1">T1.1 - Helvetica_45 / 16px / 24px</Text></li>
      <li className={styles.inverted}>
        <Text appearance="T1" light>T1 + light - Helvetica_45 / 16px / 24px</Text>
      </li>
      <li><Text appearance="T1.1" light>T1.1 + light - Helvetica_45 / 16px / 24px</Text></li>
    </ul>

    <h3>Bold Text</h3>
    <ul className={`ltr ${styles.styleList}`}>
      <li><Text appearance="T1" bold>T1 + bold - Helvetica_55 / 16px / 24px</Text></li>
      <li><Text appearance="T1.1" bold>T1.1 + bold - Helvetica_55 / 16px / 24px</Text></li>
      <li className={styles.inverted}>
        <Text appearance="T1" bold light>T1 + bold + light - Helvetica_55 / 16px / 24px</Text>
      </li>
      <li><Text appearance="T1.1" bold light>T1.1 + bold + light - Helvetica_55 / 16px / 24px</Text></li>
    </ul>

    <h3>Small Text</h3>
    <ul className={`ltr ${styles.styleList}`}>
      <li><Text appearance="T3">T3 - Helvetica_45 / 14px / 18px</Text></li>
      <li><Text appearance="T3.1">T3.1 - Helvetica_45 / 14px / 18px</Text></li>
      <li className={styles.inverted}>
        <Text appearance="T3" light>T3 + light - Helvetica_45 / 14px / 18px</Text>
      </li>
      <li><Text appearance="T3.1" light>T3.1 + light - Helvetica_45 / 14px / 18px</Text></li>
    </ul>

    <h3>Small Bold Text</h3>
    <ul className={`ltr ${styles.styleList}`}>
      <li><Text appearance="T3" bold>T3 + bold - Helvetica_55 / 14px / 18px</Text></li>
      <li><Text appearance="T3.1" bold>T3.1 + bold - Helvetica_55 / 14px / 18px</Text></li>
      <li className={styles.inverted}>
        <Text appearance="T3" bold light>T3 + bold + light - Helvetica_55 / 14px / 18px</Text>
      </li>
      <li><Text appearance="T3.1" bold light>T3.1 + bold - Helvetica_55 / 14px / 18px</Text></li>
    </ul>
  </div>;
