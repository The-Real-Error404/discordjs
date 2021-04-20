const { MessageEmbed } = require('discord.js')
const randomPuppy = require('random-puppy')

module.exports = {
  commands: ['funny'],
  description: 'Shows a  funny meme',
  callback: async message => {
    const subReddits = ["funny"]
    const random = subReddits[Math.floor(Math.random() * subReddits.length)]

    const image = await randomPuppy(random)

    const memeEmbed = new MessageEmbed()
      .setTitle(`Here's your reddit meme!`)
      .setImage(image)
      .setColor('RANDOM')
      .setURL(`https://reddit.com/r/${random}`)
      .setFooter('Title leads to Subreddit!')
      .addFields(
        { name: 'Funny Meme From:', value: `${random}`, inline: true }
      )

    message.channel.send(memeEmbed)
  }
}
