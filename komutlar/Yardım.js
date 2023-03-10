const Discord = require("discord.js");
const ayarlar = require("../ayarlar.json");

exports.run = async (client, message) => {
  let prefix = ayarlar.prefix;

  const embed = new Discord.MessageEmbed()
    .setAuthor(`Cyte`)
    .setTitle(``)
    .setColor("#00ff00")
    .setDescription(
      `<a:partyblobtrash:1083737689993519184> Cyte Botumuzu Eklemek İçin \`${prefix}davet\` yazabilirsiniz.`
    )
    .addField(
      `__Genel Komutlar__`,
      `<a:partyblobtrash:1083737689993519184> \`${prefix}genel\``,
      true
    )
    .addField(
      `__Ayarlar Komutlar__`,
      `<a:partyblobtrash:1083737689993519184>  \`${prefix}ayarlar\` `,
      true
    )
    .addField(
      `__Sunucu Koruma(Bakımda)__`,
      `🔰 \`${prefix}koruma\`  `,
      true
    )
    .addField(
      `__Sunucu Ayarlar(Bakımda)__`,
      `<a:partyblobtrash:1083737689993519184> \`${prefix}sunucu\` `,
      true
    )
    .addField(
      `__Kullanıcı Komutlar__`,
      `<a:partyblobtrash:1083737689993519184> \`${prefix}kullanıcı\` `,
      true
    )
    .addField(
      `__Oyun Komutlar(Bakımda)__`,
      ` <a:partyblobtrash:1083737689993519184> \`${prefix}oyunlar\` `,
      true
    )
    .addField(
      `__Çekiliş Komutlar__`,
      `<a:partyblobtrash:1083737689993519184> \`${prefix}çekiliş\` `,
      true
    )
    .addField(
      `__Eklenti Komutlar__`,
      `<a:partyblobtrash:1083737689993519184> \`${prefix}eklenti\``,
      true
    )
    .addField(
      `__Eğlence Komutlar__`,
      `<a:partyblobtrash:1083737689993519184> \`${prefix}eğlence\``,
      true
    )
    .addField(
      `__Bilgilendirme__`,
      `<a:partyblobtrash:1083737689993519184>  \`${prefix}davet\` | Botu Sununuya Davet Edersiniz\n 🔱 \`${prefix}botbilgi\` | Botun İstatistiklerini Görürsünüz \n 🔱 \`${prefix}iletişim\` | Bizim İletişim Bilgileri.`
    );
  return message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yardım",
  description: "Yardım Menüsü",
  usage: "yardım"
};
