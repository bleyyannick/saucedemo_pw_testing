# 🧪 Cas de test — SauceDemo

---

## TC_001 — Login avec credentials valides

- **Préconditions** : L'utilisateur est sur la page login
- **Étapes** :
  1. Saisir un username valide
  2. Saisir un mot de passe valide
  3. Cliquer sur le bouton Login
- **Résultat attendu** : L'utilisateur est redirigé vers le dashboard
- **Priorité** : Haute

---

## TC_002 — Login avec credentials invalides

- **Préconditions** : L'utilisateur est sur la page login
- **Étapes** :
  1. Saisir un username invalide
  2. Saisir un mot de passe invalide
  3. Cliquer sur le bouton Login
- **Résultat attendu** : Message d'erreur affiché
- **Priorité** : Haute

---

## TC_003 — Login avec username contenant uniquement des espaces

- **Préconditions** : L'utilisateur est sur la page login
- **Étapes** :
  1. Saisir des espaces dans le champ username
  2. Saisir un mot de passe
  3. Cliquer sur le bouton Login
- **Résultat attendu** : Message d'erreur affiché
- **Priorité** : Moyenne

---

## TC_004 — Login avec mot de passe incorrect

- **Préconditions** : L'utilisateur est sur la page login
- **Étapes** :
  1. Saisir un username valide
  2. Saisir un mot de passe incorrect
  3. Cliquer sur le bouton Login
- **Résultat attendu** : Message d'erreur affiché
- **Priorité** : Haute

---

## TC_005 — Login avec mot de passe contenant uniquement des espaces

- **Préconditions** : L'utilisateur est sur la page login
- **Étapes** :
  1. Saisir un username valide
  2. Saisir uniquement des espaces dans le champ mot de passe
  3. Cliquer sur le bouton Login
- **Résultat attendu** : Message d'erreur affiché
- **Priorité** : Moyenne

---

## TC_006 — Commande avec une unité de chaque article

- **Préconditions** : L'utilisateur est authentifié et sur la page home
- **Étapes** :
  1. Cliquer sur Add to cart pour chaque article visible sur la page d'accueil
  2. Cliquer sur l'icône du panier
  3. Cliquer sur Checkout
  4. Remplir le formulaire avec un prénom valide, un nom valide et un code postal valide
  5. Cliquer sur Continue
  6. Cliquer sur Finish
- **Résultat attendu** : Message de remerciement affiché, lien de redirection vers la Home présent, panier vidé
- **Priorité** : Haute

---

## TC_007 — Commande en ajoutant chaque article depuis sa page de détail

- **Préconditions** : L'utilisateur est authentifié et sur la page home
- **Étapes** :
  1. Cliquer sur un article pour accéder à sa page de détail
  2. Cliquer sur Add to cart
  3. Revenir sur la page home
  4. Répéter les étapes 1 à 3 pour un autre article
  5. Cliquer sur l'icône du panier
  6. Cliquer sur Checkout
  7. Remplir le formulaire avec un prénom valide, un nom valide et un code postal valide
  8. Cliquer sur Continue
  9. Cliquer sur Finish
- **Résultat attendu** : Message de remerciement affiché, lien de redirection vers la Home présent, panier vidé
- **Priorité** : Haute

---

## TC_008 — Persistance du panier après déconnexion et reconnexion

- **Préconditions** : L'utilisateur est authentifié et sur la page home
- **Étapes** :
  1. Ajouter plusieurs articles au panier
  2. Se déconnecter
  3. Se reconnecter avec les mêmes credentials
  4. Cliquer sur l'icône du panier
- **Résultat attendu** : Les mêmes articles sont toujours présents dans le panier
- **Priorité** : Haute

---

## TC_009 — Commande avec un code postal contenant des lettres

- **Préconditions** : L'utilisateur est authentifié, a des articles dans le panier et est sur le formulaire de livraison
- **Étapes** :
  1. Remplir le champ prénom avec une valeur valide
  2. Remplir le champ nom avec une valeur valide
  3. Saisir un code postal contenant des lettres
  4. Cliquer sur Continue
- **Résultat attendu** : Message d'erreur affiché, la commande n'est pas validée
- **Priorité** : Moyenne

---

## TC_010 — Commande sans renseigner les informations de livraison

- **Préconditions** : L'utilisateur est authentifié, a des articles dans le panier et est sur le formulaire de livraison
- **Étapes** :
  1. Laisser tous les champs vides
  2. Cliquer sur Continue
- **Résultat attendu** : Message d'erreur affiché, la commande n'est pas validée
- **Priorité** : Haute

---

## TC_011 — Suppression d'articles dans le panier avant de finaliser la commande

- **Préconditions** : L'utilisateur est authentifié et sur la page home
- **Étapes** :
  1. Ajouter plusieurs articles au panier
  2. Cliquer sur l'icône du panier
  3. Supprimer quelques articles
  4. Cliquer sur Checkout
  5. Remplir le formulaire avec un prénom valide, un nom valide et un code postal valide
  6. Cliquer sur Continue
  7. Cliquer sur Finish
- **Résultat attendu** : Seuls les articles non supprimés apparaissent dans le récapitulatif, message de remerciement affiché, panier vidé
- **Priorité** : Haute

---

## TC_012 — Tri des articles par prix croissant

- **Préconditions** : L'utilisateur est authentifié et sur la page home
- **Étapes** :
  1. Cliquer sur le menu de tri
  2. Sélectionner Price (low to high)
- **Résultat attendu** : Les articles sont affichés du moins cher au plus cher
- **Priorité** : Moyenne

---

## TC_013 — Tri des articles par prix décroissant

- **Préconditions** : L'utilisateur est authentifié et sur la page home
- **Étapes** :
  1. Cliquer sur le menu de tri
  2. Sélectionner Price (high to low)
- **Résultat attendu** : Les articles sont affichés du plus cher au moins cher
- **Priorité** : Moyenne

---

## TC_014 — Vérification du total dans le récapitulatif de commande

- **Préconditions** : L'utilisateur est authentifié, a des articles dans le panier et est sur la page récapitulatif
- **Étapes** :
  1. Ajouter plusieurs articles au panier
  2. Cliquer sur l'icône du panier
  3. Cliquer sur Checkout
  4. Remplir le formulaire avec des informations valides
  5. Cliquer sur Continue
  6. Vérifier le total affiché
- **Résultat attendu** : Le total correspond à la somme des prix des articles
- **Priorité** : Haute

---

## TC_015 — Retour à la home depuis le panier

- **Préconditions** : L'utilisateur est authentifié et sur la page panier
- **Étapes** :
  1. Ajouter un article au panier
  2. Cliquer sur l'icône du panier
  3. Cliquer sur Continue Shopping
- **Résultat attendu** : L'utilisateur est redirigé vers la page home, les articles ajoutés sont toujours dans le panier
- **Priorité** : Moyenne
