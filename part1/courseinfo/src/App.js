import React from 'react'

function Part(props) {

    return (<p>
        {props.name} {props.count}
    </p>);
}

function Content(props) {

    console.log(props)

    return (
        <div>
            <Part name={props.parts[0].name} count={props.parts[0].exercises}/>
            <Part name={props.parts[1].name} count={props.parts[1].exercises}/>
            <Part name={props.parts[2].name} count={props.parts[2].exercises}/>
        </div>
    )
}

function Total(props) {
    return (<p>Number of exercises {props.total}</p>);
}

function Header(props) {

    return (<h1>{props.course.name}</h1>);
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10
            },
            {
                name: 'Using props to pass data',
                exercises: 7
            },
            {
                name: 'State of a component',
                exercises: 14
            }
        ]
    }


    return (
        <div>
            <Header course={course}/>
            <Content parts={course.parts}
            />
            <Total
                total={course.parts[0].exercises + course.parts[1].exercises + course.parts[2].exercises}
            />
        </div>
    )
}

export default App