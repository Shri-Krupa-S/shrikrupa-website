import SectionHeading from '../components/SectionHeading.jsx'
import fitnessTrainerCertificate from '../assets/interests/fitness-trainer-certificate.jpg'
import healthCoachCertificate from '../assets/interests/health-coach-certificate.jpg'
import nutritionCoachCertificate from '../assets/interests/nutrition-coach-certificate.jpg'
import wellnessCoachCertificate from '../assets/interests/wellness-coach-certificate.jpg'
import motorcycleTrainingCertificate from '../assets/interests/motorcycle-training-certificate.jpg'
import motorcycleRiderBadge from '../assets/interests/motorcycle-rider-badge.jpg'
import nssSpecialCampCertificate from '../assets/interests/nss-special-camp-certificate.jpg'
import yogaInstructorBadge from '../assets/interests/yoga-protocol-instructor-badge.png'
import yogaCertificateEndorsement from '../assets/interests/yoga-certificate-endorsement.pdf'

const interests = [
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

function OtherInterests() {
  return (
    <section className="other-interests page-shell scroll-reveal" id="other-interests">
      <SectionHeading number="08" label="OTHER INTERESTS" />
      <p className="other-interests__intro">
        A few things I’m learning and exploring beyond work and reading.
      </p>
      <ul className="other-interests__list">
        {interests.map((interest) => (
          <li className="other-interests__item" key={interest.title}>
            <div className="other-interests__copy">
              <span className="other-interests__category">{interest.category}</span>
              <h3>{interest.title}</h3>
              <p>{interest.detail}</p>
            </div>
            <div className="other-interests__links">
              <a href={interest.certificate} target="_blank" rel="noreferrer">
                {interest.certificateLabel} <span aria-hidden="true">↗</span>
              </a>
              {interest.endorsement && (
                <a href={interest.endorsement} target="_blank" rel="noreferrer">
                  View endorsement <span aria-hidden="true">↗</span>
                </a>
              )}
              {interest.badge && (
                <a href={interest.badge} target="_blank" rel="noreferrer">
                  View rider badge <span aria-hidden="true">↗</span>
                </a>
              )}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}

export default OtherInterests
