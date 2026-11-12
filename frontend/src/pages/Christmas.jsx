import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, MapPin } from 'lucide-react';
import HomeNavbar from '../components/HomeNavbar';
import './Christmas.css';

function Cassette() {
  return (
    <div className="christmas-cassette" aria-hidden="true">
      <i className="cassette-screw screw-one" /><i className="cassette-screw screw-two" />
      <div className="cassette-label">
        <span className="cassette-handwriting">Behind the music</span>
        <div className="cassette-tape">
          <span className="cassette-reel" />
          <span className="cassette-window"><i /></span>
          <span className="cassette-reel" />
        </div>
        <div className="cassette-label-bottom"><span>DECEMBER 6–24</span><small>SIDE A<br />FELLOWSHIP</small></div>
      </div>
      <div className="cassette-base"><i /><i /><i /></div>
      <i className="cassette-screw screw-three" /><i className="cassette-screw screw-four" />
    </div>
  );
}

export default function Christmas() {
  useEffect(() => {
    const previousTitle = document.title;
    document.title = 'Christmas at Fellowship | December 6–24';
    return () => { document.title = previousTitle; };
  }, []);

  return (
    <div className="christmas-page">
      <HomeNavbar />
      <main>
        <header className="christmas-hero">
          <p className="christmas-side-note">Songs we know. Truth we need.</p>
          <div className="christmas-hero-content">
            <p className="christmas-eyebrow">You’re invited · December 6–24</p>
            <h1>CHRISTMAS <span><small>AT</small> FELLOWSHIP</span></h1>
            <Cassette />
            <p className="christmas-hero-caption">Songs we know. Truth we need.</p>
            <div className="christmas-actions">
              <a href="#christmas-services" className="christmas-button">Find a service <ArrowDown size={17} /></a>
              <Link to="/plan-your-visit" className="christmas-text-link">Plan your visit <ArrowUpRight size={18} /></Link>
            </div>
          </div>
          <p className="christmas-side-note christmas-side-note-right">Fellowshiprc.com/christmas</p>
        </header>

        <section id="christmas-services" className="christmas-services christmas-section" aria-labelledby="christmas-services-title">
          <div className="christmas-container">
            <div className="christmas-section-heading"><div><p className="christmas-eyebrow">December 6–24</p><h2 id="christmas-services-title">Join us<br />this Christmas.</h2></div><p>A season of hope.<br />An invitation for everyone.</p></div>
            <div className="christmas-service-grid">
              <article className="christmas-service-card"><span className="christmas-track">01 / SUNDAYS</span><h3>Christmas<br />at Fellowship</h3><p className="christmas-service-dates">December 6, 13 &amp; 20</p><p className="christmas-service-time">9:30 <small>AM</small> <span>&amp;</span> 11 <small>AM</small></p><p>Celebrate with us each Sunday as we explore the hope of Christmas through worship and a message from our Behind the Music series.</p><Link to="/plan-your-visit" className="christmas-text-link">Plan your Sunday <ArrowUpRight size={18} /></Link></article>
              <article className="christmas-service-card christmas-eve-card"><span className="christmas-track">02 / CHRISTMAS EVE</span><h3>Celebrate<br />Christmas Eve</h3><p className="christmas-service-dates">December 24</p><p className="christmas-eve-time">3:00 PM &amp; 4:30 PM</p><p>Come celebrate the birth of Jesus with us this Christmas Eve. Join us at 3:00 or 4:30 PM on December 24.</p><a href="mailto:info@fbrc.org" className="christmas-text-link">Get in touch <ArrowUpRight size={18} /></a></article>
            </div>
            <a className="christmas-location" href="https://www.google.com/maps/search/?api=1&query=Fellowship+Church+900+Pullen+St+Royse+City+TX+75189" target="_blank" rel="noopener noreferrer"><MapPin size={20} /><span>900 Pullen St · Royse City, TX 75189</span><span className="christmas-directions">Get directions <ArrowUpRight size={16} /></span></a>
          </div>
        </section>

        <section className="christmas-invitation christmas-section" aria-labelledby="christmas-invitation-title"><div className="christmas-container"><p className="christmas-eyebrow">Songs we know. Truth we need.</p><h2 id="christmas-invitation-title">Christmas<br /><em>at Fellowship.</em></h2><p>December 6–24 · Fellowship Church · Royse City</p><Link to="/plan-your-visit" className="christmas-button">Plan your visit <ArrowUpRight size={18} /></Link><a href="#christmas-services" className="christmas-invitation-url">fellowshiprc.com/christmas</a></div></section>
      </main>
    </div>
  );
}
