const getHello = (req, res) => {
    res.send('Hello World')
}

const getHelloFrench = (req, res) => {
    res.send('Bonjour le monde')
}

export { getHello, getHelloFrench }

