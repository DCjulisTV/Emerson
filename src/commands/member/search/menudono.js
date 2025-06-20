// Certifique-se de que PREFIX está definido em seu arquivo de configuração, por exemplo:
// const { PREFIX } = require(`${BASE_DIR}/config`);

module.exports = {
  name: "menu-dono",
  description: "Mostra o menu de comandos para o dono do bot.",
  commands: ["menudono"],
  usage: `${PREFIX}menudono`,
  handle: async ({ sendText }) => {
    const menuDonoMessage = `╭━━⪩ DONO ⪨━━
▢
▢ • ${PREFIX}exec
▢ • ${PREFIX}get-id
▢ • ${PREFIX}off
▢ • ${PREFIX}on
▢ • ${PREFIX}set-menu-image
▢
╰━━─「🌌」─━━`;

    await sendText(menuDonoMessage);
  },
};
