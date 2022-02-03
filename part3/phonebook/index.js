const express = require('express')
const app = express()

let options = {
        timeZone: 'Europe/Helsinki',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    },
    formatter = new Intl.DateTimeFormat([], options);

let persons = [
    {
        "id": 1,
        "name": "Arto Hellas",
        "number": "040-123456"
    },
    {
        "id": 2,
        "name": "Ada Lovelace",
        "number": "39-44-5323523"
    },
    {
        "id": 3,
        "name": "Dan Abramov",
        "number": "12-43-234345"
    },
    {
        "id": 4,
        "name": "Mary Poppendieck",
        "number": "39-23-6423122"
    }
]
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {
    response.json(persons)
})

// http://localhost:3001/api/persons/{"name":"New Name","number":"1234"}
app.post('/api/persons/:info', (request, response) => {

    const newParams = request.params.info
    const obj = JSON.parse(newParams)

    console.log(obj)

    const randomId = Math.floor(Math.random() * 1000)


    const foundName = persons.findIndex(({name}) => name === obj.name)
    console.log(foundName)

    const foundNumber = persons.findIndex(({name}) => name === obj.number)
    console.log(foundNumber)


    if (foundName === -1) {

        if (obj.name === undefined){
            return response.status(400).json({
                error: 'no name given'
            })
        }

        if (obj.number === undefined){
            return response.status(400).json({
                error: 'no number given'
            })
        }

        console.log("added new person")
        persons.push({id: randomId, name: obj.name.toString(), number: obj.number.toString(),})
        response.sendStatus(200)
    } else {
        return response.status(400).json({
            error: 'name exists'
        })
    }

})


app.get('/api/persons/:id', (request, response) => {
    const id = parseInt(request.params.id)


    if (isNaN(id) || id > persons.length || id <= 0) {
        response.sendStatus(404)
    } else {
        const foundElement = (element) => element.id === id;
        response.json(persons[persons.findIndex(foundElement)])
    }
})


app.delete('/api/persons/:id', (request, response) => {
    const id = parseInt(request.params.id)


    if (isNaN(id) || id > persons.length || id <= 0) {
        response.sendStatus(404)
    } else {
        const foundElement = (element) => element.id === id;
        persons.splice(persons.findIndex(foundElement), 1)
        response.sendStatus(204)
    }
})


app.get('/info', (request, response) => {
    let count = persons.length.toString()
    response.send(`<h1>Phonebook has info for  ${count}</h1>
                        <p>${(new Date()).toLocaleString([], options)}</p>`)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})