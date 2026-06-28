export const locales = ['el', 'en'] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = 'el';

// Greek is the canonical content. English mirrors it.
// Placeholder values to swap before launch are tagged with [PLACEHOLDER].
export const ui = {
  el: {
    'lang.el': 'Ελληνικά',
    'lang.en': 'English',
    'lang.switch': 'EN',

    'nav.home': 'Αρχική',
    'nav.services': 'Υπηρεσίες',
    'nav.shop': 'Κατάστημα',
    'nav.gallery': 'Gallery',
    'nav.about': 'Σχετικά με εμάς',
    'nav.contact': 'Επικοινωνία',
    'nav.faq': 'Συχνές Ερωτήσεις',
    'nav.menu': 'Μενού',

    'brand.name': 'Vet & Pet',
    'brand.tagline': 'Κτηνιατρείο & Pet Shop',

    'cta.book': 'Κλείστε ραντεβού',
    'cta.askStore': 'Ρωτήστε στο κατάστημα',
    'cta.viewServices': 'Δείτε τις υπηρεσίες',
    'cta.viewShop': 'Δείτε το κατάστημα',
    'cta.viewAll': 'Δείτε τα όλα',
    'cta.learnMore': 'Μάθετε περισσότερα',
    'cta.contactUs': 'Επικοινωνήστε μαζί μας',
    'cta.directions': 'Οδηγίες πρόσβασης',

    'hero.kicker': 'Με αγάπη για κάθε ζώο',
    'hero.title': 'Φροντίδα που νιώθουν σαν στο σπίτι',
    'hero.lead':
      'Το Vet & Pet είναι το νέο κτηνιατρείο και pet shop της Κατερίνας. Ένας ζεστός χώρος όπου κάθε κατοικίδιο αντιμετωπίζεται με υπομονή, σεβασμό και αληθινή αγάπη.',

    'home.services.kicker': 'Τι προσφέρουμε',
    'home.services.title': 'Ολοκληρωμένη φροντίδα υγείας',
    'home.services.sub':
      'Από τον ετήσιο έλεγχο μέχρι τη χειρουργική, φροντίζουμε το κατοικίδιό σας σε κάθε στάδιο της ζωής του.',

    'home.about.kicker': 'Η Κατερίνα',
    'home.about.title': 'Μια κτηνίατρος που αγαπά αληθινά τα ζώα',
    'home.about.body':
      'Άνοιξα το Vet & Pet για να δημιουργήσω έναν χώρο όπου τα ζώα νιώθουν ασφαλή και οι άνθρωποί τους ακούγονται. Κάθε επίσκεψη ξεκινά με σεβασμό και υπομονή.',

    'home.shop.kicker': 'Pet shop',
    'home.shop.title': 'Ό,τι χρειάζεται το κατοικίδιό σας',
    'home.shop.sub':
      'Τροφές, παιχνίδια, αξεσουάρ και προϊόντα υγείας - επιλεγμένα με προσοχή.',

    'home.visit.kicker': 'Επισκεφθείτε μας',
    'home.visit.title': 'Θα χαρούμε να σας γνωρίσουμε',
    'home.visit.addressLabel': 'Διεύθυνση',
    'home.visit.hoursLabel': 'Ώρες λειτουργίας',

    'faq.kicker': 'Συχνές ερωτήσεις',
    'faq.title': 'Ό,τι θέλετε να ξέρετε',
    'faq.intro': 'Απαντήσεις στις πιο συχνές ερωτήσεις για το κτηνιατρείο και το pet shop μας στην Πρέβεζα.',

    'services.kicker': 'Υπηρεσίες',
    'services.title': 'Φροντίδα για κάθε ανάγκη',
    'services.intro':
      'Πλήρες φάσμα κτηνιατρικών υπηρεσιών, με σύγχρονο εξοπλισμό και ανθρώπινη προσέγγιση.',
    'services.cta.title': 'Χρειάζεται το κατοικίδιό σας φροντίδα;',
    'services.cta.body': 'Κλείστε ραντεβού και ελάτε να σας γνωρίσουμε.',

    'shop.kicker': 'Κατάστημα',
    'shop.title': 'Pet shop',
    'shop.intro':
      'Επιλεγμένες τροφές, παιχνίδια, αξεσουάρ και προϊόντα υγείας για σκύλους και γάτες.',
    'shop.soon.title': 'Το ηλεκτρονικό κατάστημα έρχεται σύντομα',
    'shop.soon.body':
      'Σχεδιάζουμε online παραγγελίες. Αφήστε το email σας και θα είστε οι πρώτοι που θα ειδοποιηθούν.',
    'shop.notify': 'Ειδοποιήστε με',
    'shop.cat.all': 'Όλα',
    'shop.cat.food': 'Τροφές',
    'shop.cat.toys': 'Παιχνίδια',
    'shop.cat.accessories': 'Αξεσουάρ',
    'shop.cat.health': 'Υγεία',
    'shop.empty': 'Δεν υπάρχουν προϊόντα σε αυτή την κατηγορία.',

    'gallery.kicker': 'Συλλογή',
    'gallery.title': 'Στιγμές από το Vet & Pet',
    'gallery.intro': 'Ο χώρος μας, οι φίλοι μας και η καθημερινή φροντίδα. Πατήστε σε μια φωτογραφία για μεγέθυνση.',

    'about.kicker': 'Σχετικά με εμάς',
    'about.title': 'Η ιστορία μας',
    'about.lead':
      'Το Vet & Pet γεννήθηκε από μια απλή πεποίθηση: τα ζώα αξίζουν φροντίδα με αγάπη και σεβασμό.',
    'about.body1':
      'Η Κατερίνα είναι κτηνίατρος με βαθιά αγάπη για τα ζώα. Άνοιξε το Vet & Pet για να προσφέρει φροντίδα που συνδυάζει την επιστήμη με την ανθρωπιά - έναν χώρο όπου τα κατοικίδια δεν είναι περιστατικά, αλλά μέλη μιας οικογένειας.',
    'about.body2':
      'Από την πρώτη εξέταση μέχρι τη μακροχρόνια παρακολούθηση, στόχος μας είναι κάθε ζώο να φεύγει πιο υγιές και κάθε ιδιοκτήτης πιο ήσυχος.',
    'about.team.kicker': 'Η ομάδα μας',
    'about.p1.role': 'Κτηνίατρος',
    'about.p1.name': 'Κατερίνα',
    'about.p1.body': 'Η Κατερίνα είναι κτηνίατρος με βαθιά αγάπη για τα ζώα. Άνοιξε το Vet & Pet για να προσφέρει φροντίδα που συνδυάζει την επιστήμη με την ανθρωπιά, έναν χώρο όπου τα κατοικίδια είναι μέλη μιας οικογένειας.',
    'about.p2.role': 'Βοηθός',
    'about.p2.name': 'Η Μαμά',
    'about.p2.body': 'Δίπλα στην Κατερίνα, η μαμά της βοηθά καθημερινά στο κατάστημα. Με χαμόγελο και μεράκι, φροντίζει κάθε πελάτης και κάθε ζωάκι να νιώθει ευπρόσδεκτο.',

    'about.values.title': 'Αυτό που μας καθοδηγεί',
    'about.value1.title': 'Αγάπη',
    'about.value1.body': 'Κάθε ζώο αντιμετωπίζεται με τρυφερότητα και υπομονή.',
    'about.value2.title': 'Σεβασμός',
    'about.value2.body': 'Ακούμε το ζώο και τον άνθρωπό του, χωρίς βιασύνη.',
    'about.value3.title': 'Επιστήμη',
    'about.value3.body': 'Σύγχρονη ιατρική γνώση στην υπηρεσία της φροντίδας.',
    'about.paw.caption': 'Η Κατερίνα, με αγάπη για κάθε ζώο.',

    'contact.kicker': 'Επικοινωνία',
    'contact.title': 'Ελάτε να μας βρείτε',
    'contact.intro':
      'Είμαστε εδώ για κάθε απορία, ραντεβού ή επείγον περιστατικό.',
    'contact.addressLabel': 'Διεύθυνση',
    'contact.phoneLabel': 'Τηλέφωνο',
    'contact.mobileLabel': 'Κινητό',
    'contact.emergency': 'ΕΠΕΙΓΟΝΤΑ',
    'contact.emailLabel': 'Email',
    'contact.hoursLabel': 'Ώρες λειτουργίας',
    'contact.mapLabel': 'Χάρτης',
    'contact.formTitle': 'Στείλτε μας μήνυμα',


    'form.name': 'Όνομα',
    'form.email': 'Email',
    'form.message': 'Μήνυμα',
    'form.send': 'Αποστολή',
    'form.sending': 'Αποστολή...',
    'form.ok': 'Ευχαριστούμε! Θα επικοινωνήσουμε σύντομα.',
    'form.err': 'Κάτι πήγε στραβά. Δοκιμάστε ξανά ή τηλεφωνήστε μας.',
    'form.required': 'Συμπληρώστε αυτό το πεδίο.',
    'form.invalidEmail': 'Δώστε ένα έγκυρο email.',

    'footer.tagline': 'Κτηνιατρείο & pet shop',
    'footer.tagline2': 'με αγάπη για κάθε ζώο.',
    'footer.explore': 'Πλοήγηση',
    'footer.visit': 'Επισκεφθείτε μας',
    'footer.follow': 'Ακολουθήστε μας',
    'footer.rights': 'All rights reserved.',

    'meta.home.title': 'Vet & Pet - Κτηνιατρείο & Pet Shop',
    'meta.home.desc':
      'Κτηνίατρος και pet shop στην Πρέβεζα. Φροντίδα με αγάπη για κάθε ζώο: εξετάσεις, εμβόλια, χειρουργική, τροφές και αξεσουάρ.',
    'meta.services.title': 'Υπηρεσίες - Vet & Pet',
    'meta.services.desc':
      'Κτηνιατρικές υπηρεσίες: κλινική εξέταση, εμβολιασμοί, microchip, χειρουργική, οδοντιατρική και διατροφική συμβουλευτική.',
    'meta.shop.title': 'Κατάστημα - Vet & Pet',
    'meta.shop.desc':
      'Pet shop: τροφές, παιχνίδια, αξεσουάρ και προϊόντα υγείας για σκύλους και γάτες.',
    'meta.gallery.title': 'Gallery - Vet & Pet',
    'meta.gallery.desc':
      'Φωτογραφίες από το Vet & Pet - ο χώρος μας, οι φίλοι μας και η καθημερινή φροντίδα.',
    'meta.about.title': 'Σχετικά - Vet & Pet',
    'meta.about.desc':
      'Η ιστορία της Κατερίνας και του Vet & Pet - φροντίδα με αγάπη, σεβασμό και επιστήμη.',
    'notfound.title': 'Ωχ! Η σελίδα έκανε βόλτα.',
    'notfound.sub': 'Δεν βρήκαμε αυτό που ψάχνατε. Ίσως κάποιο γατάκι την έκρυψε.',
    'notfound.cta': 'Επιστροφή στην αρχική',
    'meta.notfound.title': '404 - Vet & Pet',
    'meta.notfound.desc': 'Η σελίδα δεν βρέθηκε.',

    'meta.contact.title': 'Επικοινωνία - Vet & Pet',
    'meta.contact.desc':
      'Επικοινωνήστε με το Vet & Pet στην Πρέβεζα. Διεύθυνση, τηλέφωνο, ώρες λειτουργίας και χάρτης πρόσβασης.',
    'meta.faq.title': 'Συχνές ερωτήσεις - Vet & Pet Πρέβεζα',
    'meta.faq.desc':
      'Συχνές ερωτήσεις για το Vet & Pet στην Πρέβεζα: ώρες, επείγοντα, υπηρεσίες, microchip και διαβατήρια.',
    'meta.privacy.title': 'Πολιτική Απορρήτου & Cookies - Vet & Pet',
    'meta.privacy.desc':
      'Πολιτική απορρήτου και cookies του Vet & Pet: ποια δεδομένα συλλέγουμε, cookies, Google Analytics και τα δικαιώματά σας (GDPR).',
    'nav.privacy': 'Απόρρητο & Cookies',
    'nav.cookieSettings': 'Ρυθμίσεις cookies',
  },
  en: {
    'lang.el': 'Ελληνικά',
    'lang.en': 'English',
    'lang.switch': 'ΕΛ',

    'nav.home': 'Home',
    'nav.services': 'Services',
    'nav.shop': 'Shop',
    'nav.gallery': 'Gallery',
    'nav.about': 'About us',
    'nav.contact': 'Contact',
    'nav.faq': 'FAQ',
    'nav.menu': 'Menu',

    'brand.name': 'Vet & Pet',
    'brand.tagline': 'Veterinary Clinic & Pet Shop',

    'cta.book': 'Book a visit',
    'cta.askStore': 'Ask in store',
    'cta.viewServices': 'View services',
    'cta.viewShop': 'Visit the shop',
    'cta.viewAll': 'View all',
    'cta.learnMore': 'Learn more',
    'cta.contactUs': 'Get in touch',
    'cta.directions': 'Get directions',

    'hero.kicker': 'With love for every animal',
    'hero.title': 'Care that feels like home',
    'hero.lead':
      "Vet & Pet is Katerina's new veterinary clinic and pet shop. A warm place where every animal is met with patience, respect, and genuine love.",

    'home.services.kicker': 'What we offer',
    'home.services.title': 'Complete health care',
    'home.services.sub':
      'From the annual check-up to surgery, we care for your pet at every stage of life.',

    'home.about.kicker': 'Meet Katerina',
    'home.about.title': 'A vet who truly loves animals',
    'home.about.body':
      'I opened Vet & Pet to create a space where animals feel safe and their people feel heard. Every visit begins with respect and patience.',

    'home.shop.kicker': 'Pet shop',
    'home.shop.title': 'Everything your pet needs',
    'home.shop.sub':
      'Food, toys, accessories, and health products - carefully chosen.',

    'home.visit.kicker': 'Visit us',
    'home.visit.title': "We'd love to meet you",
    'home.visit.addressLabel': 'Address',
    'home.visit.hoursLabel': 'Opening hours',

    'faq.kicker': 'Frequently asked',
    'faq.title': 'Everything you want to know',
    'faq.intro': 'Answers to the most common questions about our veterinary clinic and pet shop in Preveza.',

    'services.kicker': 'Services',
    'services.title': 'Care for every need',
    'services.intro':
      'A full range of veterinary services, with modern equipment and a human touch.',
    'services.cta.title': 'Does your pet need care?',
    'services.cta.body': 'Book a visit and come meet us.',

    'shop.kicker': 'Shop',
    'shop.title': 'Pet shop',
    'shop.intro':
      'Carefully selected food, toys, accessories, and health products for dogs and cats.',
    'shop.soon.title': 'Online ordering coming soon',
    'shop.soon.body':
      "We're planning online orders. Leave your email and you'll be the first to know.",
    'shop.notify': 'Notify me',
    'shop.cat.all': 'All',
    'shop.cat.food': 'Food',
    'shop.cat.toys': 'Toys',
    'shop.cat.accessories': 'Accessories',
    'shop.cat.health': 'Health',
    'shop.empty': 'No products in this category yet.',

    'gallery.kicker': 'Gallery',
    'gallery.title': 'Moments at Vet & Pet',
    'gallery.intro': 'Our space, our friends, and everyday care. Tap a photo to enlarge.',

    'about.kicker': 'About us',
    'about.title': 'Our story',
    'about.lead':
      'Vet & Pet was born from a simple belief: animals deserve care given with love and respect.',
    'about.body1':
      'Katerina is a veterinarian with a deep love for animals. She opened Vet & Pet to offer care that blends science with humanity - a place where pets are not cases, but members of a family.',
    'about.body2':
      'From the first examination to long-term follow-up, our goal is for every animal to leave healthier and every owner to leave reassured.',
    'about.team.kicker': 'Our team',
    'about.p1.role': 'Veterinarian',
    'about.p1.name': 'Katerina',
    'about.p1.body': 'Katerina is a veterinarian with a deep love for animals. She opened Vet & Pet to offer care that blends science with humanity, a place where pets are members of a family.',
    'about.p2.role': 'Helper',
    'about.p2.name': 'Mom',
    'about.p2.body': "Right beside Katerina, her mom helps in the shop every day. With a warm smile and real care, she makes sure every customer and every little animal feels welcome.",

    'about.values.title': 'What guides us',
    'about.value1.title': 'Love',
    'about.value1.body': 'Every animal is treated with tenderness and patience.',
    'about.value2.title': 'Respect',
    'about.value2.body': 'We listen to the animal and its person, without rushing.',
    'about.value3.title': 'Science',
    'about.value3.body': 'Modern medical knowledge in the service of care.',
    'about.paw.caption': 'Katerina, with love for every animal.',

    'contact.kicker': 'Contact',
    'contact.title': 'Come find us',
    'contact.intro':
      "We're here for every question, appointment, or emergency.",
    'contact.addressLabel': 'Address',
    'contact.phoneLabel': 'Phone',
    'contact.mobileLabel': 'Mobile',
    'contact.emergency': 'emergencies',
    'contact.emailLabel': 'Email',
    'contact.hoursLabel': 'Opening hours',
    'contact.mapLabel': 'Map',
    'contact.formTitle': 'Send us a message',


    'form.name': 'Name',
    'form.email': 'Email',
    'form.message': 'Message',
    'form.send': 'Send',
    'form.sending': 'Sending...',
    'form.ok': 'Thank you! We will be in touch soon.',
    'form.err': 'Something went wrong. Please try again or call us.',
    'form.required': 'Please fill in this field.',
    'form.invalidEmail': 'Please enter a valid email.',

    'footer.tagline': 'Veterinary clinic & pet shop',
    'footer.tagline2': 'with love for every animal.',
    'footer.explore': 'Explore',
    'footer.visit': 'Visit us',
    'footer.follow': 'Follow us',
    'footer.rights': 'All rights reserved.',

    'meta.home.title': 'Vet & Pet - Veterinary Clinic & Pet Shop',
    'meta.home.desc':
      "Veterinarian and pet shop in Preveza. Loving care for every animal: exams, vaccinations, surgery, food, and accessories.",
    'meta.services.title': 'Services - Vet & Pet',
    'meta.services.desc':
      'Veterinary services: clinical examination, vaccinations, microchip, surgery, dental care, and nutrition advice.',
    'meta.shop.title': 'Shop - Vet & Pet',
    'meta.shop.desc':
      'Pet shop: food, toys, accessories, and health products for dogs and cats.',
    'meta.gallery.title': 'Gallery - Vet & Pet',
    'meta.gallery.desc':
      'Photos from Vet & Pet - our space, our friends, and everyday care.',
    'meta.about.title': 'About - Vet & Pet',
    'meta.about.desc':
      "Katerina's story and the Vet & Pet philosophy - care given with love, respect, and science.",
    'notfound.title': 'Oops! This page wandered off.',
    'notfound.sub': "We couldn't find what you were looking for. Maybe a kitten hid it.",
    'notfound.cta': 'Back to home',
    'meta.notfound.title': '404 - Vet & Pet',
    'meta.notfound.desc': 'Page not found.',

    'meta.contact.title': 'Contact - Vet & Pet',
    'meta.contact.desc':
      'Contact Vet & Pet in Preveza. Address, phone, opening hours, and an access map.',
    'meta.faq.title': 'FAQ - Vet & Pet Preveza',
    'meta.faq.desc':
      'Frequently asked questions about Vet & Pet in Preveza: hours, emergencies, services, microchip, and pet passports.',
    'meta.privacy.title': 'Privacy & Cookie Policy - Vet & Pet',
    'meta.privacy.desc':
      'Vet & Pet privacy and cookie policy: what data we collect, cookies, Google Analytics, and your rights (GDPR).',
    'nav.privacy': 'Privacy & Cookies',
    'nav.cookieSettings': 'Cookie settings',
  },
} as const;

export type UIKey = keyof (typeof ui)['el'];

/** FAQ content - rendered visibly on the /faq page AND emitted there as FAQPage schema.
 *  Keep the two in sync (Google requires visible text to match the structured data). */
export const faq: Record<Locale, { q: string; a: string; aHtml?: string }[]> = {
  el: [
    {
      q: 'Πότε πρέπει να κάνει εμβόλια το κατοικίδιό μου;',
      a: 'Τα κουτάβια και τα γατάκια συνήθως ξεκινούν εμβόλια από τις 6–8 εβδομάδες, με επαναλήψεις κάθε 3–4 εβδομάδες έως περίπου τους 4 μήνες, και ετήσιες αναμνηστικές δόσεις στη συνέχεια. Το ακριβές πρόγραμμα το προσαρμόζουμε στο κατοικίδιό σας.',
    },
    {
      q: 'Πότε πρέπει να στειρωθεί ο σκύλος ή η γάτα μου;',
      a: 'Συνήθως μετά τους 6 μήνες, αλλά η ιδανική ηλικία εξαρτάται από το είδος, τη φυλή και το μέγεθος. Θα σας συμβουλεύσουμε για την κατάλληλη στιγμή στην περίπτωσή σας.',
    },
    {
      q: 'Ποια είναι η κατάλληλη ηλικία για τον πρώτο έλεγχο;',
      a: 'Ιδανικά φέρτε το νέο σας κατοικίδιο για πρώτο έλεγχο μέσα στις πρώτες ημέρες μετά την υιοθεσία ή την αγορά, ώστε να ελέγξουμε την υγεία του και να ξεκινήσουμε εμβόλια και αποπαρασίτωση.',
    },
    {
      q: 'Είναι φυσιολογικό να μην τρώει ή να κοιμάται περισσότερο;',
      a: 'Μικρές, σύντομες αλλαγές μπορεί να είναι φυσιολογικές. Αν όμως δεν τρώει για πάνω από 24 ώρες, είναι άτονο ή αλλάζει απότομα η συμπεριφορά του, καλέστε μας για έλεγχο.',
    },
    {
      q: 'Ποια συμπτώματα είναι επείγοντα;',
      a: 'Επείγοντα θεωρούνται: δυσκολία στην αναπνοή, συνεχείς εμετοί ή διάρροια, έντονη αδυναμία, αιμορραγία, σπασμοί ή φουσκωμένη κοιλιά. Σε αυτές τις περιπτώσεις καλέστε αμέσως στο 694 865 9158.',
      aHtml: 'Επείγοντα θεωρούνται: δυσκολία στην αναπνοή, συνεχείς εμετοί ή διάρροια, έντονη αδυναμία, αιμορραγία, σπασμοί ή φουσκωμένη κοιλιά.<br />Σε αυτές τις περιπτώσεις καλέστε αμέσως στο <strong>694 865 9158</strong>.',
    },
    {
      q: 'Τι κάνω αν φάει κάτι επικίνδυνο (σοκολάτα, φάρμακο, φόλα);',
      a: 'Μην περιμένετε. Σοκολάτα, σταφίδες, φάρμακα, φόλα ή κόκαλα μπορεί να είναι επικίνδυνα. Καλέστε μας αμέσως στο 694 865 9158 και, αν γίνεται, πείτε μας τι και πόσο έφαγε.',
      aHtml: 'Μην περιμένετε. Σοκολάτα, σταφίδες, φάρμακα, φόλα ή κόκαλα μπορεί να είναι επικίνδυνα.<br />Καλέστε μας αμέσως στο <strong>694 865 9158</strong> και, αν γίνεται, πείτε μας τι και πόσο έφαγε.',
    },
    {
      q: 'Κάθε πότε χρειάζεται αποπαρασίτωση για σκουλήκια και ψύλλους/τσιμπούρια;',
      a: 'Για εσωτερικά παράσιτα (σκουλήκια) συνήθως κάθε 3 μήνες, και για εξωτερικά (ψύλλοι, τσιμπούρια) μηνιαία ή ανάλογα με το σκεύασμα. Θα φτιάξουμε πρόγραμμα στα μέτρα του κατοικιδίου σας.',
    },
    {
      q: 'Πώς βγάζω ή ενημερώνω microchip και βιβλιάριο υγείας;',
      a: 'Τοποθετούμε microchip, το καταχωρούμε και ενημερώνουμε ή εκδίδουμε βιβλιάριο υγείας ή διαβατήριο. Φέρτε τυχόν προηγούμενα έγγραφα, αν υπάρχουν.',
    },
    {
      q: 'Τι χρειάζεται για ταξίδι με κατοικίδιο, εντός ή εκτός Ελλάδας;',
      a: 'Χρειάζονται τουλάχιστον microchip, έγκυρο αντιλυσσικό εμβόλιο και βιβλιάριο ή διαβατήριο. Για εκτός Ελλάδας μπορεί να απαιτούνται επιπλέον εξετάσεις ανάλογα με τη χώρα. Ρωτήστε μας αρκετές εβδομάδες πριν.',
    },
    {
      q: 'Ποια τροφή είναι κατάλληλη και πόση ποσότητα πρέπει να τρώει;',
      a: 'Η κατάλληλη τροφή και ποσότητα εξαρτώνται από την ηλικία, το βάρος, τη δραστηριότητα και την υγεία. Στη διατροφική συμβουλευτική φτιάχνουμε εξατομικευμένο πλάνο.',
    },
    {
      q: 'Πότε χρειάζεται καθαρισμό δοντιών;',
      a: 'Όταν υπάρχει πέτρα, κακοσμία, ερεθισμένα ούλα ή δυσκολία στο φαγητό. Σε τακτικό έλεγχο σάς λέμε αν χρειάζεται καθαρισμός.',
    },
    {
      q: 'Πού βρίσκεστε και ποιες ώρες λειτουργείτε;',
      a: 'Ιωαννίνων 34B, Πρέβεζα 48100. Δευτέρα έως Σάββατο 10:00–14:00, και επιπλέον Τρίτη, Πέμπτη, Παρασκευή 18:00–21:00. Για επείγοντα: 694 865 9158.',
    },
    {
      q: 'Πόσο κοστίζουν οι υπηρεσίες;',
      a: 'Το κόστος εξαρτάται από την υπηρεσία και την περίπτωση του ζώου. Καλέστε μας ή περάστε από το ιατρείο και θα σας ενημερώσουμε με σαφήνεια πριν από κάθε πράξη.',
    },
  ],
  en: [
    {
      q: 'When should my pet be vaccinated?',
      a: 'Puppies and kittens usually start vaccinations at 6–8 weeks, with boosters every 3–4 weeks until about 4 months, then yearly boosters. We tailor the exact schedule to your pet.',
    },
    {
      q: 'When should my dog or cat be neutered?',
      a: 'Usually after 6 months, but the ideal age depends on species, breed and size. We will advise you on the right time for your pet.',
    },
    {
      q: 'What is the right age for a first check-up?',
      a: 'Ideally bring your new pet for a first check within the first few days after adoption or purchase, so we can assess its health and start vaccinations and parasite control.',
    },
    {
      q: 'Is it normal for my pet to eat less or sleep more?',
      a: 'Small, brief changes can be normal. But if your pet will not eat for over 24 hours, is lethargic, or its behaviour changes suddenly, call us for a check.',
    },
    {
      q: 'Which symptoms are an emergency?',
      a: 'Urgent signs include difficulty breathing, repeated vomiting or diarrhoea, severe weakness, bleeding, seizures or a bloated abdomen. In these cases call us immediately at +30 694 865 9158.',
      aHtml: 'Urgent signs include difficulty breathing, repeated vomiting or diarrhoea, severe weakness, bleeding, seizures or a bloated abdomen.<br />In these cases call us immediately at <strong>+30 694 865 9158</strong>.',
    },
    {
      q: 'What do I do if my pet eats something dangerous (chocolate, medicine, bait poison)?',
      a: 'Do not wait. Chocolate, raisins, medicines, bait poison or bones can be dangerous. Call us immediately at +30 694 865 9158 and, if you can, tell us what and how much was eaten.',
      aHtml: 'Do not wait. Chocolate, raisins, medicines, bait poison or bones can be dangerous.<br />Call us immediately at <strong>+30 694 865 9158</strong> and, if you can, tell us what and how much was eaten.',
    },
    {
      q: 'How often is deworming and flea/tick control needed?',
      a: 'For internal parasites (worms) usually every 3 months, and for external ones (fleas, ticks) monthly or per product. We will set up a plan suited to your pet.',
    },
    {
      q: 'How do I get or update a microchip and health book?',
      a: 'We place the microchip, register it, and update or issue the health book or passport. Bring any previous documents if you have them.',
    },
    {
      q: 'What is needed to travel with a pet, inside or outside Greece?',
      a: 'You will need at least a microchip, a valid rabies vaccine and a health book or passport. For outside Greece, extra tests may be required depending on the country. Ask us several weeks in advance.',
    },
    {
      q: 'Which food is right and how much should my pet eat?',
      a: 'The right food and amount depend on age, weight, activity and health. In a nutrition consultation we build a personalised plan.',
    },
    {
      q: 'When is a dental cleaning needed?',
      a: 'When there is tartar, bad breath, irritated gums or trouble eating. At a routine check we will tell you if a cleaning is needed.',
    },
    {
      q: 'Where are you and what are your hours?',
      a: 'Ioanninon 34B, Preveza 48100. Monday to Saturday 10:00–14:00, plus Tuesday, Thursday, Friday 18:00–21:00. For emergencies: +30 694 865 9158.',
    },
    {
      q: 'How much do the services cost?',
      a: 'Cost depends on the service and your pet\'s case. Call us or drop by the clinic and we will give you a clear estimate before any procedure.',
    },
  ],
};

/** Translate a key for a locale, falling back to Greek, then the raw key. */
export function t(locale: Locale, key: UIKey): string {
  const dict = ui[locale] as Record<string, string>;
  return dict[key] ?? (ui.el as Record<string, string>)[key] ?? key;
}

/** Build a localized URL. EL has no prefix; EN lives under /en. Always trailing-slash. */
export function localizedPath(locale: Locale, path: string): string {
  const clean = path.replace(/^\/+/, '').replace(/\/+$/, ''); // "services" or ""
  const prefix = locale === 'en' ? '/en' : '';
  const body = clean ? '/' + clean : '';
  return prefix + body + '/';
}

/** The same page in the other locale, given the current path's route key. */
export function altLocalePath(locale: Locale, routeKey: string): string {
  const other: Locale = locale === 'en' ? 'el' : 'en';
  return localizedPath(other, routeKey);
}

/** Format an EUR price per locale, or a fallback label when price is null. */
export function formatPrice(
  locale: Locale,
  price: number | null,
  fallback: string
): string {
  if (price == null) return fallback;
  const n = price.toFixed(2);
  return locale === 'el'
    ? n.replace('.', ',') + ' €' // 14,90 €
    : '€' + n; // €14.90
}
