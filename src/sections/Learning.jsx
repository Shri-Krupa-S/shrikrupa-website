import SectionHeading from '../components/SectionHeading.jsx'
import currentLearning from '../data/learning.js'

function Learning() {
  return (
    <section className="learning-section page-shell" id="learning">
      <SectionHeading number="04" label="CURRENTLY LEARNING" />
      <div className="learning-journey">
        <div className="learning-journey__copy">
          <p className="learning-journey__eyebrow">I’m currently learning...</p>
          <h3>{currentLearning.title}</h3>
          <p className="learning-journey__subheading">From one user to systems at global scale.</p>
          <p className="learning-journey__why">{currentLearning.why}</p>
          <dl className="learning-journey__details">
            <div>
              <dt><span>01</span> Learning through</dt>
              <dd>{currentLearning.source}</dd>
            </div>
            <div>
              <dt><span>02</span> Estimated timeline</dt>
              <dd>{currentLearning.timeline}</dd>
            </div>
            <div>
              <dt><span>03</span> Started on</dt>
              <dd>{currentLearning.startedOn}</dd>
            </div>
            <div>
              <dt><span>04</span> Time remaining</dt>
              <dd>{currentLearning.remaining}</dd>
            </div>
          </dl>
        </div>
        <div className="learning-journey__visual" aria-hidden="true">
          <svg className="learning-journey__diagram" viewBox="0 0 620 340" fill="none">
            <defs>
              <clipPath id="learning-globe-clip">
                <circle cx="488" cy="165" r="105" />
              </clipPath>
              <radialGradient id="learning-globe-fill" cx="0" cy="0" r="1" gradientTransform="translate(449 126) rotate(45) scale(178)">
                <stop stopColor="#15547a" stopOpacity=".72" />
                <stop offset="1" stopColor="#07131d" stopOpacity=".08" />
              </radialGradient>
            </defs>
            <path className="learning-flow learning-flow--users" d="M125 167H178" />
            <path className="learning-flow learning-flow--systems" d="M354 167H378" />
            <g className="learning-user learning-user--one">
              <circle cx="48" cy="146" r="7" />
              <path d="M34 174c1-11 6-17 14-17s13 6 14 17" />
            </g>
            <g className="learning-user learning-user--two">
              <circle cx="83" cy="128" r="6" />
              <path d="M71 151c1-9 5-14 12-14s11 5 12 14" />
            </g>
            <g className="learning-user learning-user--three">
              <circle cx="84" cy="171" r="6" />
              <path d="M72 194c1-9 5-14 12-14s11 5 12 14" />
            </g>
            <g className="learning-user learning-user--four">
              <circle cx="117" cy="146" r="6" />
              <path d="M105 169c1-9 5-14 12-14s11 5 12 14" />
            </g>
            <text className="learning-visual-label" x="31" y="221">1 USER</text>
            <text className="learning-visual-label" x="82" y="221">N USERS</text>

            <g className="learning-system learning-system--one">
              <rect x="181" y="124" width="48" height="31" rx="4" />
              <path d="M190 134h18m-18 9h26" />
              <circle cx="219" cy="134" r="2" />
              <circle cx="219" cy="143" r="2" />
            </g>
            <g className="learning-system learning-system--two">
              <rect x="246" y="124" width="48" height="31" rx="4" />
              <path d="M255 134h18m-18 9h26" />
              <circle cx="284" cy="134" r="2" />
              <circle cx="284" cy="143" r="2" />
            </g>
            <g className="learning-system learning-system--three">
              <rect x="311" y="124" width="43" height="31" rx="4" />
              <path d="M320 134h15m-15 9h22" />
              <circle cx="345" cy="134" r="2" />
              <circle cx="345" cy="143" r="2" />
            </g>
            <path className="learning-system-link" d="M229 139h17m48 0h17" />
            <text className="learning-visual-label" x="193" y="221">SERVICES SCALE OUT</text>

            <circle className="learning-globe-halo" cx="488" cy="165" r="119" />
            <circle className="learning-globe" cx="488" cy="165" r="105" fill="url(#learning-globe-fill)" />
            <g clipPath="url(#learning-globe-clip)" className="learning-globe-network">
              <ellipse cx="488" cy="165" rx="47" ry="105" />
              <ellipse cx="488" cy="165" rx="88" ry="105" />
              <ellipse cx="488" cy="165" rx="105" ry="43" />
              <ellipse cx="488" cy="165" rx="105" ry="76" />
              <path className="learning-network-link" d="m411 112 62 22 58-38m-120 95 71-29 63 47m-134-113 70 95 37 53m-45-115 58 47" />
              <circle className="learning-network-node learning-network-node--a" cx="411" cy="112" r="5" />
              <circle className="learning-network-node learning-network-node--b" cx="473" cy="134" r="5" />
              <circle className="learning-network-node learning-network-node--c" cx="531" cy="96" r="6" />
              <circle className="learning-network-node learning-network-node--d" cx="482" cy="163" r="7" />
              <circle className="learning-network-node learning-network-node--e" cx="545" cy="210" r="5" />
              <circle className="learning-network-node learning-network-node--f" cx="419" cy="191" r="5" />
              <circle className="learning-network-node learning-network-node--g" cx="489" cy="229" r="5" />
            </g>
            <text className="learning-visual-label learning-visual-label--globe" x="460" y="302">CONNECTED SYSTEMS</text>
          </svg>
          <div className="learning-journey__legend">
            <span><i /> USERS</span>
            <span><i /> SERVICES</span>
            <span><i /> GLOBAL NETWORK</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Learning
