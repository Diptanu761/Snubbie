const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'info',
  description: 'Shows information about Snubbie bot',
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('🎀 About Me, Obviously')
      .setDescription('Since you *insisted* on knowing...')
      .setColor(0xf0f0f0)
      .setThumbnail('https://i.ibb.co/CKY3cd4w/logoin-removebg-preview.png')
      .addFields(
        { name: '🤖 Name', value: 'Snubbie', inline: true },
        { name: '📅 Birthday', value: '2024-07-10 🎂', inline: true },
        { name: '📦 Version', value: '1.0.0 (flawless)', inline: true },
        { name: '🔥 Roasts Fired', value: '51 (and counting)', inline: true },
        { name: '✨ Compliments Delivered', value: '50 (and growing)', inline: true },
        { name: '🧾 Commands', value: '5 (but all bangers)', inline: true },
      )
      .setFooter({ text: 'Built by me.dev76 — blame him for my sass.' });

    await interaction.reply({ embeds: [embed] });
  }
};