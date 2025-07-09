const { Events } = require('discord.js');

module.exports = {
    name: Events.ClientReady,
    once: true,
    execute(client) {
        console.log(`Ready! Logged in as ${client.user.tag}`);
        // You can also set a status or activity here if you want
        // client.user.setActivity('your activity', { type: 'WATCHING' });
    }, 
    // You can add more properties or methods if needed
};