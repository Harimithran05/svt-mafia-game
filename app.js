/* Mafia Party Game - Core Logic & State Management */

// --- 1. LOCALIZATION / TRANSLATIONS ---
const Translations = {
    en: {
        gameTitle: "SVT MAFIA",
        gameSubtitle: "SEVENTEEN EDITION",
        gameDesc: "An immersive digital companion for the classic game of trust, deception, and survival themed around SEVENTEEN (SVT). Play with friends in the room or synchronize across multiple browser tabs!",
        btnStartHost: "Start Game (Host)",
        btnJoinRoom: "Join Room",
        btnHowToPlay: "How to Play",
        createRoomTitle: "Create a Room",
        roomName: "Room Name",
        hostName: "Host Name",
        targetPlayers: "Target Players (4 - 15)",
        btnBack: "Back",
        btnCreate: "Create Room",
        joinRoomTitle: "Join a Room",
        yourName: "Your Name",
        roomCode: "Room Code",
        btnJoin: "Join Game",
        lobbyTitle: "Lobby: ",
        codeLabel: "Code: ",
        joinedPlayers: "Joined Players",
        lobbyControls: "Game Mode & Options",
        optPassPlay: "Pass & Play",
        descPassPlay: "Play together on this single device by passing it around.",
        optMultiTab: "Multi-Tab Sync",
        descMultiTab: "Open other tabs and join this room code to play on separate screens.",
        addFriend: "Add Friend to Lobby",
        btnLeave: "Leave Room",
        btnStartGame: "Start Game",
        roleAssignment: "Role Assignment",
        revealYourTurn: "Hey {name}, it's your turn!",
        revealPrompt: "Confirm you are alone and click the button to see your secret role.",
        btnRevealRole: "Reveal My Role",
        roleAlignment: "Alignment: {align}",
        btnHideRole: "Hide Role & Continue",
        mafiaPartners: "Your Mafia Partners:",
        nightPhase: "NIGHT PHASE",
        nightFalls: "Night Falls...",
        nightDesc: "The town goes to sleep and active roles wake up to perform their duties in secret.",
        asleepTitle: "You are asleep...",
        asleepDesc: "Wait for the active roles (Mafia, Detective, Doctor) to finish their nighttime actions.",
        mafiaInstruction: "Mafia Turn: Select a target",
        mafiaDesc: "Choose a player to eliminate tonight.",
        detectiveInstruction: "Detective Turn: Select a suspect",
        detectiveDesc: "Choose a player to investigate their alignment.",
        doctorInstruction: "Doctor Turn: Select a patient",
        doctorDesc: "Choose a player to protect from the Mafia.",
        citizenInstruction: "Citizens Turn: Close eyes",
        citizenDesc: "Sleep tight and wait for the morning.",
        passTo: "Pass the device to: {name}",
        passRevealDesc: "Make sure others cannot see the screen, then press reveal to proceed with your night action.",
        wakeUp: "Wake Up",
        selectPlayer: "Select a Player:",
        investigateResult: "Investigation Result",
        innocentResult: "The player is INNOCENT.",
        mafiaResult: "The player is MAFIA!",
        btnConfirm: "Confirm Decision",
        dayPhase: "DAY PHASE",
        dayBreaks: "Day Breaks...",
        dayDesc: "The town wakes up to discuss the events of last night.",
        nightReport: "Nightly Report:",
        noOneDied: "The Doctor was alert! No one died last night.",
        playerDied: "{name} was eliminated by the Mafia last night!",
        discussionTimer: "Discussion Timer",
        skipDiscussion: "Skip Discussion",
        remainingCitizens: "Remaining Citizens",
        votingPhase: "VOTING PHASE",
        votingTitle: "Vanish the Deceiver",
        votingDesc: "Vote for the player you suspect of being in the Mafia. Self-voting is prohibited.",
        tieVote: "TIE VOTE DETECTED!",
        revoteMsg: "A tie occurred between the tied players. A re-vote is triggered.",
        voterCast: "{name}, cast your vote",
        whoIsMafia: "Who is the Mafia?",
        votePrivacyDesc: "Make sure others cannot see your vote, then click below to reveal the voting candidates.",
        btnCastVote: "Cast Vote",
        btnConfirmVote: "Confirm Vote",
        eliminationResult: "Elimination Result",
        verdictOut: "has been voted out by the town!",
        theirRoleWas: "THEIR ROLE WAS",
        btnProceed: "Proceed",
        winnerTitle: "{team} WIN!",
        mafiaTeamName: "MAFIA",
        citizenTeamName: "CITIZENS",
        winnerMsgMafia: "The Mafia has successfully outnumbered or matched the citizens.",
        winnerMsgCitizens: "All members of the Mafia have been eliminated from the town.",
        gameSummary: "Game Summary",
        btnPlayAgain: "Play Again",
        btnReturnHome: "Return Home",
        settingsTitle: "Game Settings",
        settingsLang: "Language",
        settingsTimer: "Discussion Timer",
        settingsSpeed: "Animations Speed",
        settingsMusic: "Enable Background Music",
        settingsSfx: "Enable Sound Effects",
        settingsDark: "Neon Dark Theme",
        historyTitle: "Game History",
        thDate: "Date & Time",
        thRoom: "Room",
        thPlayers: "Players",
        thWinner: "Winner",
        thActions: "Details",
        txtNoHistory: "No games played yet. Let's start!",
        matchDetailsTitle: "Match Details",
        howToPlayModalTitle: "How to Play SVT Mafia",
        howToPlayText: `<h3>Objective</h3>
        <p><strong>Citizens:</strong> Find and eliminate all Mafia members.</p>
        <p><strong>Mafia:</strong> Outnumber or match the Citizens without getting caught.</p>
        <br>
        <h3>Roles</h3>
        <p>🔴 <strong>Mafia:</strong> Secretly selects a player to eliminate each night.</p>
        <p>🔵 <strong>Detective:</strong> Investigates one player's role identity each night.</p>
        <p>🟢 <strong>Doctor:</strong> Protects one player from elimination each night.</p>
        <p>⚪ <strong>Citizen:</strong> Participates in daytime discussions and voting.</p>
        <br>
        <h3>Game Phases</h3>
        <p>⏳ <strong>Night Phase:</strong> The Mafia, Detective, and Doctor wake up sequentially to perform their secret actions.</p>
        <p>☀️ <strong>Day Phase:</strong> The town learns the night's outcome, discusses suspicions, and votes to eliminate a suspected Mafia member.</p>`
    },
    es: {
        gameTitle: "SVT MAFIA",
        gameSubtitle: "EDICIÓN SEVENTEEN",
        gameDesc: "Un asistente digital inmersivo para el clásico juego de confianza, engaño y supervivencia temático de SEVENTEEN (SVT). ¡Juega con amigos en la sala o sincroniza en múltiples pestañas del navegador!",
        btnStartHost: "Iniciar Juego (Host)",
        btnJoinRoom: "Unirse a Sala",
        btnHowToPlay: "Cómo Jugar",
        createRoomTitle: "Crear una Sala",
        roomName: "Nombre de la Sala",
        hostName: "Nombre del Host",
        targetPlayers: "Jugadores (4 - 15)",
        btnBack: "Atrás",
        btnCreate: "Crear Sala",
        joinRoomTitle: "Unirse a una Sala",
        yourName: "Tu Nombre",
        roomCode: "Código de la Sala",
        btnJoin: "Unirse al Juego",
        lobbyTitle: "Sala: ",
        codeLabel: "Código: ",
        joinedPlayers: "Jugadores Unidos",
        lobbyControls: "Modo de Juego y Opciones",
        optPassPlay: "Pasar y Jugar",
        descPassPlay: "Jueguen juntos en este único dispositivo pasándolo de mano en mano.",
        optMultiTab: "Sincronizar Pestañas",
        descMultiTab: "Abre otras pestañas y únete a este código para jugar en pantallas separadas.",
        addFriend: "Añadir Amigo a la Sala",
        btnLeave: "Salir de la Sala",
        btnStartGame: "Iniciar Juego",
        roleAssignment: "Asignación de Roles",
        revealYourTurn: "¡Hola {name}, es tu turno!",
        revealPrompt: "Confirma que estás solo y haz clic en el botón para ver tu rol secreto.",
        btnRevealRole: "Revelar Mi Rol",
        roleAlignment: "Alineación: {align}",
        btnHideRole: "Ocultar Rol y Continuar",
        mafiaPartners: "Tus Compañeros de la Mafia:",
        nightPhase: "FASE NOCTURNA",
        nightFalls: "Cae la Noche...",
        nightDesc: "El pueblo se duerme y los roles activos se despiertan para realizar sus tareas en secreto.",
        asleepTitle: "Estás dormido...",
        asleepDesc: "Espera a que los roles activos (Mafia, Detective, Doctor) completen sus acciones nocturnas.",
        mafiaInstruction: "Turno de la Mafia: Selecciona un objetivo",
        mafiaDesc: "Elige a un jugador para eliminar esta noche.",
        detectiveInstruction: "Turno del Detective: Selecciona un sospechoso",
        detectiveDesc: "Elige a un jugador para investigar su alineación.",
        doctorInstruction: "Turno del Doctor: Selecciona un paciente",
        doctorDesc: "Elige a un jugador para proteger de la Mafia.",
        citizenInstruction: "Turno de los Ciudadanos: Cierren los ojos",
        citizenDesc: "Duerme bien y espera a la mañana.",
        passTo: "Pasa el dispositivo a: {name}",
        passRevealDesc: "Asegúrate de que otros no puedan ver la pantalla, luego presiona revelar para proceder con tu acción nocturna.",
        wakeUp: "Despertar",
        selectPlayer: "Selecciona un Jugador:",
        investigateResult: "Resultado de la Investigación",
        innocentResult: "El jugador es INOCENTE.",
        mafiaResult: "¡El jugador es de la MAFIA!",
        btnConfirm: "Confirmar Decisión",
        dayPhase: "FASE DIURNA",
        dayBreaks: "Amanece...",
        dayDesc: "El pueblo se despierta para discutir los acontecimientos de la noche anterior.",
        nightReport: "Informe Nocturno:",
        noOneDied: "¡El Doctor estuvo alerta! Nadie murió anoche.",
        playerDied: "¡{name} fue eliminado por la Mafia anoche!",
        discussionTimer: "Temporizador de Discusión",
        skipDiscussion: "Saltar Discusión",
        remainingCitizens: "Ciudadanos Restantes",
        votingPhase: "FASE DE VOTACIÓN",
        votingTitle: "Desvanecer al Impostor",
        votingDesc: "Vota por el jugador que sospeches que pertenece a la Mafia. Está prohibido votar por uno mismo.",
        tieVote: "¡SE DETECTÓ UN EMPATE!",
        revoteMsg: "Se produjo un empate entre los jugadores empatados. Se activa una nueva votación.",
        voterCast: "{name}, emite tu voto",
        whoIsMafia: "¿Quién es de la Mafia?",
        votePrivacyDesc: "Asegúrate de que otros no puedan ver tu voto, luego haz clic abajo para revelar los candidatos.",
        btnCastVote: "Emitir Voto",
        btnConfirmVote: "Confirmar Voto",
        eliminationResult: "Resultado de la Eliminación",
        verdictOut: "¡ha sido expulsado por el pueblo!",
        theirRoleWas: "SU ROL ERA",
        btnProceed: "Continuar",
        winnerTitle: "¡GANAN LOS {team}!",
        mafiaTeamName: "MAFIA",
        citizenTeamName: "CIUDADANOS",
        winnerMsgMafia: "La Mafia ha superado o igualado con éxito en número a los ciudadanos.",
        winnerMsgCitizens: "Todos los miembros de la Mafia han sido eliminados del pueblo.",
        gameSummary: "Resumen del Juego",
        btnPlayAgain: "Jugar de Nuevo",
        btnReturnHome: "Volver al Inicio",
        settingsTitle: "Configuración del Juego",
        settingsLang: "Idioma",
        settingsTimer: "Temporizador de Discusión",
        settingsSpeed: "Velocidad de Animaciones",
        settingsMusic: "Música de Fondo",
        settingsSfx: "Efectos de Sonido",
        settingsDark: "Tema Neon Oscuro",
        historyTitle: "Historial de Juegos",
        thDate: "Fecha y Hora",
        thRoom: "Sala",
        thPlayers: "Jugadores",
        thWinner: "Ganador",
        thActions: "Detalles",
        txtNoHistory: "¡Aún no hay juegos jugados! ¡Empecemos!",
        matchDetailsTitle: "Detalles del Partido",
        howToPlayModalTitle: "Cómo jugar a SVT Mafia",
        howToPlayText: `<h3>Objetivo</h3>
        <p><strong>Ciudadanos:</strong> Encontrar y eliminar a todos los miembros de la Mafia.</p>
        <p><strong>Mafia:</strong> Superar o igualar a los Ciudadanos sin ser descubiertos.</p>
        <br>
        <h3>Roles</h3>
        <p>🔴 <strong>Mafia:</strong> Selecciona en secreto a un jugador para eliminar cada noche.</p>
        <p>🔵 <strong>Detective:</strong> Investiga la alineación de un jugador cada noche.</p>
        <p>🟢 <strong>Doctor:</strong> Protege a un jugador de la eliminación cada noche.</p>
        <p>⚪ <strong>Ciudadano:</strong> Participa en las discusiones y votaciones diurnas.</p>`
    },
    fr: {
        gameTitle: "SVT MAFIA",
        gameSubtitle: "ÉDITION SEVENTEEN",
        gameDesc: "Un assistant numérique immersif pour le jeu classique de confiance, de tromperie et de survie sur le thème de SEVENTEEN (SVT). Jouez avec des amis dans la pièce ou synchronisez sur plusieurs onglets !",
        btnStartHost: "Lancer la Partie (Hôte)",
        btnJoinRoom: "Rejoindre une Salle",
        btnHowToPlay: "Comment Jouer",
        createRoomTitle: "Créer une Salle",
        roomName: "Nom de la Salle",
        hostName: "Nom de l'Hôte",
        targetPlayers: "Nombre de Joueurs (4 - 15)",
        btnBack: "Retour",
        btnCreate: "Créer la Salle",
        joinRoomTitle: "Rejoindre une Salle",
        yourName: "Votre Nom",
        roomCode: "Code de la Salle",
        btnJoin: "Rejoindre le Jeu",
        lobbyTitle: "Salon : ",
        codeLabel: "Code : ",
        joinedPlayers: "Joueurs Connectés",
        lobbyControls: "Options & Mode de Jeu",
        optPassPlay: "Passer & Jouer",
        descPassPlay: "Jouez ensemble sur cet unique appareil en le faisant passer à tour de rôle.",
        optMultiTab: "Synchro Multi-Onglet",
        descMultiTab: "Ouvrez d'autres onglets et rejoignez ce code pour jouer sur des écrans séparés.",
        addFriend: "Ajouter un Ami au Salon",
        btnLeave: "Quitter le Salon",
        btnStartGame: "Démarrer le Jeu",
        roleAssignment: "Attribution des Rôles",
        revealYourTurn: "Hé {name}, c'est votre tour !",
        revealPrompt: "Confirmez que vous êtes seul et cliquez sur le bouton pour voir votre rôle secret.",
        btnRevealRole: "Révéler Mon Rôle",
        roleAlignment: "Alignement: {align}",
        btnHideRole: "Masquer le Rôle & Continuer",
        mafiaPartners: "Vos Partenaires de la Mafia :",
        nightPhase: "PHASE DE LA NUIT",
        nightFalls: "La Nuit Tombe...",
        nightDesc: "La ville s'endort et les rôles actifs se réveillent pour accomplir leurs devoirs en secret.",
        asleepTitle: "Vous dormez...",
        asleepDesc: "Attendez que les rôles actifs (Mafia, Détective, Docteur) terminent leurs actions nocturnes.",
        mafiaInstruction: "Tour de la Mafia : Sélectionnez une cible",
        mafiaDesc: "Choisissez un joueur à éliminer ce soir.",
        detectiveInstruction: "Tour du Détective : Sélectionnez un suspect",
        detectiveDesc: "Choisissez un joueur pour enquêter sur son alignement.",
        doctorInstruction: "Tour du Docteur : Sélectionnez un patient",
        doctorDesc: "Choisissez un joueur à protéger de la Mafia.",
        citizenInstruction: "Tour des Citoyens : Fermez les yeux",
        citizenDesc: "Dormez bien et attendez le matin.",
        passTo: "Passer l'appareil à : {name}",
        passRevealDesc: "Assurez-vous que personne d'autre ne regarde l'écran, puis appuyez sur révéler.",
        wakeUp: "Se Réveiller",
        selectPlayer: "Sélectionnez un Joueur :",
        investigateResult: "Résultat de l'Enquête",
        innocentResult: "Le joueur est INNOCENT.",
        mafiaResult: "Le joueur est dans la MAFIA !",
        btnConfirm: "Confirmer la Décision",
        dayPhase: "PHASE DU JOUR",
        dayBreaks: "Le Jour se Lève...",
        dayDesc: "La ville se réveille pour discuter des événements de la nuit dernière.",
        nightReport: "Rapport de la Nuit :",
        noOneDied: "Le Docteur était vigilant ! Personne n'est mort cette nuit.",
        playerDied: "{name} a été éliminé par la Mafia cette nuit !",
        discussionTimer: "Minuteur de Discussion",
        skipDiscussion: "Passer la Discussion",
        remainingCitizens: "Citoyens Restants",
        votingPhase: "PHASE DE VOTE",
        votingTitle: "Éliminer l'Imposteur",
        votingDesc: "Votez pour le joueur suspecté d'être dans la Mafia. Le vote contre soi-même est interdit.",
        tieVote: "ÉGALITÉ DÉTECTÉE !",
        revoteMsg: "Une égalité s'est produite. Un second tour de vote est lancé entre les joueurs à égalité.",
        voterCast: "{name}, votez",
        whoIsMafia: "Qui est dans la Mafia ?",
        votePrivacyDesc: "Assurez-vous que personne ne regarde votre vote, puis cliquez pour révéler les candidats.",
        btnCastVote: "Voter",
        btnConfirmVote: "Confirmer le Vote",
        eliminationResult: "Résultat de l'Élimination",
        verdictOut: "a été éliminé par la ville !",
        theirRoleWas: "SON RÔLE ÉTAIT",
        btnProceed: "Continuer",
        winnerTitle: "VICTOIRE DES {team} !",
        mafiaTeamName: "MAFIA",
        citizenTeamName: "CITOYENS",
        winnerMsgMafia: "La Mafia est parvenue à égaler ou dépasser le nombre de citoyens.",
        winnerMsgCitizens: "Tous les membres de la Mafia ont été éliminés de la ville.",
        gameSummary: "Résumé de la Partie",
        btnPlayAgain: "Rejouer",
        btnReturnHome: "Retour à l'Accueil",
        settingsTitle: "Paramètres du Jeu",
        settingsLang: "Langue",
        settingsTimer: "Minuteur de Discussion",
        settingsSpeed: "Vitesse d'Animation",
        settingsMusic: "Musique de Fond",
        settingsSfx: "Effets Sonores",
        settingsDark: "Thème Néon Sombre",
        historyTitle: "Historique des Parties",
        thDate: "Date & Heure",
        thRoom: "Salle",
        thPlayers: "Joueurs",
        thWinner: "Gagnant",
        thActions: "Détails",
        txtNoHistory: "Aucune partie jouée pour le moment. Commençons !",
        matchDetailsTitle: "Détails du Match",
        howToPlayModalTitle: "Comment Jouer à SVT Mafia",
        howToPlayText: `<h3>Objectif</h3>
        <p><strong>Citoyens :</strong> Trouver et éliminer tous les membres de la Mafia.</p>
        <p><strong>Mafia :</strong> Égaler ou dépasser le nombre de Citoyens sans se faire attraper.</p>
        <br>
        <h3>Rôles</h3>
        <p>🔴 <strong>Mafia :</strong> Sélectionne secrètement un joueur à éliminer chaque nuit.</p>
        <p>🔵 <strong>Détective :</strong> Enquête sur l'alignement d'un joueur chaque nuit.</p>
        <p>🟢 <strong>Docteur :</strong> Protège un joueur de l'élimination chaque nuit.</p>
        <p>⚪ <strong>Citoyen :</strong> Participe aux discussions et votes de jour.</p>`
    },
    de: {
        gameTitle: "SVT MAFIA",
        gameSubtitle: "SEVENTEEN EDITION",
        gameDesc: "Ein immersiver digitaler Begleiter für das klassische Spiel um Vertrauen, Verrat und Überleben im SEVENTEEN (SVT) Design. Spiele mit Freunden im Raum oder synchronisiere über mehrere Browser-Tabs!",
        btnStartHost: "Spiel Starten (Host)",
        btnJoinRoom: "Raum Beitreten",
        btnHowToPlay: "Spielanleitung",
        createRoomTitle: "Raum Erstellen",
        roomName: "Raum Name",
        hostName: "Host Name",
        targetPlayers: "Ziel-Spielerzahl (4 - 15)",
        btnBack: "Zurück",
        btnCreate: "Raum Erstellen",
        joinRoomTitle: "Raum Beitreten",
        yourName: "Dein Name",
        roomCode: "Raum Code",
        btnJoin: "Spiel Beitreten",
        lobbyTitle: "Lobby: ",
        codeLabel: "Code: ",
        joinedPlayers: "Beigetretene Spieler",
        lobbyControls: "Spielmodus & Optionen",
        optPassPlay: "Pass & Play",
        descPassPlay: "Spielt gemeinsam auf diesem einzelnen Gerät, indem ihr es weitergebt.",
        optMultiTab: "Multi-Tab Synch",
        descMultiTab: "Öffne andere Tabs und tritt diesem Raum-Code bei, um auf getrennten Bildschirmen zu spielen.",
        addFriend: "Freund zur Lobby hinzufügen",
        btnLeave: "Raum Verlassen",
        btnStartGame: "Spiel Starten",
        roleAssignment: "Rollenverteilung",
        revealYourTurn: "Hey {name}, du bist an der Reihe!",
        revealPrompt: "Stelle sicher, dass du alleine bist, und klicke auf den Button, um deine geheime Rolle zu sehen.",
        btnRevealRole: "Meine Rolle Anzeigen",
        roleAlignment: "Gesinnung: {align}",
        btnHideRole: "Verbergen & Weitergehen",
        mafiaPartners: "Deine Mafia-Partner:",
        nightPhase: "NACHTPHASE",
        nightFalls: "Die Nacht bricht an...",
        nightDesc: "Die Stadt schläft ein und die aktiven Rollen wachen auf, um ihre Pflichten im Geheimen zu erfüllen.",
        asleepTitle: "Du schläfst...",
        asleepDesc: "Warte, bis die aktiven Rollen (Mafia, Detektiv, Arzt) ihre nächtlichen Aktionen beendet haben.",
        mafiaInstruction: "Mafia am Zug: Wähle ein Opfer",
        mafiaDesc: "Wähle einen Spieler, der heute Nacht eliminiert werden soll.",
        detectiveInstruction: "Detektiv am Zug: Wähle einen Verdächtigen",
        detectiveDesc: "Wähle einen Spieler, um seine Gesinnung zu untersuchen.",
        doctorInstruction: "Arzt am Zug: Wähle einen Patienten",
        doctorDesc: "Wähle einen Spieler, um ihn vor der Mafia zu schützen.",
        citizenInstruction: "Bürger am Zug: Augen schließen",
        citizenDesc: "Schlaf gut und warte auf den Morgen.",
        passTo: "Gib das Gerät weiter an: {name}",
        passRevealDesc: "Stelle sicher, dass niemand auf den Bildschirm schauen kann, und drücke dann auf Aufdecken.",
        wakeUp: "Aufwachen",
        selectPlayer: "Wähle einen Spieler:",
        investigateResult: "Untersuchungsergebnis",
        innocentResult: "Der Spieler ist UNSCHULDIG.",
        mafiaResult: "Der Spieler gehört zur MAFIA!",
        btnConfirm: "Entscheidung Bestätigen",
        dayPhase: "TAGPHASE",
        dayBreaks: "Der Tag bricht an...",
        dayDesc: "Die Stadt wacht auf, um die Ereignisse der letzten Nacht zu besprechen.",
        nightReport: "Bericht der Nacht:",
        noOneDied: "Der Arzt war wachsam! Niemand ist letzte Nacht gestorben.",
        playerDied: "{name} wurde letzte Nacht von der Mafia eliminiert!",
        discussionTimer: "Diskussionstimer",
        skipDiscussion: "Diskussion überspringen",
        remainingCitizens: "Verbleibende Bürger",
        votingPhase: "ABSTIMMUNGSPHASE",
        votingTitle: "Verbanne den Verräter",
        votingDesc: "Stimme für den Spieler ab, den du verdächtigst, zur Mafia zu gehören. Selbstwahl ist verboten.",
        tieVote: "STIMMENGLEICHHEIT ERKANNT!",
        revoteMsg: "Es gab Gleichstand. Eine Stichwahl zwischen den betroffenen Spielern wird eingeleitet.",
        voterCast: "{name}, gib deine Stimme ab",
        whoIsMafia: "Wer gehört zur Mafia?",
        votePrivacyDesc: "Stelle sicher, dass niemand deine Stimme sieht, und klicke dann unten auf Aufdecken.",
        btnCastVote: "Stimme Abgeben",
        btnConfirmVote: "Stimme Bestätigen",
        eliminationResult: "Eliminierungsergebnis",
        verdictOut: "wurde von der Stadt verbannt!",
        theirRoleWas: "DIE ROLLE WAR",
        btnProceed: "Weiter",
        winnerTitle: "{team} GEWINNEN!",
        mafiaTeamName: "MAFIA",
        citizenTeamName: "BÜRGER",
        winnerMsgMafia: "Der Mafia ist es gelungen, die Bürger zahlenmäßig einzuholen oder zu übertreffen.",
        winnerMsgCitizens: "Alle Mitglieder der Mafia wurden aus der Stadt eliminiert.",
        gameSummary: "Spielzusammenfassung",
        btnPlayAgain: "Nochmal Spielen",
        btnReturnHome: "Zurück zum Hauptmenü",
        settingsTitle: "Spieleinstellungen",
        settingsLang: "Sprache",
        settingsTimer: "Diskussionstimer",
        settingsSpeed: "Animationsgeschwindigkeit",
        settingsMusic: "Hintergrundmusik",
        settingsSfx: "Soundeffekte",
        settingsDark: "Neon Dunkles Theme",
        historyTitle: "Spielverlauf",
        thDate: "Datum & Uhrzeit",
        thRoom: "Raum",
        thPlayers: "Spieler",
        thWinner: "Gewinner",
        thActions: "Details",
        txtNoHistory: "Noch keine Spiele gespielt. Lasst uns anfangen!",
        matchDetailsTitle: "Spiel-Details",
        howToPlayModalTitle: "Wie man SVT Mafia spielt",
        howToPlayText: `<h3>Ziel</h3>
        <p><strong>Bürger:</strong> Findet und eliminiert alle Mafia-Mitglieder.</p>
        <p><strong>Mafia:</strong> Übertrefft die Bürger zahlenmäßig oder gleicht euch an, ohne erwischt zu werden.</p>
        <br>
        <h3>Rollen</h3>
        <p>🔴 <strong>Mafia:</strong> Wählt jede Nacht heimlich einen Spieler aus, der eliminiert wird.</p>
        <p>🔵 <strong>Detektiv:</strong> Untersucht jede Nacht die Gesinnung eines Spielers.</p>
        <p>🟢 <strong>Arzt:</strong> Schützt jede Nacht einen Spieler vor der Eliminierung.</p>
        <p>⚪ <strong>Bürger:</strong> Nimmt an den Diskussionen und Abstimmungen am Tag teil.</p>`
    },
    it: {
        gameTitle: "SVT MAFIA",
        gameSubtitle: "EDIZIONE SEVENTEEN",
        gameDesc: "Un assistente digitale immersivo per il classico gioco di fiducia, inganno e sopravvivenza a tema SEVENTEEN (SVT). Gioca con gli amici nella stessa stanza o sincronizzati su più schede del browser!",
        btnStartHost: "Avvia Gioco (Host)",
        btnJoinRoom: "Entra in Stanza",
        btnHowToPlay: "Come Giocare",
        createRoomTitle: "Crea una Stanza",
        roomName: "Nome Stanza",
        hostName: "Nome Host",
        targetPlayers: "Giocatori Obiettivo (4 - 15)",
        btnBack: "Indietro",
        btnCreate: "Crea Stanza",
        joinRoomTitle: "Entra in una Stanza",
        yourName: "Il Tuo Nome",
        roomCode: "Codice Stanza",
        btnJoin: "Entra nel Gioco",
        lobbyTitle: "Lobby: ",
        codeLabel: "Codice: ",
        joinedPlayers: "Giocatori Uniti",
        lobbyControls: "Opzioni & Modalità di Gioco",
        optPassPlay: "Passa & Gioca",
        descPassPlay: "Giocate insieme su questo singolo dispositivo passandovelo a turno.",
        optMultiTab: "Sincronizza Schede",
        descMultiTab: "Apri altre schede e inserisci questo codice per giocare su schermi diversi.",
        addFriend: "Aggiungi Amico alla Lobby",
        btnLeave: "Lascia la Stanza",
        btnStartGame: "Inizia Gioco",
        roleAssignment: "Assegnazione Ruoli",
        revealYourTurn: "Ehi {name}, è il tuo turno!",
        revealPrompt: "Conferma di essere solo e clicca sul pulsante per vedere il tuo ruolo segreto.",
        btnRevealRole: "Rivelare il Mio Ruolo",
        roleAlignment: "Allineamento: {align}",
        btnHideRole: "Nascondi Ruolo & Continua",
        mafiaPartners: "I tuoi compagni della Mafia:",
        nightPhase: "FASE NOTTURNA",
        nightFalls: "Cade la Notte...",
        nightDesc: "La città si addormenta e i ruoli attivi si svegliano per compiere i loro doveri in segreto.",
        asleepTitle: "Stai dormendo...",
        asleepDesc: "Attendi che i ruoli attivi (Mafia, Detective, Dottore) completino le loro azioni notturne.",
        mafiaInstruction: "Turno della Mafia: Seleziona un bersaglio",
        mafiaDesc: "Scegli un giocatore da eliminare stanotte.",
        detectiveInstruction: "Turno del Detective: Seleziona un sospetto",
        detectiveDesc: "Scegli un giocatore per indagare sul suo allineamento.",
        doctorInstruction: "Turno del Dottore: Seleziona un paziente",
        doctorDesc: "Scegli un giocatore da proteggere dalla Mafia.",
        citizenInstruction: "Turno dei Cittadini: Chiudete gli occhi",
        citizenDesc: "Dormi bene e attendi il mattino.",
        passTo: "Passa il dispositivo a: {name}",
        passRevealDesc: "Assicurati che gli altri non possano vedere lo schermo, quindi premi rivela per procedere.",
        wakeUp: "Svegliati",
        selectPlayer: "Seleziona un Giocatore:",
        investigateResult: "Risultato Investigazione",
        innocentResult: "Il giocatore è INNOCENTE.",
        mafiaResult: "Il giocatore fa parte della MAFIA!",
        btnConfirm: "Conferma Decisione",
        dayPhase: "FASE DIURNA",
        dayBreaks: "Sorge il Sole...",
        dayDesc: "La città si sveglia per discutere gli eventi della notte passata.",
        nightReport: "Rapporto Notturno:",
        noOneDied: "Il Dottore era all'erta! Nessuno è morto stanotte.",
        playerDied: "Stanotte {name} è stato eliminato dalla Mafia!",
        discussionTimer: "Timer Discussione",
        skipDiscussion: "Salta Discussione",
        remainingCitizens: "Cittadini Rimasti",
        votingPhase: "FASE DI VOTAZIONE",
        votingTitle: "Bandisci l'Impostore",
        votingDesc: "Vota per il giocatore che sospetti far parte della Mafia. È vietato votare per se stessi.",
        tieVote: "RILEVATO PAREGGIO!",
        revoteMsg: "Si è verificato un pareggio. Viene avviato un ballottaggio tra i candidati in parità.",
        voterCast: "{name}, esprimi il tuo voto",
        whoIsMafia: "Chi è della Mafia?",
        votePrivacyDesc: "Assicurati che gli altri non vedano il tuo voto, quindi premi sotto per rivelare i candidati.",
        btnCastVote: "Vota",
        btnConfirmVote: "Conferma Voto",
        eliminationResult: "Risultato Eliminazione",
        verdictOut: "è stato esiliato dalla città!",
        theirRoleWas: "IL SUO RUOLO ERA",
        btnProceed: "Procedi",
        winnerTitle: "VINCONO I {team}!",
        mafiaTeamName: "MAFIA",
        citizenTeamName: "CITTADINI",
        winnerMsgMafia: "La Mafia ha superato o eguagliato il numero di cittadini.",
        winnerMsgCitizens: "Tutti i membri della Mafia sono stati eliminati dalla città.",
        gameSummary: "Riepilogo Gioco",
        btnPlayAgain: "Gioca Ancora",
        btnReturnHome: "Ritorna alla Home",
        settingsTitle: "Impostazioni Gioco",
        settingsLang: "Lingua",
        settingsTimer: "Timer Discussione",
        settingsSpeed: "Velocità Animazioni",
        settingsMusic: "Musica di Sottofondo",
        settingsSfx: "Effetti Sonori",
        settingsDark: "Tema Neon Scuro",
        historyTitle: "Cronologia Partite",
        thDate: "Data e Ora",
        thRoom: "Stanza",
        thPlayers: "Giocatori",
        thWinner: "Vincitore",
        thActions: "Dettagli",
        txtNoHistory: "Nessuna partita giocata. Iniziamo!",
        matchDetailsTitle: "Dettagli Match",
        howToPlayModalTitle: "Come Giocare a SVT Mafia",
        howToPlayText: `<h3>Obiettivo</h3>
        <p><strong>Cittadini:</strong> Trovare ed eliminare tutti i membri della Mafia.</p>
        <p><strong>Mafia:</strong> Raggiungere o superare il numero dei Cittadini senza farsi scoprire.</p>
        <br>
        <h3>Ruoli</h3>
        <p>🔴 <strong>Mafia:</strong> Seleziona segretamente un giocatore da eliminare ogni notte.</p>
        <p>🔵 <strong>Detective:</strong> Indaga sull'allineamento di un giocatore ogni notte.</p>
        <p>🟢 <strong>Dottore:</strong> Protegge un giocatore dall'eliminazione ogni notte.</p>
        <p>⚪ <strong>Cittadino:</strong> Partecipa alle discussioni e alle votazioni diurne.</p>`
    }
};

// --- 2. AMBIENT BG PARTICLES ENGINE ---
const AmbientParticles = {
    canvas: null,
    ctx: null,
    particles: [],
    active: true,
    animationFrameId: null,

    init() {
        this.canvas = document.getElementById('bg-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this.resize();
        window.addEventListener('resize', () => this.resize());
        
        // Spawn particles
        this.particles = [];
        const count = window.innerWidth < 768 ? 20 : 50;
        for (let i = 0; i < count; i++) {
            this.particles.push(this.createParticle());
        }
        this.animate();
    },

    resize() {
        if (!this.canvas) return;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },

    createParticle() {
        const colors = ['rgba(188, 52, 250, 0.15)', 'rgba(0, 240, 255, 0.15)', 'rgba(255, 0, 85, 0.08)'];
        return {
            x: Math.random() * this.canvas.width,
            y: Math.random() * this.canvas.height,
            radius: Math.random() * 60 + 30,
            vx: Math.random() * 0.4 - 0.2,
            vy: Math.random() * 0.4 - 0.2,
            color: colors[Math.floor(Math.random() * colors.length)]
        };
    },

    animate() {
        if (!this.active || !this.ctx) return;
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        // Render subtle slow drifting glowing blobs
        this.particles.forEach(p => {
            p.x += p.vx;
            p.y += p.vy;

            // Bounce boundary check
            if (p.x < -p.radius) p.x = this.canvas.width + p.radius;
            if (p.x > this.canvas.width + p.radius) p.x = -p.radius;
            if (p.y < -p.radius) p.y = this.canvas.height + p.radius;
            if (p.y > this.canvas.height + p.radius) p.y = -p.radius;

            this.ctx.beginPath();
            const grad = this.ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius);
            grad.addColorStop(0, p.color);
            grad.addColorStop(1, 'rgba(0,0,0,0)');
            this.ctx.fillStyle = grad;
            this.ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
            this.ctx.fill();
        });

        this.animationFrameId = requestAnimationFrame(() => this.animate());
    }
};

// --- 3. SEVENTEEN MEMBERS & DYNAMIC SVG AVATAR GENERATOR ---
const SeventeenMembers = [
    { name: "S.Coups", color: "#ff0055", hair: "curly-black", acc: "headphones", desc: "Leader & Rapper" },
    { name: "Jeonghan", color: "#00f0ff", hair: "blonde-long", acc: "halo", desc: "Vocalist & Visual" },
    { name: "Joshua", color: "#bc34fa", hair: "brown-parted", acc: "earring", desc: "Vocalist" },
    { name: "Jun", color: "#ffcc00", hair: "blonde-messy", acc: "visor", desc: "Dancer & Actor" },
    { name: "Hoshi", color: "#ffea00", hair: "orange-spiky", acc: "tiger", desc: "Performance Leader" },
    { name: "Wonwoo", color: "#39ff14", hair: "black-straight", acc: "glasses", desc: "Rapper" },
    { name: "Woozi", color: "#ff00ff", hair: "pink-crop", acc: "headset", desc: "Producer & Vocalist" },
    { name: "DK", color: "#ff8c00", hair: "black-short", acc: "smile", desc: "Main Vocalist" },
    { name: "Mingyu", color: "#007aff", hair: "dark-brown", acc: "collar", desc: "Visual & Rapper" },
    { name: "The8", color: "#a817f5", hair: "mullet", acc: "retro-glasses", desc: "Dancer & Artist" },
    { name: "Seungkwan", color: "#ff85ff", hair: "light-orange", acc: "mic", desc: "Main Vocalist" },
    { name: "Vernon", color: "#00c7be", hair: "light-brown", acc: "cap", desc: "Rapper" },
    { name: "Dino", color: "#a2845e", hair: "spiky-black", acc: "necklace", desc: "Main Dancer & Maknae" }
];

function generateSeventeenAvatar(index) {
    const member = SeventeenMembers[index] || SeventeenMembers[0];
    const color = member.color;
    
    // Hair style paths
    let hairSvg = '';
    switch (member.hair) {
        case 'curly-black':
            hairSvg = `<path d="M30 45 C30 30 40 25 50 28 C60 25 70 30 70 45 C65 42 60 44 50 40 C40 44 35 42 30 45 Z" fill="#18181a" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'blonde-long':
            hairSvg = `<path d="M28 45 C25 55 22 68 25 78 C28 78 30 65 30 55" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
                       <path d="M72 45 C75 55 78 68 75 78 C72 78 70 65 70 55" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round"/>
                       <path d="M30 45 C32 30 42 22 50 24 C58 22 68 30 70 45 Z" fill="#ebcf82" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'brown-parted':
            hairSvg = `<path d="M29 45 C29 30 40 24 50 28 C60 24 71 30 71 45" fill="none" stroke="#6b4c35" stroke-width="6" stroke-linecap="round"/>`;
            break;
        case 'blonde-messy':
            hairSvg = `<path d="M28 45 C28 32 40 24 50 27 C60 24 72 32 72 45" fill="none" stroke="#f4e3b1" stroke-width="5" stroke-dasharray="7,3" stroke-linecap="round"/>`;
            break;
        case 'orange-spiky':
            hairSvg = `<path d="M28 46 L33 32 L40 38 L50 22 L60 38 L67 32 L72 46" fill="none" stroke="#ff8c00" stroke-width="3" stroke-linejoin="round" stroke-linecap="round"/>`;
            break;
        case 'black-straight':
            hairSvg = `<path d="M30 46 C30 33 40 27 50 27 C60 27 70 33 70 46 Z" fill="#111" stroke="${color}" stroke-width="1.5"/>
                       <path d="M32 46 C40 40 45 42 50 42 C55 42 60 40 68 46" fill="none" stroke="${color}" stroke-width="2"/>`;
            break;
        case 'pink-crop':
            hairSvg = `<path d="M30 46 C30 33 40 25 50 25 C60 25 70 33 70 46 Z" fill="#ffb7d2" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'black-short':
            hairSvg = `<path d="M30 46 C31 35 41 29 50 29 C59 29 69 35 70 46 Z" fill="#18181a" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'dark-brown':
            hairSvg = `<path d="M29 45 C32 30 42 24 50 26 C58 24 68 30 71 45" fill="none" stroke="#4a3121" stroke-width="6" stroke-linecap="round"/>`;
            break;
        case 'mullet':
            hairSvg = `<path d="M28 58 C24 68 26 78 30 83 M72 58 C76 68 74 78 70 83" fill="none" stroke="#222" stroke-width="3" stroke-linecap="round"/>
                       <path d="M30 45 C30 30 40 25 50 27 C60 25 70 45 70 45 Z" fill="#222" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'light-orange':
            hairSvg = `<path d="M29 45 C29 32 40 25 50 28 C60 25 71 32 71 45" fill="none" stroke="#ffaa66" stroke-width="6" stroke-linecap="round"/>`;
            break;
        case 'light-brown':
            hairSvg = `<path d="M29 45 C29 33 40 27 50 29 C60 27 71 33 71 45" fill="none" stroke="#8c6a5c" stroke-width="6" stroke-linecap="round"/>`;
            break;
        case 'spiky-black':
            hairSvg = `<path d="M28 45 L32 28 L40 32 L50 18 L60 32 L68 28 L72 45" fill="none" stroke="#111" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>`;
            break;
    }

    // Accessories SVG parts
    let accSvg = '';
    switch (member.acc) {
        case 'headphones':
            accSvg = `<rect x="23" y="46" width="6" height="12" rx="2" fill="none" stroke="${color}" stroke-width="2"/>
                      <rect x="71" y="46" width="6" height="12" rx="2" fill="none" stroke="${color}" stroke-width="2"/>
                      <path d="M29 46 C33 28 67 28 71 46" fill="none" stroke="${color}" stroke-width="2"/>`;
            break;
        case 'halo':
            accSvg = `<ellipse cx="50" cy="18" rx="16" ry="4" fill="none" stroke="${color}" stroke-width="2" stroke-dasharray="4,2"/>`;
            break;
        case 'earring':
            accSvg = `<line x1="31" y1="58" x2="31" y2="66" stroke="${color}" stroke-width="2"/>
                      <polygon points="29,66 33,66 31,70" fill="${color}"/>`;
            break;
        case 'visor':
            accSvg = `<rect x="33" y="38" width="34" height="6" rx="2" fill="rgba(0, 240, 255, 0.4)" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'tiger':
            accSvg = `<line x1="34" y1="52" x2="39" y2="52" stroke="${color}" stroke-width="1.5"/>
                      <line x1="66" y1="52" x2="61" y2="52" stroke="${color}" stroke-width="1.5"/>
                      <circle cx="50" cy="62" r="3" fill="${color}"/>`;
            break;
        case 'glasses':
            accSvg = `<circle cx="42" cy="51" r="7" fill="none" stroke="${color}" stroke-width="1.5"/>
                      <circle cx="58" cy="51" r="7" fill="none" stroke="${color}" stroke-width="1.5"/>
                      <line x1="49" y1="51" x2="51" y2="51" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'headset':
            accSvg = `<circle cx="70" cy="52" r="4" fill="${color}"/>
                      <path d="M70 52 Q62 60 55 60" fill="none" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'smile':
            accSvg = `<path d="M43 62 Q50 67 57 62" fill="none" stroke="${color}" stroke-width="2"/>`;
            break;
        case 'collar':
            accSvg = `<path d="M32 72 L68 72 L64 80 L36 80 Z" fill="none" stroke="${color}" stroke-width="2"/>`;
            break;
        case 'retro-glasses':
            accSvg = `<rect x="36" y="47" width="10" height="8" rx="2" fill="none" stroke="${color}" stroke-width="1.5"/>
                      <rect x="54" y="47" width="10" height="8" rx="2" fill="none" stroke="${color}" stroke-width="1.5"/>
                      <line x1="46" y1="51" x2="54" y2="51" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'mic':
            accSvg = `<circle cx="34" cy="62" r="3" fill="${color}"/>
                      <line x1="34" y1="65" x2="34" y2="72" stroke="${color}" stroke-width="1.5"/>`;
            break;
        case 'cap':
            accSvg = `<path d="M32 30 L68 30 Q70 20 50 20 Q30 20 32 30 Z" fill="rgba(0, 240, 255, 0.1)" stroke="${color}" stroke-width="2"/>
                      <path d="M32 30 L16 34 L32 36 Z" fill="${color}"/>`;
            break;
        case 'necklace':
            accSvg = `<path d="M38 72 Q50 82 62 72" fill="none" stroke="${color}" stroke-width="2"/>`;
            break;
    }

    return `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <defs>
            <radialGradient id="seventeen-grad-${index}" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stop-color="${color}" stop-opacity="0.35"/>
                <stop offset="100%" stop-color="rgba(12, 13, 24, 0.95)"/>
            </radialGradient>
        </defs>
        
        <circle cx="50" cy="50" r="46" fill="url(#seventeen-grad-${index})" stroke="${color}" stroke-width="2"/>
        
        <!-- Shoulder outline -->
        <path d="M26 82 C30 74 38 70 50 70 C62 70 70 74 74 82" fill="none" stroke="${color}" stroke-width="2" stroke-linecap="round"/>
        
        <!-- Head Contour -->
        <ellipse cx="50" cy="52" rx="16" ry="20" fill="rgba(255, 255, 255, 0.08)" stroke="${color}" stroke-width="2"/>
        
        <!-- Eyes -->
        <line x1="43" y1="48" x2="45" y2="48" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="55" y1="48" x2="57" y2="48" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>
        
        <!-- Mouth -->
        <path d="M47 62 Q50 64 53 62" fill="none" stroke="${color}" stroke-width="1.5" stroke-linecap="round"/>
        
        ${hairSvg}
        ${accSvg}
        
        <!-- Name overlay label -->
        <rect x="22" y="82" width="56" height="12" rx="3" fill="rgba(12,13,24,0.95)" stroke="${color}" stroke-width="1"/>
        <text x="50" y="91" text-anchor="middle" font-family="'Orbitron', sans-serif" font-size="7" font-weight="700" fill="${color}">${member.name.toUpperCase()}</text>
    </svg>`;
}

function generatePlayerAvatar(name, seventeenIndex = null) {
    if (seventeenIndex !== null && seventeenIndex !== undefined && seventeenIndex >= 0) {
        return generateSeventeenAvatar(seventeenIndex);
    }
    
    // Fallback: Check if name is a Seventeen member
    const idx = SeventeenMembers.findIndex(m => m.name.toLowerCase() === name.toLowerCase());
    if (idx !== -1) {
        return generateSeventeenAvatar(idx);
    }
    
    // Generate deterministic values based on hash code of the player name for general guests
    let hash = 0;
    for (let i = 0; i < name.length; i++) {
        hash = name.charCodeAt(i) + ((hash << 5) - hash);
    }
    
    const colors = ['#bc34fa', '#00f0ff', '#ff0055', '#39ff14', '#ffea00', '#ff00ff'];
    const color = colors[Math.abs(hash) % colors.length];
    
    // Choose helmet style
    const styles = [
        `<rect x="30" y="32" width="40" height="36" rx="14" fill="none" stroke="${color}" stroke-width="3"/>
         <rect x="34" y="40" width="32" height="12" rx="6" fill="${color}" opacity="0.3"/>
         <line x1="34" y1="46" x2="66" y2="46" stroke="${color}" stroke-width="2"/>`,
        `<circle cx="50" cy="50" r="18" fill="none" stroke="${color}" stroke-width="3"/>
         <circle cx="42" cy="48" r="6" fill="${color}" opacity="0.6"/>
         <circle cx="58" cy="48" r="6" fill="${color}" opacity="0.6"/>
         <path d="M35 62 Q50 70 65 62" fill="none" stroke="${color}" stroke-width="2"/>`,
        `<polygon points="50,26 72,44 64,74 36,74 28,44" fill="none" stroke="${color}" stroke-width="3"/>
         <line x1="36" y1="46" x2="64" y2="46" stroke="${color}" stroke-width="2"/>
         <line x1="42" y1="60" x2="58" y2="60" stroke="${color}" stroke-width="2"/>`
    ];
    const eyeWear = styles[Math.abs(hash) % styles.length];
    
    const accessoryStyles = [
        `<line x1="50" y1="26" x2="50" y2="14" stroke="${color}" stroke-width="2.5"/>
         <circle cx="50" cy="11" r="3.5" fill="${color}"/>`,
        `<line x1="28" y1="50" x2="18" y2="50" stroke="${color}" stroke-width="2"/>
         <line x1="72" y1="50" x2="82" y2="50" stroke="${color}" stroke-width="2"/>
         <circle cx="15" cy="50" r="3" fill="${color}"/>
         <circle cx="85" cy="50" r="3" fill="${color}"/>`,
        `<path d="M38 28 L30 14 M62 28 L70 14" stroke="${color}" stroke-width="2.5" stroke-linecap="round"/>`
    ];
    const accessory = accessoryStyles[Math.abs(hash >> 2) % accessoryStyles.length];

    return `<svg viewBox="0 0 100 100" width="100%" height="100%">
        <circle cx="50" cy="50" r="46" fill="rgba(12, 13, 24, 0.85)" stroke="${color}" stroke-width="2" stroke-dasharray="3,3"/>
        ${accessory}
        ${eyeWear}
    </svg>`;
}

// --- 4. GAME STATE ENGINE ---
const GameState = {
    // Current local player id
    localPlayerId: null,
    
    // Core game state
    room: null, // room settings
    players: [], // array of player objects
    gameState: 'HOME', // HOME, CREATE_ROOM, JOIN_ROOM, LOBBY, REVEAL, NIGHT, DAY, VOTE, ELIMINATION, WINNER
    
    // Turn pointers for pass and play
    currentActorIndex: 0,
    activeNightRole: 'mafia', // mafia, detective, doctor
    nightTargets: {
        mafia: null,
        detective: null,
        doctor: null
    },
    
    // Voting state
    votersQueue: [],
    currentVoterIndex: 0,
    playerVotes: {}, // voterId -> targetId
    voteTiedPlayers: [],
    
    // Game logs
    nightNews: '',
    eliminatedPlayer: null,
    winnerTeam: null,
    
    // Settings & History
    settings: {
        lang: 'en',
        timerDuration: 120, // in seconds
        animSpeed: 1.0,
        music: true,
        sfx: true,
        darkMode: true
    },
    history: [],
    
    // Synchronization channel
    broadcastChannel: null,
    
    // Timers
    discussionTimer: null,
    timerSecondsRemaining: 0,
    timerIsPaused: false,

    init() {
        // Load initial settings and history from localStorage
        const storedSettings = localStorage.getItem('mafia_settings');
        if (storedSettings) {
            try {
                this.settings = { ...this.settings, ...JSON.parse(storedSettings) };
            } catch (e) {
                console.error("Failed to parse settings", e);
            }
        }
        
        const storedHistory = localStorage.getItem('mafia_history');
        if (storedHistory) {
            try {
                this.history = JSON.parse(storedHistory);
            } catch (e) {
                console.error("Failed to parse history", e);
            }
        }

        // Initialize background canvas
        AmbientParticles.init();
        
        // Sync setting inputs
        this.updateSettingsInputs();
        this.applyThemeAndSpeed();
        
        // Register events
        this.bindEvents();
        
        // Set audio status (disable music initially to prevent autoplay blocks)
        AudioManager.setSettings(false, this.settings.sfx);
        
        // Translate page
        this.translateUI();

        // Run loading screen sequence
        this.runSplashScreen();

        // Check if there is an active tab room
        const activeRoomCode = sessionStorage.getItem('mafia_active_room_code');
        const activePlayerId = sessionStorage.getItem('mafia_player_id');
        if (activeRoomCode && activePlayerId) {
            this.localPlayerId = activePlayerId;
            this.connectToRoom(activeRoomCode);
        }
    },

    runSplashScreen() {
        const progressBar = document.getElementById('splash-progress-bar');
        const statusText = document.getElementById('splash-status-text');
        const splashScreen = document.getElementById('splash-screen');
        
        let progress = 0;
        const totalDuration = 2000; // 2.0 seconds total load simulation
        const stepTime = 30; // 30ms updates
        const totalSteps = totalDuration / stepTime;
        let currentStep = 0;
        
        const logs = [
            { threshold: 0, text: "LOADING CARAT SEED ARCHIVE..." },
            { threshold: 15, text: "TUNING DON'T WANNA CRY LEAD SYNTHS..." },
            { threshold: 35, text: "SYNCHRONIZING HIP-HOP, VOCAL, & PERFORMANCE TEAMS..." },
            { threshold: 55, text: "COMPILING 13 STAGE AVATARS..." },
            { threshold: 75, text: "ESTABLISHING SVT SYNCHRONIZATION BEACON..." },
            { threshold: 90, text: "CONNECTING TO THE SEVENTEEN HEAVEN..." }
        ];

        const interval = setInterval(() => {
            currentStep++;
            progress = Math.min(100, Math.floor((currentStep / totalSteps) * 100));
            
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            
            // Find appropriate text log
            let activeLog = logs[0].text;
            for (let i = 0; i < logs.length; i++) {
                if (progress >= logs[i].threshold) {
                    activeLog = logs[i].text;
                }
            }
            
            if (statusText) {
                statusText.textContent = `${activeLog} (${progress}%)`;
            }
            
            if (progress >= 100) {
                clearInterval(interval);
                
                if (statusText) {
                    statusText.textContent = "SYSTEM READY. CLICK TO WAKE UP.";
                    statusText.classList.add('ready-click');
                }
                
                // Bind interaction to fade out
                const exitSplash = () => {
                    // Play welcome sweep SFX
                    AudioManager.playSFX('reveal');
                    
                    // Fade out
                    if (splashScreen) {
                        splashScreen.classList.add('splash-fade-out');
                    }
                    
                    // Wake up AudioContext and enable setting-based music
                    AudioManager.ensureCtx();
                    AudioManager.setSettings(this.settings.music, this.settings.sfx);
                    
                    if (splashScreen) {
                        splashScreen.removeEventListener('click', exitSplash);
                        splashScreen.removeEventListener('touchstart', exitSplash);
                    }
                };
                
                if (splashScreen) {
                    splashScreen.addEventListener('click', exitSplash);
                    splashScreen.addEventListener('touchstart', exitSplash);
                }
            }
        }, stepTime);
    },

    updateSettingsInputs() {
        document.getElementById('settings-language').value = this.settings.lang;
        document.getElementById('settings-timer-duration').value = this.settings.timerDuration;
        document.getElementById('settings-animation-speed').value = this.settings.animSpeed;
        document.getElementById('settings-music-toggle').checked = this.settings.music;
        document.getElementById('settings-sound-toggle').checked = this.settings.sfx;
        document.getElementById('settings-darkmode-toggle').checked = this.settings.darkMode;
        
        // Trigger style state updates for icons
        document.getElementById('btn-toggle-music').classList.toggle('active', this.settings.music);
        document.getElementById('btn-toggle-sound').classList.toggle('active', this.settings.sfx);
    },

    applyThemeAndSpeed() {
        // Dark theme class toggle
        if (this.settings.darkMode) {
            document.body.classList.remove('light-theme');
        } else {
            document.body.classList.add('light-theme');
        }
        
        // Animation Speed variables
        document.documentElement.style.setProperty('--speed-multiplier', this.settings.animSpeed);
    },

    saveSettings() {
        localStorage.setItem('mafia_settings', JSON.stringify(this.settings));
        AudioManager.setSettings(this.settings.music, this.settings.sfx);
        this.applyThemeAndSpeed();
        this.translateUI();
    },

    // --- SCREEN NAVIGATION ---
    changeScreen(screenId) {
        // play transition sound
        AudioManager.playSFX('transition');
        
        // Hide all screens
        document.querySelectorAll('.game-screen').forEach(screen => {
            screen.classList.remove('active');
        });
        
        // Show target screen
        const target = document.getElementById(screenId);
        if (target) {
            target.classList.add('active');
            
            // Extract game state from screen ID
            const stateMap = {
                'screen-home': 'HOME',
                'screen-create-room': 'CREATE_ROOM',
                'screen-join-room': 'JOIN_ROOM',
                'screen-waiting-room': 'LOBBY',
                'screen-role-reveal': 'REVEAL',
                'screen-night-phase': 'NIGHT',
                'screen-day-phase': 'DAY',
                'screen-voting': 'VOTE',
                'screen-elimination': 'ELIMINATION',
                'screen-winner': 'WINNER'
            };
            this.gameState = stateMap[screenId] || 'HOME';
            
            // Clean up timers if we leave Day screen
            if (screenId !== 'screen-day-phase') {
                this.stopDiscussionTimer();
            }
            // Clean up confetti if we leave Winner screen
            if (screenId !== 'screen-winner') {
                VictoryEffects.stop();
            }
        }
    },

    // --- LOCAL ACTIONS (EVENTS) ---
    bindEvents() {
        // Home Screen
        document.getElementById('btn-start-game').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.changeScreen('screen-create-room');
        });
        document.getElementById('btn-join-game').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.changeScreen('screen-join-room');
        });
        document.getElementById('btn-how-to-play').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.showHowToPlayModal();
        });
        
        // Global controls
        document.getElementById('btn-toggle-music').addEventListener('click', () => {
            this.settings.music = !this.settings.music;
            this.updateSettingsInputs();
            this.saveSettings();
            AudioManager.playSFX('click');
        });
        document.getElementById('btn-toggle-sound').addEventListener('click', () => {
            this.settings.sfx = !this.settings.sfx;
            this.updateSettingsInputs();
            this.saveSettings();
            AudioManager.playSFX('click');
        });
        document.getElementById('btn-global-settings').addEventListener('click', () => {
            AudioManager.playSFX('click');
            document.getElementById('modal-settings').classList.add('active');
        });
        document.getElementById('btn-close-settings').addEventListener('click', () => {
            AudioManager.playSFX('click');
            document.getElementById('modal-settings').classList.remove('active');
        });
        document.getElementById('btn-global-history').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.renderHistory();
            document.getElementById('modal-history').classList.add('active');
        });
        document.getElementById('btn-close-history').addEventListener('click', () => {
            AudioManager.playSFX('click');
            document.getElementById('modal-history').classList.remove('active');
        });
        document.getElementById('btn-close-history-detail').addEventListener('click', () => {
            AudioManager.playSFX('click');
            document.getElementById('modal-history-detail').classList.remove('active');
        });

        // Settings change events
        document.getElementById('settings-language').addEventListener('change', (e) => {
            this.settings.lang = e.target.value;
            this.saveSettings();
        });
        document.getElementById('settings-timer-duration').addEventListener('change', (e) => {
            this.settings.timerDuration = parseInt(e.target.value);
            this.saveSettings();
        });
        document.getElementById('settings-animation-speed').addEventListener('change', (e) => {
            this.settings.animSpeed = parseFloat(e.target.value);
            this.saveSettings();
        });
        document.getElementById('settings-music-toggle').addEventListener('change', (e) => {
            this.settings.music = e.target.checked;
            this.saveSettings();
        });
        document.getElementById('settings-sound-toggle').addEventListener('change', (e) => {
            this.settings.sfx = e.target.checked;
            this.saveSettings();
        });
        document.getElementById('settings-darkmode-toggle').addEventListener('change', (e) => {
            this.settings.darkMode = e.target.checked;
            this.saveSettings();
        });

        // Create Room Screen
        document.getElementById('btn-dec-players').addEventListener('click', () => {
            const input = document.getElementById('input-player-count');
            let val = parseInt(input.value);
            if (val > 4) {
                input.value = val - 1;
                AudioManager.playSFX('click');
            }
        });
        document.getElementById('btn-inc-players').addEventListener('click', () => {
            const input = document.getElementById('input-player-count');
            let val = parseInt(input.value);
            if (val < 15) {
                input.value = val + 1;
                AudioManager.playSFX('click');
            }
        });
        document.getElementById('btn-back-create').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.changeScreen('screen-home');
        });
        document.getElementById('btn-submit-create').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleCreateRoom();
        });

        // Join Room Screen
        document.getElementById('btn-back-join').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.changeScreen('screen-home');
        });
        document.getElementById('btn-submit-join').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleJoinRoom();
        });

        // Lobby / Waiting Room Screen
        document.getElementById('btn-leave-room').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleLeaveRoom();
        });
        
        // Mode Selector (Pass & play vs multi-tab)
        document.querySelectorAll('input[name="play-mode"]').forEach(radio => {
            radio.addEventListener('change', (e) => {
                AudioManager.playSFX('click');
                const val = e.target.value;
                document.querySelectorAll('.radio-card').forEach(card => card.classList.remove('active'));
                e.target.closest('.radio-card').classList.add('active');
                
                this.room.mode = val;
                this.saveRoomStateToStorage();
                this.postBroadcastMessage({ type: 'LOBBY_UPDATE' });
                this.renderUIState();
                
                // Show/hide friend addition
                document.getElementById('pass-play-add-players').style.display = (val === 'pass-and-play') ? 'block' : 'none';
            });
        });
        
        // Add player in lobby (pass and play)
        document.getElementById('btn-add-player-lobby').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleAddLobbyPlayerDirectly();
        });
        document.getElementById('input-add-player-name').addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                this.handleAddLobbyPlayerDirectly();
            }
        });

        // Start Game
        document.getElementById('btn-start-game-lobby').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleStartGame();
        });

        // Role Reveal Screen
        document.getElementById('btn-reveal-private').addEventListener('click', () => {
            AudioManager.playSFX('reveal');
            this.populateRoleCardFace();
            document.getElementById('reveal-privacy-overlay').classList.remove('active');
            document.getElementById('reveal-role-card').classList.add('flipped');
        });
        document.getElementById('btn-hide-role').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleNextRoleReveal();
        });

        // Night Phase Screen
        document.getElementById('btn-night-reveal').addEventListener('click', () => {
            AudioManager.playSFX('click');
            document.getElementById('night-privacy-overlay').classList.remove('active');
        });
        document.getElementById('btn-night-confirm').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleNightActionConfirm();
        });

        // Day Phase Screen
        document.getElementById('btn-timer-pause').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.toggleTimerPause();
        });
        document.getElementById('btn-timer-skip').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.skipDiscussionTime();
        });

        // Voting Screen
        document.getElementById('btn-vote-reveal').addEventListener('click', () => {
            AudioManager.playSFX('click');
            document.getElementById('vote-privacy-overlay').classList.remove('active');
        });
        document.getElementById('btn-vote-confirm').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleVoteConfirm();
        });

        // Elimination Screen
        document.getElementById('btn-elimination-continue').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleEliminationContinue();
        });

        // Winner Screen
        document.getElementById('btn-winner-replay').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleReplay();
        });
        document.getElementById('btn-winner-home').addEventListener('click', () => {
            AudioManager.playSFX('click');
            this.handleReturnHome();
        });
    },

    // --- 5. LOGIC IMPLEMENTATION ---

    // UI Translation
    translateUI() {
        const t = Translations[this.settings.lang] || Translations.en;
        
        // Home
        document.querySelector('.game-title').textContent = t.gameTitle;
        document.querySelector('.game-subtitle').textContent = t.gameSubtitle;
        document.getElementById('txt-game-desc').textContent = t.gameDesc;
        document.getElementById('btn-start-game').textContent = t.btnStartHost;
        document.getElementById('btn-join-game').textContent = t.btnJoinRoom;
        document.getElementById('btn-how-to-play').textContent = t.btnHowToPlay;
        
        // Create Room
        document.getElementById('lbl-create-room').textContent = t.createRoomTitle;
        document.getElementById('lbl-room-name').textContent = t.roomName;
        document.getElementById('lbl-host-name').textContent = t.hostName;
        document.getElementById('lbl-player-count').textContent = t.targetPlayers;
        document.getElementById('btn-back-create').textContent = t.btnBack;
        document.getElementById('btn-submit-create').textContent = t.btnCreate;

        // Join Room
        document.getElementById('lbl-join-room-title').textContent = t.joinRoomTitle;
        document.getElementById('lbl-join-name').textContent = t.yourName;
        document.getElementById('lbl-room-code').textContent = t.roomCode;
        document.getElementById('btn-back-join').textContent = t.btnBack;
        document.getElementById('btn-submit-join').textContent = t.btnJoin;

        // Lobby
        document.getElementById('lbl-joined-players').textContent = t.joinedPlayers;
        document.getElementById('lbl-lobby-controls').textContent = t.lobbyControls;
        document.getElementById('lbl-opt-passplay').textContent = t.optPassPlay;
        document.getElementById('lbl-desc-passplay').textContent = t.descPassPlay;
        document.getElementById('lbl-opt-multitab').textContent = t.optMultiTab;
        document.getElementById('lbl-desc-multitab').textContent = t.descMultiTab;
        document.getElementById('lbl-add-friend').textContent = t.addFriend;
        document.getElementById('btn-leave-room').textContent = t.btnLeave;
        document.getElementById('btn-start-game-lobby').textContent = t.btnStartGame;

        // Reveal
        document.getElementById('lbl-role-assignment').textContent = t.roleAssignment;
        document.getElementById('btn-reveal-private').textContent = t.btnRevealRole;
        document.getElementById('btn-hide-role').textContent = t.btnHideRole;
        document.getElementById('lbl-mafia-partners').textContent = t.mafiaPartners;

        // Night
        document.getElementById('lbl-night-badge').textContent = t.nightPhase;
        document.getElementById('lbl-night-title').textContent = t.nightFalls;
        document.getElementById('lbl-night-desc').textContent = t.nightDesc;
        document.getElementById('txt-night-wait-title').textContent = t.asleepTitle;
        document.getElementById('txt-night-wait-desc').textContent = t.asleepDesc;
        document.getElementById('btn-night-reveal').textContent = t.wakeUp;
        document.getElementById('lbl-select-target').textContent = t.selectPlayer;
        document.getElementById('txt-night-feedback-title').textContent = t.investigateResult;
        document.getElementById('btn-night-confirm').textContent = t.btnConfirm;

        // Day
        document.getElementById('lbl-day-badge').textContent = t.dayPhase;
        document.getElementById('lbl-day-title').textContent = t.dayBreaks;
        document.getElementById('lbl-day-desc').textContent = t.dayDesc;
        document.getElementById('lbl-night-report').textContent = t.nightReport;
        document.getElementById('lbl-discussion-timer').textContent = t.discussionTimer;
        document.getElementById('btn-timer-skip').textContent = t.skipDiscussion;
        document.getElementById('lbl-alive-players-status').textContent = t.remainingCitizens;

        // Vote
        document.getElementById('lbl-voting-badge').textContent = t.votingPhase;
        document.getElementById('lbl-voting-title').textContent = t.votingTitle;
        document.getElementById('lbl-voting-desc').textContent = t.votingDesc;
        document.getElementById('lbl-tie-detected').textContent = t.tieVote;
        document.getElementById('lbl-select-vote-target').textContent = t.whoIsMafia;
        document.getElementById('btn-vote-reveal').textContent = t.btnCastVote;
        document.getElementById('btn-vote-confirm').textContent = t.btnConfirmVote;

        // Elimination
        document.getElementById('lbl-elimination-result').textContent = t.eliminationResult;
        document.getElementById('lbl-their-role-was').textContent = t.theirRoleWas;
        document.getElementById('btn-elimination-continue').textContent = t.btnProceed;

        // Winner
        document.getElementById('lbl-game-summary').textContent = t.gameSummary;
        document.getElementById('btn-winner-replay').textContent = t.btnPlayAgain;
        document.getElementById('btn-winner-home').textContent = t.btnReturnHome;

        // Settings Modal
        document.getElementById('lbl-settings-title').textContent = t.settingsTitle;
        document.getElementById('lbl-settings-lang').textContent = t.settingsLang;
        document.getElementById('lbl-settings-timer').textContent = t.settingsTimer;
        document.getElementById('lbl-settings-speed').textContent = t.settingsSpeed;
        document.getElementById('lbl-settings-music').textContent = t.settingsMusic;
        document.getElementById('lbl-settings-sfx').textContent = t.settingsSfx;
        document.getElementById('lbl-settings-darkmode').textContent = t.settingsDark;

        // History Modal
        document.getElementById('lbl-history-title').textContent = t.historyTitle;
        document.getElementById('th-date').textContent = t.thDate;
        document.getElementById('th-room').textContent = t.thRoom;
        document.getElementById('th-players').textContent = t.thPlayers;
        document.getElementById('th-winner').textContent = t.thWinner;
        document.getElementById('th-actions').textContent = t.thActions;
    },

    showHowToPlayModal() {
        const t = Translations[this.settings.lang] || Translations.en;
        
        const detailBody = document.getElementById('history-detail-body');
        document.getElementById('lbl-game-details-title').textContent = t.howToPlayModalTitle;
        detailBody.innerHTML = `<div class="how-to-play-content">${t.howToPlayText}</div>`;
        document.getElementById('modal-history-detail').classList.add('active');
    },

    // --- ROOM HOSTING / JOINING STATE CREATOR ---
    assignAvailableSeventeenIndex(playersList) {
        const taken = playersList.map(p => p.seventeenIndex).filter(idx => idx !== undefined && idx !== null);
        for (let i = 0; i < 13; i++) {
            if (!taken.includes(i)) {
                return i;
            }
        }
        return Math.floor(Math.random() * 13);
    },

    clearRoleCardFace() {
        const roleCard = document.getElementById('reveal-role-card');
        if (!roleCard) return;
        roleCard.className = 'role-card';
        document.getElementById('txt-reveal-role-name').textContent = '';
        document.getElementById('txt-reveal-role-alignment').textContent = '';
        document.getElementById('txt-reveal-role-desc').textContent = '';
        document.getElementById('reveal-role-icon').innerHTML = '';
        document.getElementById('reveal-partners-container').style.display = 'none';
    },

    populateRoleCardFace() {
        const t = Translations[this.settings.lang] || Translations.en;
        let activeRevealPlayer = null;
        if (this.room.mode === 'multi-tab') {
            const localUser = this.players.find(p => p.id === this.localPlayerId);
            activeRevealPlayer = localUser;
        } else {
            activeRevealPlayer = this.players[this.currentActorIndex];
        }
        
        if (activeRevealPlayer) {
            const roleCard = document.getElementById('reveal-role-card');
            if (!roleCard) return;
            const alignmentText = activeRevealPlayer.role === 'mafia' ? 'Evil' : 'Good';
            
            roleCard.className = `role-card role-${activeRevealPlayer.role}`;
            
            document.getElementById('txt-reveal-role-name').textContent = activeRevealPlayer.role.toUpperCase();
            document.getElementById('txt-reveal-role-alignment').textContent = t.roleAlignment.replace('{align}', alignmentText);
            
            const descriptions = {
                mafia: "Eliminate citizens without getting caught. Coordinate with your fellow mafia members at night.",
                detective: "Investigate one player's alignment each night to discover who belongs to the Mafia.",
                doctor: "Protect one player from elimination each night. You can protect yourself.",
                citizen: "Discuss suspicions during the day and vote to banish suspected Mafia members."
            };
            document.getElementById('txt-reveal-role-desc').textContent = descriptions[activeRevealPlayer.role];
            document.getElementById('reveal-role-icon').innerHTML = getRoleSvgGraphic(activeRevealPlayer.role);
            
            const partnersContainer = document.getElementById('reveal-partners-container');
            const partnersList = document.getElementById('list-mafia-partners');
            
            if (activeRevealPlayer.role === 'mafia') {
                const partners = this.players.filter(p => p.role === 'mafia' && p.id !== activeRevealPlayer.id);
                if (partners.length > 0) {
                    partnersContainer.style.display = 'block';
                    partnersList.innerHTML = '';
                    partners.forEach(p => {
                        const li = document.createElement('li');
                        li.textContent = p.name;
                        partnersList.appendChild(li);
                    });
                } else {
                    partnersContainer.style.display = 'none';
                }
            } else {
                partnersContainer.style.display = 'none';
            }
        }
    },

    handleCreateRoom() {
        const roomName = document.getElementById('input-room-name').value.trim() || "Neon Shadows";
        const hostName = document.getElementById('input-host-name').value.trim() || "Agent Alpha";
        const targetPlayersCount = parseInt(document.getElementById('input-player-count').value);
        
        // Generate random 4-letter room code
        const code = Array.from({length: 4}, () => String.fromCharCode(65 + Math.floor(Math.random() * 26))).join('');
        const roomCode = `MF-${code}`;
        
        this.localPlayerId = 'player_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('mafia_player_id', this.localPlayerId);
        
        const hostPlayer = {
            id: this.localPlayerId,
            name: hostName,
            isHost: true,
            isAlive: true,
            role: null,
            isReady: false,
            seventeenIndex: Math.floor(Math.random() * 13) // Host gets a random Seventeen member to start
        };

        this.room = {
            code: roomCode,
            name: roomName,
            mode: 'pass-and-play', // Default
            targetPlayersCount: targetPlayersCount,
            hostName: hostName,
            gameState: 'LOBBY',
            timerEndTime: null,
            timerDuration: this.settings.timerDuration
        };

        this.players = [hostPlayer];
        
        // Reset turn indexes
        this.currentActorIndex = 0;
        
        this.saveRoomStateToStorage();
        this.connectToRoom(roomCode);
    },

    handleJoinRoom() {
        const name = document.getElementById('input-join-name').value.trim() || "Mystery Guest";
        let roomCode = document.getElementById('input-room-code').value.trim().toUpperCase();
        
        if (!roomCode) {
            alert("Please enter a room code.");
            return;
        }

        // Format code if needed
        if (!roomCode.startsWith("MF-")) {
            roomCode = `MF-${roomCode}`;
        }
        
        // Load room from storage
        const storedRoom = localStorage.getItem(`mafia_room_${roomCode}`);
        if (!storedRoom) {
            alert("Room not found! Verify code.");
            return;
        }
        
        let loadedRoom, loadedPlayers;
        try {
            const data = JSON.parse(storedRoom);
            loadedRoom = data.room;
            loadedPlayers = data.players;
        } catch (e) {
            alert("Failed to load room data.");
            return;
        }
        
        if (loadedRoom.gameState !== 'LOBBY') {
            alert("This game has already started!");
            return;
        }
        
        if (loadedPlayers.length >= loadedRoom.targetPlayersCount && loadedRoom.mode === 'multi-tab') {
            alert("Lobby is full!");
            return;
        }
        
        this.localPlayerId = 'player_' + Math.random().toString(36).substr(2, 9);
        sessionStorage.setItem('mafia_player_id', this.localPlayerId);
        
        const assignedIdx = this.assignAvailableSeventeenIndex(loadedPlayers);
        
        const newPlayer = {
            id: this.localPlayerId,
            name: name,
            isHost: false,
            isAlive: true,
            role: null,
            isReady: false,
            seventeenIndex: assignedIdx
        };
        
        this.room = loadedRoom;
        this.players = [...loadedPlayers, newPlayer];
        
        this.saveRoomStateToStorage();
        this.connectToRoom(roomCode);
    },

    connectToRoom(roomCode) {
        sessionStorage.setItem('mafia_active_room_code', roomCode);
        
        // Open broadcast channel for tab communications
        if (window.BroadcastChannel) {
            if (this.broadcastChannel) this.broadcastChannel.close();
            this.broadcastChannel = new BroadcastChannel(`mafia_chan_${roomCode}`);
            this.broadcastChannel.onmessage = (e) => this.handleBroadcastMessage(e.data);
        }

        // Sync with standard storage event for cross-browser fallback
        window.addEventListener('storage', (e) => {
            if (e.key === `mafia_room_${roomCode}`) {
                this.loadRoomStateFromStorage();
                this.renderUIState();
            }
        });
        
        this.loadRoomStateFromStorage();
        this.changeScreen('screen-waiting-room');
        this.renderUIState();
        
        // Broadcast join
        this.postBroadcastMessage({ type: 'PLAYER_JOINED', playerId: this.localPlayerId });
    },

    handleLeaveRoom() {
        if (!this.room) return;
        const code = this.room.code;
        
        // Filter local player out
        this.players = this.players.filter(p => p.id !== this.localPlayerId);
        
        if (this.players.length === 0) {
            // Room is empty, delete
            localStorage.removeItem(`mafia_room_${code}`);
        } else {
            // Assign new host if host left
            const hostExists = this.players.some(p => p.isHost);
            if (!hostExists && this.players.length > 0) {
                this.players[0].isHost = true;
                this.room.hostName = this.players[0].name;
            }
            this.saveRoomStateToStorage();
            this.postBroadcastMessage({ type: 'PLAYER_LEFT', playerId: this.localPlayerId });
        }
        
        // Cleanup variables
        sessionStorage.removeItem('mafia_active_room_code');
        sessionStorage.removeItem('mafia_player_id');
        this.room = null;
        this.players = [];
        if (this.broadcastChannel) {
            this.broadcastChannel.close();
            this.broadcastChannel = null;
        }
        
        this.changeScreen('screen-home');
    },

    handleAddLobbyPlayerDirectly() {
        const nameInput = document.getElementById('input-add-player-name');
        const name = nameInput.value.trim();
        if (!name) return;
        
        if (this.players.length >= 15) {
            alert("Maximum 15 players allowed!");
            return;
        }

        const assignedIdx = this.assignAvailableSeventeenIndex(this.players);
        
        const newPlayer = {
            id: 'player_' + Math.random().toString(36).substr(2, 9),
            name: name,
            isHost: false,
            isAlive: true,
            role: null,
            isReady: false,
            seventeenIndex: assignedIdx
        };

        this.players.push(newPlayer);
        nameInput.value = "";
        
        // Increase target count if adding friends exceeds target
        if (this.players.length > this.room.targetPlayersCount) {
            this.room.targetPlayersCount = this.players.length;
        }
        
        this.saveRoomStateToStorage();
        this.postBroadcastMessage({ type: 'LOBBY_UPDATE' });
        this.renderUIState();
    },

    // --- REPLAY AND RESTART ---
    handleReplay() {
        if (!this.room) return;
        
        // Reset players to alive, clear roles, clear ready status
        this.players.forEach(p => {
            p.isAlive = true;
            p.role = null;
            p.isReady = false;
        });

        // Set state back to lobby
        this.room.gameState = 'LOBBY';
        this.room.timerEndTime = null;
        
        // Clean game logs
        this.nightNews = '';
        this.eliminatedPlayer = null;
        this.winnerTeam = null;
        this.playerVotes = {};
        this.voteTiedPlayers = [];
        this.nightTargets = { mafia: null, detective: null, doctor: null };
        this.isFirstRound = true;
        
        this.saveRoomStateToStorage();
        this.postBroadcastMessage({ type: 'GAME_RESTART' });
        this.renderUIState();
        this.changeScreen('screen-waiting-room');
    },

    handleReturnHome() {
        this.handleLeaveRoom();
    },

    // --- STORAGE STATE HELPERS ---
    saveRoomStateToStorage() {
        if (!this.room) return;
        const payload = {
            room: this.room,
            players: this.players,
            turnState: {
                currentActorIndex: this.currentActorIndex,
                activeNightRole: this.activeNightRole,
                nightTargets: this.nightTargets,
                votersQueue: this.votersQueue,
                currentVoterIndex: this.currentVoterIndex,
                playerVotes: this.playerVotes,
                voteTiedPlayers: this.voteTiedPlayers,
                nightNews: this.nightNews,
                eliminatedPlayer: this.eliminatedPlayer,
                winnerTeam: this.winnerTeam,
                isFirstRound: this.isFirstRound
            }
        };
        localStorage.setItem(`mafia_room_${this.room.code}`, JSON.stringify(payload));
    },

    loadRoomStateFromStorage() {
        const code = sessionStorage.getItem('mafia_active_room_code');
        if (!code) return;
        
        const dataStr = localStorage.getItem(`mafia_room_${code}`);
        if (!dataStr) return;
        
        try {
            const data = JSON.parse(dataStr);
            this.room = data.room;
            this.players = data.players;
            
            if (data.turnState) {
                this.currentActorIndex = data.turnState.currentActorIndex;
                this.activeNightRole = data.turnState.activeNightRole;
                this.nightTargets = data.turnState.nightTargets;
                this.votersQueue = data.turnState.votersQueue;
                this.currentVoterIndex = data.turnState.currentVoterIndex;
                this.playerVotes = data.turnState.playerVotes;
                this.voteTiedPlayers = data.turnState.voteTiedPlayers;
                this.nightNews = data.turnState.nightNews;
                this.eliminatedPlayer = data.turnState.eliminatedPlayer;
                this.winnerTeam = data.turnState.winnerTeam;
                this.isFirstRound = data.turnState.isFirstRound !== undefined ? data.turnState.isFirstRound : true;
            }
        } catch (e) {
            console.error("Error reloading room state from storage:", e);
        }
    },

    postBroadcastMessage(msg) {
        if (this.broadcastChannel) {
            this.broadcastChannel.postMessage(msg);
        }
    },

    handleBroadcastMessage(msg) {
        // Reload state
        this.loadRoomStateFromStorage();
        
        switch (msg.type) {
            case 'PLAYER_JOINED':
            case 'PLAYER_LEFT':
            case 'LOBBY_UPDATE':
                this.renderUIState();
                break;
            case 'GAME_START':
                this.changeScreen('screen-role-reveal');
                this.renderUIState();
                break;
            case 'GAME_RESTART':
                this.changeScreen('screen-waiting-room');
                this.renderUIState();
                break;
            case 'STATE_SYNC':
                this.renderUIState();
                // Check if screen needs updating
                const screenMap = {
                    'LOBBY': 'screen-waiting-room',
                    'REVEAL': 'screen-role-reveal',
                    'NIGHT': 'screen-night-phase',
                    'DAY': 'screen-day-phase',
                    'VOTE': 'screen-voting',
                    'ELIMINATION': 'screen-elimination',
                    'WINNER': 'screen-winner'
                };
                const expectedScreen = screenMap[this.room.gameState];
                if (expectedScreen && expectedScreen !== this.getCurrentScreenId()) {
                    this.changeScreen(expectedScreen);
                    this.renderUIState();
                }
                break;
        }
    },

    getCurrentScreenId() {
        const activeScreen = document.querySelector('.game-screen.active');
        return activeScreen ? activeScreen.id : null;
    },

    // --- GAME ENGINE LOGIC STAGES ---

    // 1. Assign Roles and start game
    handleStartGame() {
        if (this.players.length < 4) {
            alert("You need at least 4 players to start the game.");
            return;
        }
        
        // Randomize roles
        this.assignRandomRoles();
        
        this.room.gameState = 'REVEAL';
        this.currentActorIndex = 0;
        this.isFirstRound = true;
        
        // Save
        this.saveRoomStateToStorage();
        
        // Broadcast
        this.postBroadcastMessage({ type: 'GAME_START' });
        
        // Change screen
        this.changeScreen('screen-role-reveal');
        this.renderUIState();
    },

    assignRandomRoles() {
        const count = this.players.length;
        
        // Math to calculate role counts
        // 4 players: 1 Mafia, 1 Detective, 2 Citizens (No Doctor)
        // 5 players: 1 Mafia, 1 Detective, 1 Doctor, 2 Citizens
        // 6-8 players: 2 Mafia, 1 Detective, 1 Doctor, Rest Citizens
        // 9-11 players: 3 Mafia, 1 Detective, 1 Doctor, Rest Citizens
        // 12-15 players: 4 Mafia, 1 Detective, 1 Doctor, Rest Citizens
        let mafiaCount = 1;
        let doctorCount = 1;
        let detectiveCount = 1;
        
        if (count === 4) {
            doctorCount = 0; // 4 players has no doctor to balance out mafia
        } else if (count >= 6 && count <= 8) {
            mafiaCount = 2;
        } else if (count >= 9 && count <= 11) {
            mafiaCount = 3;
        } else if (count >= 12) {
            mafiaCount = 4;
        }
        
        // Construct role bucket
        const roles = [];
        for (let i = 0; i < mafiaCount; i++) roles.push('mafia');
        for (let i = 0; i < detectiveCount; i++) roles.push('detective');
        for (let i = 0; i < doctorCount; i++) roles.push('doctor');
        
        const citizenCount = count - roles.length;
        for (let i = 0; i < citizenCount; i++) roles.push('citizen');
        
        // Shuffle roles
        for (let i = roles.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [roles[i], roles[j]] = [roles[j], roles[i]];
        }
        
        // Assign to players
        this.players.forEach((player, idx) => {
            player.role = roles[idx];
            player.isReady = false;
        });
    },

    // 2. Secret Role Reveals
    handleNextRoleReveal() {
        const localUser = this.players.find(p => p.id === this.localPlayerId);
        
        if (this.room.mode === 'multi-tab') {
            // In multi-tab, the local user simply marks themselves ready
            localUser.isReady = true;
            this.saveRoomStateToStorage();
            this.postBroadcastMessage({ type: 'STATE_SYNC' });
            
            // Check if all players are ready
            const allReady = this.players.every(p => p.isReady);
            if (allReady) {
                this.startDayPhase();
            } else {
                this.renderUIState();
            }
        } else {
            // Pass & Play Mode: Host device manages local player indices
            const activePlayer = this.players[this.currentActorIndex];
            activePlayer.isReady = true;
            
            this.currentActorIndex++;
            
            if (this.currentActorIndex >= this.players.length) {
                // All players have viewed their role
                this.startDayPhase();
            } else {
                this.saveRoomStateToStorage();
                this.renderUIState();
            }
        }
    },

    // 2.5 Start Day Phase
    startDayPhase() {
        this.room.gameState = 'DAY';
        this.eliminatedPlayer = null;
        if (this.isFirstRound) {
            this.nightNews = "Day 1 breaks. Discuss suspicions and vote to eliminate the Mafia.";
        }
        
        // Reset timer duration
        this.room.timerEndTime = Date.now() + (this.settings.timerDuration * 1000);
        this.timerIsPaused = false;
        
        this.saveRoomStateToStorage();
        this.postBroadcastMessage({ type: 'STATE_SYNC' });
        
        this.changeScreen('screen-day-phase');
        this.renderUIState();
    },

    // 3. Start Night Phase
    startNightPhase() {
        this.room.gameState = 'NIGHT';
        
        // Reset night actions
        this.nightTargets = { mafia: null, detective: null, doctor: null };
        
        if (this.room.mode === 'pass-and-play') {
            // Find first active role to wake up
            this.activeNightRole = 'mafia';
        } else {
            // Multi-tab mode: All roles perform their action in parallel
            // Wait for responses from mafia, detective, doctor
            this.players.forEach(p => p.isReady = false); // reuse ready flag for nighttime actions submission
        }
        
        this.saveRoomStateToStorage();
        this.postBroadcastMessage({ type: 'STATE_SYNC' });
        this.changeScreen('screen-night-phase');
        this.renderUIState();
    },

    findNextActiveNightRole() {
        // Roles order: mafia -> detective -> doctor -> end
        const alivePlayers = this.players.filter(p => p.isAlive);
        
        if (this.activeNightRole === 'mafia') {
            // Check if detective is alive
            const detAlive = alivePlayers.some(p => p.role === 'detective');
            if (detAlive) {
                this.activeNightRole = 'detective';
            } else {
                this.activeNightRole = 'doctor';
            }
        }
        
        if (this.activeNightRole === 'detective') {
            const docAlive = alivePlayers.some(p => p.role === 'doctor');
            if (docAlive) {
                this.activeNightRole = 'doctor';
            } else {
                this.activeNightRole = 'end';
            }
        }
        
        // If we reached end or doctor is not alive
        if (this.activeNightRole === 'doctor') {
            this.activeNightRole = 'end';
        }
        
        if (this.activeNightRole === 'end') {
            this.processNightResults();
        }
    },

    showDetectiveResult(targetId, callback) {
        const targetPlayer = this.players.find(p => p.id === targetId);
        if (!targetPlayer) {
            callback();
            return;
        }
        
        const avatar = document.getElementById('det-result-avatar');
        const nameEl = document.getElementById('txt-det-result-name');
        const alignEl = document.getElementById('txt-det-result-alignment');
        
        avatar.innerHTML = generatePlayerAvatar(targetPlayer.name, targetPlayer.seventeenIndex);
        
        nameEl.textContent = targetPlayer.name;
        
        if (targetPlayer.role === 'mafia') {
            alignEl.textContent = "MAFIA";
            alignEl.className = "revealed-role-display role-mafia";
        } else {
            alignEl.textContent = "INNOCENT";
            alignEl.className = "revealed-role-display role-citizen";
        }
        
        const modal = document.getElementById('modal-detective-result');
        modal.classList.add('active');
        
        const okBtn = document.getElementById('btn-det-result-ok');
        // Remove any old listeners by cloning
        const newOkBtn = okBtn.cloneNode(true);
        okBtn.parentNode.replaceChild(newOkBtn, okBtn);
        
        newOkBtn.addEventListener('click', () => {
            AudioManager.playSFX('click');
            modal.classList.remove('active');
            callback();
        });
    },

    handleNightActionConfirm() {
        const targetCard = document.querySelector('#night-targets-grid .player-card.selected');
        if (!targetCard) return;
        const targetId = targetCard.dataset.playerId;
        
        if (this.room.mode === 'multi-tab') {
            const localUser = this.players.find(p => p.id === this.localPlayerId);
            
            if (localUser.role === 'mafia') {
                this.nightTargets.mafia = targetId;
            } else if (localUser.role === 'detective') {
                this.nightTargets.detective = targetId;
            } else if (localUser.role === 'doctor') {
                this.nightTargets.doctor = targetId;
            }
            
            const proceedAfterNight = () => {
                localUser.isReady = true;
                this.saveRoomStateToStorage();
                this.postBroadcastMessage({ type: 'STATE_SYNC' });
                
                // Check if all alive action roles have submitted
                const aliveRoles = this.players.filter(p => p.isAlive && ['mafia', 'detective', 'doctor'].includes(p.role));
                const allRolesSubmitted = aliveRoles.every(p => p.isReady);
                
                if (allRolesSubmitted) {
                    const localIsHost = this.players.find(p => p.id === this.localPlayerId).isHost;
                    if (localIsHost) {
                        this.processNightResults();
                    } else {
                        this.renderUIState();
                    }
                } else {
                    this.renderUIState();
                }
            };
            
            if (localUser.role === 'detective') {
                this.showDetectiveResult(targetId, proceedAfterNight);
            } else {
                proceedAfterNight();
            }
            
        } else {
            // Pass & Play Mode
            const proceedAfterPassPlay = () => {
                if (this.activeNightRole === 'mafia') {
                    this.nightTargets.mafia = targetId;
                    this.activeNightRole = 'detective';
                } else if (this.activeNightRole === 'detective') {
                    this.nightTargets.detective = targetId;
                    this.activeNightRole = 'doctor';
                } else if (this.activeNightRole === 'doctor') {
                    this.nightTargets.doctor = targetId;
                    this.activeNightRole = 'end';
                }
                
                this.saveRoomStateToStorage();
                
                const alivePlayers = this.players.filter(p => p.isAlive);
                
                if (this.activeNightRole === 'detective' && !alivePlayers.some(p => p.role === 'detective')) {
                    this.activeNightRole = 'doctor';
                }
                if (this.activeNightRole === 'doctor' && (!alivePlayers.some(p => p.role === 'doctor') || this.players.length === 4)) {
                    this.activeNightRole = 'end';
                }
                
                if (this.activeNightRole === 'end') {
                    this.processNightResults();
                } else {
                    this.renderUIState();
                }
            };
            
            if (this.activeNightRole === 'detective') {
                const grid = document.getElementById('night-targets-grid');
                if (grid) grid.style.pointerEvents = 'none';
                
                this.showDetectiveResult(targetId, () => {
                    if (grid) grid.style.pointerEvents = 'auto';
                    proceedAfterPassPlay();
                });
            } else {
                proceedAfterPassPlay();
            }
        }
    },

    processNightResults() {
        const mafiaKilled = this.nightTargets.mafia;
        const doctorSaved = this.nightTargets.doctor;
        
        let killedPlayer = null;
        
        if (mafiaKilled && mafiaKilled !== doctorSaved) {
            killedPlayer = this.players.find(p => p.id === mafiaKilled);
            if (killedPlayer) {
                killedPlayer.isAlive = false;
            }
        }
        
        const t = Translations[this.settings.lang] || Translations.en;
        
        if (killedPlayer) {
            this.nightNews = t.playerDied.replace('{name}', `${killedPlayer.name} (Role: ${killedPlayer.role.toUpperCase()})`);
            this.eliminatedPlayer = killedPlayer;
        } else {
            this.nightNews = t.noOneDied;
            this.eliminatedPlayer = null;
        }
        
        // Transition to Day
        this.room.gameState = 'DAY';
        
        // Check if game is over immediately
        const win = this.checkWinConditions();
        if (win) {
            this.winnerTeam = win;
            this.room.gameState = 'WINNER';
            this.saveHistoryLog();
        }
        
        // Reset timer end time
        this.room.timerEndTime = Date.now() + (this.settings.timerDuration * 1000);
        this.timerIsPaused = false;
        
        this.saveRoomStateToStorage();
        this.postBroadcastMessage({ type: 'STATE_SYNC' });
        
        if (this.room.gameState === 'WINNER') {
            this.changeScreen('screen-winner');
        } else {
            this.changeScreen('screen-day-phase');
        }
        this.renderUIState();
    },

    // 4. Day Discussion & Timer
    startDiscussionTimer() {
        this.stopDiscussionTimer();
        
        const updateTimerDisplay = () => {
            if (!this.room.timerEndTime) return;
            
            if (!this.timerIsPaused) {
                const diff = this.room.timerEndTime - Date.now();
                this.timerSecondsRemaining = Math.max(0, Math.floor(diff / 1000));
                
                if (this.timerSecondsRemaining <= 0) {
                    this.stopDiscussionTimer();
                    // Play gong or double tick sound
                    AudioManager.playSFX('eliminate');
                    this.startVotingPhase();
                    return;
                }
                
                // Play clock ticks for the last 5 seconds
                if (this.timerSecondsRemaining <= 5) {
                    AudioManager.playSFX('tick');
                }
            }
            
            // Format timer
            const mins = Math.floor(this.timerSecondsRemaining / 60).toString().padStart(2, '0');
            const secs = (this.timerSecondsRemaining % 60).toString().padStart(2, '0');
            document.getElementById('txt-day-timer').textContent = `${mins}:${secs}`;
        };
        
        // Sync local timer duration
        const diff = (this.room.timerEndTime || Date.now()) - Date.now();
        this.timerSecondsRemaining = Math.max(0, Math.floor(diff / 1000));
        
        updateTimerDisplay();
        this.discussionTimer = setInterval(updateTimerDisplay, 1000);
    },

    stopDiscussionTimer() {
        if (this.discussionTimer) {
            clearInterval(this.discussionTimer);
            this.discussionTimer = null;
        }
    },

    toggleTimerPause() {
        this.timerIsPaused = !this.timerIsPaused;
        
        // If unpausing, we must recalculate the expiration timestamp relative to current timestamp
        if (!this.timerIsPaused) {
            this.room.timerEndTime = Date.now() + (this.timerSecondsRemaining * 1000);
            this.saveRoomStateToStorage();
            this.postBroadcastMessage({ type: 'STATE_SYNC' });
        }
        
        const playSvg = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M8 5v14l11-7z" fill="currentColor"/></svg>`;
        const pauseSvg = `<svg viewBox="0 0 24 24" width="20" height="20"><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" fill="currentColor"/></svg>`;
        
        document.getElementById('btn-timer-pause').innerHTML = this.timerIsPaused ? playSvg : pauseSvg;
    },

    skipDiscussionTime() {
        this.stopDiscussionTimer();
        this.startVotingPhase();
    },

    // 5. Voting Phase
    startVotingPhase() {
        this.room.gameState = 'VOTE';
        this.playerVotes = {};
        
        const alivePlayers = this.players.filter(p => p.isAlive);
        
        if (this.room.mode === 'multi-tab') {
            // Clear player ready flags to track who has voted
            this.players.forEach(p => p.isReady = false);
        } else {
            // Pass & Play Mode: Set up queue of voters
            // Only tied players if in a re-vote situation, otherwise all alive players
            this.votersQueue = [...alivePlayers];
            this.currentVoterIndex = 0;
        }
        
        this.saveRoomStateToStorage();
        this.postBroadcastMessage({ type: 'STATE_SYNC' });
        this.changeScreen('screen-voting');
        this.renderUIState();
    },

    handleVoteConfirm() {
        const targetCard = document.querySelector('#vote-targets-grid .player-card.selected');
        if (!targetCard) return;
        const targetId = targetCard.dataset.playerId;
        
        let activeVoter = null;
        if (this.room.mode === 'multi-tab') {
            activeVoter = this.players.find(p => p.id === this.localPlayerId);
        } else {
            activeVoter = this.votersQueue[this.currentVoterIndex];
        }
        
        // Record vote
        if (this.room.mode === 'multi-tab') {
            this.playerVotes[this.localPlayerId] = targetId;
            activeVoter.isReady = true;
        } else {
            this.playerVotes[activeVoter.id] = targetId;
        }
        
        // Handle first round special actions
        let isDetectiveReveal = false;
        let detectiveTargetId = null;
        
        if (['mafia', 'detective', 'doctor'].includes(activeVoter.role)) {
            const specialCard = document.querySelector('#vote-special-targets-grid .player-card.selected');
            const specialTargetId = specialCard ? specialCard.dataset.playerId : null;
            
            if (activeVoter.role === 'mafia') {
                this.nightTargets.mafia = specialTargetId;
            } else if (activeVoter.role === 'doctor') {
                this.nightTargets.doctor = specialTargetId;
            } else if (activeVoter.role === 'detective') {
                this.nightTargets.detective = specialTargetId;
                isDetectiveReveal = true;
                detectiveTargetId = specialTargetId;
            }
        }
        
        const proceedAfterVote = () => {
            if (this.room.mode === 'multi-tab') {
                this.saveRoomStateToStorage();
                this.postBroadcastMessage({ type: 'STATE_SYNC' });
                
                // Check if all alive players have voted
                const aliveCount = this.players.filter(p => p.isAlive).length;
                const votesSubmittedCount = this.players.filter(p => p.isAlive && p.isReady).length;
                
                if (votesSubmittedCount === aliveCount) {
                    // Host processes vote results
                    const localIsHost = this.players.find(p => p.id === this.localPlayerId).isHost;
                    if (localIsHost) {
                        this.processVoteResults();
                    } else {
                        this.renderUIState();
                    }
                } else {
                    this.renderUIState();
                }
            } else {
                // Pass & Play Mode
                this.currentVoterIndex++;
                
                if (this.currentVoterIndex >= this.votersQueue.length) {
                    // All votes cast
                    this.processVoteResults();
                } else {
                    this.saveRoomStateToStorage();
                    this.renderUIState();
                }
            }
        };
        
        if (isDetectiveReveal && detectiveTargetId) {
            this.showDetectiveResult(detectiveTargetId, proceedAfterVote);
        } else {
            proceedAfterVote();
        }
    },

    processVoteResults() {
        // Tally votes
        const tallies = {};
        
        // Initial tallies counts
        this.players.filter(p => p.isAlive).forEach(p => {
            tallies[p.id] = 0;
        });
        
        // Count votes
        Object.values(this.playerVotes).forEach(targetId => {
            if (tallies[targetId] !== undefined) {
                tallies[targetId]++;
            }
        });
        
        // Find highest votes count
        let highestVotes = 0;
        let candidates = [];
        
        // If re-vote is active, check ties first
        const eligibleTargets = this.voteTiedPlayers.length > 0 ? this.voteTiedPlayers : Object.keys(tallies);
        
        eligibleTargets.forEach(playerId => {
            const count = tallies[playerId];
            if (count > highestVotes) {
                highestVotes = count;
                candidates = [playerId];
            } else if (count === highestVotes && count > 0) {
                candidates.push(playerId);
            }
        });
        
        // If a tie occurred, trigger re-vote
        if (candidates.length > 1) {
            AudioManager.playSFX('eliminate'); // Play alert tone
            this.voteTiedPlayers = candidates; // save tied player ids
            
            // Format tie warning message
            const tiedNames = candidates.map(id => this.players.find(p => p.id === id).name).join(" & ");
            const t = Translations[this.settings.lang] || Translations.en;
            
            this.startVotingPhase(); // Reset to vote screen
            
            // Override message display
            const alertBox = document.getElementById('vote-revote-alert');
            alertBox.style.display = 'block';
            document.getElementById('txt-revote-msg').textContent = `${t.revoteMsg} (${tiedNames})`;
            
        } else if (candidates.length === 1) {
            // Single candidate voted out
            const eliminatedId = candidates[0];
            const eliminatedPlayer = this.players.find(p => p.id === eliminatedId);
            
            eliminatedPlayer.isAlive = false;
            this.eliminatedPlayer = eliminatedPlayer;
            this.voteTiedPlayers = []; // reset ties
            
            this.room.gameState = 'ELIMINATION';
            
            this.saveRoomStateToStorage();
            this.postBroadcastMessage({ type: 'STATE_SYNC' });
            
            this.changeScreen('screen-elimination');
            this.renderUIState();
        } else {
            // No votes cast (e.g. somehow all voted blank/skip, or no targets)
            // Procedurally make it a no-elimination day
            this.eliminatedPlayer = null;
            this.room.gameState = 'ELIMINATION';
            this.saveRoomStateToStorage();
            this.postBroadcastMessage({ type: 'STATE_SYNC' });
            this.changeScreen('screen-elimination');
            this.renderUIState();
        }
    },

    handleEliminationContinue() {
        const win = this.checkWinConditions();
        
        if (win) {
            this.winnerTeam = win;
            this.room.gameState = 'WINNER';
            this.saveHistoryLog();
            
            this.saveRoomStateToStorage();
            this.postBroadcastMessage({ type: 'STATE_SYNC' });
            this.changeScreen('screen-winner');
            return;
        }
        
        this.isFirstRound = false;
        
        // Resolve the night actions that were collected during voting!
        const mafiaKilled = this.nightTargets.mafia;
        const doctorSaved = this.nightTargets.doctor;
        
        let killedPlayer = null;
        if (mafiaKilled && mafiaKilled !== doctorSaved) {
            killedPlayer = this.players.find(p => p.id === mafiaKilled);
            if (killedPlayer) {
                killedPlayer.isAlive = false;
            }
        }
        
        const t = Translations[this.settings.lang] || Translations.en;
        if (killedPlayer) {
            this.nightNews = t.playerDied.replace('{name}', `${killedPlayer.name} (Role: ${killedPlayer.role.toUpperCase()})`);
            this.eliminatedPlayer = killedPlayer;
        } else {
            this.nightNews = t.noOneDied;
            this.eliminatedPlayer = null;
        }
        
        // Check if game ended after night actions
        const postNightWin = this.checkWinConditions();
        if (postNightWin) {
            this.winnerTeam = postNightWin;
            this.room.gameState = 'WINNER';
            this.saveHistoryLog();
            this.saveRoomStateToStorage();
            this.postBroadcastMessage({ type: 'STATE_SYNC' });
            this.changeScreen('screen-winner');
            return;
        }
        
        // Reset night targets for next round
        this.nightTargets = { mafia: null, detective: null, doctor: null };
        
        // Go straight to next Day breaks screen!
        this.room.gameState = 'DAY';
        this.room.timerEndTime = Date.now() + (this.settings.timerDuration * 1000);
        this.timerIsPaused = false;
        
        this.saveRoomStateToStorage();
        this.postBroadcastMessage({ type: 'STATE_SYNC' });
        
        this.changeScreen('screen-day-phase');
        this.renderUIState();
    },

    // 6. Win Conditions Math
    checkWinConditions() {
        const alivePlayers = this.players.filter(p => p.isAlive);
        const mafiaCount = alivePlayers.filter(p => p.role === 'mafia').length;
        const citizensCount = alivePlayers.length - mafiaCount;
        
        if (mafiaCount === 0) {
            return 'citizens';
        }
        
        if (mafiaCount >= citizensCount) {
            return 'mafia';
        }
        
        return null; // Game continues
    },

    // Save logs to local history
    saveHistoryLog() {
        const t = Translations[this.settings.lang] || Translations.en;
        const winnerLabel = this.winnerTeam === 'mafia' ? t.mafiaTeamName : t.citizenTeamName;
        
        const historyItem = {
            id: 'match_' + Date.now(),
            dateTime: new Date().toLocaleString(),
            roomName: this.room.name,
            playersCount: this.players.length,
            winner: winnerLabel,
            winnerKey: this.winnerTeam,
            players: this.players.map(p => ({
                name: p.name,
                role: p.role,
                isAliveAtEnd: p.isAlive,
                seventeenIndex: p.seventeenIndex
            }))
        };
        
        this.history.unshift(historyItem); // Add to top
        localStorage.setItem('mafia_history', JSON.stringify(this.history));
    },

    // --- RENDER SCREEN VISUAL STATES ---
    renderUIState() {
        if (!this.room) return;
        
        const t = Translations[this.settings.lang] || Translations.en;
        const localUser = this.players.find(p => p.id === this.localPlayerId);
        
        // Hide re-vote alerts by default on page renders
        if (document.getElementById('vote-revote-alert')) {
            document.getElementById('vote-revote-alert').style.display = 'none';
        }

        // Display generic room layouts
        document.getElementById('txt-room-title-display').textContent = `${t.lobbyTitle}${this.room.name}`;
        document.getElementById('txt-room-code-display').textContent = this.room.code;
        document.getElementById('badge-player-count').textContent = `${this.players.length} / ${this.room.targetPlayersCount} Players`;
        
        // Toggle Start Game button depending on count and host status
        const isHost = localUser ? localUser.isHost : false;
        const startBtn = document.getElementById('btn-start-game-lobby');
        if (isHost) {
            startBtn.style.display = 'inline-flex';
            startBtn.disabled = this.players.length < 4;
        } else {
            startBtn.style.display = 'none';
        }

        // Render Lobby Cards
        const lobbyGrid = document.getElementById('lobby-players-list');
        lobbyGrid.innerHTML = '';
        this.players.forEach(p => {
            const card = document.createElement('div');
            card.className = `player-card glass-card ${p.isHost ? 'is-host' : ''}`;
            card.innerHTML = `
                <div class="avatar-holder svt-avatar-holder">${generatePlayerAvatar(p.name, p.seventeenIndex)}</div>
                <span class="p-name">${p.name}</span>
            `;
            lobbyGrid.appendChild(card);
        });

        // 1. REVEAL SCREEN STATE RENDERING
        if (this.gameState === 'REVEAL') {
            const privacyOverlay = document.getElementById('reveal-privacy-overlay');
            const roleCard = document.getElementById('reveal-role-card');
            
            // Clean flip class
            roleCard.classList.remove('flipped');
            roleCard.className = 'role-card'; // clear roles classes
            
            let activeRevealPlayer = null;
            
            if (this.room.mode === 'multi-tab') {
                // In multi-tab, each user views their own role privately
                activeRevealPlayer = localUser;
                const localDisplayName = localUser.name;
                
                if (localUser.isReady) {
                    // Show a waiting screen while other tabs finish revealing
                    privacyOverlay.classList.add('active');
                    document.getElementById('reveal-player-avatar').innerHTML = generatePlayerAvatar(localUser.name, localUser.seventeenIndex);
                    document.getElementById('txt-reveal-player-name').textContent = `Waiting for players...`;
                    document.getElementById('txt-reveal-prompt').textContent = `Your role is locked. Please wait for everyone to reveal.`;
                    document.getElementById('btn-reveal-private').style.display = 'none';
                } else {
                    privacyOverlay.classList.add('active');
                    document.getElementById('reveal-player-avatar').innerHTML = generatePlayerAvatar(localUser.name, localUser.seventeenIndex);
                    document.getElementById('txt-reveal-player-name').textContent = t.revealYourTurn.replace('{name}', localDisplayName);
                    document.getElementById('txt-reveal-prompt').textContent = t.revealPrompt;
                    document.getElementById('btn-reveal-private').style.display = 'inline-flex';
                }
            } else {
                // Pass & play sequential reveal
                activeRevealPlayer = this.players[this.currentActorIndex];
                const activeDisplayName = activeRevealPlayer.name;
                
                privacyOverlay.classList.add('active');
                document.getElementById('reveal-player-avatar').innerHTML = generatePlayerAvatar(activeRevealPlayer.name, activeRevealPlayer.seventeenIndex);
                document.getElementById('txt-reveal-player-name').textContent = t.revealYourTurn.replace('{name}', activeDisplayName);
                document.getElementById('txt-reveal-prompt').textContent = t.revealPrompt;
                document.getElementById('btn-reveal-private').style.display = 'inline-flex';
            }
            
            // Clear role card face so it's not peeked during transition
            this.clearRoleCardFace();
        }

        // 2. NIGHT SCREEN STATE RENDERING
        else if (this.gameState === 'NIGHT') {
            const actionPanel = document.getElementById('night-action-panel');
            const waitingPanel = document.getElementById('night-waiting-panel');
            const privacyOverlay = document.getElementById('night-privacy-overlay');
            const confirmBtn = document.getElementById('btn-night-confirm');
            const feedbackBox = document.getElementById('night-feedback-box');
            
            feedbackBox.style.display = 'none';
            confirmBtn.disabled = true;

            if (this.room.mode === 'multi-tab') {
                privacyOverlay.classList.remove('active'); // No overlays needed in multi-tab
                
                const myRole = localUser.role;
                const isSpecialRole = ['mafia', 'detective', 'doctor'].includes(myRole);
                const actionCompleted = localUser.isReady;
                const isUserAlive = localUser.isAlive;
                
                if (!isUserAlive || !isSpecialRole || actionCompleted) {
                    // Show passive wait screen
                    actionPanel.style.display = 'none';
                    waitingPanel.style.display = 'flex';
                    
                    if (!isUserAlive) {
                        document.getElementById('txt-night-wait-title').textContent = "You are DEAD...";
                        document.getElementById('txt-night-wait-desc').textContent = "Ghosts cannot act. Wait for daybreak.";
                    } else if (actionCompleted) {
                        document.getElementById('txt-night-wait-title').textContent = "Action Submitted!";
                        document.getElementById('txt-night-wait-desc').textContent = "Wait for other players to submit their night actions.";
                    } else {
                        document.getElementById('txt-night-wait-title').textContent = t.asleepTitle;
                        document.getElementById('txt-night-wait-desc').textContent = t.asleepDesc;
                    }
                } else {
                    // Active role can act
                    actionPanel.style.display = 'block';
                    waitingPanel.style.display = 'none';
                    
                    document.getElementById('night-actor-avatar').innerHTML = generatePlayerAvatar(localUser.name, localUser.seventeenIndex);
                    
                    // Render target lists
                    this.renderNightTargetsList(myRole);
                    
                    // Update instruction text
                    if (myRole === 'mafia') {
                        document.getElementById('txt-night-instruction-title').textContent = t.mafiaInstruction;
                        document.getElementById('txt-night-instruction-desc').textContent = t.mafiaDesc;
                    } else if (myRole === 'detective') {
                        document.getElementById('txt-night-instruction-title').textContent = t.detectiveInstruction;
                        document.getElementById('txt-night-instruction-desc').textContent = t.detectiveDesc;
                    } else if (myRole === 'doctor') {
                        document.getElementById('txt-night-instruction-title').textContent = t.doctorInstruction;
                        document.getElementById('txt-night-instruction-desc').textContent = t.doctorDesc;
                    }
                }
            } else {
                // Pass & Play Mode Sequential Actions
                actionPanel.style.display = 'block';
                waitingPanel.style.display = 'none';
                
                // Find who is performing the active role
                const alivePlayers = this.players.filter(p => p.isAlive);
                const activeRoleActor = alivePlayers.find(p => p.role === this.activeNightRole);
                
                if (!activeRoleActor) {
                    // Safety check: if no actor is alive, process results
                    this.processNightResults();
                    return;
                }
                
                const activeDisplayName = activeRoleActor.name;
                
                // Setup privacy screen targeting the actor
                privacyOverlay.classList.add('active');
                document.getElementById('txt-night-privacy-target').textContent = activeDisplayName;
                document.getElementById('txt-night-privacy-desc').textContent = t.passRevealDesc;
                
                document.getElementById('night-actor-avatar').innerHTML = generatePlayerAvatar(activeRoleActor.name, activeRoleActor.seventeenIndex);
                
                // Update instructions
                if (this.activeNightRole === 'mafia') {
                    document.getElementById('txt-night-instruction-title').textContent = `${t.mafiaInstruction} (${activeRoleActor.name})`;
                    document.getElementById('txt-night-instruction-desc').textContent = t.mafiaDesc;
                } else if (this.activeNightRole === 'detective') {
                    document.getElementById('txt-night-instruction-title').textContent = `${t.detectiveInstruction} (${activeRoleActor.name})`;
                    document.getElementById('txt-night-instruction-desc').textContent = t.detectiveDesc;
                } else if (this.activeNightRole === 'doctor') {
                    document.getElementById('txt-night-instruction-title').textContent = `${t.doctorInstruction} (${activeRoleActor.name})`;
                    document.getElementById('txt-night-instruction-desc').textContent = t.doctorDesc;
                }
                
                this.renderNightTargetsList(this.activeNightRole);
            }
        }

        // 3. DAY SCREEN STATE RENDERING
        else if (this.gameState === 'DAY') {
            document.getElementById('day-news-content').innerHTML = `<p>${this.nightNews}</p>`;
            
            // Format color border for news ticker depending on if someone died
            const newsBox = document.getElementById('day-news-content').closest('.news-box');
            if (this.eliminatedPlayer) {
                newsBox.style.borderLeftColor = 'var(--neon-red)';
            } else {
                newsBox.style.borderLeftColor = 'var(--neon-green)';
            }
            
            // Render remaining citizens status list
            const dayGrid = document.getElementById('day-players-grid');
            dayGrid.innerHTML = '';
            this.players.forEach(p => {
                const card = document.createElement('div');
                card.className = `player-card glass-card ${p.isAlive ? '' : 'is-dead'}`;
                card.innerHTML = `
                    <div class="avatar-holder svt-avatar-holder">${generatePlayerAvatar(p.name, p.seventeenIndex)}</div>
                    <span class="p-name">${p.name}</span>
                `;
                dayGrid.appendChild(card);
            });
            
            // Host buttons vs Guest status
            const controls = document.querySelector('.timer-controls');
            if (isHost) {
                controls.style.display = 'flex';
            } else {
                controls.style.display = 'none'; // only host can pause/skip discussion
            }
            
            // Start local ticker timer
            this.startDiscussionTimer();
        }

        // 4. VOTING SCREEN STATE RENDERING
        else if (this.gameState === 'VOTE') {
            const actionPanel = document.getElementById('vote-action-panel');
            const waitingPanel = document.getElementById('vote-waiting-panel');
            const privacyOverlay = document.getElementById('vote-privacy-overlay');
            const confirmBtn = document.getElementById('btn-vote-confirm');
            confirmBtn.disabled = true;
            
            if (this.room.mode === 'multi-tab') {
                privacyOverlay.classList.remove('active');
                
                const actionCompleted = localUser.isReady;
                const isUserAlive = localUser.isAlive;
                
                if (!isUserAlive || actionCompleted) {
                    actionPanel.style.display = 'none';
                    waitingPanel.style.display = 'flex';
                    
                    if (!isUserAlive) {
                        document.getElementById('txt-vote-wait-title').textContent = "You are DEAD...";
                        document.getElementById('txt-vote-wait-desc').textContent = "Ghosts cannot vote. Wait for other players.";
                    } else {
                        document.getElementById('txt-vote-wait-title').textContent = "Vote Cast!";
                        document.getElementById('txt-vote-wait-desc').textContent = "Waiting for other players to submit their votes...";
                    }
                } else {
                    actionPanel.style.display = 'block';
                    waitingPanel.style.display = 'none';
                    
                    const localDisplayName = localUser.name;
                    
                    document.getElementById('vote-actor-avatar').innerHTML = generatePlayerAvatar(localUser.name, localUser.seventeenIndex);
                    document.getElementById('txt-voter-name').textContent = localDisplayName;
                    
                    this.renderVotingTargetsList(localUser.id);
                    this.renderVoteSpecialActions(localUser);
                }
            } else {
                // Pass & Play Mode
                actionPanel.style.display = 'block';
                waitingPanel.style.display = 'none';
                
                const activeVoter = this.votersQueue[this.currentVoterIndex];
                const activeDisplayName = activeVoter.name;
                
                privacyOverlay.classList.add('active');
                document.getElementById('txt-vote-privacy-target').textContent = activeDisplayName;
                document.getElementById('txt-voter-name').textContent = activeDisplayName;
                document.getElementById('vote-actor-avatar').innerHTML = generatePlayerAvatar(activeVoter.name, activeVoter.seventeenIndex);
                
                this.renderVotingTargetsList(activeVoter.id);
                this.renderVoteSpecialActions(activeVoter);
            }
        }

        // 5. ELIMINATION SCREEN STATE RENDERING
        else if (this.gameState === 'ELIMINATION') {
            const proceedBtn = document.getElementById('btn-elimination-continue');
            if (isHost) {
                proceedBtn.style.display = 'inline-flex';
            } else {
                proceedBtn.style.display = 'none';
            }
            
            const avatarHolder = document.getElementById('eliminated-player-avatar');
            const nameTxt = document.getElementById('txt-eliminated-name');
            const verdictTxt = document.getElementById('txt-elimination-verdict');
            const roleTxt = document.getElementById('txt-eliminated-role');
            
            if (this.eliminatedPlayer) {
                avatarHolder.innerHTML = generatePlayerAvatar(this.eliminatedPlayer.name, this.eliminatedPlayer.seventeenIndex);
                avatarHolder.classList.add('svt-avatar-holder');
                nameTxt.textContent = this.eliminatedPlayer.name;
                verdictTxt.textContent = t.verdictOut;
                roleTxt.textContent = this.eliminatedPlayer.role.toUpperCase();
                roleTxt.className = `revealed-role-display role-${this.eliminatedPlayer.role}`;
            } else {
                // No one eliminated due to skip/no vote
                avatarHolder.innerHTML = '';
                nameTxt.textContent = "NO ONE";
                verdictTxt.textContent = "was eliminated by the town.";
                roleTxt.textContent = "SKIPPED";
                roleTxt.className = 'revealed-role-display';
            }
        }

        // 6. WINNER SCREEN STATE RENDERING
        else if (this.gameState === 'WINNER') {
            const replayBtn = document.getElementById('btn-winner-replay');
            const homeBtn = document.getElementById('btn-winner-home');
            
            if (isHost) {
                replayBtn.style.display = 'inline-flex';
            } else {
                replayBtn.style.display = 'none'; // only host can trigger play again
            }

            const winTeamTxt = document.getElementById('txt-winner-team');
            const winMsgTxt = document.getElementById('txt-winner-msg');
            
            if (this.winnerTeam === 'mafia') {
                winTeamTxt.textContent = `${t.mafiaTeamName} ${t.winnerTitle.replace('{team}', '')}`;
                winTeamTxt.className = 'winner-title neon-text-glow';
                winTeamTxt.style.color = 'var(--neon-red)';
                winTeamTxt.style.textShadow = '0 0 15px var(--neon-red-glow)';
                winMsgTxt.textContent = t.winnerMsgMafia;
            } else {
                winTeamTxt.textContent = `${t.citizenTeamName} ${t.winnerTitle.replace('{team}', '')}`;
                winTeamTxt.className = 'winner-title neon-text-glow';
                winTeamTxt.style.color = 'var(--neon-blue)';
                winTeamTxt.style.textShadow = '0 0 15px var(--neon-blue-glow)';
                winMsgTxt.textContent = t.winnerMsgCitizens;
            }
            
            // Render Stats List
            const rolesList = document.getElementById('winner-roles-list');
            rolesList.innerHTML = '';
            this.players.forEach(p => {
                const row = document.createElement('div');
                row.className = 'stat-row';
                
                const aliveSymbol = p.isAlive ? "🟢 Alive" : "💀 Eliminated";
                const displayName = p.name;
                
                row.innerHTML = `
                    <div class="stat-player-info">
                        <div class="avatar-holder svt-avatar-holder" style="width: 32px; height: 32px;">${generatePlayerAvatar(p.name, p.seventeenIndex)}</div>
                        <strong>${displayName}</strong>
                        <span style="font-size:0.75rem; color:var(--text-muted);">${aliveSymbol}</span>
                    </div>
                    <span class="winner-role-tag tag-${p.role}">${p.role.toUpperCase()}</span>
                `;
                rolesList.appendChild(row);
            });
            
            // Trigger fireworks / confetti
            VictoryEffects.start();
            AudioManager.playSFX('victory');
        }
    },

    renderNightTargetsList(actorRole) {
        const grid = document.getElementById('night-targets-grid');
        grid.innerHTML = '';
        
        const alivePlayers = this.players.filter(p => p.isAlive);
        
        alivePlayers.forEach(p => {
            // Restrictions on targets:
            // 1. Mafia cannot target other Mafia members
            let isDisabled = false;
            if (actorRole === 'mafia' && p.role === 'mafia') {
                isDisabled = true;
            }
            
            const card = document.createElement('div');
            card.className = `player-card glass-card ${isDisabled ? 'disabled' : ''}`;
            card.dataset.playerId = p.id;
            card.innerHTML = `
                <div class="avatar-holder svt-avatar-holder">${generatePlayerAvatar(p.name, p.seventeenIndex)}</div>
                <span class="p-name">${p.name}</span>
            `;
            
            if (!isDisabled) {
                card.addEventListener('click', () => {
                    document.querySelectorAll('#night-targets-grid .player-card').forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    
                    // Enable confirm
                    const confirmBtn = document.getElementById('btn-night-confirm');
                    confirmBtn.disabled = false;
                });
            }
            
            grid.appendChild(card);
        });
    },

    renderVotingTargetsList(voterId) {
        const grid = document.getElementById('vote-targets-grid');
        grid.innerHTML = '';
        
        const alivePlayers = this.players.filter(p => p.isAlive);
        
        alivePlayers.forEach(p => {
            // Rules:
            // 1. Cannot vote for yourself
            // 2. If tie-revote is in progress, can only vote for tied candidates
            let isDisabled = false;
            if (p.id === voterId) {
                isDisabled = true;
            }
            if (this.voteTiedPlayers.length > 0 && !this.voteTiedPlayers.includes(p.id)) {
                isDisabled = true;
            }
            
            const card = document.createElement('div');
            card.className = `player-card glass-card ${isDisabled ? 'disabled' : ''}`;
            card.dataset.playerId = p.id;
            card.innerHTML = `
                <div class="avatar-holder svt-avatar-holder">${generatePlayerAvatar(p.name, p.seventeenIndex)}</div>
                <span class="p-name">${p.name}</span>
            `;
            
            if (!isDisabled) {
                card.addEventListener('click', () => {
                    document.querySelectorAll('#vote-targets-grid .player-card').forEach(c => c.classList.remove('selected'));
                    card.classList.add('selected');
                    
                    // Enable confirm
                    this.checkVoteConfirmEnabled();
                });
            }
            
            grid.appendChild(card);
        });
    },

    checkVoteConfirmEnabled() {
        const confirmBtn = document.getElementById('btn-vote-confirm');
        if (!confirmBtn) return;
        
        const voteSelected = document.querySelector('#vote-targets-grid .player-card.selected') !== null;
        
        let specialNeeded = false;
        let activeVoter = null;
        if (this.room.mode === 'multi-tab') {
            activeVoter = this.players.find(p => p.id === this.localPlayerId);
        } else {
            activeVoter = this.votersQueue[this.currentVoterIndex];
        }
        if (activeVoter && ['mafia', 'detective', 'doctor'].includes(activeVoter.role)) {
            specialNeeded = true;
        }
        
        if (specialNeeded) {
            const specialSelected = document.querySelector('#vote-special-targets-grid .player-card.selected') !== null;
            confirmBtn.disabled = !(voteSelected && specialSelected);
        } else {
            confirmBtn.disabled = !voteSelected;
        }
    },

    renderVoteSpecialActions(voter) {
        const specialContainer = document.getElementById('vote-special-action-container');
        const specialGrid = document.getElementById('vote-special-targets-grid');
        
        if (!specialContainer || !specialGrid) return;
        
        const isSpecialRole = ['mafia', 'detective', 'doctor'].includes(voter.role);
        if (!isSpecialRole) {
            specialContainer.style.display = 'none';
            return;
        }
        
        specialContainer.style.display = 'block';
        specialGrid.innerHTML = '';
        this.tempSpecialActionTarget = null;
        
        const titleEl = document.getElementById('lbl-vote-special-title');
        const descEl = document.getElementById('lbl-vote-special-desc');
        
        const alivePlayers = this.players.filter(p => p.isAlive);
        let targets = [];
        
        if (voter.role === 'mafia') {
            titleEl.textContent = "Mafia Action: Choose Kill Target";
            descEl.textContent = "Select a player to eliminate tonight.";
            targets = alivePlayers.filter(p => p.role !== 'mafia');
        } else if (voter.role === 'doctor') {
            titleEl.textContent = "Doctor Action: Choose Save Target";
            descEl.textContent = "Select a player to protect tonight (you can protect yourself).";
            targets = alivePlayers;
        } else if (voter.role === 'detective') {
            titleEl.textContent = "Detective Action: Choose Investigation Target";
            descEl.textContent = "Select a player to check their alignment (reveals role on confirm).";
            targets = alivePlayers.filter(p => p.id !== voter.id);
        }
        
        targets.forEach(p => {
            const card = document.createElement('div');
            card.className = 'player-card glass-card';
            card.dataset.playerId = p.id;
            card.innerHTML = `
                <div class="avatar-holder svt-avatar-holder">${generatePlayerAvatar(p.name, p.seventeenIndex)}</div>
                <span class="p-name">${p.name}</span>
            `;
            
            card.addEventListener('click', () => {
                document.querySelectorAll('#vote-special-targets-grid .player-card').forEach(c => c.classList.remove('selected'));
                card.classList.add('selected');
                this.tempSpecialActionTarget = p.id;
                this.checkVoteConfirmEnabled();
            });
            
            specialGrid.appendChild(card);
        });
    },

    // --- RENDER HISTORY TABLE ---
    renderHistory() {
        const tbody = document.getElementById('history-table-body');
        tbody.innerHTML = '';
        
        const t = Translations[this.settings.lang] || Translations.en;
        
        if (this.history.length === 0) {
            tbody.innerHTML = `<tr><td colspan="5" style="text-align: center;" id="txt-no-history">${t.txtNoHistory}</td></tr>`;
            return;
        }
        
        this.history.forEach(item => {
            const tr = document.createElement('tr');
            
            const dateStr = item.dateTime;
            const roomName = item.roomName;
            const count = item.playersCount;
            const winner = item.winner;
            
            tr.innerHTML = `
                <td>${dateStr}</td>
                <td><strong>${roomName}</strong></td>
                <td>${count} Players</td>
                <td><span class="winner-role-tag tag-${item.winnerKey}">${winner}</span></td>
                <td><button class="btn text-btn btn-view-history-detail" data-match-id="${item.id}">View</button></td>
            `;
            
            // Add detail click event
            tr.querySelector('.btn-view-history-detail').addEventListener('click', () => {
                this.showHistoryDetails(item.id);
            });
            
            tbody.appendChild(tr);
        });
    },

    showHistoryDetails(matchId) {
        const item = this.history.find(h => h.id === matchId);
        if (!item) return;
        
        const t = Translations[this.settings.lang] || Translations.en;
        
        const detailBody = document.getElementById('history-detail-body');
        document.getElementById('lbl-game-details-title').textContent = t.matchDetailsTitle;
        
        let playersRows = '';
        item.players.forEach(p => {
            const status = p.isAliveAtEnd ? "🟢 Alive" : "💀 Dead";
            const displayName = p.name;
            playersRows += `
                <div class="stat-row">
                    <span><strong>${displayName}</strong> (${status})</span>
                    <span class="winner-role-tag tag-${p.role}">${p.role.toUpperCase()}</span>
                </div>
            `;
        });
        
        detailBody.innerHTML = `
            <div style="display:flex; flex-direction:column; gap:16px;">
                <p><strong>Room:</strong> ${item.roomName}</p>
                <p><strong>Date Played:</strong> ${item.dateTime}</p>
                <p><strong>Winner:</strong> <span class="winner-role-tag tag-${item.winnerKey}">${item.winner}</span></p>
                <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top:12px; margin-top:8px;">
                    <h4 style="margin-bottom:10px;">Player Roles:</h4>
                    <div style="display:flex; flex-direction:column; gap:8px;">
                        ${playersRows}
                    </div>
                </div>
            </div>
        `;
        
        document.getElementById('modal-history-detail').classList.add('active');
    }
};

// --- Helper: Role SVG Graphics ---
function getRoleSvgGraphic(role) {
    if (role === 'mafia') {
        return `<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="var(--neon-red)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
            <path d="M9 11l2 2 4-4"/>
        </svg>`;
    } else if (role === 'detective') {
        return `<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="var(--neon-blue)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="11" cy="11" r="8"/>
            <line x1="21" y1="21" x2="16.65" y2="16.65"/>
        </svg>`;
    } else if (role === 'doctor') {
        return `<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="var(--neon-green)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M12 2v20M2 12h20" stroke-width="3"/>
        </svg>`;
    } else {
        return `<svg viewBox="0 0 24 24" width="60" height="60" fill="none" stroke="var(--text-muted)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
            <circle cx="9" cy="7" r="4"/>
            <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
            <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
        </svg>`;
    }
}

// Initial Launch
window.addEventListener('DOMContentLoaded', () => {
    GameState.init();
});
