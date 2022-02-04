import React from 'react'
import Subject from './components/Subject'
import Total from './components/Total'
import Topic from './components/Topic'

const App = ({subject}) => {

    return (

        subject.map(({name, id, parts}) => (
            <React.Fragment key={id}>
                <Topic course={name}/>
                <Subject parts={parts}/>
                <Total parts={parts}/>
            </React.Fragment>
        )));
}
export default App
