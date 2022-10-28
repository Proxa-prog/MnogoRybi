import * as React from 'react';

import styles from './App.module.scss';
import "../theme.scss";
import Input from "../shared/ui/Input/Input";


const App = () => {
    return (
        <div className={styles.App}>
            <h1>React is working!!!!!!s!!!!</h1>
            <Input label={'asdf'} media={'mobile'} error={'sdef'} />
        </div>
    )
}

export default App;
