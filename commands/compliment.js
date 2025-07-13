const { EmbedBuilder } = require('discord.js');
const compliments = require('../data/compliments.json');

module.exports = {
  name: 'compliment',
  description: 'Compliment someone kindly!',
  options: [
    {
      name: 'target',
      type: 6, 
      description: 'The person to compliment',
      required: true
    }
  ],
  execute(interaction) {
    const target = interaction.options.getUser('target');
    const compliment = compliments[Math.floor(Math.random() * compliments.length)];

    const embed = new EmbedBuilder()
      .setDescription(`${target} ${compliment.text}`)
      .setImage(compliment.gif)
      .setColor(0xf0f0f0);

    interaction.reply({ embeds: [embed] });
  }
};