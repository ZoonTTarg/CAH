# CAH
Générateur de cartes pour Cards Against Humanity (Codé à la va vite avant un départ au ski). 
Seule la partie génération a été faite, les données doivent être injectées dans la base manuellement.
INSERT INTO cartes
  (couleur, libelle)
VALUES ('NOIR','Pour nous en sortir, nous n''avons pas eu d''autres choix que de ____ .');

INSERT INTO cartes
  (couleur, libelle)
VALUES ('BLANC','...');

Le schéma de base est dans le dossier dump (structure uniquement :p)
Je n'ai pas fait de fichier de config, modifier app.js pour la connexion à la base et www pour le port. Puis npm start.
