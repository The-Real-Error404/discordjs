const { MessageEmbed } = require('discord.js') 

module.exports = {
  name: 'subtract',
  callback: (message, args) => { 
    const num1 = +args[0] 
    const num2 = +args[1] 


    message.channel.send(`The answer is **${num1 - num2}**.`) 
  }
} 