onEvent('chest.loot_tables', event => {
  event.modify('minecraft:buried_treasure', table => {
      table.addPool(pool => {
        pool.rolls = 1
        pool.addItem('create:copper_ingot', 100)
      })
  })
  event.modify('minecraft:simple_dungeon', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addItem('enigmaticlegacy:recall_potion', 20)
      pool.addItem('create:copper_ingot', 50)
    })
  })
})

//Armor shard loot tables
onEvent('generic.loot_tables', event => {
  event.modify('twilightforest:structures/stronghold_room', table => {
    table.addPool(pool => {
      pool.rolls = 3
      pool.addItem('twilightforest:armor_shard')
    })
  })
})

//Straw loot tables
onEvent('block.loot_tables', event => {
  //Straw from Giant Grass
  event.modify('environmental:giant_tall_grass', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:item',
          conditions: [
            {
              condition: 'minecraft:block_state_property',
              block: 'environmental:giant_tall_grass',
            },
            {
              condition: 'minecraft:match_tool',
              predicate: {
                tag: 'farmersdelight:straw_harvesters'
              }
            },
            {
              condition: 'minecraft:random_chance',
              chance: 0.5
            }
          ],
          name: 'farmersdelight:straw'
        }
      )
    })
  })
  //Straw from Beachgrass
  event.modify('upgrade_aquatic:beachgrass', table => {
    table.addPool(pool => {
      pool.rolls = 1
      pool.addEntry(
        {
          type: 'minecraft:item',
          conditions: [
            {
              condition: 'minecraft:block_state_property',
              block: 'upgrade_aquatic:beachgrass',
            },
            {
              condition: 'minecraft:match_tool',
              predicate: {
                tag: 'farmersdelight:straw_harvesters'
              }
            },
            {
              condition: 'minecraft:random_chance',
              chance: 0.8
            }
          ],
          name: 'farmersdelight:straw'
        }
      )
    })
  })
})