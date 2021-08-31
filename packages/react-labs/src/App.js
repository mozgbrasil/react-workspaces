import Loadable from "@loadable/component";
import logo32 from "./images/Russian_Army_Star.svg";
// import { hot } from "react-hot-loader/root";
// import { createBrowserHistory } from "history";
import React from "react";
import GitHubButton from "react-github-btn";
import { HashRouter, NavLink } from "react-router-dom";
import {
  EmailIcon,
  EmailShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  FacebookShareButton,
  FacebookShareCount,
  LinkedinIcon,
  LinkedinShareButton,
  PinterestIcon,
  PinterestShareButton,
  PinterestShareCount,
  TwitterIcon,
  TwitterShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "react-share";
import "./App.css";
// import "./components/bootstrap"; // FIXME: Reload loop
import MainRoutes from "./components/Routes";
import { SpinnerFlexButton as Loading } from "./components/Util";

// const history = createBrowserHistory(); // createMemoryHistory
const shareUrl = document.location.href;
const title = "GitHub";

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark bg-theme'>
        <div className='container-fluid'>
          <div className='text-center'>
            <a className=' ' href={process.env.PUBLIC_URL}>
              <img
                src={logo32}
                width='50'
                className='d-inline-block align-top logo animated infinite bounce delay-2s'
                alt=''
              />
            </a>
            <p>
              <span className='badge bg-dark'>MOZG</span>
            </p>
          </div>
          <button
            className='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarSupportedContent'
            aria-controls='navbarSupportedContent'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span className='navbar-toggler-icon'></span>
          </button>
          <div className='collapse navbar-collapse' id='navbarSupportedContent'>
            <ul className='navbar-nav me-auto mb-2 mb-lg-0'>
              <li className=''>
                <NavLink
                  exact
                  to='/'
                  className='nav-link'
                  activeClassName='active'
                  activeStyle={{ fontWeight: "bold" }}
                >
                  Visão geral
                </NavLink>
              </li>
              <li className='nav-item '>
                <a
                  href='https://mozg.com.br/curriculum/'
                  target='_blank'
                  className='nav-link '
                  rel='noopener noreferrer'
                >
                  Curriculum
                </a>
              </li>
              <li className='nav-item  '>
                <NavLink exact to='/estatistica' className='nav-link '>
                  Chart.js
                </NavLink>
              </li>

              {/* <li className="nav-item dropdown {% if page.url == '/catalogo/' %} active{% endif %}">
                <a
                  className='nav-link dropdown-toggle'
                  href='#'
                  id='navbarDropdown'
                  role='button'
                  data-bs-toggle='dropdown'
                  aria-expanded='false'
                >
                  Projetos
                </a>
                <ul className='dropdown-menu' aria-labelledby='navbarDropdown'>
                  <li>
                    <NavLink
                    exact
                    to="/jsonviewer"
                    className="dropdown-item"
                    activeClassName="active"
                  >
                    JSON Viewer
                  </NavLink>
                    <NavLink
                      exact
                      to='/estatistica'
                      className='dropdown-item'
                      activeClassName='active'
                    >
                      Estatística
                    </NavLink>
                    <NavLink
                    exact
                    to="/webapis"
                    className="dropdown-item"
                    activeClassName="active"
                  >
                    WebApis
                  </NavLink>
                  </li>
                </ul>
              </li> */}
              <li className='nav-item'>
                <a
                  className='nav-link disabled'
                  href='#'
                  tabIndex='-1'
                  aria-disabled='true'
                >
                  Em breve
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

const Footer = () => (
  <>
    <footer className='bg-dark '>
      <div className='footer'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6'>
              <h3> Páginas </h3>
              <ul>
                <li>
                  <a className='footer-link' href='/'>
                    <i className=' icon'></i>Visão geral
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://mozg.com.br/curriculum/'
                  >
                    <i className=' icon'></i>Curriculum
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6'>
              <h3> Social </h3>
              <ul>
                <li>
                  <a
                    className='footer-link'
                    href='https://twitter.com/mozgbrasil'
                  >
                    <i className='icon twitter'></i>twitter
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://www.youtube.com/channel/UCiXR9cKwxNKMehSnqXvhtug/videos'
                  >
                    <i className='icon youtube'></i>youtube
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://www.facebook.com/mozgbrasil'
                  >
                    <i className='icon facebook'></i>facebook
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://plus.google.com/117231578401378218759'
                  >
                    <i className='icon google plus'></i>plus.google
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://mozgbrasil.wordpress.com/'
                  >
                    <i className='icon wordpress'></i>wordpress
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://mozgbrasil.blogspot.com.br/'
                  >
                    <i className='icon google'></i>blogspot
                  </a>
                </li>
                <li>
                  <a className='footer-link' href='http://mozg.negocio.site'>
                    <i className='icon google'></i>business.google
                  </a>
                </li>
              </ul>
            </div>

            {process.env.REACT_APP_BUILD_TYP === "web-extension" ? (
              ""
            ) : (
              <>
                <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6'>
                  <h3> Widgets </h3>
                  <ul>
                    {/* <li>
                  <a className="footer-link" href="/sitemap.xml">
                    <i className="icon sitemap"></i>Sitemap
                  </a>
                </li>
                <li>
                  <a className="footer-link" href="/feed.xml">
                    RSS
                  </a>
                </li> */}
                    <li>
                      <FacebookShareButton
                        url={shareUrl}
                        quote={title}
                        className='Demo__some-network__share-button'
                      >
                        <FacebookIcon size={32} round />
                      </FacebookShareButton>
                      <FacebookShareCount
                        url={shareUrl}
                        className='Demo__some-network__share-count'
                      >
                        {(count) => count}
                      </FacebookShareCount>
                      <FacebookMessengerShareButton
                        url={shareUrl}
                        appId='521270401588372'
                        className='Demo__some-network__share-button'
                      >
                        <FacebookMessengerIcon size={32} round />
                      </FacebookMessengerShareButton>
                      <WhatsappShareButton
                        url={shareUrl}
                        title={title}
                        separator=':: '
                        className='Demo__some-network__share-button'
                      >
                        <WhatsappIcon size={32} round />
                      </WhatsappShareButton>
                    </li>
                    <li>
                      <LinkedinShareButton
                        url={shareUrl}
                        className='Demo__some-network__share-button'
                      >
                        <LinkedinIcon size={32} round />
                      </LinkedinShareButton>

                      <TwitterShareButton
                        url={shareUrl}
                        title={title}
                        className='Demo__some-network__share-button'
                      >
                        <TwitterIcon size={32} round />
                      </TwitterShareButton>
                      <EmailShareButton
                        url={shareUrl}
                        subject={title}
                        body='body'
                        className='Demo__some-network__share-button'
                      >
                        <EmailIcon size={32} round />
                      </EmailShareButton>
                    </li>
                    <li>
                      <PinterestShareButton
                        url={String(window.location)}
                        media={`${String(window.location)}/`}
                        className='Demo__some-network__share-button'
                      >
                        <PinterestIcon size={32} round />
                      </PinterestShareButton>
                      <PinterestShareCount
                        url={shareUrl}
                        className='Demo__some-network__share-count'
                      />
                    </li>
                    <li>
                      <GitHubButton href='https://github.com/mozgbrasil'>
                        Follow @mozgbrasil
                      </GitHubButton>
                    </li>
                  </ul>
                </div>
              </>
            )}

            <div className='col-lg-2 col-md-2 col-sm-4 col-xs-6'>
              <h3> Repositórios </h3>
              <ul>
                <li>
                  <a
                    className='footer-link'
                    href='https://github.com/mozgbrasil/'
                  >
                    GitHub
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://gitlab.com/mozgbrasil'
                  >
                    Gitlab
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://bitbucket.org/mozgbrasil/'
                  >
                    Bitbucket
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://packagist.org/packages/mozgbrasil/'
                  >
                    Packagist
                  </a>
                </li>
                <li>
                  <a className='footer-link' href='https://www.npmjs.com/~mozg'>
                    NPM
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://launchpad.net/~mozgbrasil'
                  >
                    Launchpad
                  </a>
                </li>
              </ul>
            </div>
            <div className='col-lg-3 col-md-3 col-sm-6 col-xs-12'>
              <h3> Parceiros </h3>
              <ul>
                <li>
                  <a
                    className='footer-link'
                    href='https://www.cerebrum.com.br/'
                  >
                    <i className='icon sitemap'></i>CEREBRUM
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='https://www.comunidademagento.com.br/'
                  >
                    Comunidade Magento
                  </a>
                </li>
                <li>
                  <a className='footer-link' href='https://magento.com/'>
                    Magento
                  </a>
                </li>
                <li>
                  <a
                    className='footer-link'
                    href='http://www.cloudways.com/en/?id=35053'
                  >
                    Cloudways
                  </a>
                </li>
                <li>
                  <a className='footer-link' href='https://reactjs.org/'>
                    <i className='icon sitemap'></i>React
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='footer-bottom'>
        <div className='container'>
          <p className='pull-left'>
            <i className='fas fa-medal'> </i> Copyright © 2016-2021{" "}
            <a className='footer-link' href='https://mozg.com.br/'>
              <i className='icon sitemap'></i>MOZG
            </a>
          </p>
        </div>
        {/* <div className="container">&nbsp;</div> */}
      </div>
    </footer>
  </>
);

const Fullscreen = Loadable(
  () => import("codepen.io/add-fullscreen-toggle-to-your-pen"),
  {
    fallback: <Loading />,
  }
);
const AddToHomescreen = Loadable(
  () => import("@mozg/common/add-to-homescreen"),
  {
    fallback: <Loading />,
  }
);

const GravityAnimatedPoster = Loadable(
  () => import("codepen.io/gravity-animated-poster"),
  {
    fallback: <Loading />,
  }
);

// const SocketIO = Loadable(() => import("./components/SocketIO"), {
//   fallback: <Loading />
// });

const Layout = () => {
  return (
    <>
      <Header />
      {/* <main> */}
      <div className='container pl-sm-0 pr-sm-0 pl-lg-3 pr-lg-3'>
        <MainRoutes />
      </div>
      {/* </main> */}
      <Footer />
      <Fullscreen />
      <AddToHomescreen />
      <GravityAnimatedPoster />
      {/* <SocketIO /> */}
    </>
  );
};

const Body = () => {
  return (
    <HashRouter>
      <Layout />
    </HashRouter>
  );
};

function App_Mozg(props) {
  console.log("App:", props);
  return (
    <div className='App'>
      <Body />
    </div>
  );
}

const App = App_Mozg;

export default App;
