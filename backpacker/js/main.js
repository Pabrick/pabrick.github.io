var game = new Phaser.Game(800, 600, Phaser.AUTO, 'phaser-example', { preload: preload, create: create });

function preload() {
    game.load.atlasJSONHash('bucky', 'assets/bucky_atlas.png', 'assets/bucky_atlas.json');
}

function create() {
    var bot = game.add.sprite(98, 98, 'bucky');
    bot.animations.add('run');
    bot.animations.play('run', 15, true);

}