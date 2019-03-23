# gradu

Maailman paras projekti on täällä! Kaikesta avusta tarjotaan hyvää näkyvyyttä ja lämmintä kättä.
Reposta löytyy mm. Keynote-presis, mistä selviää kutakuinkin koeasetelman idea. Tässä se on kuitenkin vielä auki kirjoitettuna.

Koeasetelma jaetaan kahteen osaan. Varsinainen tehtävä ei vaihdu, ainoastaan käytettävät ärsykkeet

- Seka-asetelmassa sekundaaritehtävän animaatiot vaihtelevat "randomisti" neljän animaatiotyypin välillä: zoom, fade, slide, no animation. Tätä tehdään 3 x 10 min, ja jokaisen 10 min blokin välissä lyhyt tauko vigilanssin takaamiseksi
- Tasa-asetelmassa kunkin blokin aikana käytetään vain tietyn tyyppistä animaatiota (zoom, fade, slide tai no animation). Tätä tehdään 4 \* 5 min, eli jokaista animaatiotyyppiä varten on varattu 5 min, ja tauot tulevat luonnostaan, kun blokki vaihtuu.
- Näitä osioita varten täytyy olla erilliset suoritettavat funktiot, ja se, kummasta aloitetaan määräytyy esim. ID:n perusteella parillinen vs. pariton.

Kunkin osion aikana suoritetaan kahta tehtävää:

1. Primääritehtävää, jonka tarkoitus on pitää tarkkaavaisuus tietyllä näytön alueella yksinkertaisen napinpainamistehtävän avulla. Tämä on siis vasemmassa alakulmassa oleva laatikko, jonka sisällä oleva nuoli vaihtuu tasaisin väliajoin, kuitenkin niin, että intervalli vaihtuu randomilla esim. 800 - 2000 ms välillä. Tehtävä on painaa mahdollisimman nopeasti sitä nuolinäppäintä, joka ruudulle ilmestyy. Oikeasta vastauksesta nuolta ympäröivän laatikon reunat välähtää vihreänä, väärästä vastauksesta punaisena. Koska nuoli ei häviä ruudulta ärsykkeiden vaihtumisen välillä,samaan suuntaan osoittava nuoli ei voi ilmestyä kahta kertaa peräkkäin, sillä muuten nuolen vaihtumista ei huomata.

- Primääritehtävässä meitä kiinnostaa vastauksien Oikein/Väärin -frekvenssi sekä reaktioaika, joka voidaan laskea ärsykkeen esittämisen ja nuolinapin painalluksen timestampien erosta.

2. Sekundaaritehtävää, jonka avulla selvitetään miten eri animaatiotyypit kaappaa visuaalisen tarkkaavaisuuden. Jälkimmäinen on gradun varsinainen aihe ja mielenkiinnon kohde. Tämä toteutetaan korttien (A-E) avulla. Koehenkilön tehtävä on aina muutoksen nähdessään painaa reaktioaikakytkintä (F) ja raportoida suullisesti viimeksi näkemänsä muutos. Animaatioita on kolmen tyyppisiä: Fade, Zoom ja Slide. Jokainen esiintyy sekä In että Out -animaatioina. Animaatiot pitää siis randomisoida, ja niille pitää tehdä jonkinlainen timer, minkä avulla ne ilmestyy ruudulle.

Pyörittääksesi projektia sinulla pitää olla `node` ja `npm` asennettuna koneelle.

Asennus:

`npm install`

Käynnistys:

`npm start`

Tämän jälkeen löydät koeasetelman täältä:

`localhost:3000/`
