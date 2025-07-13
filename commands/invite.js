const { EmbedBuilder } = require('discord.js');

module.exports = {
  name: 'invite',
  description: 'Get a link to invite Snubbie in your server!',
  options: [],

  async execute(interaction) {
    const embed = new EmbedBuilder()
      .setTitle('✨ Invite Me, Maybe?')
      .setDescription(
        `Oh, so now you want me in *your* server too? 😏  
        Fine, here’s the link. Just don’t forget to offer virtual snacks 🍪.`
      )
      .setColor(0xf0f0f0)
      .addFields({
        name: '🔗 Invite Me:',
        value: `[Click here to unleash chaos](https://discord.com/oauth2/authorize?client_id=1392197276717285456&permissions=0&integration_type=0&scope=applications.commands+bot)`,
      })
      .setFooter({ text: 'I’m not saying I’m awesome, but... I am.' });

    await interaction.reply({ embeds: [embed], ephemeral: true });
  },
};