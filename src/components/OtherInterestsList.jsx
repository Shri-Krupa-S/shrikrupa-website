import otherInterests from '../data/otherInterests.js'

function OtherInterestsList() {
  return (
    <ul className="other-interests__list">
      {otherInterests.map((interest) => (
        <li className="other-interests__item" key={interest.title}>
          <div className="other-interests__copy">
            <span className="other-interests__category">{interest.category}</span>
            <h2>{interest.title}</h2>
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
  )
}

export default OtherInterestsList
