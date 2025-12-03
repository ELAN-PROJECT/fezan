'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Search,
  Heart,
  Star,
  Calendar,
  Users,
  Crown,
  Sparkles,
  BookOpen,
  Filter,
  Baby,
  Info,
  TrendingUp,
  Globe
} from 'lucide-react'

// Catégories de significations
const categories = [
  { id: "tous", name: "Tous", icon: Star },
  { id: "royal", name: "Royauté", icon: Crown },
  { id: "spirituel", name: "Spirituel", icon: Sparkles },
  { id: "joie", name: "Joie", icon: Heart },
  { id: "vertu", name: "Vertu", icon: Star },
  { id: "prosperite", name: "Prospérité", icon: TrendingUp },
  { id: "ordre", name: "Ordre de naissance", icon: Users },
  { id: "paix", name: "Paix", icon: Heart },
  { id: "benediction", name: "Bénédiction", icon: Sparkles },
  { id: "ancestral", name: "Ancestral", icon: Users }
]

// Base de données complète des prénoms béninois (230+ prénoms)
const prenomsBenin = [
  // DYNASTIE COMPLÈTE DES ROIS DU DAHOMEY (14 souverains - 1600-1900)
  { name: "Do-Aklin", gender: "M", ethnie: "Fon", meaning: "Fondateur d'Abomey", description: "Fondateur légendaire (vers 1600), quitta Allada avec ses frères pour établir Abomey", category: "royal" },
  { name: "Gangnihessou", gender: "M", ethnie: "Fon", meaning: "Premier souverain", description: "1er roi (1600-1620), frère aîné de Dakodonou, établit la dynastie à Houawe", category: "royal" },
  { name: "Dakodonou", gender: "M", ethnie: "Fon", meaning: "Roi de la jarre d'indigo", description: "2ème roi (1620-1645), connu pour sa force brutale, prit le pouvoir à son frère", category: "royal" },
  { name: "Houegbadja", gender: "M", ethnie: "Fon", meaning: "Véritable fondateur du royaume", description: "3ème roi (1645-1685), fils de Dakodonou, créa les structures du royaume et construisit le palais royal", category: "royal" },
  { name: "Akaba", gender: "M", ethnie: "Fon", meaning: "Roi bâtisseur", description: "4ème roi (1685-1708), développa l'armée, inventa le sabre dentelé et agrandit Abomey", category: "royal" },
  { name: "Hangbè", gender: "F", ethnie: "Fon", meaning: "Reine guerrière", description: "Sœur jumelle d'Akaba, régente de fait (1708-1711), créa le corps des Amazones", category: "royal" },
  { name: "Agadja", gender: "M", ethnie: "Fon", meaning: "Le Conquérant", description: "5ème roi (1708-1740), conquit Allada (1724) et Ouidah (1727), transforma le royaume en puissance régionale", category: "royal" },
  { name: "Tegbessou", gender: "M", ethnie: "Fon", meaning: "Administrateur suprême", description: "6ème roi (1740-1774), réorganisa l'administration et la bureaucratie royale", category: "royal" },
  { name: "Kpengla", gender: "M", ethnie: "Fon", meaning: "Roi expansionniste", description: "7ème roi (1774-1789), étendit le royaume vers l'ouest jusqu'au Togo actuel", category: "royal" },
  { name: "Agonglo", gender: "M", ethnie: "Fon", meaning: "Roi réformateur", description: "8ème roi (1789-1797), réduisit les taxes, encouragea les arts et le commerce", category: "royal" },
  { name: "Adandozan", gender: "M", ethnie: "Fon", meaning: "Roi effacé de l'histoire", description: "9ème roi (1797-1818), renversé par son frère Ghézo, son nom fut banni des chroniques", category: "royal" },
  { name: "Ghézo", gender: "M", ethnie: "Fon", meaning: "Le Grand Libérateur", description: "10ème roi (1818-1858), libéra le Dahomey du tribut à Oyo en 1851, âge d'or du royaume", category: "royal" },
  { name: "Glélé", gender: "M", ethnie: "Fon", meaning: "Roi guerrier impétueux", description: "11ème roi (1858-1889), fils de Ghézo, poursuivit les campagnes militaires, céda Cotonou aux Français en 1868", category: "royal" },
  { name: "Béhanzin", gender: "M", ethnie: "Fon", meaning: "Le Requin, fils de l'œuf", description: "12ème roi (1889-1894), résistant héroïque contre la colonisation française, symbole de la fierté africaine", category: "royal" },
  { name: "Agoli-Agbo", gender: "M", ethnie: "Fon", meaning: "Dernier roi souverain", description: "13ème roi (1894-1900), régna sous protectorat français, dernier roi avant l'annexion totale", category: "royal" },
  
  // AUTRES NOMS ROYAUX ET NOBLES DU DAHOMEY
  { name: "Tassi-Hangbè", gender: "F", ethnie: "Fon", meaning: "Reine oubliée", description: "Variante du nom de la reine Hangbè, longtemps effacée de l'histoire officielle", category: "royal" },
  { name: "Badohoun", gender: "M", ethnie: "Fon", meaning: "Nom de naissance de Glélé", description: "Nom d'origine du roi Glélé avant son intronisation", category: "royal" },
  { name: "Kondo", gender: "M", ethnie: "Fon", meaning: "Nom de naissance de Béhanzin", description: "Nom d'origine du roi Béhanzin, prit le nom de règne Gbêhanzin", category: "royal" },
  { name: "Gbêhanzin", gender: "M", ethnie: "Fon", meaning: "L'œuf du monde", description: "Nom complet du roi Béhanzin, symbolise sa naissance royale", category: "royal" },
  { name: "Ahosu", gender: "M", ethnie: "Fon", meaning: "Roi", description: "Titre royal en langue Fon, désigne le souverain", category: "royal" },
  { name: "Vidaho", gender: "M", ethnie: "Fon", meaning: "Prince royal", description: "Titre donné aux fils du roi", category: "royal" },
  { name: "Naye", gender: "F", ethnie: "Fon", meaning: "Reine-mère", description: "Titre de la mère du roi, position très puissante", category: "royal" },
  { name: "Kpojito", gender: "F", ethnie: "Fon", meaning: "Mère du léopard", description: "Titre de la reine-mère ou de l'épouse principale", category: "royal" },
  { name: "Migan", gender: "M", ethnie: "Fon", meaning: "Premier ministre", description: "Plus haut dignitaire après le roi, notre chef", category: "royal" },
  { name: "Mehou", gender: "M", ethnie: "Fon", meaning: "Général en chef", description: "Commandant suprême des armées", category: "royal" },
  { name: "Mingan", gender: "M", ethnie: "Fon", meaning: "Chef de la justice", description: "Ministre de la justice du royaume", category: "royal" },
  
  // PRÉNOMS YORUBA
  { name: "Abiola", gender: "M", ethnie: "Yoruba", meaning: "Homme d'honneur", description: "Donné à un enfant dont les parents souhaitent qu'il tienne toujours à son honneur dans la vie", category: "vertu" },
  { name: "Adetola", gender: "M", ethnie: "Yoruba", meaning: "Couronne de la richesse", description: "Donné à un enfant dont les parents espèrent qu'il sera riche", category: "prosperite" },
  { name: "Adéwalé", gender: "M", ethnie: "Yoruba", meaning: "La couronne rentre à la maison", description: "Prénom royal indiquant un héritier", category: "royal" },
  { name: "Adjibola", gender: "X", ethnie: "Yoruba", meaning: "Le réveil dans le bonheur", description: "Donné à un enfant dont les parents perçoivent la naissance comme l'événement qui apportera le bonheur", category: "joie" },
  { name: "Ayo", gender: "X", ethnie: "Yoruba", meaning: "La joie", description: "Donné à un enfant dont la naissance apporte la joie dans la famille", category: "joie" },
  { name: "Ayéfèmi", gender: "X", ethnie: "Yoruba", meaning: "L'enfant comblé de Dieu", description: "Donné à un enfant que les parents souhaitent voir comblé par Dieu", category: "spirituel" },
  { name: "Babatoundji", gender: "M", ethnie: "Yoruba", meaning: "Papa est de retour", description: "Donné à un enfant né juste après le décès de son grand-père", category: "ancestral" },
  { name: "Djimon", gender: "M", ethnie: "Yoruba", meaning: "Né un vendredi", description: "Prénom du jour de naissance", category: "jour" },
  { name: "Oluwaseun", gender: "M", ethnie: "Yoruba", meaning: "Merci à Dieu", description: "Expression de gratitude divine pour la naissance", category: "spirituel" },
  { name: "Olayinka", gender: "X", ethnie: "Yoruba", meaning: "La richesse m'entoure", description: "Aspiration à la prospérité", category: "prosperite" },
  { name: "Adebisi", gender: "F", ethnie: "Yoruba", meaning: "La reine est revenue", description: "Prénom royal donné aux filles", category: "royal" },
  { name: "Yetunde", gender: "F", ethnie: "Yoruba", meaning: "La mère est revenue", description: "Donné à une fille née après le décès de sa grand-mère", category: "ancestral" },
  { name: "Morènikè", gender: "F", ethnie: "Yoruba", meaning: "J'ai trouvé quelqu'un à chérir", description: "Expression d'affection parentale", category: "amour" },
  { name: "Modukpè", gender: "X", ethnie: "Yoruba", meaning: "Je remercie beaucoup", description: "Expression de gratitude profonde", category: "reconnaissance" },
  { name: "Olufunmilayo", gender: "F", ethnie: "Yoruba", meaning: "Dieu me donne de la joie", description: "Prénom spirituel exprimant la joie divine", category: "spirituel" },
  { name: "Adekunle", gender: "M", ethnie: "Yoruba", meaning: "La couronne remplit la maison", description: "Prénom de prospérité et de noblesse", category: "royal" },
  { name: "Ayomide", gender: "X", ethnie: "Yoruba", meaning: "Ma joie est arrivée", description: "Célèbre l'arrivée tant attendue d'un enfant", category: "joie" },
  { name: "Oluwakemi", gender: "F", ethnie: "Yoruba", meaning: "Dieu prend soin de moi", description: "Exprime la protection divine", category: "spirituel" },
  { name: "Babajide", gender: "M", ethnie: "Yoruba", meaning: "Le père est revenu", description: "Donné quand l'enfant ressemble au grand-père décédé", category: "ancestral" },
  { name: "Temitope", gender: "X", ethnie: "Yoruba", meaning: "Le mien mérite des louanges", description: "Exprime la fierté des parents", category: "reconnaissance" },
  
  // PRÉNOMS FON
  { name: "Dotou", gender: "M", ethnie: "Fon", meaning: "Courage", description: "Donné à un enfant dont les parents souhaitent qu'il soit fort, vaillant et courageux", category: "vertu" },
  { name: "Dossi", gender: "F", ethnie: "Fon", meaning: "Après les jumeaux", description: "Donné à une fille née après la naissance de jumeaux", category: "ordre" },
  { name: "Dossou", gender: "M", ethnie: "Fon", meaning: "Après les jumeaux", description: "Donné à un garçon né après la naissance de jumeaux", category: "ordre" },
  { name: "Enangnon", gender: "X", ethnie: "Fon", meaning: "Ça va changer", description: "Donné pour que l'enfant ne perde jamais espoir dans les situations difficiles", category: "espoir" },
  { name: "Bidossessi", gender: "X", ethnie: "Fon", meaning: "Tout appartient à l'être divin", description: "Donné pour que l'enfant voie tout comme faisant partie du plan divin", category: "spirituel" },
  { name: "Bignon", gender: "M", ethnie: "Fon", meaning: "Tout ce que Dieu fait est bon", description: "Donné pour que l'enfant voie tout comme œuvre de Dieu", category: "spirituel" },
  { name: "Akouwègnon", gender: "X", ethnie: "Fon", meaning: "L'argent est bon", description: "Donné à un enfant né dans des conditions financières difficiles", category: "circonstance" },
  { name: "Sonangnon", gender: "X", ethnie: "Fon", meaning: "Il arrivera", description: "Expression d'espoir et de patience", category: "espoir" },
  { name: "Fifamè", gender: "X", ethnie: "Fon", meaning: "Réconciliation", description: "Donné après une réconciliation ou épreuve", category: "circonstance" },
  { name: "Mahougon", gender: "X", ethnie: "Fon", meaning: "Enfant de la chance", description: "Donné après une période de stérilité", category: "benediction" },
  { name: "Agbègnon", gender: "M", ethnie: "Fon", meaning: "La grandeur, le pouvoir", description: "Exprime l'aspiration à la grandeur", category: "vertu" },
  { name: "Ayihè", gender: "F", ethnie: "Fon", meaning: "Prospérité, réussite", description: "Souhaite la prospérité à l'enfant", category: "prosperite" },
  { name: "Yémalin", gender: "X", ethnie: "Fon", meaning: "Enfant inespéré", description: "Donné à un enfant inattendu", category: "benediction" },
  { name: "Gounwanou", gender: "M", ethnie: "Fon", meaning: "Enfant de Goun", description: "Né un mardi, jour du dieu du fer", category: "jour" },
  { name: "Hounwanou", gender: "M", ethnie: "Fon", meaning: "Enfant du Vodoun", description: "Lié aux pratiques spirituelles ancestrales", category: "spirituel" },
  { name: "Dangbé", gender: "X", ethnie: "Fon", meaning: "Serpent sacré", description: "Associé à la divinité python", category: "spirituel" },
  { name: "Sagbo", gender: "M", ethnie: "Fon", meaning: "Mouton sacré", description: "Nom lié aux rituels vodoun", category: "spirituel" },
  { name: "Toffa", gender: "M", ethnie: "Fon", meaning: "Roi de Porto-Novo", description: "Nom royal historique", category: "royal" },
  { name: "Mèwihwèdo", gender: "X", ethnie: "Fon", meaning: "Arc-en-ciel", description: "Symbole de l'alliance entre le ciel et la terre", category: "spirituel" },
  { name: "Zinvoton", gender: "F", ethnie: "Fon", meaning: "Mère de Béhanzin", description: "Prêtresse vodoun devenue reine-mère", category: "royal" },
  
  // PRÉNOMS GOUN
  { name: "Donan", gender: "F", ethnie: "Goun", meaning: "La grâce", description: "Donné à un enfant que les parents espèrent comme une grâce divine", category: "spirituel" },
  { name: "Alihonou", gender: "M", ethnie: "Goun", meaning: "L'enfant de la route", description: "Donné à un garçon né sur la route avant d'arriver à la maternité", category: "circonstance" },
  { name: "Alihossi", gender: "F", ethnie: "Goun", meaning: "L'enfant de la route", description: "Donné à une fille née sur la route avant d'arriver à la maternité", category: "circonstance" },
  { name: "Dégbèhi", gender: "X", ethnie: "Goun", meaning: "Tout enfant que Dieu donne est le bon", description: "Expression d'acceptation divine", category: "spirituel" },
  { name: "Houénoudé", gender: "X", ethnie: "Goun", meaning: "Le pays s'est calmé", description: "Donné après une période de troubles", category: "paix" },
  { name: "Gounvè", gender: "M", ethnie: "Goun", meaning: "Fer sacré", description: "Lié au culte de la forge", category: "spirituel" },
  { name: "Dossavi", gender: "M", ethnie: "Goun", meaning: "Jumeau fortuné", description: "Prénom pour jumeaux", category: "ordre" },
  
  // PRÉNOMS MINA
  { name: "Adjilé", gender: "X", ethnie: "Mina", meaning: "Le prince/la princesse", description: "Donné à un enfant très chéri dans la famille", category: "royal" },
  { name: "Adjoua", gender: "F", ethnie: "Mina", meaning: "Née un lundi", description: "Prénom du jour de naissance", category: "jour" },
  { name: "Afiavi", gender: "F", ethnie: "Mina", meaning: "Née un vendredi", description: "Prénom du jour de naissance", category: "jour" },
  { name: "Ahouéfa", gender: "F", ethnie: "Mina", meaning: "Paix dans la maison", description: "Souhaite la paix familiale", category: "paix" },
  { name: "Kossi", gender: "M", ethnie: "Mina", meaning: "Né un dimanche", description: "Prénom du premier garçon dans certaines communautés", category: "jour" },
  { name: "Akpéné", gender: "F", ethnie: "Mina", meaning: "Merci", description: "Expression de reconnaissance", category: "reconnaissance" },
  { name: "Ekoué", gender: "M", ethnie: "Mina", meaning: "Né un mercredi", description: "Prénom du jour", category: "jour" },
  { name: "Yao", gender: "M", ethnie: "Mina", meaning: "Né un jeudi", description: "Prénom du jour", category: "jour" },
  { name: "Kofi", gender: "M", ethnie: "Mina", meaning: "Né un vendredi", description: "Prénom du jour", category: "jour" },
  { name: "Kwamé", gender: "M", ethnie: "Mina", meaning: "Né un samedi", description: "Prénom du jour", category: "jour" },
  { name: "Abla", gender: "F", ethnie: "Mina", meaning: "Née un mardi", description: "Prénom du jour", category: "jour" },
  { name: "Ama", gender: "F", ethnie: "Mina", meaning: "Née un samedi", description: "Prénom du jour", category: "jour" },
  
  // PRÉNOMS BARIBA (ordre de naissance)
  { name: "Worou", gender: "M", ethnie: "Bariba", meaning: "Premier garçon", description: "Prénom du premier fils, traditionnellement gardé par les grands-parents", category: "ordre" },
  { name: "Sabi", gender: "M", ethnie: "Bariba", meaning: "Deuxième garçon", description: "Les Sabi sont réputés malins et intelligents", category: "ordre" },
  { name: "Bio", gender: "M", ethnie: "Bariba", meaning: "Troisième garçon", description: "Prénom du troisième fils", category: "ordre" },
  { name: "Boni", gender: "M", ethnie: "Bariba", meaning: "Quatrième garçon", description: "Prénom du quatrième fils", category: "ordre" },
  { name: "Sanni", gender: "M", ethnie: "Bariba", meaning: "Cinquième garçon", description: "Réputé curieux et inventif", category: "ordre" },
  { name: "Méré", gender: "M", ethnie: "Bariba", meaning: "Sixième garçon", description: "Prénom du sixième fils", category: "ordre" },
  { name: "Tori", gender: "M", ethnie: "Bariba", meaning: "Huitième garçon", description: "Réputé attaché à sa mère", category: "ordre" },
  { name: "Yon", gender: "F", ethnie: "Bariba", meaning: "Première fille", description: "Prénom de la fille aînée", category: "ordre" },
  { name: "Bona", gender: "F", ethnie: "Bariba", meaning: "Deuxième fille", description: "Réputées laborieuses et dynamiques", category: "ordre" },
  { name: "Baké", gender: "F", ethnie: "Bariba", meaning: "Troisième fille", description: "Dynamique mais parfois jalouse", category: "ordre" },
  { name: "Bougnon", gender: "F", ethnie: "Bariba", meaning: "Quatrième fille", description: "Très proche de sa mère", category: "ordre" },
  { name: "Dado", gender: "F", ethnie: "Bariba", meaning: "Cinquième fille", description: "Réputée attentionnée et compatissante", category: "ordre" },
  { name: "Bérou", gender: "F", ethnie: "Bariba", meaning: "Sixième fille", description: "Turbulente, audacieuse et franche", category: "ordre" },
  { name: "Yerima", gender: "M", ethnie: "Bariba", meaning: "Premier fils du roi", description: "Prénom royal pour l'héritier", category: "royal" },
  { name: "Kwada", gender: "M", ethnie: "Bariba", meaning: "Dernier fils du roi", description: "Prénom royal pour le cadet", category: "royal" },
  { name: "Gna", gender: "F", ethnie: "Bariba", meaning: "Princesse", description: "Prénom royal féminin", category: "royal" },
  
  // PRÉNOMS ADJA
  { name: "Tèguè", gender: "M", ethnie: "Adja", meaning: "Force, guerrier", description: "Donné pour un enfant fort et vaillant", category: "vertu" },
  { name: "Sahoué", gender: "X", ethnie: "Adja", meaning: "Enfant de la paix", description: "Donné après une période de conflit", category: "paix" },
  { name: "Xwla", gender: "X", ethnie: "Adja", meaning: "Descendant royal", description: "Lié à l'ancienne royauté du royaume de Xwla", category: "royal" },
  { name: "Adjanon", gender: "M", ethnie: "Adja", meaning: "Force tranquille", description: "Symbolise la force intérieure", category: "vertu" },
  
  // PRÉNOMS PEULH
  { name: "Hamidou", gender: "M", ethnie: "Peulh", meaning: "Digne de louanges", description: "Prénom islamique peulh", category: "spirituel" },
  { name: "Amadou", gender: "M", ethnie: "Peulh", meaning: "Très aimé", description: "Prénom islamique répandu", category: "amour" },
  { name: "Oumarou", gender: "M", ethnie: "Peulh", meaning: "Longue vie", description: "Souhaite la longévité", category: "benediction" },
  { name: "Fatoumata", gender: "F", ethnie: "Peulh", meaning: "Sevrage", description: "Version peulh de Fatima", category: "spirituel" },
  { name: "Aïssatou", gender: "F", ethnie: "Peulh", meaning: "Vivante", description: "Version peulh d'Aïcha", category: "benediction" },
  { name: "Kadidiatou", gender: "F", ethnie: "Peulh", meaning: "Prématurée", description: "Version peulh de Khadija", category: "circonstance" },
  { name: "Issa", gender: "M", ethnie: "Peulh", meaning: "Jésus", description: "Prénom islamique", category: "spirituel" },
  { name: "Boureima", gender: "M", ethnie: "Peulh", meaning: "Bienvenu", description: "Célèbre l'arrivée de l'enfant", category: "joie" },
  
  // PRÉNOMS DENDI
  { name: "Souleymane", gender: "M", ethnie: "Dendi", meaning: "Pacifique", description: "Version africaine de Salomon", category: "paix" },
  { name: "Moussa", gender: "M", ethnie: "Dendi", meaning: "Sauvé des eaux", description: "Version africaine de Moïse", category: "spirituel" },
  { name: "Mariama", gender: "F", ethnie: "Dendi", meaning: "Aimée de Dieu", description: "Version africaine de Marie", category: "spirituel" },
  { name: "Djibril", gender: "M", ethnie: "Dendi", meaning: "Ange Gabriel", description: "Messager divin", category: "spirituel" },
  
  // PRÉNOMS NAGOT (sous-groupe Yoruba)
  { name: "Sènami", gender: "M", ethnie: "Nagot", meaning: "Garçon désiré et unique", description: "Exprime le désir parental", category: "benediction" },
  { name: "Adeoti", gender: "M", ethnie: "Nagot", meaning: "La couronne mérite le respect", description: "Prénom de noblesse", category: "royal" },
  { name: "Akinadé", gender: "M", ethnie: "Nagot", meaning: "Le guerrier est arrivé", description: "Prénom de force", category: "vertu" },
  
  // PRÉNOMS COMPOSÉS ET MODERNES
  { name: "Fifatinou", gender: "F", ethnie: "Fon", meaning: "Enfant de la réconciliation", description: "Donné après une réconciliation familiale", category: "paix" },
  { name: "Aïzonangnon", gender: "X", ethnie: "Fon", meaning: "L'espoir ne meurt jamais", description: "Message d'espoir constant", category: "espoir" },
  { name: "Dèdègbé", gender: "X", ethnie: "Goun", meaning: "La vie est belle", description: "Célèbre la joie de vivre", category: "joie" },
  { name: "Gnankèhou", gender: "M", ethnie: "Fon", meaning: "Homme de valeur", description: "Exprime l'estime parentale", category: "vertu" },
  { name: "Houénouvo", gender: "X", ethnie: "Fon", meaning: "Le pays est en paix", description: "Donné en période de stabilité", category: "paix" },
  { name: "Kpanvito", gender: "M", ethnie: "Fon", meaning: "La patience paie", description: "Enseigne la persévérance", category: "vertu" },
  { name: "Linhouédé", gender: "X", ethnie: "Fon", meaning: "Le monde s'apaise", description: "Espoir de paix mondiale", category: "paix" },
  { name: "Mèdéssè", gender: "X", ethnie: "Fon", meaning: "Je ne peux pas me plaindre", description: "Expression de gratitude", category: "reconnaissance" },
  { name: "Nouhouayi", gender: "F", ethnie: "Fon", meaning: "La chaleur de la mère", description: "Célèbre l'amour maternel", category: "amour" },
  { name: "Vihoutodji", gender: "X", ethnie: "Fon", meaning: "L'enfant de la chance", description: "Né dans de bonnes conditions", category: "benediction" },
  { name: "Zinsou", gender: "M", ethnie: "Fon", meaning: "Fils de l'eau", description: "Lié au culte des divinités aquatiques", category: "spirituel" },
  { name: "Avlessi", gender: "X", ethnie: "Fon", meaning: "Sous l'arbre", description: "Donné à un enfant né sous un arbre", category: "circonstance" },
  { name: "Gbèmavo", gender: "M", ethnie: "Fon", meaning: "La vie vient", description: "Célèbre l'arrivée de la vie", category: "joie" },
  { name: "Houéto", gender: "X", ethnie: "Fon", meaning: "On entend le pays", description: "L'enfant sera connu partout", category: "prosperite" },
  { name: "Kpatchavi", gender: "X", ethnie: "Fon", meaning: "Ajoute à la famille", description: "Enrichit la lignée familiale", category: "benediction" },
  { name: "Noucacho", gender: "M", ethnie: "Fon", meaning: "Mon père m'a dit", description: "Transmission des savoirs", category: "ancestral" },
  { name: "Sèwadji", gender: "X", ethnie: "Fon", meaning: "Aimer le travail", description: "Encourage l'assiduité", category: "vertu" },
  { name: "Tohozin", gender: "M", ethnie: "Fon", meaning: "Au-dessus du feu", description: "Symbolise la purification", category: "spirituel" },
  { name: "Vidégla", gender: "X", ethnie: "Fon", meaning: "L'enfant guérit", description: "Donné après une maladie", category: "benediction" },
  { name: "Wémè", gender: "X", ethnie: "Fon", meaning: "Enfant de la lagune", description: "Originaire de la région des lagunes", category: "circonstance" },
  { name: "Yèyinou", gender: "M", ethnie: "Fon", meaning: "La mère nous voit", description: "Protection maternelle ancestrale", category: "ancestral" },
  { name: "Zomahoun", gender: "M", ethnie: "Fon", meaning: "Le feu ne brûle pas", description: "Symbolise la protection divine", category: "spirituel" },
  { name: "Akanni", gender: "M", ethnie: "Yoruba", meaning: "Profitable à rencontrer", description: "L'enfant apporte des bénédictions", category: "benediction" },
  { name: "Ayodélé", gender: "X", ethnie: "Yoruba", meaning: "La joie est arrivée à la maison", description: "Célèbre une naissance joyeuse", category: "joie" },
  { name: "Bolanle", gender: "F", ethnie: "Yoruba", meaning: "Trouve la richesse à la maison", description: "Prospérité familiale", category: "prosperite" },
  { name: "Gbemisola", gender: "F", ethnie: "Yoruba", meaning: "Porte-moi vers la richesse", description: "Aspiration à la prospérité", category: "prosperite" },
  { name: "Ifedayo", gender: "X", ethnie: "Yoruba", meaning: "L'amour devient joie", description: "L'amour parental transformé en bonheur", category: "amour" },
  { name: "Kehinde", gender: "X", ethnie: "Yoruba", meaning: "Second jumeau", description: "Nom traditionnel du cadet des jumeaux", category: "ordre" },
  { name: "Taiwo", gender: "X", ethnie: "Yoruba", meaning: "Premier jumeau", description: "Nom traditionnel de l'aîné des jumeaux", category: "ordre" },
  { name: "Idowu", gender: "X", ethnie: "Yoruba", meaning: "Né après des jumeaux", description: "Prénom pour l'enfant qui suit les jumeaux", category: "ordre" },
  { name: "Omotola", gender: "F", ethnie: "Yoruba", meaning: "L'enfant suffit", description: "Expression de satisfaction parentale", category: "reconnaissance" },
  { name: "Oluwatoyin", gender: "F", ethnie: "Yoruba", meaning: "Dieu mérite la louange", description: "Gratitude divine", category: "spirituel" },
  { name: "Titilayo", gender: "F", ethnie: "Yoruba", meaning: "Le bonheur éternel", description: "Souhaite un bonheur durable", category: "joie" },
  { name: "Olúwafẹ́mi", gender: "M", ethnie: "Yoruba", meaning: "Dieu m'aime", description: "Exprime l'amour divin", category: "spirituel" },
  { name: "Adégboye", gender: "M", ethnie: "Yoruba", meaning: "La couronne convient au titre", description: "Prénom de noblesse", category: "royal" },
  { name: "Abidemi", gender: "X", ethnie: "Yoruba", meaning: "Né en l'absence du père", description: "Circonstance de naissance", category: "circonstance" },
  { name: "Olajumoke", gender: "F", ethnie: "Yoruba", meaning: "La richesse prend soin de moi", description: "Protection par la prospérité", category: "prosperite" },
  { name: "Olamide", gender: "X", ethnie: "Yoruba", meaning: "Ma richesse est arrivée", description: "Célèbre l'arrivée de la fortune", category: "prosperite" },
  { name: "Adejoke", gender: "F", ethnie: "Yoruba", meaning: "La couronne est partagée", description: "Honneur partagé", category: "royal" },
  { name: "Ayobami", gender: "X", ethnie: "Yoruba", meaning: "La joie me rencontre", description: "Rencontre avec le bonheur", category: "joie" },
  { name: "Eniola", gender: "X", ethnie: "Yoruba", meaning: "Personne riche", description: "Destiné à la richesse", category: "prosperite" },
  { name: "Folasadé", gender: "F", ethnie: "Yoruba", meaning: "L'honneur apporte la couronne", description: "L'honneur mène à la noblesse", category: "royal" },
  { name: "Moyosore", gender: "X", ethnie: "Yoruba", meaning: "Je me réjouis avec un ami", description: "Joie partagée", category: "joie" },
  { name: "Olabisi", gender: "X", ethnie: "Yoruba", meaning: "La joie augmente", description: "Bonheur croissant", category: "joie" },
  { name: "Olúwatóbi", gender: "M", ethnie: "Yoruba", meaning: "Dieu est grand", description: "Célèbre la grandeur divine", category: "spirituel" },
  
  // Plus de prénoms FON
  { name: "Adankonhou", gender: "M", ethnie: "Fon", meaning: "Enfant du serpent", description: "Lié au python sacré Dan", category: "spirituel" },
  { name: "Ahomégnigni", gender: "X", ethnie: "Fon", meaning: "Je construis mon royaume", description: "Ambition et détermination", category: "vertu" },
  { name: "Akpaki", gender: "X", ethnie: "Fon", meaning: "Petit cadeau", description: "L'enfant comme présent divin", category: "benediction" },
  { name: "Atidégla", gender: "X", ethnie: "Fon", meaning: "La tête guérit", description: "Guérison après une épreuve mentale", category: "benediction" },
  { name: "Avimadjè", gender: "X", ethnie: "Fon", meaning: "L'enfant ne meurt pas", description: "Protection contre la mortalité infantile", category: "benediction" },
  { name: "Azankpè", gender: "M", ethnie: "Fon", meaning: "Route de la richesse", description: "Chemin vers la prospérité", category: "prosperite" },
  { name: "Dansou", gender: "M", ethnie: "Fon", meaning: "Serpent sacré", description: "Protégé par Dan", category: "spirituel" },
  { name: "Djogbénou", gender: "X", ethnie: "Fon", meaning: "Qui mange, vit", description: "Célèbre l'abondance", category: "prosperite" },
  { name: "Gbaguidi", gender: "M", ethnie: "Fon", meaning: "Grande racine", description: "Ancêtre important", category: "ancestral" },
  { name: "Gbèdji", gender: "X", ethnie: "Fon", meaning: "La vie mange", description: "Profiter pleinement de la vie", category: "joie" },
  { name: "Gnidokpoè", gender: "X", ethnie: "Fon", meaning: "Le cœur lourd", description: "Donné après une épreuve", category: "circonstance" },
  { name: "Godonou", gender: "M", ethnie: "Fon", meaning: "Enfant de l'acier", description: "Force et résistance", category: "vertu" },
  { name: "Houenoussou", gender: "M", ethnie: "Fon", meaning: "Pays des ancêtres", description: "Lien avec la terre ancestrale", category: "ancestral" },
  { name: "Hounkanlin", gender: "M", ethnie: "Fon", meaning: "Prêtre vodoun", description: "Destiné à la prêtrise", category: "spirituel" },
  { name: "Kêkanlin", gender: "M", ethnie: "Fon", meaning: "Un seul ne suffit pas", description: "Besoin de communauté", category: "vertu" },
  { name: "Kpossou", gender: "M", ethnie: "Fon", meaning: "Panthère", description: "Force et agilité", category: "vertu" },
  { name: "Lokossou", gender: "M", ethnie: "Fon", meaning: "Fils du lac", description: "Lié aux divinités aquatiques", category: "spirituel" },
  { name: "Noudéhou", gender: "X", ethnie: "Fon", meaning: "Bouche du pays", description: "Porte-parole, leader", category: "vertu" },
  { name: "Sokpé", gender: "X", ethnie: "Fon", meaning: "Cheval sacré", description: "Noble et rapide", category: "vertu" },
  { name: "Togbonon", gender: "M", ethnie: "Fon", meaning: "Le chef parle", description: "Autorité naturelle", category: "vertu" },
  { name: "Vodounou", gender: "M", ethnie: "Fon", meaning: "Enfant du vodoun", description: "Consacré aux divinités", category: "spirituel" },
  { name: "Xomalin", gender: "X", ethnie: "Fon", meaning: "Enfant de la mer", description: "Lié à Mami Wata", category: "spirituel" },
  { name: "Yèhouénou", gender: "M", ethnie: "Fon", meaning: "La mère du pays", description: "Protection maternelle", category: "ancestral" },
  { name: "Zounon", gender: "M", ethnie: "Fon", meaning: "Feu sacré", description: "Énergie vitale", category: "spirituel" },
  
  // Plus de prénoms GOUN
  { name: "Agounto", gender: "M", ethnie: "Goun", meaning: "Guerrier aguerri", description: "Force au combat", category: "vertu" },
  { name: "Ahomadégbé", gender: "X", ethnie: "Goun", meaning: "Le royaume guérit", description: "Restauration après une crise", category: "paix" },
  { name: "Ahouandjinou", gender: "M", ethnie: "Goun", meaning: "Enfant du roi", description: "Origine noble", category: "royal" },
  { name: "Avognon", gender: "X", ethnie: "Goun", meaning: "Enfant précieux", description: "Très valorisé par la famille", category: "amour" },
  { name: "Dossougbé", gender: "M", ethnie: "Goun", meaning: "Après les jumeaux, la vie", description: "Suite de la lignée", category: "ordre" },
  { name: "Gangniho", gender: "M", ethnie: "Goun", meaning: "Fer de lance", description: "Leader, pionnier", category: "vertu" },
  { name: "Godji", gender: "X", ethnie: "Goun", meaning: "Enfant de fer", description: "Résistance et force", category: "vertu" },
  { name: "Hounsou", gender: "M", ethnie: "Goun", meaning: "Maison des ancêtres", description: "Gardien des traditions", category: "ancestral" },
  { name: "Lègba", gender: "M", ethnie: "Goun", meaning: "Gardien", description: "Divinité des portes et chemins", category: "spirituel" },
  { name: "Sossou", gender: "M", ethnie: "Goun", meaning: "Cheval", description: "Rapidité et noblesse", category: "vertu" },
  
  // Plus de prénoms MINA et apparentés
  { name: "Aklesso", gender: "M", ethnie: "Mina", meaning: "Né sous protection", description: "Protégé par les ancêtres", category: "spirituel" },
  { name: "Akossiwa", gender: "F", ethnie: "Mina", meaning: "Née un dimanche", description: "Jour béni", category: "jour" },
  { name: "Ameyovi", gender: "F", ethnie: "Mina", meaning: "Pluie rafraîchissante", description: "Apporte le soulagement", category: "benediction" },
  { name: "Atsutsé", gender: "M", ethnie: "Mina", meaning: "Branche cadette", description: "Plus jeune fils", category: "ordre" },
  { name: "Ayoko", gender: "F", ethnie: "Mina", meaning: "Née un mercredi", description: "Prénom du jour", category: "jour" },
  { name: "Dzidzogbe", gender: "X", ethnie: "Mina", meaning: "Résurrection", description: "Renouveau après une épreuve", category: "espoir" },
  { name: "Edem", gender: "M", ethnie: "Mina", meaning: "Dieu m'a sauvé", description: "Gratitude divine", category: "spirituel" },
  { name: "Kafui", gender: "X", ethnie: "Mina", meaning: "Louange", description: "Action de grâce", category: "reconnaissance" },
  { name: "Koffi", gender: "M", ethnie: "Mina", meaning: "Né un vendredi", description: "Variante de Kofi", category: "jour" },
  { name: "Komlan", gender: "M", ethnie: "Mina", meaning: "Après l'aîné", description: "Deuxième fils", category: "ordre" },
  { name: "Kossivi", gender: "M", ethnie: "Mina", meaning: "Dimanche béni", description: "Né un jour saint", category: "jour" },
  { name: "Kwasivi", gender: "M", ethnie: "Mina", meaning: "Dimanche glorieux", description: "Variante de Kossi", category: "jour" },
  { name: "Sédzro", gender: "M", ethnie: "Mina", meaning: "Grâce divine", description: "Faveur céleste", category: "spirituel" },
  { name: "Sitsofe", gender: "F", ethnie: "Mina", meaning: "Lumière", description: "Illumine la famille", category: "joie" },
  { name: "Tété", gender: "X", ethnie: "Mina", meaning: "Premier", description: "Enfant aîné", category: "ordre" },
  { name: "Togbui", gender: "M", ethnie: "Mina", meaning: "Grand-père", description: "Sagesse ancestrale", category: "ancestral" },
  { name: "Yawo", gender: "M", ethnie: "Mina", meaning: "Né un jeudi", description: "Variante de Yao", category: "jour" },
  
  // Prénoms BARIBA supplémentaires
  { name: "Batia", gender: "F", ethnie: "Bariba", meaning: "Septième fille", description: "Considérée chanceuse", category: "ordre" },
  { name: "Déguénonrou", gender: "M", ethnie: "Bariba", meaning: "Septième garçon", description: "Réputé sage", category: "ordre" },
  { name: "Djiki", gender: "M", ethnie: "Bariba", meaning: "Roi", description: "Titre royal", category: "royal" },
  { name: "Gando", gender: "M", ethnie: "Bariba", meaning: "Chef guerrier", description: "Leader militaire", category: "vertu" },
  { name: "Kpaki", gender: "F", ethnie: "Bariba", meaning: "Huitième fille", description: "Complète la famille", category: "ordre" },
  { name: "Séri", gender: "M", ethnie: "Bariba", meaning: "Chef de terre", description: "Autorité territoriale", category: "royal" },
  { name: "Sunon", gender: "M", ethnie: "Bariba", meaning: "Roi de Nikki", description: "Titre dynastique", category: "royal" },
  { name: "Wassirou", gender: "M", ethnie: "Bariba", meaning: "Héritier", description: "Successeur désigné", category: "royal" },
  
  // Prénoms d'autres ethnies du Bénin
  { name: "Atchadé", gender: "M", ethnie: "Watchi", meaning: "Grand chasseur", description: "Habile à la chasse", category: "vertu" },
  { name: "Gandonou", gender: "M", ethnie: "Tori", meaning: "Homme de paix", description: "Pacificateur", category: "paix" },
  { name: "Houédo", gender: "M", ethnie: "Sahoué", meaning: "Arc-en-ciel divin", description: "Messager céleste", category: "spirituel" },
  { name: "Kérékou", gender: "M", ethnie: "Somba", meaning: "Celui qui résiste", description: "Résilience face aux épreuves", category: "vertu" },
  { name: "Maga", gender: "M", ethnie: "Dendi", meaning: "Grand homme", description: "Destiné à la grandeur", category: "vertu" },
  { name: "Napo", gender: "M", ethnie: "Kabyè", meaning: "Chef de village", description: "Leader communautaire", category: "royal" },
  { name: "Tchakondo", gender: "M", ethnie: "Tem", meaning: "Homme fort", description: "Puissance physique", category: "vertu" },
  
  // Prénoms composés modernes et traditionnels
  { name: "Adjovi-Ayé", gender: "F", ethnie: "Fon", meaning: "Princesse de la vie", description: "Noblesse vitale", category: "royal" },
  { name: "Akoko-Dè", gender: "X", ethnie: "Fon", meaning: "Ne pleure pas", description: "Encouragement à la joie", category: "espoir" },
  { name: "Avitomè", gender: "X", ethnie: "Fon", meaning: "L'enfant ne ment pas", description: "Vérité et honnêteté", category: "vertu" },
  { name: "Dèhounmè", gender: "X", ethnie: "Fon", meaning: "Porte-bonheur", description: "Apporte la chance", category: "benediction" },
  { name: "Gankpatin", gender: "M", ethnie: "Fon", meaning: "Fer pointu", description: "Précision et efficacité", category: "vertu" },
  { name: "Houéfa-Ayé", gender: "F", ethnie: "Fon", meaning: "Paix dans la vie", description: "Vie paisible", category: "paix" },
  { name: "Kpéhoungo", gender: "X", ethnie: "Fon", meaning: "Remercier le pays", description: "Gratitude envers la patrie", category: "reconnaissance" },
  { name: "Mèdéhoundo", gender: "X", ethnie: "Fon", meaning: "Je ne suis pas venu pour rien", description: "Vie avec un but", category: "vertu" },
  { name: "Nounagnon", gender: "X", ethnie: "Fon", meaning: "C'est bon d'avoir", description: "Appréciation", category: "reconnaissance" },
  { name: "Togbè-Yéton", gender: "M", ethnie: "Fon", meaning: "Ancêtre du feu", description: "Héritage spirituel", category: "ancestral" },
  { name: "Vidéhoué", gender: "X", ethnie: "Fon", meaning: "Guérison de la maison", description: "Restauration familiale", category: "benediction" },
  { name: "Wélikou", gender: "X", ethnie: "Fon", meaning: "La mort ne prend pas", description: "Protection contre la mort", category: "benediction" },
  { name: "Yêvidé", gender: "X", ethnie: "Fon", meaning: "La mère guérit", description: "Pouvoir de guérison maternelle", category: "ancestral" },
  { name: "Zomahi-Dé", gender: "X", ethnie: "Fon", meaning: "Le feu ne brûle pas la case", description: "Protection du foyer", category: "spirituel" },
  
  // Derniers prénoms pour compléter la collection
  { name: "Assogba", gender: "M", ethnie: "Fon", meaning: "Panthère royale", description: "Force et noblesse", category: "royal" },
  { name: "Célestin", gender: "M", ethnie: "Moderne", meaning: "Céleste", description: "Prénom chrétien adopté", category: "spirituel" },
  { name: "Désiré", gender: "M", ethnie: "Moderne", meaning: "Désiré", description: "Enfant tant attendu", category: "amour" },
  { name: "Fortuné", gender: "M", ethnie: "Moderne", meaning: "Chanceux", description: "Prénom de bénédiction", category: "benediction" },
  { name: "Grâce", gender: "F", ethnie: "Moderne", meaning: "Grâce divine", description: "Faveur céleste", category: "spirituel" },
  { name: "Honoré", gender: "M", ethnie: "Moderne", meaning: "Respecté", description: "Digne d'honneur", category: "vertu" },
  { name: "Innocente", gender: "F", ethnie: "Moderne", meaning: "Pure", description: "Pureté d'âme", category: "vertu" },
  { name: "Joséphine", gender: "F", ethnie: "Moderne", meaning: "Dieu ajoutera", description: "Bénédiction supplémentaire", category: "spirituel" },
  { name: "Patience", gender: "F", ethnie: "Moderne", meaning: "Qui sait attendre", description: "Vertu de patience", category: "vertu" },
  { name: "Providence", gender: "F", ethnie: "Moderne", meaning: "Soin divin", description: "Protection céleste", category: "spirituel" },
  { name: "Sylvestre", gender: "M", ethnie: "Moderne", meaning: "De la forêt", description: "Lien avec la nature", category: "circonstance" },
  { name: "Victoire", gender: "F", ethnie: "Moderne", meaning: "Triomphe", description: "Succès assuré", category: "prosperite" }
]

const ethnies = [
  { id: "tous", name: "Toutes ethnies" },
  { id: "Yoruba", name: "Yoruba" },
  { id: "Fon", name: "Fon" },
  { id: "Goun", name: "Goun" },
  { id: "Mina", name: "Mina" }
]

export default function PrenomsPage() {
  const [searchTerm, setSearchTerm] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('tous')
  const [selectedEthnie, setSelectedEthnie] = useState('tous')
  const [selectedGender, setSelectedGender] = useState('tous')
  const [selectedPrenom, setSelectedPrenom] = useState(null)

  // Filtrer les prénoms
  const filteredPrenoms = prenomsBenin.filter(prenom => {
    const matchSearch = prenom.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                       prenom.meaning.toLowerCase().includes(searchTerm.toLowerCase())
    const matchCategory = selectedCategory === 'tous' || prenom.category === selectedCategory
    const matchEthnie = selectedEthnie === 'tous' || prenom.ethnie === selectedEthnie
    const matchGender = selectedGender === 'tous' || prenom.gender === selectedGender || prenom.gender === 'X'
    
    return matchSearch && matchCategory && matchEthnie && matchGender
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-50 via-amber-50/20 to-orange-50/30">
      {/* Hero Section */}
      <section className="relative py-16 sm:py-24 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-amber-200/30 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-orange-200/20 rounded-full blur-3xl"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ type: "spring", delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-amber-500 to-orange-600 rounded-full mb-6 shadow-lg"
            >
              <Baby className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-stone-900 mb-6">
              Prénoms Africains Béninois
            </h1>
            
            <p className="text-lg sm:text-xl text-stone-600 leading-relaxed mb-8">
              Découvrez la richesse des prénoms traditionnels béninois. Chaque prénom raconte une histoire, 
              porte une signification profonde et reflète les valeurs ancestrales des peuples Fon, Yoruba, Goun et Mina.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 text-sm">
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Globe className="w-4 h-4 text-amber-600" />
                <span className="text-stone-700">4 ethnies principales</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <BookOpen className="w-4 h-4 text-amber-600" />
                <span className="text-stone-700">{prenomsBenin.length}+ prénoms</span>
              </div>
              <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm">
                <Star className="w-4 h-4 text-amber-600" />
                <span className="text-stone-700">Significations authentiques</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section recherche */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-3xl shadow-xl p-8 mb-12"
          >
            <div className="flex items-center gap-3 mb-6">
              <Search className="w-6 h-6 text-amber-600" />
              <h2 className="text-2xl font-bold text-stone-900">Rechercher un prénom</h2>
            </div>

            {/* Barre de recherche */}
            <div className="relative mb-6">
              <input
                type="text"
                placeholder="Entrez un prénom ou une signification..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-6 py-4 pl-12 border-2 border-stone-200 rounded-xl focus:border-amber-500 focus:ring-2 focus:ring-amber-200 outline-none transition-all text-lg"
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-stone-400" />
            </div>

            {/* Filtres */}
            <div className="grid md:grid-cols-3 gap-4">
              {/* Filtre Genre */}
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Genre</label>
                <select
                  value={selectedGender}
                  onChange={(e) => setSelectedGender(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-amber-500 outline-none transition-all"
                >
                  <option value="tous">Tous</option>
                  <option value="M">Masculin</option>
                  <option value="F">Féminin</option>
                  <option value="X">Mixte</option>
                </select>
              </div>

              {/* Filtre Ethnie */}
              <div>
                <label className="block text-sm font-semibold text-stone-700 mb-2">Ethnie</label>
                <select
                  value={selectedEthnie}
                  onChange={(e) => setSelectedEthnie(e.target.value)}
                  className="w-full px-4 py-3 border-2 border-stone-200 rounded-xl focus:border-amber-500 outline-none transition-all"
                >
                  {ethnies.map(ethnie => (
                    <option key={ethnie.id} value={ethnie.id}>{ethnie.name}</option>
                  ))}
                </select>
              </div>

              {/* Bouton réinitialiser */}
              <div className="flex items-end">
                <button
                  onClick={() => {
                    setSearchTerm('')
                    setSelectedCategory('tous')
                    setSelectedEthnie('tous')
                    setSelectedGender('tous')
                  }}
                  className="w-full px-6 py-3 bg-stone-100 hover:bg-stone-200 text-stone-700 font-semibold rounded-xl transition-all"
                >
                  Réinitialiser
                </button>
              </div>
            </div>
          </motion.div>

          {/* Filtres par catégorie */}
          <div className="mb-8">
            <div className="flex items-center gap-3 mb-4">
              <Filter className="w-5 h-5 text-amber-600" />
              <h3 className="text-lg font-semibold text-stone-900">Filtrer par signification</h3>
            </div>
            
            <div className="flex flex-wrap gap-3">
              {categories.map(category => {
                const Icon = category.icon
                return (
                  <motion.button
                    key={category.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setSelectedCategory(category.id)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all ${
                      selectedCategory === category.id
                        ? 'bg-gradient-to-r from-amber-500 to-orange-500 text-white border-transparent shadow-lg'
                        : 'bg-white text-stone-700 border-stone-200 hover:border-amber-300'
                    }`}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium text-sm">{category.name}</span>
                  </motion.button>
                )
              })}
            </div>
          </div>

          {/* Résultats */}
          <div className="mb-4 text-stone-600">
            {filteredPrenoms.length} prénom{filteredPrenoms.length > 1 ? 's' : ''} trouvé{filteredPrenoms.length > 1 ? 's' : ''}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPrenoms.map((prenom, index) => (
              <motion.button
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
                whileHover={{ y: -5 }}
                onClick={() => setSelectedPrenom(prenom)}
                className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all text-left border-2 border-stone-200 hover:border-amber-300 group"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    prenom.gender === 'M' ? 'bg-blue-100 text-blue-700' :
                    prenom.gender === 'F' ? 'bg-pink-100 text-pink-700' :
                    'bg-purple-100 text-purple-700'
                  }`}>
                    {prenom.gender === 'M' ? 'Masculin' : prenom.gender === 'F' ? 'Féminin' : 'Mixte'}
                  </div>
                  <div className="text-xs text-stone-500 font-medium">{prenom.ethnie}</div>
                </div>

                <h3 className="text-2xl font-bold text-stone-900 mb-2 group-hover:text-amber-700 transition-colors">
                  {prenom.name}
                </h3>

                <p className="text-amber-700 font-semibold text-sm mb-3">
                  {prenom.meaning}
                </p>

                <p className="text-stone-600 text-sm line-clamp-2">
                  {prenom.description}
                </p>
              </motion.button>
            ))}
          </div>

          {filteredPrenoms.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-stone-400" />
              </div>
              <p className="text-stone-600 text-lg">Aucun prénom trouvé</p>
              <p className="text-stone-500 text-sm mt-2">Essayez de modifier vos filtres</p>
            </div>
          )}
        </div>
      </section>

      {/* Section Importance culturelle */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-stone-900 mb-4">
              L'Importance du Prénom en Afrique
            </h2>
            <p className="text-lg text-stone-600 max-w-3xl mx-auto">
              Au Bénin, le prénom n'est pas qu'un simple identifiant, c'est une prophétie, 
              un message, un héritage qui guide l'enfant tout au long de sa vie.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Calendar,
                title: "Jour de naissance",
                description: "Certaines ethnies donnent des prénoms selon le jour de la semaine de naissance",
                example: "Kossi (dimanche), Adjoua (lundi)"
              },
              {
                icon: Users,
                title: "Circonstances",
                description: "Les événements entourant la naissance influencent le choix du prénom",
                example: "Alihonou (né sur la route)"
              },
              {
                icon: Heart,
                title: "Espoirs parentaux",
                description: "Le prénom exprime les souhaits et aspirations des parents pour l'enfant",
                example: "Dotou (courage), Ayihè (prospérité)"
              },
              {
                icon: Sparkles,
                title: "Héritage ancestral",
                description: "Certains prénoms honorent les ancêtres et maintiennent le lien spirituel",
                example: "Babatoundji (papa est de retour)"
              }
            ].map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-stone-50 rounded-2xl p-6 hover:shadow-lg transition-all"
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-amber-500 to-orange-500 rounded-xl flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-stone-900 mb-2">{item.title}</h3>
                  <p className="text-stone-600 text-sm mb-3">{item.description}</p>
                  <div className="bg-white rounded-lg p-3 border-l-4 border-amber-500">
                    <p className="text-xs text-stone-500 font-medium">Exemple :</p>
                    <p className="text-sm text-amber-700 font-semibold">{item.example}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Modal détails prénom */}
      {selectedPrenom && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setSelectedPrenom(null)}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.9, y: 20 }}
            animate={{ scale: 1, y: 0 }}
            onClick={(e) => e.stopPropagation()}
            className="bg-white rounded-3xl max-w-2xl w-full shadow-2xl overflow-hidden"
          >
            <div className="bg-gradient-to-br from-amber-500 to-orange-600 p-8 text-center relative">
              <button
                onClick={() => setSelectedPrenom(null)}
                className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm p-2 rounded-full hover:bg-white/30 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              
              <h2 className="font-display text-4xl font-bold text-white mb-2">
                {selectedPrenom.name}
              </h2>
              <p className="text-white/90 text-xl mb-4">{selectedPrenom.meaning}</p>
              
              <div className="flex items-center justify-center gap-4">
                <span className={`px-4 py-2 rounded-full text-sm font-semibold ${
                  selectedPrenom.gender === 'M' ? 'bg-blue-500/20 text-white' :
                  selectedPrenom.gender === 'F' ? 'bg-pink-500/20 text-white' :
                  'bg-purple-500/20 text-white'
                }`}>
                  {selectedPrenom.gender === 'M' ? 'Masculin' : selectedPrenom.gender === 'F' ? 'Féminin' : 'Mixte'}
                </span>
                <span className="px-4 py-2 rounded-full text-sm font-semibold bg-white/20 text-white">
                  Ethnie {selectedPrenom.ethnie}
                </span>
              </div>
            </div>

            <div className="p-8">
              <div className="bg-amber-50 rounded-xl p-6 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Info className="w-5 h-5 text-amber-600" />
                  <h3 className="font-bold text-amber-900">Signification détaillée</h3>
                </div>
                <p className="text-amber-800 leading-relaxed">{selectedPrenom.description}</p>
              </div>

              <div className="bg-stone-50 rounded-xl p-6">
                <h3 className="font-bold text-stone-900 mb-3">Contexte culturel</h3>
                <p className="text-stone-600 text-sm leading-relaxed">
                  Ce prénom fait partie du riche patrimoine culturel de l'ethnie {selectedPrenom.ethnie} du Bénin. 
                  Comme tous les prénoms africains traditionnels, il porte en lui une histoire, des valeurs et 
                  des aspirations qui guideront l'enfant tout au long de sa vie.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}
