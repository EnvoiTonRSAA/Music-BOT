const { EmbedBuilder } = require("discord.js")

exports.help = {
    name: 'help'
}

exports.run = async (bot, message) => {
    message.delete().then(() => {
        message.channel.send({
            embeds: [
                {
                    title: "**Mes commandes**",
                    footer: {
                        text: bot.config.clients.name,
                        iconURL: bot.config.clients.logo
                    },
                    description: `\`ping\`: Pour voir le ping du bot
                    \`back\`: Pour retourner en arrière
                    \`clear\`: Pour clear la queue
                    \`jump\`: Pour passer une musique
                    \`nowplaying\`: Pour voir la musique en cours de lecture
                    \`pause\`: Pour faire une pause dans la musique
                    \`play\`: Pour jouer une musique
                    \`resume\`: Pour relancer la musique
                    \`shuffle\`: Pour mélanger les musique
                    \`skip\`: Pour passer la musique
                    \`stop\`: Pour arrêter la musique
                    \`volume\`: Pour changer le volume de la musique`.replace("                    ", "")
                }
            ]
        })
    })}