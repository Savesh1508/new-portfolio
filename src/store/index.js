import { ref } from 'vue';
import graphicDesignImg from '../assets/img/graphic-design.png'
import targetImg from '../assets/img/target.png'
import promotionImg from '../assets/img/promotion.png'
import smmImg from '../assets/img/smm.png'
import analyzeImg from '../assets/img/analyze.png'
import responseImg from '../assets/img/discussion.png'
import smm from '../assets/img/smm.jpg'
import graphicImg from '../assets/img/graphic.jpg'
import fit1Img from '../assets/img/projects/fit-1.jpg'
import fit2Img from '../assets/img/projects/fit-2.jpg'
import fit3Img from '../assets/img/projects/fit-3.jpg'
import fit4Img from '../assets/img/projects/fit-4.jpg'
import fit5Img from '../assets/img/projects/fit-5.jpg'
import fit6Img from '../assets/img/projects/fit-6.jpg'
import fit7Img from '../assets/img/projects/fit-7.jpg'
import adv1Img from '../assets/img/projects/adv-1.jpg'
import adv2Img from '../assets/img/projects/adv-2.jpg'
import adv3Img from '../assets/img/projects/adv-3.jpg'
import edu1Img from '../assets/img/projects/edu-1.jpg'
import edu2Img from '../assets/img/projects/edu-2.jpg'
import trainerImg from '../assets/img/projects/trainer.jpg'
import pizzaImg from '../assets/img/projects/pizza.jpg'
import school0Img from '../assets/img/projects/school-0.jpg'
import school1Img from '../assets/img/projects/school-1.jpg'
import school2Img from '../assets/img/projects/school-2.jpg'
import school3Img from '../assets/img/projects/school-3.jpg'
import school4Img from '../assets/img/projects/school-4.jpg'
import school5Img from '../assets/img/projects/school-5.jpg'
import school6Img from '../assets/img/projects/school-6.jpg'
import school7Img from '../assets/img/projects/school-7.jpg'
import school8Img from '../assets/img/projects/school-8.jpg'
import school9Img from '../assets/img/projects/school-9.jpg'

const services = ref([
  {
    id: 1,
    img: graphicDesignImg,
    title: "Graphic Design",
    subtitle: "Creating unique graphic materials"
  },
  {
    id: 2,
    img: targetImg,
    title: "Targeting",
    subtitle: "Targeting to suitable audience"
  },
  {
    id: 3,
    img: promotionImg,
    title: "Business Promotion",
    subtitle: "Creating a business plan"
  },
  {
    id: 4,
    img: smmImg,
    title: "Social Media Marketing",
    subtitle: "Maintaining social networks"
  },
  {
    id: 5,
    img: analyzeImg,
    title: "Business Analyze",
    subtitle: "Business and competitor analyzes"
  },
  {
    id: 6,
    img: responseImg,
    title: "Response to Clients",
    subtitle: "Discussing solutions with clients"
  },
]);

const education = ref([
  {
    id: 1,
    location: "WePro",
    level: "Student",
    date: "Nov 2023 - March 2024",
    course: "Social Media Marketing course",
    text: "From Nov 2023 to March 2024 I studied what internet marketing is, internet marketing tools and internet marketing elements. And in the second month I started studying business clients and how to analyze them, after that I studied CRM, Hunt ladders and positioning. In the last month I studied targeting"
  },
  {
    id: 2,
    location: "WePro",
    level: "Student",
    date: "April 2024 - Oct 2024",
    course: "Graphic Design course",
    text: "In graphic design, in the first month I studied Adobe Illustrator to create icons and logos. After that, I began to study Adobe Photoshop and created several posts for social networks, covers and banners for the marketplace."
  },
]);

const projects = ref([
  [
    {
      id: 2,
      img: fit2Img
    },
    {
      id: 3,
      img: fit3Img
    },
    {
      id: 4,
      img: fit4Img
    },
    {
      id: 5,
      img: fit5Img
    },
    {
      id: 6,
      img: fit6Img
    },
    {
      id: 7,
      img: fit7Img
    },
  ],

  [
    {
      id: 1,
      img: adv1Img
    },
    {
      id: 2,
      img: adv2Img
    },
    {
      id: 3,
      img: adv3Img
    },
  ],

  [
    {
      id: 1,
      img: edu1Img
    },
    {
      id: 2,
      img: edu2Img
    },
  ],

  [
    {
      id: 2,
      img: school1Img
    },
    {
      id: 3,
      img: school2Img
    },
    {
      id: 4,
      img: school3Img
    },
    {
      id: 5,
      img: school4Img
    },
    {
      id: 6,
      img: school5Img
    },
    {
      id: 7,
      img: school6Img
    },
  ],

  [
    {
      id: 1,
      img: school7Img
    },
    {
      id: 2,
      img: school8Img
    },
    {
      id: 3,
      img: school9Img
    },
  ],

  [
    {
      id: 1,
      img: trainerImg
    },
  ],

  [
    {
      id: 1,
      img: pizzaImg
    },
  ],
]);

const achievements = ref([
  {
    id: 1,
    title: "Social Media Marketolog",
    subtitle: "I graduated from the \"WePro\" learning center and received a \"Social Media Marketing\" specialist certificate",
    img: smm
  },
  {
    id: 2,
    title: "Graphic Designer",
    subtitle: "I graduated from the \"WePro\" learning center and received a \"Graphic Design\" specialist certificate",
    img: graphicImg
  },
]);



export {
  services,
  education,
  projects,
  achievements
}