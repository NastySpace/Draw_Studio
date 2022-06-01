import React from 'react';
import styles from './calculator.module.css';

const Calculator = () => {
    return (
        <div className={styles.order}>
            <h2 className={styles.h2_text}>new arrivals</h2>
            <p className={styles.p_text}>
                The Best Online Sales to Shop This Weekend
            </p>
            <form>
                <div className={styles.calculator}>
                    <h2 className={styles.price_text}>Price calculator</h2>
                    <fieldset className={styles.calculator_size} id="size">
                        <p>Розмір</p>
                        <input type="radio" name="size" value="one" />
                        <label className={styles.label_text} for="one">
                            10х10
                        </label>
                        <input type="radio" name="size" value="two" />
                        <label className={styles.label_text} for="two">
                            20х20
                        </label>
                        <input type="radio" name="size" value="three" />
                        <label className={styles.label_text} for="three">
                            30х30
                        </label>
                        <input type="radio" name="size" value="forr" />
                        <label className={styles.label_text} for="forr">
                            {'>'}50
                        </label>
                    </fieldset>

                    <div className={styles.calculator_size}>
                        <p>View </p>
                    </div>
                    <div className={styles.calculator_size}>
                        <p>Styles</p>
                    </div>
                    <div className={styles.calculator_size}>
                        <p>Sketch</p>
                    </div>
                    <div className={styles.result}>
                        <p>Result</p>
                        <textarea
                            type="text"
                            placeholder="Result"
                            className={styles.input_result}
                        />
                    </div>
                </div>
            </form>
        </div>
    );
};

export default Calculator;
