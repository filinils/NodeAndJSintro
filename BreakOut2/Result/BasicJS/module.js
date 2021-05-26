module.exports = () => {
  console.log('From external module')
}

module.exports.foo = () => {
  console.log('from decontructed')
}
