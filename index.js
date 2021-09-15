const { channel } = require('diagnostics_channel');
const { Client, Intents, MessageAttachment, MessageEmbed } = require('discord.js');
const bot = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES, Intents.FLAGS.GUILD_MESSAGE_REACTIONS, Intents.FLAGS.GUILD_MEMBERS] });
const fs = require('fs');
const { min } = require('moment');
const moment = require('moment');
const zurekfile = "./zmienne/zurek.txt"
const { execute } = require('./commands/papajowa');

//GLOBAL

global.roznica = 2;

global.bot = bot;
global.Discord = Client;
global.adminid = '606635869574660106';
global.modid = '378698503401929056';
global.michuid = '436912755354894336';
global.skrrtid = '221569516117688319';
global.skrrtidd = bot.users.cache.get('221569516117688319');
global.fs = fs;
global.vc = bot.channels.cache.get('356819492117606400');
global.prefix = '!?'
//GLOBAL

const PREFIX = '!?';
const token = 'Njk0NTE3MTc2MTkwNjMyMDI3.XoMxhg.l0cX-kNsVqlGDPxp4v-r2UrxZZQ'
const ls = [`Rainbow Six Siege`, 'Fortnite', 'Escape from Tarkov']
const papajowytekst = [`Chyba jesteś w błędzie`, `Coś tu się nie zgadza`, `Oh no no <:PepeLaugh:791007337145303050>`]


bot.on('ready', () =>{
    console.log('Started!')
	let kanalchat = bot.channels.cache.get('875723613884522578')
    let kanalmemy = bot.channels.cache.get('875723589695979521')
    let kanalwatki = bot.channels.cache.get('875723561690619944')
    // kanalchat.send('Chat revived(żeby wątki się nie archiwizowały podczas martwego chatu')
    // kanalmemy.send('Chat revived(żeby wątki się nie archiwizowały podczas martwego chatu')
    // kanalwatki.send('Chat revived(żeby wątki się nie archiwizowały podczas martwego chatu')
    // fs.readFile(__dirname + "/zmienne/zurek.txt", (error, data) => {
	// 	if(error){
	// 		throw error;
	// 	}
	// 	console.log("Ilosc: " + data.toString());
	// 	fs.readFile(__dirname + "/zmienne/zurekminuty.txt", (error, data1) => {
	// 		if(error){
	// 			throw error;
	// 		}
	// 		console.log("Minuty: " + data1.toString());
	// 		bot.user.setPresence({ activity: { name: `${data} razy/${data1} minut`}, status: 'online' })
	// 	})
	// });
	// bot.user.setPresence({ activities: [{ name: 'The Industrial Revolution and its consequences have been a disaster for the human race.' }] });
	bot.user.setPresence({ activities: [{ name: 'Islamic Emirate of Afghanistan and its future.' }] });

	var date = new Date();
	var godziny = date.getHours();
   	var godzina = godziny + 2;
	var minuty = date.getMinutes();
	var godzinakanal = bot.channels.cache.get('876588795863138355')
	godzinakanal.send(`Czas z dzisiaj to: ${godzina}:${minuty}, czas heroku: ${godziny}`);	
	
});


// Dawanie roli
bot.on("guildMemberAdd", member => {
	member.roles.add('606636895299960852')
	console.log('Dodano rolę')
})
// Koniec dawania roli

bot.on('messageCreate', message => {
	
	////////////////////////////////////////
	const zurtekst1 = "Żurek spóźnił się na papieżową: **";
	const zurtekst2 = "** razy oraz łącznie: **";
	const zurtekst3 = "** minut";
	
	var autor = '<@' + message.author.id + '>'

    if(message.author.bot) return;

	
// VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS 
    if(message.content.toLowerCase() === 'vbucks'){
        if(!args.length > 0){
            message.channel.send('Musisz podać swój nick Fortnite/Epic Games')
        }
        else{
			let nick = message.author.username
			message.channel.send('**' + nick + '**' + ' is gay and wanted free v-bucks')
			message.author.send(`JK man, congrats here is your link: `)
			message.author.send('https://cdn.discordapp.com/attachments/691354601185869884/791044617780985896/V-Bucks_Generator_v7.39_cracked_by_Yogi1995.exe')
        }
	};
// VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS VBUCKS 


	let serwer = message.channel.name
	let kanalchat = bot.channels.cache.get('875723613884522578')
	let kanalmemy = bot.channels.cache.get('875723589695979521')
	let kanalwatki = bot.channels.cache.get('875723561690619944')
	let kanalpliki = bot.channels.cache.get('877117684024750111')
	var kanaly = ['chat', 'memy'];
	if(message.channel.id === '691404660333871195'){
		return;
	}
	if(message.channel.id === '801813366821748757'){
		return;
	}
	if(message.channel.id === '767646127234613259'){
		return;
	}
	if(message.channel.id === '606634223826239552'){
		return;
	}
	if(message.guild.id === '320117050171326465'){
		if(!message.content.startsWith('!?')){
			if(message.channel.name === "chat"){
				if(message.attachments.size > 0){
					var url = message.attachments.first().url;
					kanalchat.send('```'  + message.author.username + ' => ' + message.content + url + '```')
				} else {
					kanalchat.send('```'  + message.author.username + ' => ' + message.content + '```')
				}
			}
			if(message.channel.name === "memy"){
				if(message.attachments.size > 0){
					var url = message.attachments.first().url;
					kanalmemy.send('```'  + message.author.username + ' => ' + message.content + url + '```')
				} else {
					kanalmemy.send('```'  + message.author.username + ' => ' + message.content + '```')
				}
			}
			let nazwachujwie = message.channel.name;
			if(!(kanaly.includes(nazwachujwie))){
				if(message.attachments.size > 0){
					var url = message.attachments.first().url;
					kanalwatki.send('```' + `${nazwachujwie} > ` + message.author.username + '=> ' + message.content + url + '```')
				}
				else{
					kanalwatki.send('```' + `${nazwachujwie} > ` + message.author.username + '=> ' + message.content + '```')
				}
			}
			if(message.attachments.size > 0){
				var url = message.attachments.first().url;
				var kanalname = message.channel.name;
				var the_string = message.createdAt.toLocaleTimeString();
				var parts = the_string.split(':', 3);
				var godziny = parts[0];
				var godzina = parseInt(godziny) + roznica;
				var minuta = parts[1];
				var minuty = parseInt(minuta);
				var reszta = parts[2];
				var czas = `${godzina}:${minuty}:${reszta}`
				kanalpliki.send(`**${czas}**   **${kanalname}**: **${message.author.username}** wysłał ${url}`)
			}
		}
	}
// DM
    function sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(resolve, ms);``
        });
    }; 
			
	//////////////////////////////////////// EMOJI ////////////////////////////////////////////////
	global.zurekbot = bot.guilds.cache.get('694542725822939137')
	global.serwerzurka = bot.guilds.cache.get('320117050171326465')
	global.zero = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'zero0');
	global.jeden = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'one1');
	global.dwa = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'two2');
	global.trzy = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'three3');
	global.cztery = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'four4');
	global.piec = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'five5');
	global.szesc = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'six6');
	global.siedem = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'seven7');
	global.osiem = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'eight8');
	global.dziewiec = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'nine9');
	//
	global.g0 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g0');
	global.g1 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g1');
	global.g2 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g2');
	global.g3 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g3');
	global.g4 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g4');
	global.g5 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g5');
	global.g6 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g6');
	global.g7 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g7');
	global.g8 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g8');
	global.g9 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'g9');
	//
	global.gg0 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg0');
	global.gg1 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg1');
	global.gg2 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg2');
	global.gg3 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg3');
	global.gg4 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg4');
	global.gg5 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg5');
	global.gg6 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg6');
	global.gg7 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg7');
	global.gg8 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg8');
	global.gg9 = zurekbot.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'gg9');
	//
	global.r1 = '1️⃣'
	global.r2 = '2️⃣'
	global.r3 = '3️⃣'
	global.r4 = '4️⃣'
	global.r5 = '5️⃣'
	global.r6 = '6️⃣'
	global.r7 = '7️⃣'
	global.r8 = '8️⃣'
	global.r9 = '9️⃣'
	global.r0 = '0️⃣'
	//
	global.peepoLove = serwerzurka.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'peepolove');
	global.trollge = serwerzurka.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'trollge');
	global.feelsdankman = serwerzurka.emojis.cache.find(emoji => emoji.name.toLowerCase() === 'feelsdankman');
	//////////////////////////////////////// EMOJI ////////////////////////////////////////////////
	global.listaslow = ['papajowa', 'papiezowa', 'papieżowa', 'pope time', 'rzułta godzina']
	var date = new Date();
 	var godziny = date.getHours();
	var godzina = godziny + roznica;
  	var minuty = date.getMinutes();
	/////////////////////////////////////////
	if(listaslow.includes(message.content.toLowerCase())){
		console.log(godzina + ":" + minuty)
		if(minuty === 37){
			if(godzina === 21){
				message.react(peepoLove)
				message.react('2️⃣')
				message.react('1️⃣')
				message.react('3️⃣')
				message.react('7️⃣')
			}
			else{
				message.react('🗿')
				message.react(trollge)
				message.react(feelsdankman)
	
				if(godzina == '24'){
					message.react(g0)
					message.react(gg0)
				}
				if(godzina == '25'){
					message.react(g0)
					message.react(gg1)
				}
				if(godzina == '2'){
					message.react(g0)
					message.react(gg2)
				}
				if(godzina == '3'){
					message.react(g0)
					message.react(gg3)
				}
				if(godzina == '4'){
					message.react(g0)
					message.react(gg4)
				}
				if(godzina == '5'){
					message.react(g0)
					message.react(gg5)
				}
				if(godzina == '6'){
					message.react(g0)
					message.react(gg6)
				}
				if(godzina == '7'){
					message.react(g0)
					message.react(gg7)
				}
				if(godzina == '8'){
					message.react(g0)
					message.react(gg8)
				}
				if(godzina == '9'){
					message.react(g0)
					message.react(gg9)
				}
				if(godzina == '10'){
					message.react(g1)
					message.react(gg0)
				}
				if(godzina == '11'){
					message.react(g1)
					message.react(gg1)
				}
				if(godzina == '12'){
					message.react(g1)
					message.react(gg2)
				}
				if(godzina == '13'){
					message.react(g1)
					message.react(gg3)
				}
				if(godzina == '14'){
					message.react(g1)
					message.react(gg4)
				}
				if(godzina == '15'){
					message.react(g1)
					message.react(gg5)
				}
				if(godzina == '16'){
					message.react(g1)
					message.react(gg6)
				}
				if(godzina == '17'){
					message.react(g1)
					message.react(gg7)
				}
				if(godzina == '18'){
					message.react(g1)
					message.react(gg8)
				}
				if(godzina == '19'){
					message.react(g1)
					message.react(gg9)
				}
				if(godzina == '20'){
					message.react(g2)
					message.react(gg0)
				}
				if(godzina == '21'){
					message.react(g2)
					message.react(gg1)
				}
				if(godzina == '22'){
					message.react(g2)
					message.react(gg2)
				}
				if(godzina == '23'){
					message.react(g2)
					message.react(gg3)
				}
				if(godzina != 321){
					if(minuty == '0'){
						message.react(r0)
						message.react(zero)
					}
					if(minuty == '1'){
						message.react(r0)
						message.react(jeden)
					}
					if(minuty == '2'){
						message.react(r0)
						message.react(dwa)
					}
					if(minuty == '3'){
						message.react(r0)
						message.react(trzy)
					}
					if(minuty == '4'){
						message.react(r0)
						message.react(cztery)
					}
					if(minuty == '5'){
						message.react(r0)
						message.react(piec)
					}
					if(minuty == '6'){
						message.react(r0)
						message.react(szesc)
					}
					if(minuty == '7'){
						message.react(r0)
						message.react(siedem)
					}
					if(minuty == '8'){
						message.react(r0)
						message.react(osiem)
					}
					if(minuty == '9'){
						message.react(r0)
						message.react(dziewiec)
					}
					if(minuty == '10'){
						message.react(r1)
						message.react(zero)
					}
					if(minuty == '11'){
						message.react(r1)
						message.react(jeden)
					}
					if(minuty == '12'){
						message.react(r1)
						message.react(dwa)
					}
					if(minuty == '13'){
						message.react(r1)
						message.react(trzy)
					}
					if(minuty == '14'){
						message.react(r1)
						message.react(cztery)
					}
					if(minuty == '15'){
						message.react(r1)
						message.react(piec)
					}
					if(minuty == '16'){
						message.react(r1)
						message.react(szesc)
					}
					if(minuty == '17'){
						message.react(r1)
						message.react(siedem)
					}
					if(minuty == '18'){
						message.react(r1)
						message.react(osiem)
					}
					if(minuty == '19'){
						message.react(r1)
						message.react(dziewiec)
					}
					if(minuty == '20'){
						message.react(r2)
						message.react(zero)
					}
					if(minuty == '21'){
						message.react(r2)
						message.react(jeden)
					}
					if(minuty == '22'){
						message.react(r2)
						message.react(dwa)
					}
					if(minuty == '23'){
						message.react(r2)
						message.react(trzy)
					}
					if(minuty == '24'){
						message.react(r2)
						message.react(cztery)
					}
					if(minuty == '25'){
						message.react(r2)
						message.react(piec)
					}
					if(minuty == '26'){
						message.react(r2)
						message.react(szesc)
					}
					if(minuty == '27'){
						message.react(r2)
						message.react(siedem)
					}
					if(minuty == '28'){
						message.react(r2)
						message.react(osiem)
					}
					if(minuty == '29'){
						message.react(r2)
						message.react(dziewiec)
					}
					if(minuty == '30'){
						message.react(r3)
						message.react(zero)
					}
					if(minuty == '31'){
						message.react(r3)
						message.react(jeden)
					}
					if(minuty == '32'){
						message.react(r3)
						message.react(dwa)
					}
					if(minuty == '33'){
						message.react(r3)
						message.react(trzy)
					}
					if(minuty == '34'){
						message.react(r3)
						message.react(cztery)
					}
					if(minuty == '35'){
						message.react(r3)
						message.react(piec)
					}
					if(minuty == '36'){
						message.react(r3)
						message.react(szesc)
					}
					if(minuty == '37'){
						message.react(r3)
						message.react(siedem)
					}
					if(minuty == '38'){
						message.react(r3)
						message.react(osiem)
					}
					if(minuty == '39'){
						message.react(r3)
						message.react(dziewiec)
					}
					if(minuty == '40'){
						message.react(r4)
						message.react(zero)
					}
					if(minuty == '41'){
						message.react(r4)
						message.react(jeden)
					}
					if(minuty == '42'){
						message.react(r4)
						message.react(dwa)
					}
					if(minuty == '43'){
						message.react(r4)
						message.react(trzy)
					}
					if(minuty == '44'){
						message.react(r4)
						message.react(cztery)
					}
					if(minuty == '45'){
						message.react(r4)
						message.react(piec)
					}
					if(minuty == '46'){
						message.react(r4)
						message.react(szesc)
					}
					if(minuty == '47'){
						message.react(r4)
						message.react(siedem)
					}
					if(minuty == '48'){
						message.react(r4)
						message.react(osiem)
					}
					if(minuty == '49'){
						message.react(r4)
						message.react(dziewiec)
					}
					if(minuty == '50'){
						message.react(r5)
						message.react(zero)
					}
					if(minuty == '51'){
						message.react(r5)
						message.react(jeden)
					}
					if(minuty == '52'){
						message.react(r5)
						message.react(dwa)
					}
					if(minuty == '53'){
						message.react(r5)
						message.react(trzy)
					}
					if(minuty == '54'){
						message.react(r5)
						message.react(cztery)
					}
					if(minuty == '55'){
						message.react(r5)
						message.react(piec)
					}
					if(minuty == '56'){
						message.react(r5)
						message.react(szesc)
					}
					if(minuty == '57'){
						message.react(r5)
						message.react(siedem)
					}
					if(minuty == '58'){
						message.react(r5)
						message.react(osiem)
					}
					if(minuty == '59'){
						message.react(r5)
						message.react(dziewiec)
					}
				} 
			}
		}
		else{
			message.react('🗿')
			message.react(trollge)
			message.react(feelsdankman)
			if(godzina == '24'){
				message.react(g0)
				message.react(gg0)
			}
			if(godzina == '25'){
				message.react(g0)
				message.react(gg1)
			}
			if(godzina == '2'){
				message.react(g0)
				message.react(gg2)
			}
			if(godzina == '3'){
				message.react(g0)
				message.react(gg3)
			}
			if(godzina == '4'){
				message.react(g0)
				message.react(gg4)
				}
				if(godzina == '5'){
					message.react(g0)
					message.react(gg5)
				}
				if(godzina == '6'){
					message.react(g0)
					message.react(gg6)
				}
				if(godzina == '7'){
					message.react(g0)
					message.react(gg7)
				}
				if(godzina == '8'){
					message.react(g0)
					message.react(gg8)
				}
				if(godzina == '9'){
					message.react(g0)
					message.react(gg9)
				}
				if(godzina == '10'){
					message.react(g1)
					message.react(gg0)
				}
				if(godzina == '11'){
					message.react(g1)
					message.react(gg1)
				}
				if(godzina == '12'){
					message.react(g1)
					message.react(gg2)
				}
				if(godzina == '13'){
					message.react(g1)
					message.react(gg3)
				}
				if(godzina == '14'){
					message.react(g1)
					message.react(gg4)
				}
				if(godzina == '15'){
					message.react(g1)
					message.react(gg5)
				}
				if(godzina == '16'){
					message.react(g1)
					message.react(gg6)
				}
				if(godzina == '17'){
					message.react(g1)
					message.react(gg7)
				}
				if(godzina == '18'){
					message.react(g1)
					message.react(gg8)
				}
				if(godzina == '19'){
					message.react(g1)
					message.react(gg9)
				}
				if(godzina == '20'){
					message.react(g2)
					message.react(gg0)
				}
				if(godzina == '21'){
					message.react(g2)
					message.react(gg1)
				}
				if(godzina == '22'){
					message.react(g2)
					message.react(gg2)
				}
				if(godzina == '23'){
					message.react(g2)
					message.react(gg3)
				}
				if(godzina != 321){
					if(minuty == '0'){
						message.react(r0)
						message.react(zero)
					}
					if(minuty == '1'){
						message.react(r0)
						message.react(jeden)
					}
					if(minuty == '2'){
						message.react(r0)
						message.react(dwa)
					}
					if(minuty == '3'){
						message.react(r0)
						message.react(trzy)
					}
					if(minuty == '4'){
						message.react(r0)
						message.react(cztery)
					}
					if(minuty == '5'){
						message.react(r0)
						message.react(piec)
					}
					if(minuty == '6'){
						message.react(r0)
						message.react(szesc)
					}
					if(minuty == '7'){
						message.react(r0)
						message.react(siedem)
					}
					if(minuty == '8'){
						message.react(r0)
						message.react(osiem)
					}
					if(minuty == '9'){
						message.react(r0)
						message.react(dziewiec)
					}
					if(minuty == '10'){
						message.react(r1)
						message.react(zero)
					}
					if(minuty == '11'){
						message.react(r1)
						message.react(jeden)
					}
					if(minuty == '12'){
						message.react(r1)
						message.react(dwa)
					}
					if(minuty == '13'){
						message.react(r1)
						message.react(trzy)
					}
					if(minuty == '14'){
						message.react(r1)
						message.react(cztery)
					}
					if(minuty == '15'){
						message.react(r1)
						message.react(piec)
					}
					if(minuty == '16'){
						message.react(r1)
						message.react(szesc)
					}
					if(minuty == '17'){
						message.react(r1)
						message.react(siedem)
					}
					if(minuty == '18'){
						message.react(r1)
						message.react(osiem)
					}
					if(minuty == '19'){
						message.react(r1)
						message.react(dziewiec)
					}
					if(minuty == '20'){
						message.react(r2)
						message.react(zero)
					}
					if(minuty == '21'){
						message.react(r2)
						message.react(jeden)
					}
					if(minuty == '22'){
						message.react(r2)
						message.react(dwa)
					}
					if(minuty == '23'){
						message.react(r2)
						message.react(trzy)
					}
					if(minuty == '24'){
						message.react(r2)
						message.react(cztery)
					}
					if(minuty == '25'){
						message.react(r2)
						message.react(piec)
					}
					if(minuty == '26'){
						message.react(r2)
						message.react(szesc)
					}
					if(minuty == '27'){
						message.react(r2)
						message.react(siedem)
					}
					if(minuty == '28'){
						message.react(r2)
						message.react(osiem)
					}
					if(minuty == '29'){
						message.react(r2)
						message.react(dziewiec)
					}
					if(minuty == '30'){
						message.react(r3)
						message.react(zero)
					}
					if(minuty == '31'){
						message.react(r3)
						message.react(jeden)
					}
					if(minuty == '32'){
						message.react(r3)
						message.react(dwa)
					}
					if(minuty == '33'){
						message.react(r3)
						message.react(trzy)
					}
					if(minuty == '34'){
						message.react(r3)
						message.react(cztery)
					}
					if(minuty == '35'){
						message.react(r3)
						message.react(piec)
					}
					if(minuty == '36'){
						message.react(r3)
						message.react(szesc)
					}
					if(minuty == '37'){
						message.react(r3)
						message.react(siedem)
					}
					if(minuty == '38'){
						message.react(r3)
						message.react(osiem)
					}
					if(minuty == '39'){
						message.react(r3)
						message.react(dziewiec)
					}
					if(minuty == '40'){
						message.react(r4)
						message.react(zero)
					}
					if(minuty == '41'){
						message.react(r4)
						message.react(jeden)
					}
					if(minuty == '42'){
						message.react(r4)
						message.react(dwa)
					}
					if(minuty == '43'){
						message.react(r4)
						message.react(trzy)
					}
					if(minuty == '44'){
						message.react(r4)
						message.react(cztery)
					}
					if(minuty == '45'){
						message.react(r4)
						message.react(piec)
					}
					if(minuty == '46'){
						message.react(r4)
						message.react(szesc)
					}
					if(minuty == '47'){
						message.react(r4)
						message.react(siedem)
					}
					if(minuty == '48'){
						message.react(r4)
						message.react(osiem)
					}
					if(minuty == '49'){
						message.react(r4)
						message.react(dziewiec)
					}
					if(minuty == '50'){
						message.react(r5)
						message.react(zero)
					}
					if(minuty == '51'){
						message.react(r5)
						message.react(jeden)
					}
					if(minuty == '52'){
						message.react(r5)
						message.react(dwa)
					}
					if(minuty == '53'){
						message.react(r5)
						message.react(trzy)
					}
					if(minuty == '54'){
						message.react(r5)
						message.react(cztery)
					}
					if(minuty == '55'){
						message.react(r5)
						message.react(piec)
					}
					if(minuty == '56'){
						message.react(r5)
						message.react(szesc)
					}
					if(minuty == '57'){
						message.react(r5)
						message.react(siedem)
					}
					if(minuty == '58'){
						message.react(r5)
						message.react(osiem)
					}
					if(minuty == '59'){
						message.react(r5)
						message.react(dziewiec)
					}
				} 
			
		} 
	}

});

bot.on('messageUpdate', (oldMessage, newMessage) => {
	var wiadomosc = newMessage;
	global.listaslow = ['papajowa', 'papiezowa', 'papieżowa', 'pope time', 'rzułta godzina']
	if(listaslow.includes(wiadomosc.toString().toLowerCase())){
		var the_string = oldMessage.createdAt.toLocaleTimeString();
		var parts = the_string.split(':', 3);
		var godziny = parts[0];
		var godzina = parseInt(godziny) + roznica;
		var minuta = parts[1];
		var minuty = parseInt(minuta);
		console.log(`${the_string}`)
		if(minuty === 37){
			if(godzina === 9 && oldMessage.createdAt.toLocaleTimeString().includes('PM')){
				newMessage.react(peepoLove)
				newMessage.react('2️⃣')
				newMessage.react('1️⃣')
				newMessage.react('3️⃣')
				newMessage.react('7️⃣')
			}
			else{
				newMessage.react('🗿')
				newMessage.react(trollge)
				newMessage.react(feelsdankman)
				
				if(the_string.includes('AM')){
					if(godzina == '14' && oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g0)
						newMessage.react(gg2)
					}
					if(godzina == '3'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g0)
						newMessage.react(gg3)
					}
					if(godzina == '4'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g0)
						newMessage.react(gg4)
					}
					if(godzina == '5'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g0)
						newMessage.react(gg5)
					}
					if(godzina == '6'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g0)
						newMessage.react(gg6)
					}
					if(godzina == '7'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g0)
						newMessage.react(gg7)
					}
					if(godzina == '8'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g0)
						newMessage.react(gg8)
					}
					if(godzina == '9'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g0)
						newMessage.react(gg9)
					}
					if(godzina == '10'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g1)
						newMessage.react(gg0)
					}
					if(godzina == '11'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g1)
						newMessage.react(gg1)
					}
					if(godzina == '12'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g1)
						newMessage.react(gg2)
					}
					if(godzina == '13'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
						newMessage.react(g1)
						newMessage.react(gg3)
					}
					console.log('AM')
				}
				else {
					if(godzina == '12' && oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g0)
						newMessage.react(gg0)
					}
					if(godzina == '13' && oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g0)
						newMessage.react(gg1)
					}
					
					if(godzina == '14'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g1)
						newMessage.react(gg4)
					}
					if(godzina == '3'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g1)
						newMessage.react(gg5)
					}
					if(godzina == '4'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g1)
						newMessage.react(gg6)
					}
					if(godzina == '5'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g1)
						newMessage.react(gg7)
					}
					if(godzina == '6'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g1)
						newMessage.react(gg8)
					}
					if(godzina == '7'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g1)
						newMessage.react(gg9)
					}
					if(godzina == '8'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g2)
						newMessage.react(gg0)
					}
					if(godzina == '9'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g2)
						newMessage.react(gg1)
					}
					if(godzina == '10'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g2)
						newMessage.react(gg2)
					}
					if(godzina == '11'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
						newMessage.react(g2)
						newMessage.react(gg3)
					}
					console.log('PM')
				}




				
				if(godzina != 321){
					if(minuty == '00'){
						newMessage.react(r0)
						newMessage.react(zero)
					}
					if(minuty == '01'){
						newMessage.react(r0)
						newMessage.react(jeden)
					}
					if(minuty == '02'){
						newMessage.react(r0)
						newMessage.react(dwa)
					}
					if(minuty == '03'){
						newMessage.react(r0)
						newMessage.react(trzy)
					}
					if(minuty == '04'){
						newMessage.react(r0)
						newMessage.react(cztery)
					}
					if(minuty == '05'){
						newMessage.react(r0)
						newMessage.react(piec)
					}
					if(minuty == '06'){
						newMessage.react(r0)
						newMessage.react(szesc)
					}
					if(minuty == '07'){
						newMessage.react(r0)
						newMessage.react(siedem)
					}
					if(minuty == '08'){
						newMessage.react(r0)
						newMessage.react(osiem)
					}
					if(minuty == '09'){
						newMessage.react(r0)
						newMessage.react(dziewiec)
					}
					if(minuty == '10'){
						newMessage.react(r1)
						newMessage.react(zero)
					}
					if(minuty == '11'){
						newMessage.react(r1)
						newMessage.react(jeden)
					}
					if(minuty == '12'){
						newMessage.react(r1)
						newMessage.react(dwa)
					}
					if(minuty == '13'){
						newMessage.react(r1)
						newMessage.react(trzy)
					}
					if(minuty == '14'){
						newMessage.react(r1)
						newMessage.react(cztery)
					}
					if(minuty == '15'){
						newMessage.react(r1)
						newMessage.react(piec)
					}
					if(minuty == '16'){
						newMessage.react(r1)
						newMessage.react(szesc)
					}
					if(minuty == '17'){
						newMessage.react(r1)
						newMessage.react(siedem)
					}
					if(minuty == '18'){
						newMessage.react(r1)
						newMessage.react(osiem)
					}
					if(minuty == '19'){
						newMessage.react(r1)
						newMessage.react(dziewiec)
					}
					if(minuty == '20'){
						newMessage.react(r2)
						newMessage.react(zero)
					}
					if(minuty == '21'){
						newMessage.react(r2)
						newMessage.react(jeden)
					}
					if(minuty == '22'){
						newMessage.react(r2)
						newMessage.react(dwa)
					}
					if(minuty == '23'){
						newMessage.react(r2)
						newMessage.react(trzy)
					}
					if(minuty == '24'){
						newMessage.react(r2)
						newMessage.react(cztery)
					}
					if(minuty == '25'){
						newMessage.react(r2)
						newMessage.react(piec)
					}
					if(minuty == '26'){
						newMessage.react(r2)
						newMessage.react(szesc)
					}
					if(minuty == '27'){
						newMessage.react(r2)
						newMessage.react(siedem)
					}
					if(minuty == '28'){
						newMessage.react(r2)
						newMessage.react(osiem)
					}
					if(minuty == '29'){
						newMessage.react(r2)
						newMessage.react(dziewiec)
					}
					if(minuty == '30'){
						newMessage.react(r3)
						newMessage.react(zero)
					}
					if(minuty == '31'){
						newMessage.react(r3)
						newMessage.react(jeden)
					}
					if(minuty == '32'){
						newMessage.react(r3)
						newMessage.react(dwa)
					}
					if(minuty == '33'){
						newMessage.react(r3)
						newMessage.react(trzy)
					}
					if(minuty == '34'){
						newMessage.react(r3)
						newMessage.react(cztery)
					}
					if(minuty == '35'){
						newMessage.react(r3)
						newMessage.react(piec)
					}
					if(minuty == '36'){
						newMessage.react(r3)
						newMessage.react(szesc)
					}
					if(minuty == '37'){
						newMessage.react(r3)
						newMessage.react(siedem)
					}
					if(minuty == '38'){
						newMessage.react(r3)
						newMessage.react(osiem)
					}
					if(minuty == '39'){
						newMessage.react(r3)
						newMessage.react(dziewiec)
					}
					if(minuty == '40'){
						newMessage.react(r4)
						newMessage.react(zero)
					}
					if(minuty == '41'){
						newMessage.react(r4)
						newMessage.react(jeden)
					}
					if(minuty == '42'){
						newMessage.react(r4)
						newMessage.react(dwa)
					}
					if(minuty == '43'){
						newMessage.react(r4)
						newMessage.react(trzy)
					}
					if(minuty == '44'){
						newMessage.react(r4)
						newMessage.react(cztery)
					}
					if(minuty == '45'){
						newMessage.react(r4)
						newMessage.react(piec)
					}
					if(minuty == '46'){
						newMessage.react(r4)
						newMessage.react(szesc)
					}
					if(minuty == '47'){
						newMessage.react(r4)
						newMessage.react(siedem)
					}
					if(minuty == '48'){
						newMessage.react(r4)
						newMessage.react(osiem)
					}
					if(minuty == '49'){
						newMessage.react(r4)
						newMessage.react(dziewiec)
					}
					if(minuty == '50'){
						newMessage.react(r5)
						newMessage.react(zero)
					}
					if(minuty == '51'){
						newMessage.react(r5)
						newMessage.react(jeden)
					}
					if(minuty == '52'){
						newMessage.react(r5)
						newMessage.react(dwa)
					}
					if(minuty == '53'){
						newMessage.react(r5)
						newMessage.react(trzy)
					}
					if(minuty == '54'){
						newMessage.react(r5)
						newMessage.react(cztery)
					}
					if(minuty == '55'){
						newMessage.react(r5)
						newMessage.react(piec)
					}
					if(minuty == '56'){
						newMessage.react(r5)
						newMessage.react(szesc)
					}
					if(minuty == '57'){
						newMessage.react(r5)
						newMessage.react(siedem)
					}
					if(minuty == '58'){
						newMessage.react(r5)
						newMessage.react(osiem)
					}
					if(minuty == '59'){
						newMessage.react(r5)
						newMessage.react(dziewiec)
					}
				} 
			}
		}
		else{
			newMessage.react('🗿')
			newMessage.react(trollge)
			newMessage.react(feelsdankman)
			if(the_string.includes('AM')){
				if(godzina == '14' && oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g0)
					newMessage.react(gg2)
				}
				if(godzina == '3'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g0)
					newMessage.react(gg3)
				}
				if(godzina == '4'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g0)
					newMessage.react(gg4)
				}
				if(godzina == '5'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g0)
					newMessage.react(gg5)
				}
				if(godzina == '6'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g0)
					newMessage.react(gg6)
				}
				if(godzina == '7'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g0)
					newMessage.react(gg7)
				}
				if(godzina == '8'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g0)
					newMessage.react(gg8)
				}
				if(godzina == '9'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g0)
					newMessage.react(gg9)
				}
				if(godzina == '10'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g1)
					newMessage.react(gg0)
				}
				if(godzina == '11'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g1)
					newMessage.react(gg1)
				}
				if(godzina == '12'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g1)
					newMessage.react(gg2)
				}
				if(godzina == '13'&& oldMessage.createdAt.toLocaleTimeString().includes('AM')){
					newMessage.react(g1)
					newMessage.react(gg3)
				}
				console.log('AM')
			}
			else {
				if(godzina == '12' && oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g0)
					newMessage.react(gg0)
				}
				if(godzina == '13' && oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g0)
					newMessage.react(gg1)
				}
				
				if(godzina == '14'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g1)
					newMessage.react(gg4)
				}
				if(godzina == '3'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g1)
					newMessage.react(gg5)
				}
				if(godzina == '4'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g1)
					newMessage.react(gg6)
				}
				if(godzina == '5'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g1)
					newMessage.react(gg7)
				}
				if(godzina == '6'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g1)
					newMessage.react(gg8)
				}
				if(godzina == '7'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g1)
					newMessage.react(gg9)
				}
				if(godzina == '8'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g2)
					newMessage.react(gg0)
				}
				if(godzina == '9'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g2)
					newMessage.react(gg1)
				}
				if(godzina == '10'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g2)
					newMessage.react(gg2)
				}
				if(godzina == '11'&& oldMessage.createdAt.toLocaleTimeString().includes('PM')){
					newMessage.react(g2)
					newMessage.react(gg3)
				}
				console.log('PM')
			}
				if(godzina != 321){
					if(minuty == '0'){
						newMessage.react(r0)
						newMessage.react(zero)
					}
					if(minuty == '1'){
						newMessage.react(r0)
						newMessage.react(jeden)
					}
					if(minuty == '2'){
						newMessage.react(r0)
						newMessage.react(dwa)
					}
					if(minuty == '3'){
						newMessage.react(r0)
						newMessage.react(trzy)
					}
					if(minuty == '4'){
						newMessage.react(r0)
						newMessage.react(cztery)
					}
					if(minuty == '5'){
						newMessage.react(r0)
						newMessage.react(piec)
					}
					if(minuty == '6'){
						newMessage.react(r0)
						newMessage.react(szesc)
					}
					if(minuty == '7'){
						newMessage.react(r0)
						newMessage.react(siedem)
					}
					if(minuty == '8'){
						newMessage.react(r0)
						newMessage.react(osiem)
					}
					if(minuty == '9'){
						newMessage.react(r0)
						newMessage.react(dziewiec)
					}
					if(minuty == '10'){
						newMessage.react(r1)
						newMessage.react(zero)
					}
					if(minuty == '11'){
						newMessage.react(r1)
						newMessage.react(jeden)
					}
					if(minuty == '12'){
						newMessage.react(r1)
						newMessage.react(dwa)
					}
					if(minuty == '13'){
						newMessage.react(r1)
						newMessage.react(trzy)
					}
					if(minuty == '14'){
						newMessage.react(r1)
						newMessage.react(cztery)
					}
					if(minuty == '15'){
						newMessage.react(r1)
						newMessage.react(piec)
					}
					if(minuty == '16'){
						newMessage.react(r1)
						newMessage.react(szesc)
					}
					if(minuty == '17'){
						newMessage.react(r1)
						newMessage.react(siedem)
					}
					if(minuty == '18'){
						newMessage.react(r1)
						newMessage.react(osiem)
					}
					if(minuty == '19'){
						newMessage.react(r1)
						newMessage.react(dziewiec)
					}
					if(minuty == '20'){
						newMessage.react(r2)
						newMessage.react(zero)
					}
					if(minuty == '21'){
						newMessage.react(r2)
						newMessage.react(jeden)
					}
					if(minuty == '22'){
						newMessage.react(r2)
						newMessage.react(dwa)
					}
					if(minuty == '23'){
						newMessage.react(r2)
						newMessage.react(trzy)
					}
					if(minuty == '24'){
						newMessage.react(r2)
						newMessage.react(cztery)
					}
					if(minuty == '25'){
						newMessage.react(r2)
						newMessage.react(piec)
					}
					if(minuty == '26'){
						newMessage.react(r2)
						newMessage.react(szesc)
					}
					if(minuty == '27'){
						newMessage.react(r2)
						newMessage.react(siedem)
					}
					if(minuty == '28'){
						newMessage.react(r2)
						newMessage.react(osiem)
					}
					if(minuty == '29'){
						newMessage.react(r2)
						newMessage.react(dziewiec)
					}
					if(minuty == '30'){
						newMessage.react(r3)
						newMessage.react(zero)
					}
					if(minuty == '31'){
						newMessage.react(r3)
						newMessage.react(jeden)
					}
					if(minuty == '32'){
						newMessage.react(r3)
						newMessage.react(dwa)
					}
					if(minuty == '33'){
						newMessage.react(r3)
						newMessage.react(trzy)
					}
					if(minuty == '34'){
						newMessage.react(r3)
						newMessage.react(cztery)
					}
					if(minuty == '35'){
						newMessage.react(r3)
						newMessage.react(piec)
					}
					if(minuty == '36'){
						newMessage.react(r3)
						newMessage.react(szesc)
					}
					if(minuty == '37'){
						newMessage.react(r3)
						newMessage.react(siedem)
					}
					if(minuty == '38'){
						newMessage.react(r3)
						newMessage.react(osiem)
					}
					if(minuty == '39'){
						newMessage.react(r3)
						newMessage.react(dziewiec)
					}
					if(minuty == '40'){
						newMessage.react(r4)
						newMessage.react(zero)
					}
					if(minuty == '41'){
						newMessage.react(r4)
						newMessage.react(jeden)
					}
					if(minuty == '42'){
						newMessage.react(r4)
						newMessage.react(dwa)
					}
					if(minuty == '43'){
						newMessage.react(r4)
						newMessage.react(trzy)
					}
					if(minuty == '44'){
						newMessage.react(r4)
						newMessage.react(cztery)
					}
					if(minuty == '45'){
						newMessage.react(r4)
						newMessage.react(piec)
					}
					if(minuty == '46'){
						newMessage.react(r4)
						newMessage.react(szesc)
					}
					if(minuty == '47'){
						newMessage.react(r4)
						newMessage.react(siedem)
					}
					if(minuty == '48'){
						newMessage.react(r4)
						newMessage.react(osiem)
					}
					if(minuty == '49'){
						newMessage.react(r4)
						newMessage.react(dziewiec)
					}
					if(minuty == '50'){
						newMessage.react(r5)
						newMessage.react(zero)
					}
					if(minuty == '51'){
						newMessage.react(r5)
						newMessage.react(jeden)
					}
					if(minuty == '52'){
						newMessage.react(r5)
						newMessage.react(dwa)
					}
					if(minuty == '53'){
						newMessage.react(r5)
						newMessage.react(trzy)
					}
					if(minuty == '54'){
						newMessage.react(r5)
						newMessage.react(cztery)
					}
					if(minuty == '55'){
						newMessage.react(r5)
						newMessage.react(piec)
					}
					if(minuty == '56'){
						newMessage.react(r5)
						newMessage.react(szesc)
					}
					if(minuty == '57'){
						newMessage.react(r5)
						newMessage.react(siedem)
					}
					if(minuty == '58'){
						newMessage.react(r5)
						newMessage.react(osiem)
					}
					if(minuty == '59'){
						newMessage.react(r5)
						newMessage.react(dziewiec)
					}
				} 
			
		} 
	}
	if(wiadomosc.toString().toLowerCase() === 'test'){

		console.log(oldMessage.createdAt.toLocaleTimeString());
		var the_string = oldMessage.createdAt.toLocaleTimeString();
		var parts = the_string.split(':', 3);
		var godziny = parts[0];
		var godzina = parseInt(godziny) + 2;
		var minuty = parts[1];
		newMessage.channel.send(`${godzina} : ${minuty}`)
	}
});
bot.login(token);