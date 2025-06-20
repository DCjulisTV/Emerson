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

╭━━⪩ Menu's ⪨━━
▢
▢ • ${PREFIX}menuadm
▢ • ${PREFIX}menuadm
▢ • ${PREFIX}menuprincipal
▢ • ${PREFIX}menujogos
▢
╰━━─「🌌」─━━
`;
};
