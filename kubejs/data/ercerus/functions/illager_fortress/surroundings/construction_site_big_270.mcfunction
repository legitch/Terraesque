#creates a big construction site rotated by 270 degrees



#spawns the structure
setblock ~ ~22 ~ minecraft:structure_block[mode=load]{metadata:"",mirror:"NONE",ignoreEntities:0b,powered:0b,seed:0L,author:"Ercerus",rotation:"COUNTERCLOCKWISE_90",mode:"LOAD",showboundingbox:0b,integrity:1.0f,showair:0b,sizeX:9,sizeY:23,sizeZ:28,posX:0,posY:-22,posZ:28,name:"ercerus:illager_fortress/surroundings/construction_site_big"}
setblock ~ ~23 ~ minecraft:redstone_block
fill ~ ~22 ~ ~ ~23 ~ minecraft:air



#creates the cobblestone base
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:snow
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:grass_block
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:grass
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:tall_grass
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:water
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:lava
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace #minecraft:ice
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace #minecraft:logs
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace #minecraft:corals
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace #minecraft:leaves
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:sweet_berry_bush
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace #minecraft:small_flowers
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:air
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:cave_air
fill ~ ~-1 ~ ~16 55 ~28 minecraft:cobblestone replace minecraft:sugar_cane