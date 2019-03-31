const TelegramBot = require('node-telegram-bot-api');

const port = process.env.PORT || 443,
    host = '0.0.0.0', // probably this change is not required
    externalUrl = "https://mj785bot.herokuapp.com",
    token = process.env.TOKEN || '871158143:AAEkyFc9LWBeIySjjGN04Qz5BQ6z6D0GN44',
    bot = new TelegramBot(token, {
        webHook: {
            port: port,
            host: host
        }
    });
bot.setWebHook(externalUrl + ':443/bot' + token);
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    console.log(msg.text)
    if (msg.text == "Hi")
       bot.sendMessage(chatId, 'Hello');
    else if (msg.text == "Hello")
       bot.sendMessage(chatId, 'Hi');
    else   
       bot.sendMessage(chatId, 'achanode pooyi parayada poori mwone')
            
});
