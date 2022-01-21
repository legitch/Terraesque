//priority: 1000

onEvent('recipes', (event) => {
    const recipes = [
        /*
        --------------EXAMPLE--------------
        {
            output: 'thing:thing',
            pattern: ['AAA', 'BBB', 'CCC'],
            key: {
                A: 'thing1:thing1',
                B: 'thing2:thing2',
                C: 'thing3:thing3'
            },
            id: 'recipeid'
        },
        */
        //Chest from any plank
        {
            output: 'minecraft:chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#minecraft:planks'
            },
            id: 'quark:building/crafting/chests/chest_revert'
        },
        //Bookshelf unification
        {
            output: 'minecraft:bookshelf',
            pattern: ['AAA', 'BBB', 'AAA'],
            key: {
                A: '#minecraft:planks',
                B: 'minecraft:book'
            },
            id: 'quark:building/crafting/oak_bookshelf'
        },
        //Upgrade Aquatic Trident
        {
            output: 'minecraft:trident',
            pattern: [' AA', ' CA', 'B  '],
            key: {
                A: '#terraesque:trident_teeth',
                B: 'upgrade_aquatic:prismarine_rod',
                C: 'minecraft:heart_of_the_sea'
            },
            id: 'terraesque:trident'
        },
        //Chainmail Helmet
        {
            output: 'minecraft:chainmail_helmet',
            pattern: ['   ', 'CBC', 'A A'],
            key: {
                A: 'minecraft:chain',
                B: 'minecraft:iron_ingot',
                C: 'minecraft:iron_nugget'
            },
            id: 'terraesque:chainmail_helmet'
        },

        //Chainmail Chestplate
        {
            output: 'minecraft:chainmail_chestplate',
            pattern: ['B B', 'CBC', 'ACA'],
            key: {
                A: 'minecraft:chain',
                B: 'minecraft:iron_ingot',
                C: 'minecraft:iron_nugget'
            },
            id: 'terraesque:chainmail_chestplate'
        },

        //Chainmail Leggings
        {
            output: 'minecraft:chainmail_leggings',
            pattern: ['BBB', 'C C', 'A A'],
            key: {
                A: 'minecraft:chain',
                B: 'minecraft:iron_ingot',
                C: 'minecraft:iron_nugget'
            },
            id: 'terraesque:chainmail_leggings'
        },

        //Chainmail Boots
        {
            output: 'minecraft:chainmail_boots',
            pattern: ['   ', 'C C', 'A A'],
            key: {
                A: 'minecraft:chain',
                C: 'minecraft:iron_nugget'
            },
            id: 'terraesque:chainmail_boots'
        },
        {
            output: 'dannys_expansion:workbench',
            pattern: ['A B', 'CCC', 'D D'],
            key: {
                A: 'create:crafting_blueprint',
                B: '#forge:tools/knives',
                C: '#minecraft:wooden_slabs',
                D: '#minecraft:planks'
            },
            id: 'dannys_expansion:workbench'
        },
        {
            output: 'environmental:sawmill',
            pattern: ['ABC', 'BBC', 'ABD'],
            key: {
                A: 'create:copper_ingot',
                B: '#minecraft:planks',
                C: 'minecraft:iron_ingot',
                D: 'minecraft:stick'
            },
            id: 'environmental:crafting/sawmill'
        },
        {
            output: '4x minecraft:chest',
            pattern: ['AAA', 'A A', 'AAA'],
            key: {
                A: '#minecraft:logs'
            },
            id: 'terraesque:chest_from_logs'
        },
        {
            output: '16x minecraft:stick',
            pattern: ['A  ', 'A  '],
            key: {
                A: '#minecraft:logs'
            },
            id: 'terraesque:sticks_from_logs'
        },
        {
            output: 'betterendforge:guidebook',
            pattern: [' A ', ' B ', ' C '],
            key: {
                A: 'betterendforge:ender_shard',
                B: 'minecraft:book',
                C: 'betterendforge:crystal_shards'
            },
            id: 'betterendforge:guidebook'
        },
        {
            output: '2x buzzier_bees:candle',
            pattern: [' A ', ' B ', ' B '],
            key: {
                A: '#buzzier_bees:candle_wick',
                B: '#buzzier_bees:candle_base',
            },
            id: 'buzzier_bees:candles/candle'
        },
        {
            output: 'eidolon:candle',
            pattern: [' A ', ' B '],
            key: {
                A: '#buzzier_bees:candle_wick',
                B: '#buzzier_bees:candle_base',
            },
            id: 'eidolon:candle'
        },
        {
            output: '3x minecraft:ladder',
            pattern: ['A A', 'AAA', 'A A'],
            key: {
                A: 'minecraft:stick'
            },
            id: 'terraesque:ladders'
        },
        {
            output: 'enigmaticlegacy:antiforbidden_potion',
            pattern: ['AB ', 'CD '],
            key: {
                A: 'enigmaticlegacy:unholy_grail',
                B: 'enigmaticlegacy:recall_potion',
                C: 'minecraft:dragon_breath',
                D: 'enigmaticlegacy:astral_dust'
            },
            id: 'terraesque:antiforbidden_potion'
        }
    ]
    recipes.forEach((recipe) => {
        event.shaped(recipe.output, recipe.pattern, recipe.key).id(recipe.id);
    });
    /*
    event.custom({
        type: ''
    })
    */
    //Orb of Origin recipe
    event.custom({
        type: 'betterendforge:infusion',
        input: { item: 'minecraft:nether_star' },
        output: 'origins:orb_of_origin',
        time: 450,
        catalysts: [
            { item: 'alexsmobs:void_worm_eye', index: 0 },
            { item: 'minecraft:elytra', index: 1 },
            { item: 'minecraft:ender_eye', index: 2 },
            { item: 'twilightforest:fiery_blood', index: 3 },
            { item: 'upgrade_aquatic:elder_eye', index: 4 },
            { item: 'mowziesmobs:ice_crystal', index: 5 },
            { item: 'momo:lesser_ender_eye', index: 6 },
            { item: 'minecraft:totem_of_undying', index: 7 },
        ]
    }).id('terraesque:orb_of_origin')
    //Eidolon Mind Shielding Plate recipe
    event.custom({
        type: 'eidolon:worktable',
        core: ['III', 'III', 'LSL'],
        extras: [
            'B',
            '  ',
            'Q'
        ],
        key: {
            S: {'item': 'eidolon:soul_shard'},
            I: {'tag': 'forge:ingots/zinc'},
            L: {'item': 'minecraft:leather'},
            B: {'tag': 'forge:storage_blocks/lapis'},
            Q: {'tag': 'forge:gems/quartz'}
        },
        result: {item: 'eidolon:mind_shielding_plate'}
    })
})
