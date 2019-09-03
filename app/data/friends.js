

var randNum = Math.floor(Math.random() * 5 + 1);

var players = [
    {
        name: "Derek Jeter",
        photo: "https://timedotcom.files.wordpress.com/2014/09/derek-jeter-tampa-bay.jpg?quality=85",
        score: randScore()
    },
    {
        name: "Robinson Cano",
        photo: "http://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2013%2F1119%2Fmlb_g_cano_b1_1920x1080.jpg",
        score: randScore()
    },
    {
        name: "Carlos Beltran",
        photo: " https://cdn.fansided.com/wp-content/blogs.dir/135/files/2016/04/carlos-beltran-mlb-seattle-mariners-new-york-yankees-803x560.jpg",
        score: randScore()
    },
    {
        name: "Micky Mantle",
        photo: "https://johnbucherblog.files.wordpress.com/2014/11/mickey-mantle.jpg",
        score: randScore()
    },
    {
        name: "Aaron Judge",
        photo: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Aaron_Judge.jpg/1200px-Aaron_Judge.jpg",
        score: randScore()
    },
    {
        name: "ALex Rodriguez",
        photo: "https://cdn.theatlantic.com/assets/media/img/mt/2015/05/RTX1C14Z/lead_960.jpg?1431104799",
        score: randScore()
    },
    {
        name: "Tino Martinez",
        photo: "https://cdn.vox-cdn.com/thumbor/HrFsMmhnOZQRU00aNvNar_KyPpY=/16x0:1984x1312/1200x800/filters:focal(16x0:1984x1312)/cdn.vox-cdn.com/uploads/chorus_image/image/47368448/GettyImages-542735.0.jpg",
        score: randScore()
    },
    {
        name: "Luis Severino",
        photo: "https://cdn.vox-cdn.com/thumbor/O4EERzbKBri67I44kwZ5rHJFR6w=/0x0:3000x2106/1200x800/filters:focal(1260x813:1740x1293)/cdn.vox-cdn.com/uploads/chorus_image/image/51460361/585727808.0.jpg",
        score: randScore()
    },
    {
        name: "Gary Sanchez",
        photo: " http://images.performgroup.com/di/library/omnisport/c2/e3/gary-sanchez_u3bueg3t2ur415nymommpvwl8.jpg?t=1498230947&w=960&quality=70",
        score: randScore()
    },

    {
        name: "Giancarlo Stanton",
        photo: "https://therunnersports.com/wp-content/uploads/2018/03/GettyImages-939858112.jpg",
        score: randScore()
    }
];

function randScore() {
    var x = []
    for (i = 0; i < 10; i++) {
        x.push(randNum);
    };

    return x;
};

