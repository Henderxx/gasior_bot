import { Client, Intents, Options } from 'discord.js'
import dotnenv from 'dotenv'
dotnenv.config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.DIRECT_MESSAGES], makeCache: Options.cacheEverything() })

client.once('ready', () => {
    console.log('Gąsior przybył aby cię nawiedzić')
})

client.on('ready', (client) => {
    const guild = client.guilds.cache.get('732283820535054409')
    //   const messageChannel: any = guild?.channels.cache.get('732283821046759527')
    sendRandomMesage(guild)
    //   messageChannel.send(`content`)
})

client.login(process.env.TOKEN)

const messagesList = ['piersza wiadomosc', 'druga wiadomosc', 'trzecia wiadomosc']

function generateRandomTime(min: number = 1, max: number = 60) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min + 1)) + min
}

function selectRandomMessage() {
    const messageNumber = generateRandomTime(1, messagesList.length)
    return messageNumber
}

function sendRandomMesage(guild: any) {
    const messageChannel: any = guild?.channels.cache.get('732283821046759527')
    const message = messagesList[selectRandomMessage() - 1]
    messageChannel.send(message)
    const randomRepeatTime = generateRandomTime() * 1000
    console.log(randomRepeatTime)
    setTimeout(sendRandomMesage, randomRepeatTime, guild)
}
