// priority: 500
onEvent('recipes', (event) => {
    //Replace output
    const outputReplace = [
        {
            filter: {},
            toReplace: '',
            replaceWith: ''
        },
    ];
    //Replace input
    const inputReplace = [
        {
            filter: {},
            toReplace: 'minecraft:bookshelf',
            replaceWith: '#forge:bookshelves'
        },
        {
            filter: {},
            toReplace: 'minecraft:egg',
            replaceWith: '#forge:eggs'
        },
        {
            filter: {},
            toReplace: 'supplementaries:flax',
            replaceWith: 'farmersdelight:straw'
        },
        {
            filter: {},
            toReplace: 'minecraft:lead',
            replaceWith: 'supplementaries:rope'
        },
        {
            filter: { mod: 'waystones'},
            toReplace: 'minecraft:ender_pearl',
            replaceWith: 'minecraft:ender_eye'
        },
        {
            filter: { id: 'waystones:warp_stone'},
            toReplace: 'minecraft:purple_dye',
            replaceWith: 'minecraft:purpur_block'
        },
        {
            filter: { id: 'alexsmobs:endolocator'},
            toReplace: 'minecraft:ender_pearl',
            replaceWith: 'minecraft:ender_eye'
        },
        {
            filter: { id: 'alexsmobs:endolocator'},
            toReplace: 'minecraft:ender_pearl',
            replaceWith: 'minecraft:ender_eye'
        },
        {
            filter: {},
            toReplace: 'alexmobs:shark_tooth',
            replaceWith: '#terraesque:trident_teeth'
        },
        {
            filter: {},
            toReplace: 'minecraft:slime_ball',
            replaceWith: '#forge:slimeballs'
        },
        {
            filter: {mod: 'storagenetwork'},
            toReplace: 'minecraft:redstone_block',
            replaceWith: 'create:zinc_ingot'
        },
        {
            filter: {mod: 'craftabledeeds'},
            toReplace: 'minecraft:netherite_ingot',
            replaceWith: 'quark:polished_deepslate'
        },
        {
            filter: {id: 'enigmaticlegacy:escape_scroll'},
            toReplace: 'enigmaticlegacy:eye_of_nebula',
            replaceWith: 'upgrade_aquatic:elder_eye'
        },
        {
            filter: { id: 'waystones:warp_stone' },
            toReplace: 'minecraft:emerald',
            replaceWith: 'betterendforge:eternal_crystal'
        }
    ];
    const InputOutputReplace = [
        {
            filter: {},
            toReplace: 'farmersdelight:rope',
            replaceWith: 'supplementaries:rope'
        },
        {
            filter: { mod: 'environmental' },
            toReplace: 'environmental:fried_egg',
            replaceWith: 'farmersdelight:fried_egg'
        },
    ];
    //----------------------FUNCTIONS/ARRAYS----------------------
    //Replace output
    outputReplace.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
    //Replace input
    inputReplace.forEach((recipe) => {
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
    //Replace input AND output
    InputOutputReplace.forEach((recipe) => {
        event.replaceOutput(recipe.filter, recipe.toReplace, recipe.replaceWith);
        event.replaceInput(recipe.filter, recipe.toReplace, recipe.replaceWith);
    });
    //----------------------FUNCTIONS/ARRAYS----------------------
})