import FooterBackground from './components/footer-background';
import BrandLogo from './components/brand-logo';

export default function Home() {
  return (
    <footer className="footer" aria-label="Footer">
      <FooterBackground />
      <div className="jobs">
        <span className="tag">About me</span>
        <span className="headline job-title">
          Nguyễn Phương Nga
        </span>
        <p style={{ marginTop: '0.8vw', fontSize: '0.95vw', lineHeight: '1.4', color: 'inherit' }}>
          &quot;Be willing to start again, embrace new challenges, and turn every experience into an
          opportunity to grow, create value, and make a meaningful impact.&quot;
        </p>
        <div className="footer-nav">
          <span>Academic</span>
          <span>Experience</span>
          <span>Project</span>
          <span>Contact</span>
        </div>
      </div>

      <div className="logo" role="img" aria-label="Studio logo">
        <BrandLogo />
      </div>

      <div className="contact">
        <span className="tag">Academic &amp; Contact</span>
        <div className="headline contact-links">
          <span>Foreign Trade University</span>
          <span>International Business &amp; Economics</span>
        </div>
        <p className="note">GPA: 3.57 | Languages: English, Russian</p>
        <p className="note" style={{ marginTop: '0.5vw' }}>
          Email: ngphuona06@gmail.com | Phone: 0988094163
        </p>

        <div className="socials">
          <span aria-label="LinkedIn">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/linkedin.svg" alt="LinkedIn" width="35" height="35" />
          </span>
          <span aria-label="Instagram">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/instagram.svg" alt="Instagram" width="35" height="35" />
          </span>
          <span aria-label="TikTok">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/tiktok.svg" alt="TikTok" width="35" height="35" />
          </span>
        </div>
      </div>

      {/* SECTION BỔ SUNG NỘI DUNG CHI TIẾT (ABOUT ME, ACADEMIC, EXPERIENCE, PROJECT) */}
      <section
        className="user-profile-details"
        style={{
          marginTop: '6vw',
          padding: '2.5rem',
          backgroundColor: 'rgba(255, 255, 255, 0.9)',
          borderRadius: '20px',
          backdropFilter: 'blur(12px)',
          maxWidth: '1050px',
          marginLeft: 'auto',
          marginRight: 'auto',
          color: '#080909',
          boxShadow: '0 10px 40px rgba(0,0,0,0.06)',
          position: 'relative',
          zIndex: 2,
        }}
      >
        {/* About me */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '2rem', alignItems: 'center' }}>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/imagecv.png"
            alt="Nguyễn Phương Nga"
            style={{
              width: '160px',
              height: '160px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '4px solid #ffffff',
              boxShadow: '0 4px 14px rgba(0,0,0,0.1)',
            }}
          />
          <div style={{ flex: '1', minWidth: '280px' }}>
            <h2
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 900,
                fontSize: '1.8rem',
                margin: '0 0 0.5rem 0',
              }}
            >
              About me
            </h2>
            <h3 style={{ margin: '0 0 0.5rem 0', fontSize: '1.2rem', fontWeight: 600 }}>
              Nguyễn Phương Nga
            </h3>
            <p style={{ fontStyle: 'italic', color: '#444', margin: '0 0 1rem 0', lineHeight: '1.5' }}>
              &quot;Be willing to start again, embrace new challenges, and turn every experience into an
              opportunity to grow, create value, and make a meaningful impact.&quot;
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', fontSize: '0.95rem' }}>
              <span>
                <strong>Email:</strong> ngphuona06@gmail.com
              </span>
              <span>
                <strong>Phone:</strong> 0988094163
              </span>
            </div>
          </div>
        </div>

        <hr style={{ border: 'none', borderTop: '1px solid #e2e8f0', margin: '2rem 0' }} />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '2rem',
          }}
        >
          {/* Academic */}
          <div>
            <h3
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 900,
                fontSize: '1.3rem',
                marginBottom: '0.8rem',
              }}
            >
              Academic
            </h3>
            <p style={{ margin: '0 0 0.3rem 0', fontWeight: 'bold' }}>Foreign Trade University</p>
            <p style={{ margin: '0 0 0.3rem 0' }}>International Business &amp; Economics</p>
            <p style={{ margin: '0 0 0.3rem 0' }}>
              <strong>GPA:</strong> 3.57
            </p>
            <p style={{ margin: 0 }}>
              <strong>Languages:</strong> English, Russian
            </p>
          </div>

          {/* Experience */}
          <div>
            <h3
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 900,
                fontSize: '1.3rem',
                marginBottom: '0.8rem',
              }}
            >
              Experience
            </h3>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>
                <strong>Restaurant Server:</strong> Provided customer service, handled orders and
                supported daily restaurant operations.
              </li>
              <li>
                <strong>Sales Assistant:</strong> Assisted customers, recommended products, and managed
                product arrangement.
              </li>
              <li>
                <strong>Cashier:</strong> Handled payments, managed cash transactions, and checked
                daily sales.
              </li>
              <li>
                <strong>Accounting Assistant for Private Business:</strong> Handled basic accounting
                tasks, documents, and financial data.
              </li>
              <li>
                <strong>Vice President - 350VN Environmental Club:</strong> Supported club operations,
                coordinated environmental activities, and collaborated with members to organize
                community projects and events.
              </li>
            </ul>
          </div>

          {/* Project */}
          <div>
            <h3
              style={{
                fontFamily: 'Epilogue, sans-serif',
                fontWeight: 900,
                fontSize: '1.3rem',
                marginBottom: '0.8rem',
              }}
            >
              Project
            </h3>
            <ul style={{ paddingLeft: '1.2rem', margin: 0, lineHeight: '1.6', fontSize: '0.95rem' }}>
              <li>
                <strong>GE - Green Exchange:</strong> Participated in an environmental project
                promoting recycling and sustainable living through community activities.
              </li>
              <li>
                <strong>VinFast VF8 Market Entry Research - Brazil:</strong> Conducted market research
                and analyzed the factors influencing VinFast VF8&apos;s potential entry into the
                Brazilian market.
              </li>
            </ul>
          </div>
        </div>
      </section>
    </footer>
  );
}
