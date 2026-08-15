import { homepageContent } from '../../data/homepage'

function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__inner">
        <p className="site-footer__closing">{homepageContent.footer.closing}</p>
        <p className="site-footer__principle">{homepageContent.footer.principle}</p>
      </div>
    </footer>
  )
}

export default SiteFooter
