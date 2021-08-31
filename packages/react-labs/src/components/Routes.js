import Loadable from "@loadable/component";
// import Loading from "codepen.io/3d-circle-loader";
import pMinDelay from "p-min-delay";
import React from "react";
import {
  Route,
  Switch,
  //   useLocation,
  //   useRouteMatch,
  withRouter,
} from "react-router-dom";
import { SpinnerFlexButton as Loading } from "./Util";

const Home = Loadable(() => import("../pages/index"), {
  fallback: <Loading />,
});

const WebApis = Loadable(() => import("../pages/WebApis"), {
  fallback: <Loading />,
});

const Estatistica = Loadable(() => import("../pages/Estatistica"), {
  fallback: <Loading />,
});

const JSONViewer = Loadable(
  () => pMinDelay(import("../pages/JSONViewer"), 2000),
  {
    fallback: <Loading />,
  }
);

const NoMatch = Loadable(
  () => import("codepen.io/error-404-page-not-found-80s-hacker-theme"),
  {
    fallback: <Loading />,
  }
);

const PortfolioDetail = () => <div>PortfolioDetail</div>;

// class Routes extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loggedInStatus: "NOT_LOGGED_IN"
//     };
//   }

//   componentDidMount() {
//     // console.log("componentDidMount: ", this);
//   }

//   usePageViews() {
//     let location = useLocation();
//     let match = useRouteMatch();
//     React.useEffect(() => {
//       console.log(location);
//       // ga.send(["pageview", location.pathname]);
//     }, [location]);
//   }

//   render() {
//     // console.log("render: ", this);
//     usePageViews();
//     return (
//       <>
//       </>
//     );
//   }
// }

// // export default Routes;
// export default withRouter(Routes);

function Routes() {
  //   const location = useLocation();
  //   const match = useRouteMatch();
  //   console.log("location: ", location);
  //   console.log("match: ", match);

  return (
    <>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/index.html' component={Home} />
        <Route path='/jsonviewer' component={JSONViewer} />
        <Route path='/estatistica' component={Estatistica} />
        <Route path='/webapis' component={WebApis} />
        <Route exact path='/portfolio/:slug' component={PortfolioDetail} />
        <Route component={NoMatch} />
      </Switch>
    </>
  );
}

export default withRouter(Routes);
