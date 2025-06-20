# Emerson-Bot Whatsapp

<div align="center">
    <img src="./assets/images/takeshi-bot.png" width="500">
</div>

<br />



## Tecnologias envolvidas

- [Axios](https://axios-http.com/ptbr/docs/intro)
- [Baileys 6.7.18](https://github.com/WhiskeySockets/Baileys)
- [FFMPEG](https://ffmpeg.org/)
- [Node.js >= 22.14.0](https://nodejs.org/en)
- [Spider X API](https://api.spiderx.com.br)

## Sobre este projeto

Este projeto não possui qualquer vínculo oficial com o WhatsApp. Ele foi desenvolvido de forma independente para interações automatizadas por meio da plataforma.

## Instalação no Termux

1 - Abra o Termux e execute os comandos abaixo.<br/>
_Não tem o Termux? [Clique aqui e baixe a última versão](https://www.mediafire.com/file/082otphidepx7aq/Termux_0.119.1_aldebaran_dev.apk)._

```sh
pkg upgrade -y && pkg update -y && pkg install git -y && pkg install nodejs-lts -y && pkg install ffmpeg -y
```

2 - Habilite o acesso da pasta storage, no termux.

```sh
termux-setup-storage
```

3 - Entre na pasta sdcard.

```sh
cd /sdcard
```

4 - Clone o repositório.

```sh
git clone https://github.com/guiireal/takeshi-bot.git
```

5 - Entre na pasta que foi clonada.

```sh
cd takeshi-bot
```

6 - Habilite permissões de leitura e escrita (faça apenas 1x esse passo).

```sh
chmod -R 755 ./*
```

7 - Execute o bot.

```sh
npm start
```

8 - Insira o número de telefone e pressione `enter`.

9 - Informe o código que aparece no termux, no seu WhatsApp, [assista aqui, caso não encontre essa opção](https://youtu.be/6zr2NYIYIyc?t=5395).

10 - Aguarde 10 segundos, depois digite `CTRL + C` para parar o bot.

11 - Configure o arquivo `config.js` que está dentro da pasta `src`.

```js
// Prefixo dos comandos
exports.PREFIX = "/";

// Emoji do bot (mude se preferir).
exports.BOT_EMOJI = "🤖";

// Nome do bot (mude se preferir).
exports.BOT_NAME = "Takeshi Bot";

// Número do bot. Coloque o número do bot
// (apenas números, exatamente como está no WhatsApp).
// Se o seu DDD não for de SP ou do Rio, não coloque o 9 antes do número.
exports.BOT_NUMBER = "558112345678";

// Número do dono do bot. Coloque o número do dono do bot
// (apenas números, exatamente como está no WhatsApp).
// Se o seu DDD não for de SP ou do Rio, não coloque o 9 antes do número.
exports.OWNER_NUMBER = "5521950502020";

// LID do dono do bot.
// Para obter o LID do dono do bot, use o comando <prefixo>get-lid @marca ou +telefone do dono.
exports.OWNER_LID = "219999999999999@lid";
```

12 - Inicie o bot novamente.

```sh
npm start
```

## Instalação em VPS (Debian/Ubuntu)

1 - Abra um novo terminal e execute os seguintes comandos.

```sh
sudo apt update && sudo apt upgrade && sudo apt-get update && sudo apt-get upgrade && sudo apt install ffmpeg
```

2 - Instale o `curl` se não tiver.

```sh
sudo apt install curl
```

3 - Instale o `git` se não tiver.

```sh
sudo apt install git
```

4 - Instale o NVM.

```sh
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.3/install.sh | bash
```

5 - Atualize o source do seu ambiente

```sh
source ~/.bashrc
```

6 - Instale a versão 22 mais recente do node.js.

```sh
nvm install 22
```

7 - Verifique se a versão foi instalada e está ativa.

```sh
node -v # Deve exibir a versão 22
```

8 - Verifique se o npm foi instalado junto.

```sh
npm -v # Deverá exibir a versão do npm
```

9 - Instale o PM2 (recomendado).

```sh
npm install pm2 -g
```

10 - Clone o repositório do bot onde você desejar.

```sh
git clone https://github.com/guiireal/takeshi-bot.git
```

11 - Entre na pasta clonada.

```sh
cd takeshi-bot
```

12 - Digite o seguinte comando.

```sh
npm start
```

## Funcionalidades gerais

| Função | Contexto | Requer a Spider X API?
| ------------ | --- | ---
| Alterar imagem do bot | Dono | ❌
| Desligar o bot no grupo | Dono | ❌
| Executar comandos de infra | Dono | ❌
| Ligar o bot no grupo | Dono | ❌
| Obter o ID do grupo | Dono | ❌
| Abrir grupo | Admin | ❌
| Agendar mensagem | Admin | ❌
| Anti link | Admin | ❌
| Banir membros | Admin | ❌
| Fechar grupo | Admin | ❌
| Ligar/desligar auto responder | Admin | ❌
| Ligar/desligar boas vindas | Admin | ❌
| Ligar/desligar saída de grupo | Admin | ❌
| Limpar chat | Admin | ❌
| Marcar todos | Admin | ❌
| Mudar nome do grupo | Admin | ❌
| Mute/unmute | Admin | ❌
| Revelar | Admin | ❌
| Borrar imagem | Membro | ❌
| Busca CEP | Membro | ❌
| Canvas Bolsonaro | Membro | ✅
| Canvas cadeia | Membro | ✅
| Canvas inverter | Membro | ✅
| Canvas RIP | Membro | ✅
| Comandos de diversão/brincadeiras | Membro |❌
| Espelhar imagem | Membro | ❌
| Fake chat | Membro | ❌
| Figurinha de texto animada | Membro | ✅
| Geração de imagens com IA | Membro | ✅
| Gerar link | Membro | ❌
| Google Gemini | Membro | ✅
| Google search | Membro | ✅
| Imagem com contraste | Membro | ❌
| Imagem IA PixArt | Membro | ✅
| Imagem IA Stable Diffusion Turbo | Membro | ✅
| Imagem pixelada | Membro | ❌
| Imagem preto/branco | Membro | ❌
| Ping | Membro | ❌
| Play áudio | Membro | ✅
| Play vídeo | Membro | ✅
| Renomear figurinha | Membro | ❌
| Sticker | Membro | ❌
| Sticker IA  | Membro | ✅
| Sticker para imagem | Membro | ❌
| TikTok video download | Membro | ✅
| YT MP3 | Membro | ✅
| YT MP4 | Membro | ✅
| YT search | Membro | ✅

## Estrutura de pastas

- 📁 assets ➔ _arquivos de mídia_
    - 📁 auth ➔ _arquivos da conexão do bot_
    - 📁 images ➔ _arquivos de imagem_
        - 📁 funny ➔ _gifs de comandos de diversão_
    - 📁 samples ➔ _arquivos de exemplo para testes_
    - 📁 temp ➔ _arquivos temporários_
- 📁 database ➔ _arquivos de dados_
- 📁 node_modules ➔ _módulos do Node.js_
- 📁 src ➔ _código fonte do bot (geralmente você mexerá mais aqui)_
    - 📁 @types ➔ _pasta onde fica as definições de tipos_
    - 📁 commands ➔ _pasta onde ficam os comandos_
        - 📁 admin ➔ _pasta onde ficam os comandos administrativos_
        - 📁 member ➔ _pasta onde ficam os comandos gerais (todos poderão utilizar)_
            - 📁 exemplos ➔ _pasta com 24 comandos de exemplo_
        - 📁 owner ➔ _pasta onde ficam os comandos de dono (grupo e bot)_
        - 📝🤖-como-criar-comandos.js ➔ _arquivo de exemplo de como criar um comando_
    - 📁 errors ➔ _classes de erros usadas nos comandos_
    - 📁 middlewares ➔ _interceptadores de requisições_
    - 📁 services ➔ _serviços diversos_
    - 📁 utils ➔ _utilitários_
    - 📝 config.js ➔ _arquivo de configurações do bot_
    - 📝 connection.js ➔ _script de conexão do bot com a biblioteca Baileys_
    - 📝 index.js ➔ _script ponto de entrada do bot_
    - 📝 loader.js ➔ _script de carga de funções_
    - 📝 menu.js ➔ _menu do bot_
    - 📝 test.js ➔ _script de testes_
- ⚡-cases-estao-aqui ➔ _easter egg_ 
- 📝 index.js ➔ _script ponto de entrada do bot para hospedagem_
- 📝.gitignore ➔ _arquivo para não subir certas pastas no GitHub_
- 📝LICENSE ➔ _arquivo de licença_
- 📝package-lock.json ➔ _arquivo de cache das dependências do bot_
- 📝package.json ➔ _arquivo de definição das dependências do bot_
- 📝README.md ➔ _esta documentação_
