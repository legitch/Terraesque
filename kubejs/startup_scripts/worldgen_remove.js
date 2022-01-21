onEvent('worldgen.remove', (event) => {
    event.removeOres((ores) => {
        ores.blocks = [
            'eidolon:lead_ore',
            'darkerdepths:aridrock_silver_ore',
            'darkerdepths:limestone_silver_ore',
            'darkerdepths:silver_ore',
            'betterendforge:ender_ore',
            'betterendforge:thallasium_ore'
        ];
    });
});
