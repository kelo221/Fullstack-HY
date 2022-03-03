require("dotenv").config({ path: "./config.env" })
const express = require('express')
const app = express()
const Note = require('./models/note')

app.use(express.static('build'))

const cors = require('cors')

app.use(cors())

const morgan = require('morgan')

morgan.token('body', req => {
    return JSON.stringify(req.body)
})

app.use(express.json())


app.use(morgan(':method :url :body :status :res[content-length] - :response-time ms'))
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

/*
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
*/
app.get('/', (request, response) => {
    response.send('<h1>Hello World!</h1>')
})

app.get('/api/persons', (request, response) => {

    Note.find({}).then(result => {
        result.forEach(note => {
            console.log(note.name, note.number, note.identifier)
        })
        response.json(result)
    })

})


app.post('/api/persons',(request, response) => {

    const obj = request.body

    console.log("received obj", obj)



    console.log(obj.name)



    Note.findOne({name: obj.name})
        .then(result => {
            if(!result) {
                console.log("not found", result)

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

                console.log(obj)

                console.log("added new person")

                const note = new Note({
                    identifier: obj.identifier, name: obj.name, number: obj.number
                })


                note.save().then(result => {
                    console.log('note saved!')
                })

                response.sendStatus(200)

            }else {
                console.log("found", result)
                console.log("error 400")
                return response.status(400).json({
                    error: 'name exists'
                })
            }
        })

})


app.get('/api/persons/:id', (request, response) => {
    const idNew = parseInt(request.params.id)

    Note.findOne({identifier: idNew}).then(result => {
        console.log(result)
        response.json(result)
    })

})


app.delete('/api/persons/:id', (request, response) => {
    const id = parseInt(request.params.identifier)

    console.log(id)

    Note.deleteOne({identifier:id}, function(err, result) {
        if (err) {
            response.sendStatus(404)
        } else {
            response.sendStatus(204)
        }
    });

   /* persons.findIndex(function (idCheck) {
        if(idCheck.identifier === id)
            checker = true
    });

    if (isNaN(id)  || id <= 0 || !checker) {
        response.sendStatus(404)
    } else {
        const foundElement = (element) => element.identifier === id;
        persons.splice(persons.findIndex(foundElement), 1)
        response.sendStatus(204)
    }*/




})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})