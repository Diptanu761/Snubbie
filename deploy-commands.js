require('dotenv').config();
const { REST, Routes } = require('discord.js');
const fs = require('fs');
const { clientId, guildId } = require('./config/config.json');

const commands = [];
const commandFiles = fs.readdirSync('./commands');

for (const file of commandFiles) {
    const command = require(`./commands/${file}`);
    commands.push({
        name: command.name,
        description: command.description,
        options: command.options || []
    });
}

const rest = new REST({ version: '10' }).setToken(process.env.DISCORD_TOKEN);

(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(
            Routes.applicationCommands(clientId),
            { body: commands }
        );

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();