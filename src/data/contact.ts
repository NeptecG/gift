// Single source of truth for the clinic's contact details + map.
const messengerLabel = 'Vet & Pet - Katerina Giaprou';
const mapQuery = 'Ιωαννίνων 34B, Πρέβεζα 48100';

export const CONTACT = {
  addressL1: 'Ιωαννίνων 34B',
  addressL2: 'Πρέβεζα, 48100',
  phoneLabel: '26820 89457',
  phoneHref: 'tel:+302682089457',
  mobileLabel: '694 865 9158',
  mobileHref: 'tel:+306948659158',
  email: 'vetandpetpreveza@gmail.com',
  instagram: 'vet_and_pet_preveza',
  instagramHref: 'https://instagram.com/vet_and_pet_preveza',
  viberLabel: '+30 694 865 9158',
  viberHref: 'viber://chat?number=%2B306948659158',
  messengerLabel,
  facebookHref: 'https://www.facebook.com/vet.and.pet.katerina.giaprou/',
  // numeric page id (resolved from m.me) - more reliable than the username slug
  messengerHref: 'https://m.me/792248400630594',
  // full interactive Google embed (keyless): +/- zoom controls + scroll-wheel zoom
  mapEmbed:
    'https://www.google.com/maps/embed?pb=!1m3!2m1!1zzpnPic6xzr3Ovc6vzr3Pic69IDM0QiwgzqDPgc6tzrLOtc62zrEgNDgxIDAw!6i16',
  mapDirections: 'https://www.google.com/maps/search/?api=1&query=' + encodeURIComponent(mapQuery),
} as const;
