const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("ping")
        .setDescription("Replies with Pong!"),
    async execute(interaction) {
        await interaction.reply("Pong!");  
        // You can also use interaction.deferReply() if you want to delay the reply
        // await interaction.deferReply();
        // await interaction.editReply("Pong!");
    }
};