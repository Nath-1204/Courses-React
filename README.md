================ Sujet 1 ==========================

Objectif : Créer une application fonctionnellement similaire à celle-ci : https://random-quote-machine.freecodecamp.rocks/ .

Réalisez les scénarios utilisateurs ci-dessous et assurez-vous que tous les tests soient réussis. Utilisez les bibliothèques et API nécessaires. Apportez votre touche personnelle.

Vous pouvez utiliser n'importe quelle combinaison de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux et jQuery pour réaliser ce projet. Il est recommandé d'utiliser un framework frontend (comme React, par exemple), car cette section est consacrée à l'apprentissage des frameworks frontend. L'utilisation de technologies supplémentaires non mentionnées ci-dessus est déconseillée et se fait à vos risques et périls. Nous envisageons de prendre en charge d'autres frameworks frontend tels qu'Angular et Vue, mais ils ne sont pas encore compatibles. Nous examinerons et tenterons de corriger tous les rapports de problèmes liés à l'utilisation de la pile technologique suggérée pour ce projet. Bon codage ! 

Histoire utilisateur n° 1 : Je peux voir un élément conteneur avec un id="quote-box". correspondant

Histoire utilisateur n° 2 : À l’intérieur #quote-box, je peux voir un élément avec un id="text".

Histoire utilisateur n° 3 : Dans #quote-box, je peux voir un élément avec un id="author".

Histoire utilisateur n° 4 : À l’intérieur #quote-box, je peux voir un élément cliquable avec un id="new-quote".

Histoire utilisateur n° 5 : À l’intérieur #quote-box, je peux voir un a élément cliquable avec un id="tweet-quote".                                                                                                          Scénario utilisateur n° 6 : Au premier chargement, mon générateur de citations affiche une citation aléatoire dans l’élément avec id="text".

Histoire utilisateur n°7 : Au premier chargement, mon générateur de citations affiche l’auteur de la citation aléatoire dans l’élément avec id="author".

Scénario utilisateur n° 8 : Lorsque l’ #new-quote utilisateur clique sur le bouton, mon outil de génération de devis doit récupérer un nouveau devis et l’afficher dans l’ #text élément.

Histoire utilisateur n°9 : Mon outil de citation doit récupérer l’auteur de la nouvelle citation lorsque l’ #new-quote utilisateur clique sur le bouton et l’afficher dans l’ #author élément.

Scénario utilisateur n° 10 : Je peux tweeter la citation actuelle en cliquant sur l’ #tweet-quote a élément. Cet a élément doit inclure le "twitter.com/intent/tweet"chemin d’accès dans son href attribut pour permettre le tweet de la citation actuelle.                               

Scénario utilisateur n° 11 : L’ #quote-box élément conteneur doit être centré horizontalement. Veuillez effectuer des tests avec un niveau de zoom du navigateur à 100 % et la page en plein écran.

Vous pouvez créer votre projet en utilisant ce modèle CodePen et en cliquant Save pour créer votre propre projet. Si vous préférez utiliser un autre environnement, insérez cette <script>balise dans le corps de votre index.htmlfichier :<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>                                                           

Une fois terminé, soumettez l'URL de votre projet fonctionnel avec tous ses tests réussis.

Remarque : Twitter n’autorise pas le chargement de liens dans une iframe. Si votre tweet ne se charge pas, essayez d’utiliser l’attribut `href` target="_blank"ou ` target="_top"href` sur l’ élément `<tweet>`. L’élément `<tweet>` remplacera l’onglet actuel ; assurez-vous donc d’avoir enregistré votre travail.#tweet-quotetarget="_top"




======================= Projet2 : -====================================

Objectif : Créer une application fonctionnellement similaire à celle-ci : https://markdown-previewer.freecodecamp.rocks/ .

Réalisez les scénarios utilisateurs ci-dessous et assurez-vous que tous les tests soient réussis. Utilisez les bibliothèques et API nécessaires. Apportez votre touche personnelle.                            Vous pouvez utiliser n'importe quelle combinaison de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux et jQuery pour réaliser ce projet. Il est recommandé d'utiliser un framework frontend (comme React, par exemple), car cette section est consacrée à l'apprentissage des frameworks frontend. L'utilisation de technologies supplémentaires non mentionnées ci-dessus est déconseillée et se fait à vos risques et périls. Nous envisageons de prendre en charge d'autres frameworks frontend tels qu'Angular et Vue, mais ils ne sont pas encore compatibles. Nous examinerons et tenterons de corriger tous les rapports de problèmes liés à l'utilisation de la pile technologique suggérée pour ce projet. Bon codage !                                                                
Histoire utilisateur n° 1 : Je peux voir un élément avec un . textarea correspondant id="editor"

Histoire utilisateur n° 2 : id="preview" Je peux voir un élément avec un . correspondant

Scénario utilisateur n° 3 : Lorsque je saisis du texte dans l’ #editor élément, #preview celui-ci est mis à jour au fur et à mesure que je tape pour afficher le contenu de la zone de texte.

Scénario utilisateur n° 4 : Lorsque je saisis du Markdown au format GitHub dans l’ #editorélément, le texte est rendu en HTML dans l’ #previewélément au fur et à mesure que je tape (ASTUCE : vous n’avez pas besoin d’analyser le Markdown vous-même ; vous pouvez importer la bibliothèque Marked pour cela : https://cdnjs.com/libraries/marked ).                                               

Histoire utilisateur n° 5 : Lorsque mon aperçu Markdown se charge pour la première fois, le texte par défaut du #editorchamp doit contenir du Markdown valide représentant au moins un élément de chacun des éléments suivants : un élément de titre (taille H1), un élément de sous-titre (taille H2), un lien, du code en ligne, un bloc de code, un élément de liste, une citation, une image et du texte en gras.

Scénario utilisateur n°6 : Lorsque mon aperçu Markdown se charge pour la première fois, le Markdown par défaut du #editorchamp doit être rendu sous forme de HTML dans l’ #previewélément.

Bonus optionnel (vous n'avez pas besoin de réussir ce test) : Mon aperçu Markdown interprète les retours chariot et les rend comme brdes éléments (saut de ligne).                                                          Bonus optionnel (vous n'avez pas besoin de réussir ce test) : Mon aperçu Markdown interprète les retours chariot et les rend comme brdes éléments (saut de ligne).

Vous pouvez créer votre projet en utilisant ce modèle CodePen et en cliquant Savepour créer votre propre projet. Si vous préférez utiliser un autre environnement, insérez cette <script>balise dans le corps de votre index.htmlfichier :<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>




====================== Sujet3: =====================

Objectif : Créer une application fonctionnellement similaire à celle-ci : https://drum-machine.freecodecamp.rocks/ .                                                                                                                            Réalisez les scénarios utilisateurs ci-dessous et assurez-vous que tous les tests soient réussis. Utilisez les bibliothèques et API nécessaires. Apportez votre touche personnelle.

Vous pouvez utiliser n'importe quelle combinaison de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux et jQuery pour réaliser ce projet. Il est recommandé d'utiliser un framework frontend (comme React, par exemple), car cette section est consacrée à l'apprentissage des frameworks frontend. L'utilisation de technologies supplémentaires non mentionnées ci-dessus est déconseillée et se fait à vos risques et périls. Nous envisageons de prendre en charge d'autres frameworks frontend tels qu'Angular et Vue, mais ils ne sont pas encore compatibles. Nous examinerons et tenterons de corriger tous les rapports de problèmes liés à l'utilisation de la pile technologique suggérée pour ce projet. Bon codage !

 Scénario utilisateur n° 1 : Je devrais pouvoir voir un conteneur externe avec un élément correspondant id="drum-machine"contenant tous les autres éléments.

Histoire utilisateur n° 2 : À l’intérieur, je peux voir un élément avec un . #drum-machine correspondant id="display"

Histoire utilisateur n° 3 : Je peux voir #drum-machine 9 éléments de pad de batterie cliquables, chacun avec un nom de classe drum-pad, un identifiant unique décrivant le clip audio que le pad de batterie sera configuré pour déclencher, et un texte interne correspondant à l’une des touches suivantes du clavier : Q, W, E, A, S, D, Z, X. C Les pads de batterie DOIVENT être dans cet ordre.                         
Histoire utilisateur n° 4 : Dans chaque .drum-pad, il devrait y avoir un élément HTML5 audio qui possède un src attribut pointant vers un clip audio, un nom de classe de clip, et un id correspondant au texte interne de son parent .drum-pad(par exemple id="Q", id="W", id="E"etc.).

Scénario utilisateur n° 5 : Lorsque je clique sur un .drum-pad élément, le clip audio contenu dans son audio élément enfant doit être déclenché.

Histoire utilisateur n°6 : Lorsque j’appuie sur la touche de déclenchement associée à chaque élément .drum-pad, le clip audio contenu dans son audio élément enfant doit être déclenché (par exemple, appuyer sur la Q touche devrait déclencher le pad de batterie qui contient la chaîne Q, appuyer sur la W touche devrait déclencher le pad de batterie qui contient la chaîne W, etc.).                      
Histoire utilisateur n°7 : Lorsqu’un événement .drum-pad est déclenché, une chaîne de caractères décrivant le clip audio associé est affichée comme texte interne de l’ #display élément (chaque chaîne doit être unique).

Voici quelques exemples audio que vous pouvez utiliser pour votre boîte à rythmes :

Chauffage 1
Chauffage 2
Chauffage 3
Chauffage 4
Taper
Open-HH
Coup de pied et chapeau
Coup
Fermé-HH                                                                                                                                                                                       Vous pouvez créer votre projet en utilisant ce modèle CodePen et en cliquant Savepour créer votre propre projet. Si vous préférez utiliser un autre environnement, insérez cette <script>balise dans le corps de votre index.htmlfichier :<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>



---------------------- Sujet4: -----------------------------


Objectif : Créer une application fonctionnellement similaire à celle-ci : https://javascript-calculator.freecodecamp.rocks/ .                                                                                                  Réalisez les scénarios utilisateurs ci-dessous et assurez-vous que tous les tests soient réussis. Utilisez les bibliothèques et API nécessaires. Apportez votre touche personnelle.

Vous pouvez utiliser n'importe quelle combinaison de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux et jQuery pour réaliser ce projet. Il est recommandé d'utiliser un framework frontend (comme React, par exemple), car cette section est consacrée à l'apprentissage des frameworks frontend. L'utilisation de technologies supplémentaires non mentionnées ci-dessus est déconseillée et se fait à vos risques et périls. Nous envisageons de prendre en charge d'autres frameworks frontend tels qu'Angular et Vue, mais ils ne sont pas encore compatibles. Nous examinerons et tenterons de corriger tous les rapports de problèmes liés à l'utilisation de la pile technologique suggérée pour ce projet. Bon codage !                                                                                                                                 Scénario utilisateur n° 1 : Ma calculatrice doit contenir un élément cliquable contenant un =(signe égal) avec un id="equals".

Histoire utilisateur n° 2 : Ma calculatrice doit contenir 10 éléments cliquables contenant chacun un chiffre de 0 à 9, avec les identifiants correspondants suivants : id="zero", id="one", id="two", id="three", id="four", id="five", , id="six", id="seven", id="eight", et id="nine".                                                                                                                        Histoire utilisateur n° 3 : Ma calculatrice doit contenir 4 éléments cliquables, chacun contenant l’un des 4 opérateurs mathématiques principaux avec les identifiants correspondants suivants : id="add", id="subtract", id="multiply", id="divide".

Scénario utilisateur n° 4 : Ma calculatrice devrait contenir un élément cliquable contenant un .symbole (point décimal) avec un id="decimal".

Histoire utilisateur n° 5 : Ma calculatrice devrait contenir un élément cliquable avec un id="clear".

Scénario utilisateur n° 6 : Ma calculatrice devrait contenir un élément permettant d’afficher les valeurs avec un id="display".                                                                                                                     Scénario utilisateur n° 7 : À tout moment, appuyer sur le clearbouton efface les valeurs d’entrée et de sortie et rétablit l’état initial de la calculatrice ; 0 doit être affiché dans l’élément dont l’identifiant est display.

Histoire utilisateur n° 8 : Lorsque je saisis des nombres, je devrais pouvoir voir ma saisie dans l’élément ayant l’identifiant de display.

Histoire utilisateur n° 9 : Je devrais pouvoir additionner, soustraire, multiplier et diviser une chaîne de nombres de n’importe quelle longueur, et lorsque j’appuie sur la touche Entrée =, le résultat correct devrait s’afficher dans l’élément dont l’identifiant est «  » display.

Scénario utilisateur n° 10 : Lors de la saisie de nombres, ma calculatrice ne devrait pas autoriser un nombre commençant par plusieurs zéros.                                                                                                                     Histoire utilisateur n° 11 : Lorsque l’élément décimal est cliqué, un « a » .doit être ajouté à la valeur actuellement affichée ; deux chiffres .dans un seul nombre ne doivent pas être acceptés.

User Story #12 : Je devrais pouvoir effectuer n'importe quelle opération ( +, -, *, /) sur des nombres contenant des points décimaux.

Scénario utilisateur n° 13 : Si deux opérateurs ou plus sont saisis consécutivement, l’opération effectuée doit être le dernier opérateur saisi (sans le -signe moins). Par exemple, si «5 + * 7 = + » est saisi, le résultat doit être 35« +5 * 7 » (c’est-à-dire « + ») ; si « - » est 5 * - 5 =saisi, le résultat doit être -25« - » (c’est-à-dire « -5 * (-5) »).

Scénario utilisateur n° 14 : Appuyer immédiatement sur un opérateur =devrait lancer un nouveau calcul qui opère sur le résultat de l’évaluation précédente.                                                                              Histoire utilisateur n° 15 : Ma calculatrice devrait avoir une précision de plusieurs décimales en matière d’arrondi (notez qu’il n’existe pas de norme exacte, mais vous devriez pouvoir effectuer des calculs 2 / 7avec une précision raisonnable jusqu’à au moins 4 décimales).

Note concernant la logique des calculatrices : Il existe deux principales écoles de pensée concernant la logique de saisie des calculatrices : la logique d’exécution immédiate et la logique de formule . Notre exemple utilise la logique de formule et respecte l’ordre de priorité des opérations, contrairement à l’exécution immédiate. Les deux approches sont acceptables, mais veuillez noter que selon votre choix, votre calculatrice peut donner des résultats différents des nôtres pour certaines équations (voir l’exemple ci-dessous). Tant que vos calculs peuvent être vérifiés par une autre calculatrice commerciale, veuillez ne pas considérer cela comme un bogue.         EXEMPLE: 3 + 5 x 6 - 2 / 4 =

Logique d'exécution immédiate : 11.5
Logique des formules/expressions : 32.5
Vous pouvez créer votre projet en utilisant ce modèle CodePen et en cliquant Savepour créer votre propre projet. Si vous préférez utiliser un autre environnement, insérez cette <script>balise dans le corps de votre index.htmlfichier :<script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></script>



----------------- Sujet5: ------------------------------------------


Objectif : Créer une application fonctionnellement similaire à celle-ci : https://25--5-clock.freecodecamp.rocks .                                                                                                               Réalisez les scénarios utilisateurs ci-dessous et assurez-vous que tous les tests soient réussis. Utilisez les bibliothèques et API nécessaires. Apportez votre touche personnelle.

Vous pouvez utiliser n'importe quelle combinaison de HTML, JavaScript, CSS, Bootstrap, SASS, React, Redux et jQuery pour réaliser ce projet. Il est recommandé d'utiliser un framework frontend (comme React, par exemple), car cette section est consacrée à l'apprentissage des frameworks frontend. L'utilisation de technologies supplémentaires non mentionnées ci-dessus est déconseillée et se fait à vos risques et périls. Nous envisageons de prendre en charge d'autres frameworks frontend tels qu'Angular et Vue, mais ils ne sont pas encore compatibles. Nous examinerons et tenterons de corriger tous les rapports de problèmes liés à l'utilisation de la pile technologique suggérée pour ce projet. Bon codage !                                                                

Scénario utilisateur n° 1 : Je peux voir un élément id="break-label"contenant une chaîne de caractères (par exemple « Break Length »).

Histoire utilisateur n° 2 : Je peux voir un élément id="session-label"qui contient une chaîne de caractères (par exemple « Longueur de la session »).

Histoire utilisateur n° 3 : Je peux voir deux éléments cliquables avec des ID correspondants : id="break-decrement"et id="session-decrement".

Histoire utilisateur n° 4 : Je peux voir deux éléments cliquables avec des ID correspondants : id="break-increment"et id="session-increment".                                          

Histoire utilisateur n° 5 : Je peux voir un élément avec un id="break-length", qui par défaut (au chargement) affiche une valeur de 5.

Histoire utilisateur n°6 : Je peux voir un élément avec un id="session-length", qui par défaut affiche une valeur de 25.

Histoire utilisateur n°7 : Je peux voir un élément avec un id="timer-label", correspondant qui contient une chaîne indiquant qu’une session est initialisée (par exemple « Session »).

Scénario utilisateur n° 8 : Je peux voir un élément avec un point correspondant id="time-left". REMARQUE : En pause ou en cours d’exécution, la valeur de ce champ doit toujours être affichée au mm:ss format (ex. : 25:00).                                                                                                                           Histoire utilisateur n° 9 :id="start_stop" Je peux voir un élément cliquable avec un . correspondant

Histoire utilisateur n° 10 : Je peux voir un élément cliquable avec un id="reset". correspondant

Histoire utilisateur n° 11 : Lorsque je clique sur l’élément avec l’identifiant de reset, tout minuteur en cours d’exécution doit être arrêté, la valeur de id="break-length"doit revenir à 5, la valeur de id="session-length"doit revenir à 25 et l’élément avec id="time-left"doit être réinitialisé à son état par défaut.

Histoire utilisateur n° 12 : Lorsque je clique sur l’élément dont l’identifiant est break-decrement, la valeur à l’intérieur id="break-length"diminue de 1 et je peux voir la valeur mise à jour.                              

utilisateur n° 13 : Lorsque je clique sur l’élément dont l’identifiant est break-increment, la valeur à l’intérieur id="break-length"s’incrémente de 1 et je peux voir la valeur mise à jour.

Histoire utilisateur n° 14 : Lorsque je clique sur l’élément dont l’identifiant est session-decrement, la valeur à l’intérieur id="session-length"diminue de 1 et je peux voir la valeur mise à jour.

Histoire utilisateur n° 15 : Lorsque je clique sur l’élément dont l’identifiant est session-increment, la valeur à l’intérieur id="session-length"est incrémentée de 1 et je peux voir la valeur mise à jour.

Histoire utilisateur n° 16 : Je ne devrais pas pouvoir définir une durée de session ou de pause inférieure ou égale à 0.                                                                                                                                Histoire utilisateur n° 17 : Je ne devrais pas pouvoir définir une durée de session ou de pause supérieure à 60.

Histoire utilisateur n° 18 : Lorsque je clique pour la première fois sur l’élément avec id="start_stop", le minuteur doit commencer à fonctionner à partir de la valeur actuellement affichée dans id="session-length", même si la valeur a été incrémentée ou décrémentée par rapport à la valeur d’origine de 25.

Histoire utilisateur n° 19 : Si le minuteur est en cours d’exécution, l’élément avec l’identifiant time-leftdoit afficher le temps restant au mm:ssformat (décrémentant d’une valeur de 1 et mettant à jour l’affichage toutes les 1000 ms).

Scénario utilisateur n° 20 : Si le minuteur est en cours d’exécution et que je clique sur l’élément avec id="start_stop", le compte à rebours doit se mettre en pause.                                                           

Histoire utilisateur n° 21 : Si le minuteur est en pause et que je clique sur l’élément avec id="start_stop", le compte à rebours devrait reprendre à partir du point où il a été mis en pause.

Histoire utilisateur n° 22 : Lorsqu’un compte à rebours de session atteint zéro (REMARQUE : le minuteur DOIT atteindre 00:00) et qu’un nouveau compte à rebours commence, l’élément avec l’identifiant de timer-labeldoit afficher une chaîne indiquant qu’une pause a commencé.

Histoire utilisateur n° 23 : Lorsqu’un compte à rebours de session atteint zéro (REMARQUE : le minuteur DOIT atteindre 00:00), un nouveau compte à rebours de pause doit commencer, décomptant à partir de la valeur actuellement affichée dans l’ id="break-length"élément.

Histoire utilisateur n° 24 : Lorsqu’un compte à rebours de pause atteint zéro (REMARQUE : le minuteur DOIT atteindre 00:00) et qu’un nouveau compte à rebours commence, l’élément avec l’identifiant de timer-labeldoit afficher une chaîne indiquant qu’une session a commencé.                                  

User Story #25 : Lorsqu’un compte à rebours de pause atteint zéro (REMARQUE : le minuteur DOIT atteindre 00:00), un nouveau compte à rebours de session doit commencer, décomptant à partir de la valeur actuellement affichée dans l’ id="session-length"élément.

Scénario utilisateur n° 26 : Lorsqu’un compte à rebours atteint zéro (REMARQUE : le minuteur DOIT afficher 00:00), un son indiquant la fin du compte à rebours doit être émis. Ceci doit utiliser une audiobalise HTML5 et avoir un élément correspondant id="beep".

Histoire utilisateur n° 27 : L’élément audio id="beep"doit durer au moins 1 seconde.

Histoire utilisateur n° 28 : L’élément audio avec l’identifiant beepdoit cesser de jouer et être rembobiné au début lorsque l’élément avec l’identifiant resetest cliqué.                  