import React from 'react';
import styles from './sidebar.module.css';

const Sidebar = () => {
    return (
        <div className={styles.aside}>
            <div className={styles.filter}>
                <h2 className={styles.name}>Price</h2>
                <div className={styles.inputs}>
                    <input
                        type="text"
                        placeholder="min"
                        className={styles.input}
                    />
                    <input
                        type="text"
                        placeholder="max"
                        className={styles.input}
                    />
                </div>
                <div className={styles.btns}>
                    <button className={styles.apply}>Apply</button>
                    <button className={styles.reset}>Reset</button>
                </div>
            </div>
            <div className={styles.response}>
                <h3 className={styles.h3}>Залиште відгук та ваші побажання!</h3>
                <input
                    type="text"
                    placeholder="name"
                    className={styles.input_name}
                />
                <textarea
                    type="text"
                    placeholder="response text"
                    className={styles.input_response}
                />
                <button className={styles.button_add}>Add</button>
                <div className={styles.response_text}></div>
            </div>
        </div>
    );
};

export default Sidebar;
