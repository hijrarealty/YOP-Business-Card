import { company } from '../config.js'
import { ArrowUpRightIcon, MapPinIcon } from './Icons.jsx'
import Ruler from './Ruler.jsx'

export default function CompanySection() {
  const year = new Date().getFullYear()

  return (
    <section id="company" className="company" aria-labelledby="company-headline">
      <Ruler />
      <div className="company__inner">
        <img
          className="company__logo"
          src="/brand/yop-logo.png"
          alt={`${company.name}, Account on us`}
          width="855"
          height="411"
          loading="lazy"
          decoding="async"
        />
        <h2 id="company-headline" className="company__headline">
          {company.headline}
        </h2>
        <p className="company__description">{company.description}</p>

        <div className="company__actions">
          <a className="pill pill--brand" href={company.website} target="_blank" rel="noopener noreferrer">
            <span>{company.websiteLabel}</span>
            <span className="pill__icon">
              <ArrowUpRightIcon width="18" height="18" />
            </span>
          </a>
          <a className="pill pill--paper" href={company.mapsUrl} target="_blank" rel="noopener noreferrer">
            <span className="pill__icon">
              <MapPinIcon width="18" height="18" />
            </span>
            <span>Location</span>
          </a>
        </div>
      </div>

      <footer className="company__footer">
        © {year} {company.legalName} · {company.city}
      </footer>
    </section>
  )
}
