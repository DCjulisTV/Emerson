// Certifique-se de que PREFIX está definido em seu arquivo de configuração, por exemplo:
// const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = {
  name: "menu-adm",
  description: "Mostra o menu de comandos para o adm do bot.",
  commands: ["menuadm"],
  usage: `${PREFIX}menuadm`,
  handle: async ({ sendText }) => {
    const menuDonoMessage = `╭━━⪩ ADMINS ⪨━━
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
╰━━─「⭐」─━━`;

    await sendText(menuDonoMessage);
  },
};
