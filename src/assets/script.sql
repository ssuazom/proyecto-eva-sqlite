CREATE TABLE IF NOT EXISTS pokemon(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT,
    tipo TEXT,
    sexo TEXT,
    categoria TEXT,
    altura TEXT,
    ataque TEXT,
    defensa TEXT,
    ps TEXT,
    velocidad TEXT,
    fotografia TEXT
);

INSERT OR IGNORE INTO pokemon (id, nombre, tipo, sexo, categoria, altura, ataque, defensa, ps, velocidad, fotografia) VALUES (1,'Charizard','Fuego - volador','Macho','llama','1,7m','5','7','5','2','https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png');
INSERT OR IGNORE INTO pokemon (id, nombre, tipo, sexo, categoria, altura, ataque, defensa, ps, velocidad, fotografia) VALUES (2,'Venusaur','Semilla','Hembra','Clavos','2,0m','5','5','5','5','https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png');
INSERT OR IGNORE INTO pokemon (id, nombre, tipo, sexo, categoria, altura, ataque, defensa, ps, velocidad, fotografia) VALUES (3,'Blastoise','Agua','Macho','Armazon','1.6m','5','6','5','5','https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png');