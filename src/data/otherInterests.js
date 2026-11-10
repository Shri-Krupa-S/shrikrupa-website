import fitnessTrainerCertificate from '../assets/interests/fitness-trainer-certificate.jpg'
import healthCoachCertificate from '../assets/interests/health-coach-certificate.jpg'
import nutritionCoachCertificate from '../assets/interests/nutrition-coach-certificate.jpg'
import wellnessCoachCertificate from '../assets/interests/wellness-coach-certificate.jpg'
import motorcycleTrainingCertificate from '../assets/interests/motorcycle-training-certificate.jpg'
import motorcycleRiderBadge from '../assets/interests/motorcycle-rider-badge.jpg'
import nssSpecialCampCertificate from '../assets/interests/nss-special-camp-certificate.jpg'
import yogaInstructorBadge from '../assets/interests/yoga-protocol-instructor-badge.png'
import yogaCertificateEndorsement from '../assets/interests/yoga-certificate-endorsement.pdf'

const otherInterests = [
  {
    category: 'FITNESS',
    title: 'Fitness Trainer',
    detail: 'CPD-accredited course · 10 CPD credits',
    certificate: fitnessTrainerCertificate,
    certificateLabel: 'View certificate',
  },
  {
    category: 'WELLBEING',
    title: 'Nutrition Coach',
    detail: 'CPD-accredited course · 30 CPD credits',
    certificate: nutritionCoachCertificate,
    certificateLabel: 'View certificate',
  },
  {
    category: 'YOGA',
    title: 'Yoga Protocol Instructor',
    detail: '200-hour YCB Level One · TCS Yoga Council · valid through 16 February 2027',
    certificate: yogaInstructorBadge,
    certificateLabel: 'View badge',
    endorsement: yogaCertificateEndorsement,
  },
  {
    category: 'WELLBEING',
    title: 'Health Coach',
    detail: 'CPD-accredited course · 30 CPD credits',
    certificate: healthCoachCertificate,
    certificateLabel: 'View certificate',
  },
  {
    category: 'WELLBEING',
    title: 'Wellness Coach',
    detail: 'CPD-accredited course · 30 CPD credits',
    certificate: wellnessCoachCertificate,
    certificateLabel: 'View certificate',
  },
  {
    category: 'COMMUNITY SERVICE',
    title: 'NSS Seven-Day Special Camp',
    detail: 'Unit 11 · Anna University · KVS Matric Higher Secondary School, Kadapakkam · May 2017',
    certificate: nssSpecialCampCertificate,
    certificateLabel: 'View camp certificate',
  },
  {
    category: 'MOTORCYCLE RIDING',
    title: 'Tyro Rider Women Motorcycle Training',
    detail: 'Two-day training with Heels on Wheels',
    certificate: motorcycleTrainingCertificate,
    certificateLabel: 'View participation certificate',
    badge: motorcycleRiderBadge,
  },
]

export default otherInterests
