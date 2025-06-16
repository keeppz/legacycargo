import Image from 'next/image';
import Link from 'next/link';

const OnePageNav = () => {
  return (
    <section className="one-page-nav">
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="nav-wrapper">
              <div className="nav-item">
                <Link href="#home">
                  <Image
                    src="/assets/img/icon/home.svg"
                    alt="home icon"
                    width={24}
                    height={24}
                    className="icon"
                  />
                </Link>
              </div>
              <div className="nav-item">
                <Link href="#about">
                  <Image
                    src="/assets/img/icon/about.svg"
                    alt="about icon"
                    width={24}
                    height={24}
                    className="icon"
                  />
                </Link>
              </div>
              <div className="nav-item">
                <Link href="#services">
                  <Image
                    src="/assets/img/icon/services.svg"
                    alt="services icon"
                    width={24}
                    height={24}
                    className="icon"
                  />
                </Link>
              </div>
              <div className="nav-item">
                <Link href="#portfolio">
                  <Image
                    src="/assets/img/icon/portfolio.svg"
                    alt="portfolio icon"
                    width={24}
                    height={24}
                    className="icon"
                  />
                </Link>
              </div>
              <div className="nav-item">
                <Link href="#team">
                  <Image
                    src="/assets/img/icon/team.svg"
                    alt="team icon"
                    width={24}
                    height={24}
                    className="icon"
                  />
                </Link>
              </div>
              <div className="nav-item">
                <Link href="#contact">
                  <Image
                    src="/assets/img/icon/contact.svg"
                    alt="contact icon"
                    width={24}
                    height={24}
                    className="icon"
                  />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnePageNav; 