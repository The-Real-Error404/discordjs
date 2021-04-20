module.exports = {
  name: 'add',
  description: "Add cmd",
  minArgs: 2,
  maxArgs: 2,
  expectedArgs: '<num1> <num2>',
  callback: (message, arguments) => {
    const num1 = +arguments[0]
    const num2 = +arguments[1]

    message.channel.send(`The sum is **${num1 + num2}**.`)
  }
}
