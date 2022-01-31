import React, {useState} from 'react'

const Button = ({onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)


const App = () => {

    const anecdotes = [
        'If it hurts, do it more often',
        'Adding manpower to a late software project makes it later!',
        'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
        'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
        'Premature optimization is the root of all evil.',
        'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
        'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
    ]

    const points = new Array(anecdotes.length).fill(0);

    const [selected, setSelected] = useState(0)
    const [votes, setVotes] = useState(points);


    const getRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))

    const upBoat = () => {
        let updatedVotes = [...votes];
        updatedVotes[selected]++;
        setVotes(updatedVotes);
    };


    const findTheHighest = () => {
        return votes.indexOf(Math.max(...votes));
    }


    return (
        <>
            <h1>
                Anecdote number: {selected + 1}
            </h1>

            <div>
                {anecdotes[selected]}
                <div>
                    Total Votes: {votes[selected]}
                </div>

            </div>


            <h1>The highest voted one
                (Anecdote number: {findTheHighest()+1})
            </h1>

            <div>
                {anecdotes[findTheHighest()]}
                <div>
                    has: {votes[findTheHighest()]} votes
                </div>
            </div>

            <Button
                onClick={getRandom}
                text='New quote'
            />

            <Button
                onClick={upBoat}
                text='Vote'
            />
        </>
    )
}

export default App