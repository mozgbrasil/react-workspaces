// https://vercel.com/docs/runtimes#official-runtimes

module.exports = (req, res) => {
  const { name = 'World' } = req.query
  res.send(`Hello ${name}!`)
}
