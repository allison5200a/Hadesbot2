const owner = (prefix, botName, ownerName) => {
        return `
┏ *〈 ${botName} 〉*
╿
┷┯ *〈 BOT INFO 〉*
   ╽
   ┠≽ *Prefix* : 「  ${prefix}  」
   ┠≽ *Creator* : ${ownerName}
   ┠≽ *Version* : 2.0
   ╿
┯┷ *〈 ABOUT 〉*
╽
┠≽ *${prefix}info* (error)
┃ *Desc* : Mostrar detalhes do bot
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Mostrar usuário bloqueado
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Mostrar todos os usuários de bate-papo
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Mostrar velocidade do bot de conexão
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Reportar bug ao proprietário do bot
╿
┷┯ *〈 OWNER 〉*
   ╽
   ┠≽ *${prefix}setprefix* <text/optional>
   ┃ *Desc* : Substituir Prefixo
   ┠──────────────╼
   ┠≽ *${prefix}block* <@tag>
   ┃ *Desc* : Bloquear usuário
   ┠──────────────╼
   ┠≽ *${prefix}unblock* <@tag>
   ┃ *Desc* : Desbloquear usuário
   ┠──────────────╼
   ┠≽ *${prefix}bc* <text>
   ┃ *Desc* : Broadcast to All Contact & Group
   ┠──────────────╼
   ┠≽ *${prefix}clone* <@tag>
   ┃ *Desc* : Clone Profile From Other Members
   ┠──────────────╼
   ┠≽ *${prefix}clearall
   ┃ *Desc* : Clear All Chat
   ╿ *${ownerName}*,
   ╰╼≽ *ᴀʟɴʙᴏᴛs © ${botName}`
}
exports.owner = owner
