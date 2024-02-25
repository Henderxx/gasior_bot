const { Client, GatewayIntentBits } = require("discord.js");
require("dotenv").config();

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
    ],
});


client.once('ready', () => {
    console.log('Gąsior przybył aby cię nawiedzić')
})

client.on('ready', (client) => {
    const guild = client.guilds.cache.get(`${process.env.GUILD}`)
    sendRandomMessage(guild)
})
try {
    client.login(process.env.TOKEN)
} catch (error) {
    console.log(error)
}



const messagesList = [
    'Jeśli w dniu zakochanych nie jesteś zakochany nie martw się, na święto zmarłych też nie musisz być martwy',
    '*....Szur szur szur, coś tu pust ostatnio ...*',
    'Heeej..... hej Ty, Powiedz temu za barem żeby mnie wypuścił ',
    'Oo nowy, a ciebie za co tu zrzucili?',
    'Każdy tylko wpada i wypada, ani się nie przywita ani Bimbru nie przyniesie',
    'Uciszcie tego Barda tam na górze!!!! .... nawet mi uszy już więdną..',
    '...I kolejnego niosą tu nieprzytomnego...Chodź mam dla ciebie parę minut, potem i tak ci nikt nie uwierzy.... ',
]

function generateRandomTime(min = 1, max = 60) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function selectRandomMessage() {
    return generateRandomTime(1, messagesList.length)

}

function sendRandomMessage(guild) {
    const messageChannel= guild?.channels.cache.get(`${process.env.MESSAGE_CHANNEL}`)
    const message = messagesList[selectRandomMessage() - 1]
    messageChannel.send(message)
    const randomRepeatTime = generateRandomTime() * 1000 * 60 * 2
    console.log(randomRepeatTime)
    setTimeout(sendRandomMessage, randomRepeatTime, guild)
}