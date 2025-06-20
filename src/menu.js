/**
 * Menu do bot
 *
 * @author Dev Gui
 */
const { BOT_NAME, PREFIX } = require("./config");
const packageInfo = require("../package.json");
const { readMore } = require("./utils");

exports.menuMessage = () => {
  const date = new Date();

  return `╭━━⪩ BEM VINDO! ⪨━━${readMore()}
▢
▢ • ${BOT_NAME}
▢ • Data: ${date.toLocaleDateString("pt-br")}
▢ • Hora: ${date.toLocaleTimeString("pt-br")}
▢ • Prefixo: ${PREFIX}
▢ • Versão: ${packageInfo.version}
▢
╰━━─「🪐」─━━

╭━━⪩ DONO ⪨━━
▢
▢ • ${PREFIX}exec
▢ • ${PREFIX}get-id
▢ • ${PREFIX}off
▢ • ${PREFIX}on
▢ • ${PREFIX}set-menu-image
▢
╰━━─「🌌」─━━

╭━━⪩ ADMINS ⪨━━
▢
▢ • ${PREFIX}abrir
▢ • ${PREFIX}agendar-mensagem
▢ • ${PREFIX}anti-link (1/0)
▢ • ${PREFIX}auto-responder (1/0)
▢ • ${PREFIX}ban
▢ • ${PREFIX}exit (1/0)
▢ • ${PREFIX}fechar
▢ • ${PREFIX}hidetag
▢ • ${PREFIX}limpar
▢ • ${PREFIX}mute
▢ • ${PREFIX}promover
▢ • ${PREFIX}rebaixar
▢ • ${PREFIX}revelar
▢ • ${PREFIX}unmute
▢ • ${PREFIX}welcome (1/0)
▢
╰━━─「⭐」─━━

╭━━⪩ PRINCIPAL ⪨━━
▢
▢ • ${PREFIX}attp
▢ • ${PREFIX}cep
▢ • ${PREFIX}exemplos-de-mensagens
▢ • ${PREFIX}fake-chat
▢ • ${PREFIX}get-lid
▢ • ${PREFIX}google-search
▢ • ${PREFIX}perfil
▢ • ${PREFIX}ping
▢ • ${PREFIX}raw-message
▢ • ${PREFIX}rename
▢ • ${PREFIX}sticker
▢ • ${PREFIX}to-image
▢ • ${PREFIX}ttp
▢ • ${PREFIX}yt-search
▢
╰━━─「🚀」─━━

╭━━⪩ DOWNLOADS ⪨━━
▢
▢ • ${PREFIX}play-audio
▢ • ${PREFIX}play-video
▢ • ${PREFIX}tik-tok
▢ • ${PREFIX}yt-mp3
▢ • ${PREFIX}yt-mp4
▢
╰━━─「🎶」─━━

╭━━⪩ BRINCADEIRAS ⪨━━
▢
▢ • ${PREFIX}dado
▢
╰━━─「🎡」─━━

╭━━⪩ IA ⪨━━
▢
▢ • ${PREFIX}gemini
▢ • ${PREFIX}ia-sticker
▢ • ${PREFIX}pixart
▢
╰━━─「🚀」─━━

╭━━⪩ CANVAS ⪨━━
▢
▢ • ${PREFIX}cadeia
▢ • ${PREFIX}pixel
▢ • ${PREFIX}rip
▢
╰━━─「❇」─━━`;`;
};
