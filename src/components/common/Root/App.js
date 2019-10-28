import React, { Component } from "react";
import { connect } from "react-redux";
import { Switch, Route } from "react-router-dom";
import AdminDashboard from "../../admin/Dashboard";
import AdminLogin from "../../admin/Login";
import AdminJobsContainer from "../../../containers/admin/JobsContainer";
import CandidateDashboard from "../../candidate/Dashboard";
import CandidateJobsContainer from "../../../containers/candidate/JobsContainer";
import EmployerDashboard from "../../employer/Dashboard";
import EmployerJobsContainer from "../../../containers/employer/JobsContainer";
import Landing from "../../common/Landing";
import Login from "../../common/Login";
import NavBar from "../../common/Nav";
import Profile from "../../common/Profile";
import SignUp from "../../common/SignUp";

class App extends Component {
  renderPortal = () => {
    const { user } = this.props;
    const userType = user.user_type;
    switch (userType) {
      case "admin":
        return <AdminDashboard />;
      case "candidate":
        return <CandidateDashboard />;
      case "employer":
        return <EmployerDashboard />;

      default:
        return null;
    }
  };

  render() {
    const { user, loggedIn } = this.props;
    return (
      <div className="app">
        <NavBar user={user} />
        <Switch>
          <Route
            exact
            path="/login"
            render={() => (loggedIn ? this.renderPortal() : <Login />)}
          />
          <Route
            exact
            path="/admin"
            render={() => (loggedIn ? <AdminDashboard /> : <AdminLogin />)}
          />
          <Route
            exact
            path="/admindashboard"
            render={() => <AdminDashboard />}
          />
          <Route
            exact
            path="/submittedjobs"
            render={props => <AdminJobsContainer user={props.user} />}
          />
          <Route
            exact
            path="/approvedjobs"
            render={() => <AdminJobsContainer user={user} />}
          />
          <Route
            exact
            path="/employerdashboard"
            render={() => <EmployerDashboard />}
          />
          <Route
            exact
            path="/alljobs"
            render={() => <EmployerJobsContainer user={user} />}
          />
          <Route
            exact
            path="/pendingjobs"
            render={() => <EmployerJobsContainer user={user} />}
          />

          <Route
            exact
            path="/employerjobs"
            render={() => <EmployerJobsContainer user={user} />}
          />

          <Route
            exact
            path="/draftjobs"
            render={props => (
              <div>
                <EmployerJobsContainer user={user} {...props} />
              </div>
            )}
          />
          <Route
            exact
            path="/candidatedashboard"
            render={props => (
              <div>
                <CandidateDashboard />
              </div>
            )}
          />
          <Route
            exact
            path="/candidatejobs"
            render={() => <CandidateJobsContainer user={user} />}
          />
          <Route exact path="/profile" render={() => <Profile user={user} />} />
          <Route exact path="/signup" render={props => <SignUp {...props} />} />
          <Route
            path="/"
            render={props => (user ? this.renderPortal() : <Landing />)}
          />
        </Switch>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    loggedIn: state.auth.loggedIn,
    user: state.auth.user
  };
};

export default connect(
  mapStateToProps,
  null
)(App);
