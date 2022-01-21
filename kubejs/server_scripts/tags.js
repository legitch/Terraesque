//Item Tags
onEvent('item.tags', event => {
    //Remove all items within a tag
    const removeAllItemsInTag = [
        //TBA
    ]
    //Strip all tags from an item
    const removeAllTagsFromItem = [
        global.fullRemovals,
    ]
    //Remove all items within a tag
    removeAllItemsInTag.forEach(function (tagname) {
        event.removeAll(tagname);
    });
    //Remove all tags from an item
    removeAllTagsFromItem.forEach(function (removal) {
        event.removeAllTagsFrom(removal);
    });
    //Add a tag to an item:
    const addTagToItem = [
        { tag: 'grounded_origins:penguin/happy_blocks', item: [/betterendforge:*_ice/, /environmental:ice_*/, /quark:snow*/] },
        { tag: 'grounded_origins:moth/glow', item: [/]infernalexp:.*glowstone*./, /infernalexp:.*dimstone*./] },
        { tag: 'grounded_origins:deer/berry_foods', item: [/.*berry*/, /.*berries*/] },
        { tag: 'grounded_origins:penguin/seafood',
                    item: [
                        '#forge:raw_fishes',
                        '#forge:cooked_fishes',
                        'farmersdelight:baked_cod_stew',
                        'farmersdelight:fish_stew',
                        'farmersdelight:squid_ink_pasta',
                        'irregularchef:pool_party_stick',
                        'abnormals_delight:pike_with_beetroot',
                        'abnormals_delight:perch_with_mushrooms',
                        /quark:.*crab_leg/
                    ]
        },
        { tag: 'supplementaries:ropes', item: 'supplementaries:rope' },
        { tag: 'alexsmobs:drops_bananas', item: ['atmospheric:rosewood_leaves', 'atmospheric:morado_leaves', 'atmospheric:flowering_morado_leaves'] },
        { tag: 'terraesque:trident_teeth', item: ['upgrade_aquatic:thrasher_tooth', 'outvoted:kraken_tooth'] },
        { tag: 'minecraft:wooden_slabs', item: 'darkerdepths:petrified_slab' },
        { tag: 'minecraft:planks', item: ['darkerdepths:petrified_planks', 'darkerdepths:vertical_petrified_planks'] },
        { tag: 'forge:slimeballs', item: 'autumnity:snail_slime' },
        {
            tag: 'terraesque:armor/helmets',
            item: [
                /.*helmet*./,
                /.*_mask(?!.)/,
                /.*_mask_*./,
                /.*hat(?!.)/,
                'alexsmobs:moose_headgear',
                'environmental:thief_hood',
                'alexsmobs:spiked_turtle_shell',
                'alexsmobs:fedora',
                'alexsmobs:sombrero',
                'alexsmobs:frontier_cap',
                'darkerdepths:glowshroom_cap',
                'minecraft:shulker_shell',
            ]
        },
        { tag: 'forge:armor/chestplates', item: /.*chestplate*./ },
        { tag: 'forge:armor/leggings', item: [/.*leggings*./, /.*pants/] },
        { tag: 'forge:armor/boots', item: /.*boots*./ },
        { tag: 'forge:armor', item: ['#momo:armor/helmets', '#momo:armor/chestplates', '#momo:armor/leggings', '#momo:armor/boots'] },
        { tag: 'forge:tools/swords', item: [/.*_sword/, 'savageandravage:cleaver_of_beheading'] },
        { tag: 'forge:tools/pickaxes', item: /.*_pickaxe/ },
        { tag: 'forge:tools/axes', item: [/.*_axe/, /axe_*./, /.*_axe_*./] },
        { tag: 'forge:tools/shovels', item: /.*_shovel/ },
        { tag: 'forge:tools/hoes', item: /.*_hoe/ },
        { tag: 'forge:tools/bows', item: [/.*bow(?!.)/, 'mowziesmobs:blowgun', 'create:potato_cannon'] },
        { tag: 'forge:tools/misc', item: ['twilightforest:block_and_chain'] },
        { tag: 'forge:tools', item: ['#terraesque:tools/swords', '#terraesque:tools/pickaxes', '#terraesque:tools/axes', '#terraesque:tools/shovels', '#terraesque:tools/hoes', '#terraesque:tools/bows', '#terraesque:tools/misc'] },
        {
            tag: 'minecraft:logs',
            item: [
                /betternether:striped_log_.*/,
                /betternether:.*_log/,
                'darkerdepths:petrified_log',
                'darkerdepths:stripped_petrified_log',
                'darkerdepths:porous_petrified_log'
            ]
        },
        {
            tag: 'minecraft:logs_that_burn',
            item: [
                'forbidden_arcanus:edelwood_log',
                'forbidden_arcanus:cherrywood_log',
                'forbidden_arcanus:stripped_cherrywood_log',
                'forbidden_arcanus:mysterywood_log',
                'forbidden_arcanus:stripped_mysterywood_log'
           ]
        },
        {
            tag: 'origins:meat',
            item: [
                '#forge:meats',
                'environmental:venison',
                'environmental:cooked_venison',
                'environmental:duck',
                'environmental:cooked_duck',
                'alexsmobs:moose_ribs',
                'alexsmobs:cooked_moose_ribs',
                'farmersdelight:chicken_cuts',
                'farmersdelight:cooked_chicken_cuts',
                'farmersdelight:bacon',
                'farmersdelight:cooked_bacon',
                'farmersdelight:cod_slice',
                'farmersdelight:cooked_cod_slice',
                'farmersdelight:salmon_slice',
                'farmersdelight:cooked_salmon_slice',
                'farmersdelight:mutton_chops',
                'farmersdelight:cooked_mutton_chops',
                'farmersdelight:ham',
                'farmersdelight:smoked_ham',
                'farmersdelight:minced_beef',
                'farmersdelight:beef_patty',
                'quark:frog_leg',
                'quark:golden_frog_leg',
                'quark:cooked_frog_leg',
                'quark:crab_leg',
                'quark:cooked_crab_leg',
                'twilightforest:raw_meef',
                'twilightforest:cooked_meef',
                'upgrade_aquatic:pike',
                'upgrade_aquatic:cooked_pike',
                'upgrade_aquatic:lionfish',
                'upgrade_aquatic:cooked_lionfish',
                'upgrade_aquatic:perch',
                'upgrade_aquatic:cooked_perch',
                /infernalexp:.*_hogchop/,
                'autumnity:turkey',
                'autumnity:cooked_turkey',
                'autumnity:turkey_piece',
                'autumnity:cooked_turkey_piece',
                'abnormals_delight:duck_fillet',
                'abnormals_delight:cooked_duck_fillet',
                'abnormals_delight:venison_shanks',
                'abnormals_delight:cooked_venison_shanks',
                'nethers_delight:hoglin_loin',
                'nethers_delight:hoglin_sirloin',
                'nethers_delight:strider_slice',
                'nethers_delight:ground_strider',
                'nethers_delight:nether_skewer',
                /betterendforge:end_fish_.*/
            ]
        },
        {
            tag: 'origins:ranged_weapons',
            item: [
                'dannys_expansion:frozen_bow',
                /twilightforest:.*_bow/,
                /twilightforest:.*_scepter/,
                /eidolon:.*_wand/,
                'savageandravage:wand_of_freezing'
            ]
        },
        {
            tag: 'origins:shields',
            item: [
                'alexsmobs:shield_of_the_deep',
                'outvoted:wildfire_shield',
                'twilightforest:knightmetal_shield',
            ]
        },
        {
            tag: 'momo:omnifood',
            item: [
                'farmersdelight:barbecue_stick',
                'farmersdelight:egg_sandwich',
                'farmersdelight:chicken_sandwich',
                'farmersdelight:hamburger',
                'farmersdelight:bacon_sandwich',
                'farmersdelight:mutton_wrap',
                'farmersdelight:dumplings',
                'farmersdelight:stuffed_potato',
                'farmersdelight:beef_stew',
                'farmersdelight:chicken_soup',
                'farmersdelight:fish_stew',
                'farmersdelight:baked_cod_stew',
                'farmersdelight:bacon_and_eggs',
                'farmersdelight:pasta_with_meatballs',
                'farmersdelight:pasta_with_mutton_chop',
                'farmersdelight:roasted_mutton_chops',
                'farmersdelight:steak_and_potatoes',
                'farmersdelight:squid_ink_pasta',
                'farmersdelight:grilled_salmon',
                'farmersdelight:roast_chicken_block',
                'farmersdelight:roast_chicken',
                'farmersdelight:honey_glazed_ham_block',
                'farmersdelight:honey_glazed_ham',
                'farmersdelight:shepherds_pie_block',
                'farmersdelight:shepherds_pie',
                'nethers_delight:grilled_strider',
                'nethers_delight:raw_stuffed_hoglin',
                'nethers_delight:stuffed_hoglin_item',
                'nethers_delight:roast_hoglin_snout',
                'nethers_delight:roast_hoglin_ham',
                'nethers_delight:roast_hoglin',
                'abnormals_delight:seared_venison',
                'abnormals_delight:passionfruit_glazed_duck',
                'abnormals_delight:dune_platter',
                'abnormals_delight:duck_noodles',
                'abnormals_delight:perch_with_mushrooms',
                'abnormals_delight:pike_with_beetroot',
                'abnormals_delight:venison_with_bamboo_shoots',
                'abnormals_delight:maple_glazed_bacon',
                'farmersrespite:black_cod',
                'farmersrespite:tea_curry',
                'farmersrespite:blazing_chili'
            ]
        }
    ]
    //-------------FUNCTIONS/ARRAYS-------------
    //Add a tag to an item:
    addTagToItem.forEach((instance) => {
        event.add(instance.tag, instance.item)
    });
    //-------------FUNCTIONS/ARRAYS-------------
});
onEvent('block.tags', event => {
    const addTagToBlock = [
        { tag: 'create:windmill_sails', block: /chisel:wool*/ },
        {
            tag: 'origins:natural_stone',
            block: [
                '#forge:stone',
                'minecraft:blackstone',
                'quark:deepslate',
                'darkerdepths:shale',
                'darkerdepths:aridrock',
                'darkerdepths:limestone',
                'darkerdepths:grimestone'
            ]
        },
    ]
    addTagToBlock.forEach((instance) => {
        event.add(instance.tag, instance.block)
    });
});