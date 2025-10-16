import { createContext, useCallback, useContext, useEffect, useMemo, useState, ReactNode } from "react";

export type SupportedLocale = "en" | "pt" | "fr" | "es";

type Dictionary = Record<string, string>;

type Messages = Record<SupportedLocale, Dictionary>;

const STORAGE_KEY = "app.locale";

const messages: Messages = {
  en: {
    nav_home: "Home",
    nav_about: "About",
    nav_products: "Products",
    nav_services: "Services",
    nav_location: "Location",
    nav_contact: "Contact Us",

    hero_title: "Premium Quality Cereals from the Heart of Africa",
    hero_subtitle: "UNIQUE CEREALS (PTY) LTD delivers excellence in agricultural trading across Southern Africa, connecting farmers with global markets since 2021.",
    hero_cta_contact: "Get In Touch",
    hero_cta_products: "View Products",
    hero_alt: "Premium quality cereals",

    about_title: "About Us",
    about_p1: "Established in Mozambique in June 2021 also registered in South África, UNIQUE CEREALS is a food and nutrition trading company active across all phases of the agricultural value chain. We continuously strive to build and optimise our portfolio by developing and expanding existing licenses, as well as acquiring new ones through licensing rounds or partnerships with other license holders.",
    about_p2: "UNIQUE CEREALS has partnership with more than 20 international food and nutrition companies, operating worldwide.",
    about_vision_title: "Our Vision",
    about_vision_text: "To be recognised as the company and partner of choice in the African food and nutrition industry — delivering on our promises, pioneering new opportunities and approaches, and bringing value to our industry, shareholders, and community.",
    about_mission_title: "Our Mission",
    about_mission_text: "To make long-term difference in our industry and earn the trust of our partners and shareholders.",
    about_core_values_title: "Our Core Values",
    about_value_trust_title: "THE TRUST EARNED",
    about_value_trust_desc: "Trust isn't given, it's earned. By consistently delivering on our promises whether to our collegues, partners or shareholders, we build successeful relationships that are build on accountability and mutual respect. This is essential to our long-term success.",
    about_value_company_title: "PUTTING THE COMPANY FIRST",
    about_value_company_desc: "We know we can achieve more as a company than we can as individuals. Our collegial culture and flat herarchy means, we consider different points of view and approaches to deliver the best solutions for the business. When the business succeed, we succeed.",
    about_value_drive_title: "OUR DRIVE TO SUCCESS",
    about_value_drive_desc: "Our passion for what we do Comes through in every area of our business. We are confident and open minded, which enables us to pioneer new and better solutions and approaches whether analysing data or at the negociation table.",

    products_core_title: "CORE BUSINESS",
    products_core_desc: "UNIQUE CEREALS core business revolves around 7 types of cereal originating from the central and northern regions of Mozambique. We also handle various other beans, seeds, oils, and vegetables, maintaining our expertise in the origination and marketing of all cereals present in the country and continent region.",
    products_main_title: "MAIN CEREALS",
    products_add_beans_title: "Additional Beans",
    products_add_products_title: "Additional Products",
    products_quality_title: "Quality You Can Trust",
    products_quality_desc: "UNIQUE CEREALS sources all products primarily from Mozambique's central and northern regions, ensuring the highest quality standards. We provide comprehensive monitoring throughout the supply chain with quality checks and logistics supervision.",

    services_strengths_title: "Our Strengths",
    services_strengths_desc: "Delivering excellence through reliable and customized execution",
    services_item1_title: "Global Supply Chain",
    services_item1_desc: "Specialized and competitive supply of high-quality cereals on FOB and CIF basis",
    services_item2_title: "Quality Assurance",
    services_item2_desc: "Comprehensive  monitoring  of the  supply  Chain  with quality checks and supervision of logistics and loading",
    services_item3_title: "Flexible Pricing",
    services_item3_desc: "A Wide  range of pricing  mechanism  including future contracts and options",
    services_item4_title: "Tailored Services",
    services_item4_desc: "A high degree of flexibility tailored-made services for issuance of documents.",
    services_stat_partners_label: "International Partners",
    services_stat_partners_sub: "Operating worldwide",
    services_stat_established_label: "Established",
    services_stat_established_sub: "Growing stronger every year",
    services_stat_products_label: "Core Products",
    services_stat_products_sub: "Premium quality cereals",

    location_reach_title: "Our Reach",
    location_reach_desc: "Operating across Southern Africa with strong presence in Mozambique and South Africa",
    location_hq_title: "Headquarters - Mozambique",
    location_hq_desc: "Based in Maputo, the capital city, our headquarters coordinates operations across the central and northern regions of Mozambique, where we source the finest quality cereals.",
    location_address_label: "Address:",
    location_regional_title: "Regional Operations",
    location_regional_desc: "Our strategy focuses on development opportunities in Africa, particularly in Southern Africa, including strong operations in South Africa.",
    location_coverage_label: "Coverage Areas:",
    mozambique: "Mozambique",
    south_africa: "South Africa",
    southern_africa: "Southern Africa",
    location_growth_title: "Strategic Growth in Africa",
    location_growth_desc: "Our strategy is augmented through a commitment to further grow by maintaining our established focus on development opportunities in Africa, particularly in the Southern Africa region, whilst keeping our portfolio in balance to ensure a steady flow of projects to grow value and reserves.",

    contact_title: "Get In Touch",
    contact_desc: "Ready to partner with us? Reach out and let's discuss how we can serve your needs",
    contact_info_title: "Contact Information",
    contact_email_label: "Email",
    contact_open_gmail: "(Open in Gmail)",
    contact_whatsapp_label: "WhatsApp",
    contact_click_to_chat: "(Click to chat)",
    contact_phones_label: "Phone Numbers",
    contact_address_label: "Address",
    contact_business_hours_title: "Business Hours",
    contact_hours_mon_fri: "Monday - Friday: 8:00 AM - 5:00 PM",
    contact_hours_sat: "Saturday: 8:00 AM - 12:00 PM",
    contact_hours_sun: "Sunday: Closed",
    contact_form_title: "Send Us a Message",
    contact_full_name: "Full Name",
    contact_full_name_ph: "John Doe",
    contact_email: "Email Address",
    contact_email_ph: "john@example.com",
    contact_message: "Message",
    contact_message_ph: "Tell us about your requirements...",
    contact_send: "Send Message",
    toast_sent_title: "Message Sent!",
    toast_sent_desc: "Thank you for contacting us. We'll get back to you soon.",

    footer_tagline: "Premium quality cereals from the heart of Africa. Established in 2021, we connect farmers with global markets across Southern Africa.",
    footer_quick_links: "Quick Links",
    footer_contact: "Contact",
    footer_rights: "All rights reserved.",
  },
  pt: {
    nav_home: "Início",
    nav_about: "Sobre",
    nav_products: "Produtos",
    nav_services: "Serviços",
    nav_location: "Localização",
    nav_contact: "Contacte-nos",

    hero_title: "Cereais de Qualidade Premium do Coração de África",
    hero_subtitle: "UNIQUE CEREALS (PTY) LTD oferece excelência no comércio agrícola na África Austral, ligando agricultores aos mercados globais desde 2021.",
    hero_cta_contact: "Fale Conosco",
    hero_cta_products: "Ver Produtos",
    hero_alt: "Cereais de qualidade premium",

    about_title: "Sobre Nós",
    about_p1: "Estabelecida em Moçambique em junho de 2021 e também registada na África do Sul, a UNIQUE CEREALS é uma empresa de comércio de alimentos e nutrição ativa em todas as fases da cadeia de valor agrícola.",
    about_p2: "A UNIQUE CEREALS tem parceria com mais de 20 empresas internacionais de alimentos e nutrição, operando mundialmente.",
    about_vision_title: "Nossa Visão",
    about_vision_text: "Ser reconhecida como a empresa e parceira de escolha na indústria alimentar e de nutrição em África — cumprindo promessas, pioneirando novas oportunidades e trazendo valor para o setor, acionistas e comunidade.",
    about_mission_title: "Nossa Missão",
    about_mission_text: "Fazer diferença a longo prazo no nosso setor e conquistar a confiança dos parceiros e acionistas.",
    about_core_values_title: "Nossos Valores",
    about_value_trust_title: "CONFIANÇA CONQUISTADA",
    about_value_trust_desc: "A confiança é conquistada ao cumprirmos as promessas, construindo relações baseadas em responsabilidade e respeito.",
    about_value_company_title: "EMPRESA EM PRIMEIRO LUGAR",
    about_value_company_desc: "Conseguimos mais como empresa do que individualmente; consideramos diferentes pontos de vista para melhores soluções.",
    about_value_drive_title: "NOSSA VONTADE DE VENCER",
    about_value_drive_desc: "A paixão pelo que fazemos permite-nos pioneirar soluções melhores em todas as áreas do negócio.",

    products_core_title: "NEGÓCIO PRINCIPAL",
    products_core_desc: "O nosso negócio centra‑se em 7 tipos de cereais das regiões centro e norte de Moçambique, além de outras leguminosas, sementes e óleos.",
    products_main_title: "CEREAIS PRINCIPAIS",
    products_add_beans_title: "Outras Leguminosas",
    products_add_products_title: "Outros Produtos",
    products_quality_title: "Qualidade em que Pode Confiar",
    products_quality_desc: "A UNIQUE CEREALS garante padrões elevados com monitorização e controlo de qualidade em toda a cadeia logística.",

    services_strengths_title: "Nossas Forças",
    services_strengths_desc: "Excelência através de execução fiável e personalizada",
    services_item1_title: "Cadeia de Abastecimento Global",
    services_item1_desc: "Fornecimento especializado e competitivo de cereais de alta qualidade em base FOB e CIF",
    services_item2_title: "Garantia de Qualidade",
    services_item2_desc: "Monitorização abrangente da cadeia com controlos de qualidade e supervisão logística",
    services_item3_title: "Preços Flexíveis",
    services_item3_desc: "Várias modalidades de preço incluindo contratos futuros e opções",
    services_item4_title: "Serviços Personalizados",
    services_item4_desc: "Elevada flexibilidade e serviços feitos à medida para emissão de documentos.",
    services_stat_partners_label: "Parceiros Internacionais",
    services_stat_partners_sub: "Operando mundialmente",
    services_stat_established_label: "Fundada",
    services_stat_established_sub: "Crescendo mais forte a cada ano",
    services_stat_products_label: "Produtos Principais",
    services_stat_products_sub: "Cereais de qualidade premium",

    location_reach_title: "Nossa Presença",
    location_reach_desc: "Atuação na África Austral com forte presença em Moçambique e África do Sul",
    location_hq_title: "Sede - Moçambique",
    location_hq_desc: "Com base em Maputo, coordenamos operações nas regiões centro e norte de Moçambique.",
    location_address_label: "Endereço:",
    location_regional_title: "Operações Regionais",
    location_regional_desc: "Foco em oportunidades de desenvolvimento em África, especialmente na África Austral.",
    location_coverage_label: "Áreas de Cobertura:",
    mozambique: "Moçambique",
    south_africa: "África do Sul",
    southern_africa: "África Austral",
    location_growth_title: "Crescimento Estratégico em África",
    location_growth_desc: "Compromisso em crescer mantendo o foco em oportunidades na África Austral e equilibrando o portfólio.",

    contact_title: "Fale Conosco",
    contact_desc: "Pronto para ser nosso parceiro? Fale connosco e vamos discutir como servir você",
    contact_info_title: "Informações de Contacto",
    contact_email_label: "Email",
    contact_open_gmail: "(Abrir no Gmail)",
    contact_whatsapp_label: "WhatsApp",
    contact_click_to_chat: "(Clique para conversar)",
    contact_phones_label: "Telefones",
    contact_address_label: "Endereço",
    contact_business_hours_title: "Horário de Funcionamento",
    contact_hours_mon_fri: "Segunda - Sexta: 8:00 - 17:00",
    contact_hours_sat: "Sábado: 8:00 - 12:00",
    contact_hours_sun: "Domingo: Encerrado",
    contact_form_title: "Envie-nos uma Mensagem",
    contact_full_name: "Nome Completo",
    contact_full_name_ph: "João Silva",
    contact_email: "Endereço de Email",
    contact_email_ph: "joao@exemplo.com",
    contact_message: "Mensagem",
    contact_message_ph: "Conte-nos os seus requisitos...",
    contact_send: "Enviar Mensagem",
    toast_sent_title: "Mensagem Enviada!",
    toast_sent_desc: "Obrigado pelo contacto. Responderemos em breve.",

    footer_tagline: "Cereais de qualidade premium do coração de África. Desde 2021 conectamos agricultores a mercados globais.",
    footer_quick_links: "Links Rápidos",
    footer_contact: "Contacto",
    footer_rights: "Todos os direitos reservados.",
  },
  fr: {
    nav_home: "Accueil",
    nav_about: "À propos",
    nav_products: "Produits",
    nav_services: "Services",
    nav_location: "Emplacement",
    nav_contact: "Nous contacter",

    hero_title: "Céréales de qualité premium au cœur de l'Afrique",
    hero_subtitle: "UNIQUE CEREALS (PTY) LTD excelle dans le commerce agricole en Afrique australe, reliant les agriculteurs aux marchés mondiaux depuis 2021.",
    hero_cta_contact: "Nous écrire",
    hero_cta_products: "Voir les produits",
    hero_alt: "Céréales de qualité premium",

    about_title: "À propos de nous",
    about_p1: "Créée au Mozambique en juin 2021 et également enregistrée en Afrique du Sud, UNIQUE CEREALS est active sur toute la chaîne de valeur agricole.",
    about_p2: "UNIQUE CEREALS collabore avec plus de 20 entreprises internationales d'alimentation et de nutrition, opérant dans le monde entier.",
    about_vision_title: "Notre Vision",
    about_vision_text: "Être reconnue comme le partenaire de référence dans l'industrie alimentaire et nutritionnelle en Afrique.",
    about_mission_title: "Notre Mission",
    about_mission_text: "Apporter un impact durable et gagner la confiance de nos partenaires et actionnaires.",
    about_core_values_title: "Nos Valeurs",
    about_value_trust_title: "LA CONFIANCE GAGNÉE",
    about_value_trust_desc: "La confiance se gagne en tenant nos promesses, bâtissant des relations fondées sur la responsabilité et le respect.",
    about_value_company_title: "L'ENTREPRISE D'ABORD",
    about_value_company_desc: "Nous réussissons davantage ensemble; nous considérons des points de vue variés pour les meilleures solutions.",
    about_value_drive_title: "NOTRE VOLONTÉ DE RÉUSSIR",
    about_value_drive_desc: "Notre passion nous permet de proposer des solutions meilleures dans toutes les activités.",

    products_core_title: "ACTIVITÉ PRINCIPALE",
    products_core_desc: "Notre activité porte sur 7 types de céréales des régions centrale et nord du Mozambique, ainsi que d'autres légumineuses, graines et huiles.",
    products_main_title: "CÉRÉALES PRINCIPALES",
    products_add_beans_title: "Autres Légumineuses",
    products_add_products_title: "Autres Produits",
    products_quality_title: "Qualité de Confiance",
    products_quality_desc: "UNIQUE CEREALS garantit des standards élevés avec contrôles de qualité et supervision logistique.",

    services_strengths_title: "Nos Atouts",
    services_strengths_desc: "Excellence grâce à une exécution fiable et personnalisée",
    services_item1_title: "Chaîne d'Approvisionnement Globale",
    services_item1_desc: "Approvisionnement spécialisé et compétitif en céréales de haute qualité (FOB/CIF)",
    services_item2_title: "Assurance Qualité",
    services_item2_desc: "Suivi complet de la chaîne avec contrôles qualité et supervision logistique",
    services_item3_title: "Tarification Flexible",
    services_item3_desc: "Large éventail de mécanismes de prix incluant contrats à terme et options",
    services_item4_title: "Services Sur Mesure",
    services_item4_desc: "Grande flexibilité et services personnalisés pour l'émission de documents.",
    services_stat_partners_label: "Partenaires Internationaux",
    services_stat_partners_sub: "Présence mondiale",
    services_stat_established_label: "Création",
    services_stat_established_sub: "Croissance continue chaque année",
    services_stat_products_label: "Produits Clés",
    services_stat_products_sub: "Céréales de qualité premium",

    location_reach_title: "Notre Rayonnement",
    location_reach_desc: "Présence en Afrique australe avec forte implantation au Mozambique et en Afrique du Sud",
    location_hq_title: "Siège - Mozambique",
    location_hq_desc: "Basé à Maputo, nous coordonnons les opérations dans les régions centrale et nord.",
    location_address_label: "Adresse :",
    location_regional_title: "Opérations Régionales",
    location_regional_desc: "Focus sur les opportunités de développement en Afrique, particulièrement en Afrique australe.",
    location_coverage_label: "Zones Couvertes :",
    mozambique: "Mozambique",
    south_africa: "Afrique du Sud",
    southern_africa: "Afrique australe",
    location_growth_title: "Croissance Stratégique en Afrique",
    location_growth_desc: "Engagement à croître en maintenant l'équilibre du portefeuille et le focus sur l'Afrique australe.",

    contact_title: "Nous écrire",
    contact_desc: "Prêt à collaborer ? Contactez‑nous pour discuter de vos besoins",
    contact_info_title: "Informations de Contact",
    contact_email_label: "Email",
    contact_open_gmail: "(Ouvrir dans Gmail)",
    contact_whatsapp_label: "WhatsApp",
    contact_click_to_chat: "(Cliquer pour discuter)",
    contact_phones_label: "Téléphones",
    contact_address_label: "Adresse",
    contact_business_hours_title: "Horaires d'Ouverture",
    contact_hours_mon_fri: "Lundi - Vendredi : 8:00 - 17:00",
    contact_hours_sat: "Samedi : 8:00 - 12:00",
    contact_hours_sun: "Dimanche : Fermé",
    contact_form_title: "Envoyez‑nous un Message",
    contact_full_name: "Nom Complet",
    contact_full_name_ph: "Jean Dupont",
    contact_email: "Adresse Email",
    contact_email_ph: "jean@exemple.com",
    contact_message: "Message",
    contact_message_ph: "Décrivez vos besoins...",
    contact_send: "Envoyer",
    toast_sent_title: "Message envoyé !",
    toast_sent_desc: "Merci pour votre message. Nous vous répondrons rapidement.",

    footer_tagline: "Céréales premium au cœur de l'Afrique. Depuis 2021, nous relions les agriculteurs aux marchés mondiaux.",
    footer_quick_links: "Liens Rapides",
    footer_contact: "Contact",
    footer_rights: "Tous droits réservés.",
  },
  es: {
    nav_home: "Inicio",
    nav_about: "Acerca de",
    nav_products: "Productos",
    nav_services: "Servicios",
    nav_location: "Ubicación",
    nav_contact: "Contáctanos",

    hero_title: "Cereales de calidad premium del corazón de África",
    hero_subtitle: "UNIQUE CEREALS (PTY) LTD destaca en el comercio agrícola en África Austral, conectando agricultores con mercados globales desde 2021.",
    hero_cta_contact: "Contactar",
    hero_cta_products: "Ver Productos",
    hero_alt: "Cereales de calidad premium",

    about_title: "Sobre Nosotros",
    about_p1: "Establecida en Mozambique en junio de 2021 y registrada también en Sudáfrica, UNIQUE CEREALS opera en todas las fases de la cadena de valor agrícola.",
    about_p2: "UNIQUE CEREALS colabora con más de 20 empresas internacionales de alimentación y nutrición.",
    about_vision_title: "Nuestra Visión",
    about_vision_text: "Ser reconocidos como el socio de referencia en la industria alimentaria y de nutrición en África.",
    about_mission_title: "Nuestra Misión",
    about_mission_text: "Marcar una diferencia a largo plazo y ganar la confianza de socios y accionistas.",
    about_core_values_title: "Nuestros Valores",
    about_value_trust_title: "LA CONFIANZA GANADA",
    about_value_trust_desc: "La confianza se gana cumpliendo promesas y construyendo relaciones con responsabilidad y respeto.",
    about_value_company_title: "LA EMPRESA PRIMERO",
    about_value_company_desc: "Logramos más como empresa; consideramos diversos puntos de vista para mejores soluciones.",
    about_value_drive_title: "NUESTRO IMPULSO AL ÉXITO",
    about_value_drive_desc: "Nuestra pasión impulsa soluciones mejores en todas las áreas del negocio.",

    products_core_title: "NEGOCIO PRINCIPAL",
    products_core_desc: "Nuestro negocio gira en torno a 7 tipos de cereales de las regiones central y norte de Mozambique, además de otras legumbres, semillas y aceites.",
    products_main_title: "CEREALES PRINCIPALES",
    products_add_beans_title: "Otras Legumbres",
    products_add_products_title: "Otros Productos",
    products_quality_title: "Calidad en la que Confiar",
    products_quality_desc: "UNIQUE CEREALS garantiza altos estándares con controles de calidad y supervisión logística.",

    services_strengths_title: "Nuestras Fortalezas",
    services_strengths_desc: "Excelencia mediante ejecución fiable y personalizada",
    services_item1_title: "Cadena de Suministro Global",
    services_item1_desc: "Suministro especializado y competitivo de cereales de alta calidad (FOB/CIF)",
    services_item2_title: "Aseguramiento de la Calidad",
    services_item2_desc: "Monitoreo integral de la cadena con controles de calidad y supervisión logística",
    services_item3_title: "Precios Flexibles",
    services_item3_desc: "Amplia gama de mecanismos de precios incluidos futuros y opciones",
    services_item4_title: "Servicios a Medida",
    services_item4_desc: "Gran flexibilidad y servicios personalizados para la emisión de documentos.",
    services_stat_partners_label: "Socios Internacionales",
    services_stat_partners_sub: "Operando en todo el mundo",
    services_stat_established_label: "Fundada",
    services_stat_established_sub: "Creciendo cada año",
    services_stat_products_label: "Productos Clave",
    services_stat_products_sub: "Cereales de calidad premium",

    location_reach_title: "Nuestro Alcance",
    location_reach_desc: "Operamos en África Austral con fuerte presencia en Mozambique y Sudáfrica",
    location_hq_title: "Sede - Mozambique",
    location_hq_desc: "Con base en Maputo, coordinamos operaciones en las regiones central y norte de Mozambique.",
    location_address_label: "Dirección:",
    location_regional_title: "Operaciones Regionales",
    location_regional_desc: "Estrategia centrada en oportunidades de desarrollo en África, especialmente en África Austral.",
    location_coverage_label: "Áreas de Cobertura:",
    mozambique: "Mozambique",
    south_africa: "Sudáfrica",
    southern_africa: "África Austral",
    location_growth_title: "Crecimiento Estratégico en África",
    location_growth_desc: "Compromiso de crecimiento manteniendo el enfoque en África Austral y el equilibrio del portafolio.",

    contact_title: "Contactar",
    contact_desc: "¿Listo para asociarte? Escríbenos y hablemos de tus necesidades",
    contact_info_title: "Información de Contacto",
    contact_email_label: "Correo",
    contact_open_gmail: "(Abrir en Gmail)",
    contact_whatsapp_label: "WhatsApp",
    contact_click_to_chat: "(Clic para chatear)",
    contact_phones_label: "Teléfonos",
    contact_address_label: "Dirección",
    contact_business_hours_title: "Horario de Atención",
    contact_hours_mon_fri: "Lunes - Viernes: 8:00 - 17:00",
    contact_hours_sat: "Sábado: 8:00 - 12:00",
    contact_hours_sun: "Domingo: Cerrado",
    contact_form_title: "Envíanos un Mensaje",
    contact_full_name: "Nombre Completo",
    contact_full_name_ph: "Juan Pérez",
    contact_email: "Correo Electrónico",
    contact_email_ph: "juan@ejemplo.com",
    contact_message: "Mensaje",
    contact_message_ph: "Cuéntanos tus requisitos...",
    contact_send: "Enviar",
    toast_sent_title: "¡Mensaje enviado!",
    toast_sent_desc: "Gracias por contactarnos. Te responderemos pronto.",

    footer_tagline: "Cereales premium del corazón de África. Desde 2021 conectamos agricultores con mercados globales.",
    footer_quick_links: "Enlaces Rápidos",
    footer_contact: "Contacto",
    footer_rights: "Todos los derechos reservados.",
  },
};

type I18nContextValue = {
  locale: SupportedLocale;
  setLocale: (locale: SupportedLocale) => void;
  t: (key: string) => string;
};

const I18nContext = createContext<I18nContextValue | undefined>(undefined);

function getInitialLocale(): SupportedLocale {
  const fromStorage = (typeof window !== "undefined" && (localStorage.getItem(STORAGE_KEY) as SupportedLocale | null)) || null;
  if (fromStorage && ["en", "pt", "fr", "es"].includes(fromStorage)) return fromStorage;
  const fromNavigator = (typeof navigator !== "undefined" && navigator.language?.slice(0, 2)) || "en";
  if (["en", "pt", "fr", "es"].includes(fromNavigator as SupportedLocale)) {
    return fromNavigator as SupportedLocale;
  }
  return "en";
}

export function I18nProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<SupportedLocale>(getInitialLocale);

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, locale);
    } catch (_) {
      // ignore
    }
  }, [locale]);

  const setLocale = useCallback((next: SupportedLocale) => {
    setLocaleState(next);
  }, []);

  const t = useCallback(
    (key: string) => {
      const dict = messages[locale] || messages.en;
      return dict[key] ?? key;
    },
    [locale]
  );

  const value = useMemo<I18nContextValue>(() => ({ locale, setLocale, t }), [locale, setLocale, t]);

  return <I18nContext.Provider value={value}>{children}</I18nContext.Provider>;
}

export function useI18n() {
  const ctx = useContext(I18nContext);
  if (!ctx) throw new Error("useI18n must be used within I18nProvider");
  return ctx;
}

export const localeToFlag: Record<SupportedLocale, string> = {
  en: "🇬🇧",
  pt: "🇵🇹",
  fr: "🇫🇷",
  es: "🇪🇸",
};


