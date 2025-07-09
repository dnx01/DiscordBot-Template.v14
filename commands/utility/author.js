const { SlashCommandBuilder } = require("discord.js");

module.exports = {
	data: new SlashCommandBuilder()
		.setName('author')
		.setDescription('Replies with the author of the bot!'),
	async execute(interaction) {
		const author = "dnz_zz";
		const authordiscord = "https://discord.com/users/923205829166006272";
		const authorprofile = `[${author}](${authordiscord})`;
		const website = "https://dnzdev.xyz/";
		const githubrepo = "https://github.com/dnx01/DiscordBot-Template.v14";

		const embed = {
			color: 0x0099ff,
			title: '🤖 Bot Author',
			description: `This bot was created by ${authorprofile}.`,
			fields: [
				{ name: '🌐 Website', value: `[Visit here](${website})`, inline: true },
				{ name: '📦 GitHub Repository', value: `[View on GitHub](${githubrepo})`, inline: true },
			],
			timestamp: new Date(),
			footer: {
				text: 'Made with ❤️ by dnz_zz',
			},
		};

		await interaction.reply({ embeds: [embed] });
	},
};
