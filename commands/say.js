module.exports = {
    name: 'say',
    description: 'Make the bot say whatever you type.',
    options: [
        {
            name: 'message',
            type: 3, // STRING
            description: 'What should I say?',
            required: true
        }
    ],

    async execute(interaction) {
        const message = interaction.options.getString('message');

        // Filter out pings
        const filtered = message.replace(/@everyone|@here/g, '👀');

        await interaction.reply({ content: filtered });
    },
};