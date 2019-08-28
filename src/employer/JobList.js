import React, { Component } from "react"
import JobItem from "./JobItem"


class JobList extends Component {
  //Conditionally Render Job or Job Item
  renderJobItem = () => {
    let currUser = this.props.currUser
    //debugger
    if (currUser) {
      let userType = currUser.user_type
      switch (userType) {
        case "employer":
          return (
            <ul>
              {this.props.filteredJobs.map(job => (
                <JobItem currJob={job} showJob={this.props.showJob} />
              ))}
            </ul>
          )

        case "candidate":
          return (
            <ul>
              {this.props.filteredJobs.map(job => (
                <JobItem currJob={job} showJob={this.props.showJob} />
              ))}
            </ul>
          )

        case "admin":
          return (
            <ul>
              {this.props.filteredJobs.map(job => (
                <JobItem currJob={job} showJob={this.props.showJob} />
              ))}
            </ul>
          )
        default:
          return false
      }
    } else {
      return null
    }
  }

  render() {
    return this.renderJobItem()
  }
}

export default JobList