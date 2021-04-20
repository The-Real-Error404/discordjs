const { MessageEmbed } = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports = {
  commands: ['funny', 'makemelaugh', 'funnymeme'],
  description: 'Shows a  funny meme',
  usage: null,
  minArgs: null,
  maxArgs: 0,
  permissions: [],
  requiredRoles: [],
  callback: async message => {
    const subReddits = ["funny"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const image = await randomPuppy(random)

    const memeEmbed = new MessageEmbed()
      .setTitle(`Here's your funny meme!`)
      .setImage(image)
      .setColor('RANDOM')
      .setURL(`https://reddit.com/r/${random}`)
      .setFooter('Click on the title to visit the subreddit!')
      .addFields(
        { name: 'Funny Meme From:', value: `${random}`, inline: true }
      )

    message.channel.send(memeEmbed)
  }
}