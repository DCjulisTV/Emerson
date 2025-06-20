// Certifique-se de que PREFIX está definido em seu arquivo de configuração, por exemplo:
// const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = {
  name: "menu-Principal",
  description: "Mostra o menu de comandos Principal do bot.",
  commands: ["menuprincipal"],
  usage: `${PREFIX}menuprincipal`,
  handle: async ({ sendText }) => {
    const menuDonoMessage = `╭━━⪩ PRINCIPAL ⪨━━
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
▢ • ${PREFIX}play-audio
▢ • ${PREFIX}play-video
▢ • ${PREFIX}tik-tok
▢ • ${PREFIX}yt-mp3
▢ • ${PREFIX}yt-mp4
▢ • ${PREFIX}cadeia
▢ • ${PREFIX}pixel
▢ • ${PREFIX}rip
▢
╰━━─「🚀」─━━`;

    await sendText(menuDonoMessage);
  },
};
