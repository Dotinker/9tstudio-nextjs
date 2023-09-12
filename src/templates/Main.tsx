import Link from "next/link";
import { useEffect, type ReactNode, useState } from "react";

import { AppConfig } from "@/utils/AppConfig";

import dynamic from "next/dynamic";
import DefaultPreloader from "@/components/loader/DefaultPreloader";

// const DefaultPreloader = dynamic(() => import('@/components/loader/DefaultPreloader'), { ssr: false })

type IMainProps = {
  meta?: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => {


  return (
    <main>
     
        <DefaultPreloader     />
     
  
      {/* <div className="cd-index cd-main-content">
        <div
          id="page-content"
          className="light-content"
          data-bgcolor="#171717"
        ></div>

        <header
          className="fullscreen-menu invert-header"
          data-menucolor="#171717"
        >
          <div id="header-container">
            <div id="logo" className="hide-ball">
              <a
                className="ajax-link"
                data-type="page-transition"
                href="index.html"
              >
                <img
                  className="black-logo"
                  src="images/logo.png"
                  alt="ClaPat Logo"
                />
                <img
                  className="white-logo"
                  src="images/logo-white.png"
                  alt="ClaPat Logo"
                />
              </a>
            </div>

            <nav>
              <div className="nav-height">
                <div className="outer">
                  <div className="inner">
                    <ul data-breakpoint="10025" className="flexnav">
                      <li className="link menu-timeline">
                        <a className="" href="#">
                          <div className="before-span">
                            <span data-hover="Portfolio">Portfolio</span>
                          </div>
                        </a>
                        <ul>
                          <li>
                            <a
                              className="ajax-link active"
                              href="index.html"
                              data-type="page-transition"
                            >
                              Landing Page
                            </a>
                          </li>
                          <li>
                            <a
                              className="ajax-link"
                              href="index-showcase.html"
                              data-type="page-transition"
                            >
                              Showcase WebGL
                            </a>
                          </li>
                          <li>
                            <a
                              className="ajax-link"
                              href="index-carousel.html"
                              data-type="page-transition"
                            >
                              Showcase Carousel
                            </a>
                          </li>
                          <li>
                            <a
                              className="ajax-link"
                              href="portfolio-overlapping-grid.html"
                              data-type="page-transition"
                            >
                              Overlapping Portfolio
                            </a>
                          </li>
                          <li>
                            <a
                              className="ajax-link"
                              href="portfolio-parallax-grid.html"
                              data-type="page-transition"
                            >
                              Parallax Portfolio
                            </a>
                          </li>
                          <li>
                            <a
                              className="ajax-link"
                              href="portfolio-grid.html"
                              data-type="page-transition"
                            >
                              Random Portfolio
                            </a>
                          </li>
                        </ul>
                      </li>
                      <li className="link menu-timeline">
                        <a
                          className="ajax-link"
                          data-type="page-transition"
                          href="about.html"
                        >
                          <div className="before-span">
                            <span data-hover="About">About</span>
                          </div>
                        </a>
                      </li>
                      <li className="link menu-timeline">
                        <a
                          className="ajax-link"
                          data-type="page-transition"
                          href="contact.html"
                        >
                          <div className="before-span">
                            <span data-hover="Contact">Contact</span>
                          </div>
                        </a>
                      </li>
                      <li className="link menu-timeline">
                        <a className="" href="#">
                          <div className="before-span">
                            <span data-hover="More">More</span>
                          </div>
                        </a>
                        <ul>
                          <li>
                            <a
                              className="ajax-link"
                              href="typography.html"
                              data-type="page-transition"
                            >
                              Typography
                            </a>
                          </li>
                          <li>
                            <a
                              className="ajax-link"
                              href="multimedia.html"
                              data-type="page-transition"
                            >
                              Multimedia
                            </a>
                          </li>
                          <li>
                            <a
                              className="ajax-link"
                              href="shortcodes.html"
                              data-type="page-transition"
                            >
                              Shortcodes
                            </a>
                          </li>
                        </ul>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </nav>

            <div className="button-wrap right menu burger-lines">
              <div className="icon-wrap parallax-wrap">
                <div className="button-icon parallax-element">
                  <div id="burger-wrapper">
                    <div id="menu-burger">
                      <span></span>
                      <span></span>
                      <span></span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="button-text sticky right">
                <span data-hover="Menu">Menu</span>
              </div>
            </div>
          </div>
        </header>
      </div> */}

      {props.children}

      <footer className="hidden">
        <div id="footer-container">
          <div id="backtotop" className="button-wrap left">
            <div className="icon-wrap parallax-wrap">
              <div className="button-icon parallax-element">
                <i className="fa-solid fa-angle-up"></i>
              </div>
            </div>
            <div className="button-text sticky left">
              <span data-hover="Back Top">Back Top</span>
            </div>
          </div>

          <div className="footer-middle">
            <div className="copyright">
              2022 ©{" "}
              <a
                className="link"
                target="_blank"
                href="https://www.clapat.com/"
              >
                ClaPat
              </a>
              . All rights reserved.
            </div>
          </div>

          <div className="socials-wrap">
            <div className="socials-icon">
              <i className="fa-solid fa-share-nodes"></i>
            </div>
            <div className="socials-text">Follow Us</div>
            <ul className="socials">
              <li>
                <span className="parallax-wrap">
                  <a
                    className="parallax-element"
                    href="https://www.dribbble.com/clapat"
                    target="_blank"
                  >
                    Db
                  </a>
                </span>
              </li>
              <li>
                <span className="parallax-wrap">
                  <a
                    className="parallax-element"
                    href="https://www.twitter.com/clapatdesign"
                    target="_blank"
                  >
                    Tw
                  </a>
                </span>
              </li>
              <li>
                <span className="parallax-wrap">
                  <a
                    className="parallax-element"
                    href="https://www.behance.com/clapat"
                    target="_blank"
                  >
                    Be
                  </a>
                </span>
              </li>
              <li>
                <span className="parallax-wrap">
                  <a
                    className="parallax-element"
                    href="https://www.facebook.com/clapat.ro"
                    target="_blank"
                  >
                    Fb
                  </a>
                </span>
              </li>
              <li>
                <span className="parallax-wrap">
                  <a
                    className="parallax-element"
                    href="https://www.instagram.com/clapat.themes/"
                  >
                    In
                  </a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </main>
  );
};

export { Main };
