//this file is for handling 404 errors

const notFound = (req, res) => res.status(404).send('Route does not exist')

module.exports = notFound