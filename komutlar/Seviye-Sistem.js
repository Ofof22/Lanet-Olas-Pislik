const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const seviye = new Discord.MessageEmbed()
    .setAuthor(`Cyte Seviye Sistem`)
    .setTitle(``)
    .setColor("#00ff00")
    .setDescription(
      `<a:utility4:1083737708159041548> Cyte Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Seviye__**`,
      `<a:utility:1083737704463867954> \`${prefix}seviye\` \n Sizin Özelliştirdiginiz Seviye Sıralama Kartını Gösterir.`,
        true
    )
     .addField(
      `**__Seviye Sıralama__**`,
      `<a:utility:1083737704463867954> \`${prefix}sıralama\` \n Seviye DataBase 'indeki Sıralama Ranklarını Görürsün.`,
        true
    )
   .addField(
      `**__SeviyeKart Özelleştir Renk__**`,
      `<a:utility:1083737704463867954> \`${prefix}seviyekart-özelleştir renk\` \n Seviye Kartınıza Özel Renk Ayarlarsınız.`,
        true
    )
    .addField(
      `**__Seviye Aç__**`,
      `<a:utility:1083737704463867954> \`${prefix}seviye-ayarla durum aç\` \n Discord Sunucunuzda Seviye Sistemini Açarsınız.`,
        true
    )
     .addField(
      `**__Seviye Kapat__**`,
      `<a:utility:1083737704463867954> \`${prefix}seviye-ayarla durum kapat\` \n Discord Sunucunuzda Seviye Sistemini Kapatırsınız.`,
        true
    )
     .addField(
      `**__Seviye Kanal__**`,
      `<a:utility:1083737704463867954> \`${prefix}seviye-ayarla log kanal\` \n Discord Sunucunuzda Seviye Log Kanal Ayarlarsanız.`,
        true
    )
     .addField(
      `**__Seviye Mesaj__**`,
      `<a:utility:1083737704463867954> \`${prefix}seviye-ayarla log mesaj seviye\` \n Seviye Log Kanalına Gidecek Mesaji Ayarlasınız.`,
        true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:utility:1083737704463867954>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n <a:utility:1083737704463867954> \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n <a:utility:1083737704463867954> \`${prefix}iletişim\` | Bizim iletişiö bilgilri`
    );
  msg.channel.send(seviye);
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};
exports.help = {
  name:"seviye-sistem",
  description: "İstediğiniz kullanıcını bilgilerini gösterir.",
  usage: "seviye"
};
