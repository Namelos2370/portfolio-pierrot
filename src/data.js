export const NOM = "Minkoua Lissa Pierrot";

/* Pour utiliser une vraie image : ajouter  img:"assets/nom-fichier.jpg"  à un projet. Sinon un visuel illustré est affiché. Les textes des projets sont à compléter avec les vraies réalisations. */
export const PROJETS = [
  {cat:"magazines", year:"2015–2020", client:{fr:"GUCE et agences de Douala",en:"GUCE and Douala agencies"}, tools:{fr:"Mise en page, illustration",en:"Layout, illustration"},
   t:{fr:"Magazines du GUCE", en:"GUCE magazines"},
   d:{fr:"Conception et mise en page de magazines.", en:"Magazine design and layout."},
   long:{fr:"Conception de magazines, de la maquette à la préparation des fichiers pour l'imprimerie, avec le respect de la résolution et de la charte graphique définie par le client. À compléter avec des pages réelles.", en:"Magazine design from mock-up to print-ready files, respecting resolution and the client's style guide. To be completed with real pages."},
   deliv:{fr:["Maquette et mise en page","Illustrations","Fichiers prêts pour l'imprimerie"], en:["Mock-up and layout","Illustrations","Print-ready files"]},
   motif:"magazine", c:["#FFC736","#2848F0","#0E1A2B"]},
  {cat:"marques", year:"2009–2025", client:{fr:"Agences et entreprises",en:"Agencies and companies"}, tools:{fr:"Logo, charte graphique",en:"Logo, style guide"},
   t:{fr:"Création de marques", en:"Brand creation"},
   d:{fr:"Logos et identités visuelles pour petites et grandes entreprises.", en:"Logos and visual identities for small and large companies."},
   long:{fr:"Création de logos et d'identités visuelles pour des entreprises, des startups et des projets en ligne ou en présentiel. À compléter avec les marques réelles.", en:"Logos and visual identities for companies, startups and projects, online and in person. To be completed with the real brands."},
   deliv:{fr:["Logo et variantes","Palette et typographies","Charte graphique"], en:["Logo and variants","Palette and typefaces","Style guide"]},
   motif:"brand", c:["#FF5B4A","#0E1A2B","#FFC736"]},
  {cat:"publicite", year:"2009–2020", client:{fr:"Agences de communication",en:"Communication agencies"}, tools:{fr:"Gadgets, print",en:"Promotional items, print"},
   t:{fr:"Gadgets publicitaires", en:"Promotional items"},
   d:{fr:"Conception de gadgets pour des campagnes web et terrain.", en:"Promotional items for web and field campaigns."},
   long:{fr:"Conception de gadgets publicitaires et de supports pour des campagnes sur le web comme sur le terrain, avec suivi de production en imprimerie.", en:"Promotional items and materials for web and field campaigns, with print production follow-up."},
   deliv:{fr:["Gadgets publicitaires","Supports de campagne","Suivi d'impression"], en:["Promotional items","Campaign materials","Print follow-up"]},
   motif:"gadgets", c:["#FF5B4A","#FFC736","#2848F0"]},
  {cat:"reseaux", year:"2021–2025", client:{fr:"KN Digital Agency",en:"KN Digital Agency"}, tools:{fr:"Visuels, publications",en:"Visuals, posts"},
   t:{fr:"Publications pour KN Digital Agency", en:"Posts for KN Digital Agency"},
   d:{fr:"Visuels et publications réalisés en télétravail pour une agence au Cameroun.", en:"Visuals and posts created remotely for an agency in Cameroon."},
   long:{fr:"Réalisation de visuels et de publications pour les réseaux sociaux d'une agence de communication au Cameroun, en télétravail.", en:"Visuals and social media posts for a communication agency in Cameroon, working remotely."},
   deliv:{fr:["Visuels pour réseaux sociaux","Publications régulières"], en:["Social media visuals","Regular posts"]},
   motif:"social", c:["#2848F0","#FFFFFF","#FF5B4A"]},
  {cat:"photovideo", year:"2024–aujourd'hui", client:{fr:"Ministères (MINRESI, MINCOM)",en:"Ministries (MINRESI, MINCOM)"}, tools:{fr:"Photo, vidéo, montage",en:"Photo, video, editing"},
   t:{fr:"Photo et vidéo d'événements", en:"Event photo and video"},
   d:{fr:"Couverture photo et vidéo de cérémonies et événements.", en:"Photo and video coverage of ceremonies and events."},
   long:{fr:"Prise de photos et de vidéos lors de cérémonies de tout type, en plus de la communication web et print et de l'archivage des discours.", en:"Photos and videos at ceremonies of all kinds, alongside web and print communication and the archiving of speeches."},
   deliv:{fr:["Photos d'événements","Vidéos et montage","Archivage"], en:["Event photos","Video and editing","Archiving"]},
   motif:"photovideo", c:["#0E1A2B","#2848F0","#FFC736"]},
  {cat:"interieur", year:"2021–2025", client:{fr:"Particuliers",en:"Private clients"}, tools:{fr:"Plans, design",en:"Plans, design"},
   t:{fr:"Plans de maison et design intérieur", en:"House plans and interior design"},
   d:{fr:"Plans de construction et aménagement intérieur.", en:"Construction plans and interior layout."},
   long:{fr:"Réalisation de plans de construction de maison et de design d'intérieur pour des clients particuliers.", en:"House construction plans and interior design for private clients."},
   deliv:{fr:["Plans de construction","Design d'intérieur"], en:["Construction plans","Interior design"]},
   motif:"interior", c:["#2848F0","#FF5B4A","#FFC736"]}
];

export const EXP = [
  {p:"2024 – aujourd'hui", pe:"2024 – present", t:{fr:"Personnel indépendant · MINRESI et MINCOM", en:"Freelance staff · MINRESI and MINCOM"}, d:{fr:"Communication web et print au sein de la cellule communication, archivage des discours ministériels, photos et vidéos d'événements.", en:"Web and print communication within the communication unit, archiving of ministerial speeches, event photos and videos."}},
  {p:"2021 – 2025", pe:"2021 – 2025", t:{fr:"Consultant graphique et formateur · Freelance", en:"Graphic consultant and trainer · Freelance"}, d:{fr:"Besoins graphiques d'entreprises et de startups, campagnes publicitaires, pilotage de la communication sur les réseaux, formation en centres agréés et en privé.", en:"Graphic needs of companies and startups, ad campaigns, social media management, training in accredited centres and privately."}},
  {p:"2015 – 2020", pe:"2015 – 2020", t:{fr:"Infographe principal, art contrôleur · Sprint et Unicom, Douala", en:"Lead graphic artist, art director · Sprint and Unicom, Douala"}, d:{fr:"Création de concepts graphiques, conception des magazines du GUCE, suivi de production et de livraison.", en:"Graphic concepts, design of the GUCE magazines, production and delivery follow-up."}},
  {p:"2009 – 2015", pe:"2009 – 2015", t:{fr:"Infographe · Agence Bleumark, Douala", en:"Graphic artist · Bleumark agency, Douala"}, d:{fr:"Amélioration de la communication : gadgets publicitaires, scénarios de spots pour le digital et la télévision.", en:"Communication improvement: promotional items, spot scripts for digital and television."}}
];
export const EDU = [
  {p:"Juin 2013", pe:"June 2013", t:{fr:"DQP en infographie de production · ISEM-IBCG, Douala", en:"Production graphics diploma (DQP) · ISEM-IBCG, Douala"}, d:{fr:"Spécialisation en design lié aux cultures européenne et africaine.", en:"Specialisation in design linked to European and African cultures."}},
  {p:"Octobre 2011", pe:"October 2011", t:{fr:"Formation en communication digitale · CIS, Douala", en:"Digital communication training · CIS, Douala"}, d:{fr:"", en:""}},
  {p:"2010", pe:"2010", t:{fr:"Baccalauréat scientifique", en:"Science baccalaureate"}, d:{fr:"", en:""}}
];
export const SKILLS = {
  fr:["Conception de magazines","Illustration","Création de marques","Formation en infographie","Photographie","Retouche photo et IA","Montage vidéo","Fichiers pour l'impression","Gadgets publicitaires","Création de contenus"],
  en:["Magazine design","Illustration","Brand creation","Graphic design training","Photography","Photo retouching and AI","Video editing","Print file preparation","Promotional items","Content creation"]
};
/* ================================================ */

export const T = {
 fr:{nav_home:"Accueil",menu:"Menu",close:"Fermer",h_featured:"Projets à la une",see_all:"Voir tous les projets",
  work_lead:"Une sélection en magazines, marques, publicité, réseaux sociaux, photo et vidéo.",
  services_lead:"Du concept à la livraison des fichiers : un seul interlocuteur pour tout votre visuel.",
  about_lead:"Plus de 8 ans en agence de communication, de la maquette à l'imprimerie.",
  contact_lead:"Décrivez votre besoin, je vous réponds rapidement avec un devis.",
  form_name:"Votre nom",form_msg:"Votre message",form_send:"Envoyer sur WhatsApp",form_note:"Le message s'ouvre dans WhatsApp, prêt à envoyer.",
  cta_title:"Un projet en tête ?",cta_p:"Parlons-en : devis rapide et sans engagement.",
  nf_title:"Page introuvable",nf_p:"Cette page n'existe pas ou a été déplacée.",nf_back:"Retour à l'accueil",skills_h:"Compétences",
  nav_work:"Réalisations",nav_services:"Services",nav_about:"À propos",nav_path:"Parcours",nav_contact:"Contact",cta_quote:"Demander un devis",cta_work:"Voir mes réalisations",tag:"Infographe · Photographe · Vidéaste",
  h1:"Des visuels qui font <em>parler</em> votre marque.",lead:"Magazines, marques, gadgets publicitaires, photo et vidéo. Plus de 8 ans en agence de communication, à Yaoundé et partout au Cameroun.",
  s1:"ans en agence de communication",s2:"agences partenaires",s3:"métiers : graphisme, photo, vidéo",h_work:"Mes projets récents",h_services:"Ce que je fais pour vous",
  sv1t:"Magazines et illustrations",sv1d:"Conception de magazines, mise en page et illustrations pour la presse et l'édition.",
  sv2t:"Marques et identité visuelle",sv2d:"Logo, couleurs, typographies et charte graphique cohérente pour votre marque.",
  sv3t:"Gadgets et impression",sv3d:"Gadgets publicitaires et fichiers préparés pour chaque type d'impression, avec la bonne résolution.",
  sv4t:"Photo et vidéo",sv4d:"Photographie d'événements, reportages, retouche et montage vidéo professionnel.",
  h_about:"Un graphiste de terrain, formé en agence",about:"Diplômé en infographie de production (ISEM-IBCG, Douala), j'ai travaillé plus de 8 ans dans des agences de communication : illustration de magazines, conception de marques, gadgets publicitaires, et suivi des productions en imprimerie pour respecter la résolution et les chartes graphiques. Je fais aussi de la photo et du montage vidéo, et je forme des apprenants au graphisme.",h_path:"Mon expérience",h_edu:"Formation",ref_link:"Voir plus de réalisations",
  eb_process:"Méthode",h_process:"De votre brief au fichier final",p1t:"Brief",p1d:"Vous me décrivez le besoin, le public et vos références. Réponse le jour même.",
  p2t:"Proposition",p2d:"Je vous envoie une première maquette sous 48 heures.",p3t:"Retouches",p3d:"Des corrections pour arriver exactement à ce que vous voulez.",
  p4t:"Livraison",p4d:"Fichiers HD pour le web et l'impression, plus les sources modifiables.",
  h_contact:"Parlons de votre projet",contact_p:"Décrivez votre besoin en quelques lignes, je vous réponds rapidement avec un devis.",foot:"Infographe, photographe et vidéaste",
  all:"Tout",magazines:"Magazines",marques:"Marques",publicite:"Gadgets publicitaires",reseaux:"Réseaux sociaux",photovideo:"Photo et vidéo",interieur:"Plans et design intérieur",
  back:"← Toutes les réalisations",client:"Client",year:"Année",tools:"Domaine",cat:"Catégorie",deliv:"Livrables",prev:"Projet précédent",next:"Projet suivant",
  more:"Voir le projet →",similar:"Un projet similaire ?",similar_p:"Parlons-en : je vous réponds avec un devis.",title:"Infographe, photographe, vidéaste",
  desc:"Minkoua Lissa Pierrot, infographe, monteur graphique, photographe et vidéaste à Yaoundé. Magazines, marques, gadgets publicitaires, photo et vidéo."},
 en:{nav_home:"Home",menu:"Menu",close:"Close",h_featured:"Featured projects",see_all:"See all projects",
  work_lead:"A selection of magazines, brands, advertising, social media, photo and video.",
  services_lead:"From concept to final files: one contact for all your visuals.",
  about_lead:"Over 8 years in communication agencies, from mock-up to print shop.",
  contact_lead:"Describe your need and I will reply quickly with a quote.",
  form_name:"Your name",form_msg:"Your message",form_send:"Send on WhatsApp",form_note:"The message opens in WhatsApp, ready to send.",
  cta_title:"Got a project in mind?",cta_p:"Let's talk: quick quote, no commitment.",
  nf_title:"Page not found",nf_p:"This page does not exist or has moved.",nf_back:"Back to home",skills_h:"Skills",
  nav_work:"Work",nav_services:"Services",nav_about:"About",nav_path:"Experience",nav_contact:"Contact",cta_quote:"Request a quote",cta_work:"See my work",tag:"Graphic designer · Photographer · Videographer",
  h1:"Visuals that make your brand <em>speak</em>.",lead:"Magazines, brands, promotional items, photo and video. Over 8 years in communication agencies, in Yaoundé and across Cameroon.",
  s1:"years in communication agencies",s2:"partner agencies",s3:"skills: graphics, photo, video",h_work:"Recent projects",h_services:"What I do for you",
  sv1t:"Magazines and illustration",sv1d:"Magazine design, layout and illustrations for press and publishing.",
  sv2t:"Brands and visual identity",sv2d:"Logo, colours, typefaces and a consistent style guide for your brand.",
  sv3t:"Promotional items and print",sv3d:"Promotional items and files prepared for every kind of printing, at the right resolution.",
  sv4t:"Photo and video",sv4d:"Event photography, reporting, retouching and professional video editing.",
  h_about:"A hands-on designer trained in agencies",about:"A graduate in production graphics (ISEM-IBCG, Douala), I have worked over 8 years in communication agencies: magazine illustration, brand creation, promotional items, and print production follow-up to respect resolution and style guides. I also do photography and video editing, and I train learners in graphic design.",h_path:"My experience",h_edu:"Education",ref_link:"See more work",
  eb_process:"Process",h_process:"From your brief to the final file",p1t:"Brief",p1d:"You describe the need, the audience and your references. Reply the same day.",
  p2t:"Proposal",p2d:"I send you a first mock-up within 48 hours.",p3t:"Revisions",p3d:"Revisions so you get exactly what you want.",
  p4t:"Delivery",p4d:"HD files for web and print, plus the editable source files.",
  h_contact:"Let's talk about your project",contact_p:"Describe your need in a few lines and I will reply quickly with a quote.",foot:"Graphic designer, photographer and videographer",
  all:"All",magazines:"Magazines",marques:"Brands",publicite:"Promotional items",reseaux:"Social media",photovideo:"Photo and video",interieur:"Plans and interior design",
  back:"← All work",client:"Client",year:"Year",tools:"Field",cat:"Category",deliv:"Deliverables",prev:"Previous project",next:"Next project",
  more:"View project →",similar:"A similar project?",similar_p:"Let's talk: I will reply with a quote.",title:"Graphic designer, photographer, videographer",
  desc:"Minkoua Lissa Pierrot, graphic designer, photographer and videographer in Yaoundé. Magazines, brands, promotional items, photo and video."}
};

export const CONTACT = {
  whatsapp: "https://wa.me/237621775204", whatsappLabel: "+237 621 77 52 04",
  email: "pielissa2020@gmail.com",
  facebook: "https://fb.me/kndigitalagency02/", facebookLabel: "KN Digital Agency",
  drive: "https://drive.google.com/drive/folders/1CODM7HfTrr4Oty-VPvnVWuBqqzqRgvmKe?usp=drive_link"
};
