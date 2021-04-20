client.on('message', msg => {
  if (msg.content === `${prefix}ping`) {
    msg.channel.send('Loading data...').then(async msg => {
      msg.delete();
      msg.channel.send(`🏓 Pong! Ping is ${Math.round(client.ws.ping)}ms!`);
    });
  }
});
