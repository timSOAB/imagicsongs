export default async function handler(req, res) {
  const myJson = [
    {
        "songType": "Classic",
        "songName": "Autumn Leaves",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Autumn-leaves.mp3"
    },
    {
        "songType": "Classic",
        "songName": "Ain't Misbehavin'",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Aint-Misbehavin.mp3"
    },
    {
        "songType": "Classic",
        "songName": "As Time Goes By",
        "songCredit": "Richard Marley",
        "songPath": "/songs/As Time Goes By.mp3"
    },
    {
        "songType": "Classic",
        "songName": "Can't Smile Without You",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Cant Smile Without You.mp3"
    },
    {
        "songType": "Classic",
        "songName": "Crazy",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Crazy.mp3"
    },
    {
        "songType": "Classic",
        "songName": "For Once In My Life",
        "songCredit": "Richard Marley",
        "songPath": "/songs/For Once In My Life.mp3"
    },
    {
        "songType": "Classic",
        "songName": "Georgia On My Mind",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Georgia On My Mind - Richard - G.mp3"
    },
    {
        "songType": "Classic",
        "songName": "Hello",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Hello.mp3"
    },
    {
        "songType": "Classic",
        "songName": "If I Didn't Care",
        "songCredit": "Richard Marley",
        "songPath": "/songs/If I Didn't Care.mp3"
    },
    {
        "songType": "Classic",
        "songName": "Kansas City",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Kansas City.mp3"
    },
    // {
    //     "songType": "Classic",
    //     "songName": "Love by Diony",
    //     "songCredit": "Richard Marley",
    //     "songPath": "/songs/"
    // },
    {
        "songType": "Classic",
        "songName": "Merry Christmas Baby",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Merry Christmas Baby-Richard.mp3"
    },
    // {
    //     "songType": "Classic",
    //     "songName": "Merry Little Christmas",
    //     "songCredit": "Richard Marley",
    //     "songPath": "/songs/"
    // },
    {
        "songType": "Classic",
        "songName": "Moon River",
        "songCredit": "Richard Marley",
        "songPath": "/songs/MoonRiver.mp3"
    },
    {
        "songType": "Classic",
        "songName": "NewYork",
        "songCredit": "Richard Marley",
        "songPath": "/songs/NewYork.mp3"
    },
    {
        "songType": "Classic",
        "songName": "SWAY",
        "songCredit": "Richard Marley",
        "songPath": "/songs/SWAY.mp3"
    },
    {
        "songType": "Classic",
        "songName": "Sorry",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Sorry.mp3"
    },
    {
        "songType": "Classic",
        "songName": "ThatsLife",
        "songCredit": "Richard Marley",
        "songPath": "/songs/ThatsLifeOrig.mp3"
    },
    {
        "songType": "Classic",
        "songName": "White Christmas",
        "songCredit": "Richard Marley",
        "songPath": "/songs/White Christmas.mp3"
    },
    {
        "songType": "Classic",
        "songName": "You Are So Beautiful",
        "songCredit": "Richard Marley",
        "songPath": "/songs/You Are So Beautiful.mp3"
    },
    {
        "songType": "Classic",
        "songName": "You Don't Know Me",
        "songCredit": "Richard Marley",
        "songPath": "/songs/You Don't Know Me.mp3"
    },
    {
        "songType": "Classic",
        "songName": "Young and Foolish",
        "songCredit": "Richard Marley",
        "songPath": "/songs/Young and Foolish.mp3"
    },
    // song
    // {
    //     "songType": "Own",
    //     "songName": "Why Does Love",
    //     "songCredit": "Richard Marley",
    //     "songPath": "/songs/"
    // },
    // {
    //     "songType": "Own",
    //     "songName": "HowLong",
    //     "songCredit": "Richard Marley",
    //     "songPath": "/songs/"
    // },
    {
        "songType": "Own",
        "songName": "LUDA",
        "songCredit": "Richard Marley",
        "songPath": "/songs/LUDA.mp3"
    },
    {
        "songType": "Own",
        "songName": "The Butterfly",
        "songCredit": "Richard Marley",
        "songPath": "/songs/THE BUTTERFLY.mp3"
    },
    {
        "songType": "Own",
        "songName": "AMERICA",
        "songCredit": "Richard Marley",
        "songPath": "/songs/AMERICA.mp3"
    }
    // ,
    // {
    //     "songType": "Own",
    //     "songName": "America - Chorus",
    //     "songCredit": "Richard Marley",
    //     "songPath": "/songs/"
    // }
  ]
  res.status(200).json(myJson);
}