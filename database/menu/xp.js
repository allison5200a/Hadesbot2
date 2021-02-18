const xp = (prefix, botName, ownerName) => {
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
┃ *Desc* : Show Bot Details
┠──────────────╼
┠≽ *${prefix}blocklist*
┃ *Desc* : Show Blocked User
┠──────────────╼
┠≽ *${prefix}chatlist* (error)
┃ *Desc* : Show All Chat User
┠──────────────╼
┠≽ *${prefix}ping*
┃ *Desc* : Show Connection Bot Speed
┠──────────────╼
┠≽ *${prefix}bugreport* <text>
┃ *Desc* : Report Bug To Owner Bot
╿
┷┯ *〈 LEVEL 〉*
   ╽
   ┠≽ *${prefix}level*
   ┃ *Desc* : Check Your Level
   ┠──────────────╼
   ┠≽ *${prefix}leveling* <1/0>
   ┃ *Desc* : Enabling / Disabling Leveling Features
   ┠──────────────╼
   ┠≽ *${prefix}mining*
   ┃ *Desc* : Mining XP
   ┠──────────────╼
   ┠≽ *${prefix}event* <1/0>
   ┃ *Desc* : Enabling / Disabling Event Features
   ╿ *${ownerName}*,
   ╰╼≽ *ᴀʟɴʙᴏᴛs © ${botName}
--------------------------------
Note: Você pode coletar XP e aumentar seu nível conversando com qualquer pessoa do grupo que tenha ativado o recurso de nivelamento.`
}
exports.xp = xp
