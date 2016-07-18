var TelegramBot = require('node-telegram-bot-api');

var token = '261883188:AAGYAxFfu308b00F6ZBdH8i5kq-LBxmyxcE';

var bot = new TelegramBot(
    token, {
        polling:true
    });

bot.getMe().then(function (me){
    console.log('Hi my name is %s!', me.username);
});

//Código texto
bot.onText(/^\/soy (.+)$/, function (msg, match) {
    var name = match[1];
    console.log(msg);
    bot.sendMessage(msg.chat.id, `Que tal ${name} !`).then(function (){
        console.log(`Saludos para ${name}`);
    });
});

//Código imagen
bot.onText(/^\/foto(.+)$/,function(msg,match){
  var chatId = msg.chat.id;
  var photo = './assets/images/image.png';
  bot.sendPhoto(chatId, photo, {caption: 'Hola Minion'});
console.log('Imagen enviada');
});

//Código ubicación
bot.onText(/^\/ubicacion(.+)$/,function(msg,match){
  var chatId = msg.chat.id;
  bot.sendLocation(chatId, 20.0657983,-98.4818273);
console.log('Mostrando ubicación');
});

//Código video
bot.onText(/^\/video(.+)$/,function(msg,match){
  var chatId = msg.chat.id;
  var video = './assets/videos/HolaMinion.mp4';
  bot.sendVideo(chatId,video);
console.log('Video enviado');
});