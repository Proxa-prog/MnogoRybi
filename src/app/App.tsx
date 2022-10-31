import * as React from 'react';
import Checkbox from '../shared/ui/Checkbox/Checkbox';

import Input from "../shared/ui/Input/Input";
import styles from './App.module.scss';
import "./styles/index.scss";

const App = () => {
    return (
        <div className={styles.App}>
            <h1>React is working!!!!!!s!!!!</h1>
            <Input
                label={'asdf'}
                media={'mobile'}
                error={'sdef'}
                // required
            />
            <Checkbox
                onChange={() => { }}
                label='asdf'
            />
        </div>
    )
}

export default App;
