module.exports = {
    clients: {
        token: 'TOKEN',
        prefix: '+',
        activity: 'ACTIVITY',
        name: 'FOOTER',
        logo: 'https://cdn.discordapp.com/attachments/1231615042080866425/1236069844064141403/441196891_25421370820840060_7369957955857831622_n_1.jpg?ex=663753ff&is=6636027f&hm=7d54e7ac2a586aad38ea7a602b84a5ef973ba8fd961077e5b728b925c83d25fb&',
        embedColor: '#35393e'
    },

    opt: {
        DJ: {
            enabled: false,
            roleName: 'ROLE DJ',
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'seek', 'shuffle', 'skip', 'stop', 'volume']
        },
        maxVol: 100,
        loopMessage: false,
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio',
                highWaterMark: 1 << 25
            }
        }
    }
};