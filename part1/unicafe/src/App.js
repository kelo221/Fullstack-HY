import React, {useState} from 'react'


const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)


function StatisticLine({text, value}) {
    return (
        <>

            <tr>
                <td>{text}</td>
                <td>{value}</td>
            </tr>

        </>



    )
}

function Statistics({pos, neg, neu, total, avgTotal, avgPos}) {

    if (total !== 0) {
        return (
            <>
                <table>
                    <tbody>
                    <tr>
                        <th>Option</th>
                        <th>Value</th>
                    </tr>

                    <StatisticLine text="positive" value={pos}/>
                    <StatisticLine text="neutral" value={neu}/>
                    <StatisticLine text="negative" value={neg}/>
                    <StatisticLine text="avgTotal" value={avgTotal}/>
                    <StatisticLine text="avgPos" value={avgPos}/>
                    </tbody>
                </table>
            </>
        )
    } else {
        return (<p>NO DATA</p>)
    }
}

const App = () => {
    const [positive, incrementPos] = useState(0)
    const [neutral, incrementNeu] = useState(0)
    const [negative, incrementNeg] = useState(0)

    const increasePosByOne = () => incrementPos(positive + 1)
    const increaseNeuByOne = () => incrementNeu(neutral + 1)
    const increaseNegByOne = () => incrementNeg(negative + 1)

    const total = positive + negative + neutral
    const avgPos = positive / total * 100
    const avgTotal = (positive - negative) / total


    return (
        <div>
            <h1>Give feedback</h1>

            <Button
                onClick={increasePosByOne}
                text='positive'
            />
            <Button
                onClick={increaseNeuByOne}
                text='neutral'
            />
            <Button
                onClick={increaseNegByOne}
                text='negative'
            />
            <h1>Statistics</h1>


            <Statistics pos={positive} neg={negative} neu={neutral} total={total} avgTotal={avgTotal}
                        avgPos={avgPos}/>

        </div>
    )
}

export default App