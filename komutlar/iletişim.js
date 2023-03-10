const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");
let prefix = ayarlar.prefix;

exports.run = async (bot, msg, args) => {
  const iletişim = new Discord.MessageEmbed()
    .setAuthor(`Cyte| İletişim Bilgileri`)
    .setTitle(``)
    .setColor("#00ff00")
    .setDescription(
      `Ⓜ️ Cyte Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `**__Destek Sunucumuz__**`,
      `<:Role_Expert:1083737691662843964>  [Destek Sunucumuz](https://discord.gg/v3WKnvTMfq)`,
      true
    )
    .addField(
      `**__Instagram Sayfamız__**`,
      `<:Role_Expert:1083737691662843964>  [Instagram Sayfamız](https://www.instagram.com/tryed78/)`,
      true
    )
 
    .addField(
      `__Bilgilendirme__`,
      `⚜️  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n ⚜️ \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n ⚜️ \`${prefix}öneri-sistem\` | Öneri Sistemine Bakarsınız.`
    );
  msg.channel.send(iletişim);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "iletişim",
  description: "Botun iletişim bilgilerini gösterir.",
  usage: "iletişim"
};
