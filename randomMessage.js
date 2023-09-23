const basketballMessage = ["The Lakers, led by Kobe Bryant and Shaquille O'Neal, won three consecutive NBA championships from 2000 to 2002.",
"The San Antonio Spurs, led by Tim Duncan, won NBA championships in 2003, 2005, 2007, and 2014",
"The Lakers' dynamic duo of Kobe Bryant and Shaquille O'Neal had a highly publicized split in 2004, with O'Neal being traded to the Miami Heat",
"The Boston Celtics, featuring Kevin Garnett, Paul Pierce, and Ray Allen, won the NBA championship in 2008, marking their first title since 1986.",
"LeBron James, Dwyane Wade, and Chris Bosh formed a superstar trio with the Miami Heat, winning two NBA championships in 2012 and 2013.",
"The Warriors, led by Stephen Curry, Klay Thompson, and Draymond Green, became a dominant force in the league, winning three NBA championships in 2015, 2017, and 2018.",
"LeBron James returned to the Cleveland Cavaliers and led them to their first-ever NBA championship in 2016, ending a 52-year championship drought for the city.",
"Kobe Bryant retired from the NBA in 2016 after a legendary career with the Los Angeles Lakers",
'Due to the COVID-19 pandemic, the 2019-2020 NBA season was completed in a "bubble" environment at the ESPN Wide World of Sports Complex in Orlando, Florida.',
"The NBA continued to expand its global reach, with an increasing number of international players making significant impacts in the league."];

const soccerMessage = [`Real Madrid's "Galácticos" era (early 2000s) saw the club sign high-profile players like Zinedine Zidane, Luis Figo, Ronaldo, and David Beckham, creating one of the most star-studded lineups in football history.`,
"AC Milan won the UEFA Champions League in 2003 and 2007, solidifying their reputation as one of Europe's top clubs during this period.",
`The Spanish national team, known as "La Roja," achieved remarkable success by winning the 2008 and 2012 UEFA European Championships (Euros) and the 2010 FIFA World Cup.`,
"The rivalry between Cristiano Ronaldo and Lionel Messi for the title of the world's best player dominated football discussions throughout this period.",
"Under the management of Zinedine Zidane, Real Madrid won the UEFA Champions League for three consecutive seasons from 2016 to 2018, becoming the first club in the modern era to achieve this feat.",
`Arsenal, led by manager Arsène Wenger, went unbeaten throughout the entire 2003-2004 Premier League season, earning them the nickname "The Invincibles." This remarkable achievement remains unparalleled in the modern Premier League era.`,
`Manchester United, under Sir Alex Ferguson's management, won multiple Premier League titles during this period, including three consecutive titles from 2006 to 2009.`,
`Bayern Munich achieved the historic treble (Bundesliga, DFB-Pokal, and UEFA Champions League) twice, first in the 2012-2013 season and then again in the 2019-2020 season.`,
`Manchester City, backed by significant investment, emerged as a dominant force in the Premier League, winning multiple league titles under the management of Pep Guardiola.`,
`Liverpool won the 2019-2020 Premier League title, ending their 30-year league title drought, with manager Jurgen Klopp leading the way.`];

const videoGameMessage = [`Minecraft, released in 2011, has become one of the best-selling video games of all time, known for its open-world sandbox gameplay and the ability to build almost anything.`,
`Fortnite, introduced in 2017, gained massive popularity for its battle royale mode and became a cultural phenomenon with in-game concerts and collaborations with artists.`,
`Esports (competitive video gaming) saw tremendous growth during this period, with professional players, tournaments, and leagues attracting large audiences and significant prize money.`,
`The indie game industry thrived, with titles like "Undertale," "Hollow Knight," and "Stardew Valley" achieving critical acclaim and commercial success.`,
`Games like PUBG, Fortnite, and Apex Legends popularized the battle royale genre, where large groups of players fight to be the last one standing.`,
`VR gaming saw a resurgence, with devices like the Oculus Rift, HTC Vive, and PlayStation VR offering immersive experiences.`,
`The Nintendo Switch, released in 2017, became known for its unique hybrid design, allowing players to switch between handheld and console modes.`,
`"Cyberpunk 2077" generated immense hype but also faced backlash for performance issues on older consoles, highlighting challenges in game development.`,
`Remakes of classic games like "Final Fantasy VII Remake" and "The Legend of Zelda: Link's Awakening" delighted fans with updated graphics and gameplay.`,
`The League of Legends World Championship, hosted annually, has become one of the most-watched esports events, with millions of viewers tuning in to watch top teams compete for the Summoner's Cup.`];

const randomMessage = [soccerMessage,basketballMessage,videoGameMessage];

let randomNum = Math.floor(Math.random()*3);

switch(randomNum){
    case 0:
        console.log(`Here are some fun facts about soccer: ${randomMessage[randomNum][Math.floor(Math.random()*10)]}`);
        break;
    case 1:
        console.log(`Here are some fun facts about basketball: ${randomMessage[randomNum][Math.floor(Math.random()*10)]}`);
        break;
    case 2:
        console.log(`Here are some fun facts about video games: ${randomMessage[randomNum][Math.floor(Math.random()*10)]}`);
        break;
}