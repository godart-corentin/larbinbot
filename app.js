require('dotenv').config();

const tmi = require('tmi.js');
const options = require('./options');

const client = new tmi.Client(options);

client.connect();

client.on('message', (channels, userstate, message, self) => {
    if(self) return;
    switch(message) {
        case '!utip':
            client.say(process.env.CHANNEL, 'Tu veux me soutenir gratuitement ? Regarde une publicité de 20s à 30s sur ce lien : https://utip.io/onegaxx . Aucune limite de visionnage :p Tu peux me soutenir à fond ! MERCI <3 <3');
            break;
        case '!loots':
            client.say(process.env.CHANNEL, 'Avec Loots, tu peux me soutenir gratuitement en envoyant un court message via ce lien :  https://loots.com/onegaxx ! Il s\'affichera direct sur le live ! MERCI ! <3 <3');
            break;
        case '!gta':
            client.say(process.env.CHANNEL, 'Tu veux me rejoindre pour monter notre empire? Follow la chaine et rejoins nous sur discord (!discord). Ensuite, ajoute-moi sur GTA : Onegaxx.')
            break;
        case '!epic':
            client.say(process.env.CHANNEL, 'Mon pseudo EPIC pour jouer ensemble : Onegaxx_TV. Deux règles, être follower et rester sur le live :p');
            break;
        case '!tw3mods':
            client.say(process.env.CHANNEL, 'Mes mods "The Witcher 3" : The Witcher 3 HD Reworked Project / All Quest Objectives On Map / No Dirty Lens Effect / Wiedzmin Lighting Mod');
            break;
        case '!youtube':
            client.say(process.env.CHANNEL, 'Abonne toi à la chaine Youtube : https://www.youtube.com/channel/UCeinYmZ68-NuNZW9aBxB_VA?view_as=subscriber');
            break;
        case '!twitter':
            client.say(process.env.CHANNEL, 'Suis-moi sur Twitter : https://twitter.com/Onegaxx');
            break;
        case '!giveaway':
            client.say(process.env.CHANNEL, 'Giveaway si les objectifs sont atteints ! Le gain ? une clé de jeu que le gagnant choisira parmi une liste définie ! Le gagnant ? Un follower tiré au sort aléatoirement en direct sur le live, qu\'il soit présent ou non au moment du tirage ! Un minimum de présence sur mes lives est tout de même nécessaire =p');
            break;
        case '!facebook':
            client.say(process.env.CHANNEL, 'Mon Facebook : https://www.facebook.com/Onegaxx');
            break;
        case '!donation':
            client.say(process.env.CHANNEL, 'Pour me soutenir c\'est ici : https://streamlabs.com/onegaxx_');
            break;
        case '!discord':
            client.say(process.env.CHANNEL, 'Le discord du Crew (followers) : https://discord.gg/jZXY5Ba');
            break;
        case '!delai':
            client.say(process.env.CHANNEL, 'Il n\'y a pas de délai.');
            break;
        case '!callot':
            client.say(process.env.CHANNEL, 'Prejent !!!');
            break;
        case '!config':
            client.say(process.env.CHANNEL, 'Ma config  : CPU : i7-4790K / GPU : GTX 1070 EVGA SC Black Edition / RAM : 16 GO / SSD : 250 GO SAMSUNG 850 EVO / HDD : 2 To / Ecran Gaming : Acer XB240H 144hz 3D / Ecran Monitoring : BenQ GL2450 60hz / Clavier : Asus Cerberus / Souris : Logitech g402  / Micro : Bird UM1 / Casque : HyperX Cloud Alpha / pour le reste et les détails, c\'est en description :p');
            break;
        case '!prime':
            client.say(process.env.CHANNEL, 'N\'oubliez pas qu\'avec Twitch Prime vous pouvez vous sub gratuitement à la chaîne si vous avez Amazon Prime ! Ça se passe ici : https://twitch.amazon.com/prime');
            break;
        case '!uptime':
            break;
        default:
            break;
    }
});

setInterval( ()=> {
    client.say(process.env.CHANNEL, "Suis-moi sur mes réseaux sociaux pour tout savoir sur mon stream et ma chaine youtube ! (commandes : !youtube !twitter !facebook )");
}, 1200000);

setInterval( ()=> {
    client.say(process.env.CHANNEL, "N'hésites pas à me follow pour participer au Giveaway des 500 follows ! Tapes la commande !giveaway pour plus d'infos :p ");
}, 1800000);

setInterval( ()=> {
    let number = Math.floor(Math.random() * Math.floor(3));
    switch(number) {
        case 0:
            client.say(process.env.CHANNEL, 'Tu veux me soutenir gratuitement ? Regarde une publicité de 20s à 30s sur ce lien : https://utip.io/onegaxx . Aucune limite de visionnage :p Tu peux me soutenir à fond ! MERCI <3 <3');
            break;
        case 1:
            client.say(process.env.CHANNEL, 'Avec Loots, tu peux me soutenir gratuitement en envoyant un court message via ce lien :  https://loots.com/onegaxx ! Il s\'affichera direct sur le live ! MERCI ! <3 <3');
            break;
        case 2:
            client.say(process.env.CHANNEL, 'N\'oubliez pas qu\'avec Twitch Prime vous pouvez vous sub gratuitement à la chaîne si vous avez Amazon Prime ! Ça se passe ici : https://twitch.amazon.com/prime');
            break;
        default:
            break;
    }
}, 1500000);