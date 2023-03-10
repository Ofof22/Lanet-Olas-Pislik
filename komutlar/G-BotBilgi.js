const Discord = require('discord.js');
const moment = require('moment');
require('moment-duration-format');

exports.run = (client, message, args) => {
  const region = {
    brazil: 'Brezilya',
    europe: 'Avrupa',
    hongkong: 'Hong Kong',
    india: 'Hindistan',
    japan: 'Japonya',
    russia: 'Rusya',
    singapore: 'Singapur',
    southafrica: 'Güney Afrika',
    sydney: 'Sidney',
    'us-central': 'ABD Merkezi',
    'us-east': 'ABD Doğu',
    'us-west': 'ABD Batı',
    'us-south': 'ABD Güney',
  };
  const guild = message.guild;
  const embed = new Discord.MessageEmbed()
    .setColor('#7289da')
    .setTitle(`${guild.name} Sunucusunun İstatistikleri`)
    .addField('Sunucu Sahibi', guild.owner, true)
    .addField(
      'Sunucu Yaş',
      moment.duration(Date.now() - guild.createdAt).format('Y [yıl], M [ay], D [gün]'),
      true
    )
    .addField('Sunucu ID', guild.id, true)
    .addField('Sunucu Üye Sayısı', guild.memberCount, true)
    .addField(
      'Sunucu Kanal Sayısı',
      guild.channels.cache.filter((channel) => channel.type !== 'category').size,
      true
    )
    .addField(
      'Sunucu Kategori Sayısı',
      guild.channels.cache.filter((channel) => channel.type === 'category').size,
      true
    )
    .addField('Sunucu Rol Sayısı', guild.roles.cache.size, true)
    .addField(
      'Sunucudaki Yetkililer',
      guild.members.cache
        .filter((member) => member.permissions.has('MANAGE_MESSAGES'))
        .map((member) => member.user)
        .join('\n') || 'Yönetici yok',
      true
    )
    .addField(
      'Bot İstatistikleri',
      `**Toplam Sunucu**: ${client.guilds.cache.size}\n` +
        `**Toplam Kullanıcı**: ${client.users.cache.size}\n` +
        `**Toplam Kanal**: ${client.channels.cache.size}\n` +
        `**Discord.JS Sürümü**: v${Discord.version}\n` +
        `**Ping**: ${client.ws.ping}ms`
    )
    .setTimestamp();

  message.channel.send(embed);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['istatistik', 'server-stats'],
  permLevel: 0,
};

exports.help = {
  name: 'bot-bilgi',
  description: 'Sunucu istatistiklerini gösterir.',
  usage: 'sunucu-istatistik',
};
