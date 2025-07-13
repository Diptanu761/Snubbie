const { EmbedBuilder } = require('discord.js');
const roasts = require('../data/roasts.json');

module.exports = {
  name: 'roast',
  description: 'Roast someone playfully!',
  options: [
    {
      name: 'target',
      type: 6, 
      description: 'The person to roast',
      required: true
    }
  ],

  execute(interaction) {
    const target = interaction.options.getUser('target');
    const roast = roasts[Math.floor(Math.random() * roasts.length)];

    const embed = new EmbedBuilder()
      .setImage(roast.gif)
      .setDescription(`${target} ${roast.text}`)
      .setColor(0xf0f0f0) 

    interaction.reply({ embeds: [embed] });
  }
};