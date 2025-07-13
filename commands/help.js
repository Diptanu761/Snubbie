const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'help',
  description: 'Unleash the manual you never knew you needed.',
  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('📖 Snubbie Bot Help')
      .setThumbnail('https://i.ibb.co/nsB78M8P/logohe-removebg-preview.png')
      .setDescription('Feeling lost already? Don’t worry, even your brain gets confused sometimes.')
      .setColor(0xf0f0f0)
      .addFields(
        {
          name: '/roast [user]',
          value: 'Give someone a reality check — with style. Use responsibly (or not). 😌',
        },
        {
          name: '/compliment [user]',
          value: 'Spread some sugar. Tell someone they’re amazing — even if they aren’t. ✨',
        },
        {
          name: '/say [message]',
          value: 'Make me your cute little mouthpiece. Use wisely. 🎤',
        },
        {
          name: '/invite',
          value: 'Bring me to your server. Yes, I travel. ✈️',
        },
        {
          name: '/info',
          value: 'All the juicy gossip about me. Yes, I’m the main character. 💅',
        },
        {
          name: '/help',
          value: 'It’s this. You’re inside it. Hello? 🧠',
        }
      )
      .setFooter({ text: 'For laughs and love — Roast responsibly 🔥' });

    await interaction.reply({ embeds: [embed] });
  }
};