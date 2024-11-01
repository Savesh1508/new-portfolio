import { ref } from 'vue';

const contacts = ref([
  {
    id: 1,
    icon: "bx bxs-envelope",
    link: "https://mail.google.com/mail/u/1/?view=cm&fs=1&to=noenmoormier@gmail.com&tf=1"
  },
  {
    id: 2,
    icon: "bx bxl-instagram-alt",
    link: "https://www.instagram.com/daler_baxadirov"
  },
  {
    id: 3,
    icon: "bx bxl-telegram",
    link: "https://t.me/dalerbaxadirov"
  },
]);

const infos = ref([
  {
    id: 1,
    infoType: "Age",
    info: "20",
    isGreen: false
  },
  {
    id: 2,
    infoType: "Freelance",
    info: "Available",
    isGreen: true
  },
  {
    id: 1,
    infoType: "Phone",
    info: "(88) 939 30 90",
    isGreen: false
  },
  {
    id: 1,
    infoType: "Address",
    info: "Tashkent, Uzb",
    isGreen: false
  },
]);

const skills = ref([
  {
    id: 1,
    skillType: "Adobe Photoshop",
    percentage: "w-[90%]"
  },
  {
    id: 2,
    skillType: "Adobe Illustrator",
    percentage: "w-[60%]"
  },
  {
    id: 3,
    skillType: "Figma",
    percentage: "w-[85%]"
  },
]);

const exSkills = ref([
  {
    id: 1,
    skill: "Graphic Design"
  },
  {
    id: 2,
    skill: "Social Media Marketing",
  },
  {
    id: 3,
    skill: "Targeting",
  },
  {
    id: 4,
    skill: "Business Analyzing",
  },
  {
    id: 5,
    skill: "Brand promotion",
  },
]);

const languages = ref([
  {
    id: 1,
    language: "Uzbek",
    level: "Native Language"
  },
  {
    id: 2,
    language: "Tajik",
    level: "Native Language"
  },
  {
    id: 3,
    language: "Russian",
    level: "Advanced"
  },
  {
    id: 4,
    language: "English",
    level: "Intermediate - B1"
  },
]);

export {
  languages,
  contacts,
  infos,
  skills,
  exSkills,
}