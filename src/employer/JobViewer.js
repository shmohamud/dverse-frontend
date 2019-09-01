import React, { Fragment } from 'react'
import {withRouter} from 'react-router-dom'

const JobViewer = (props) => {

let renderButtons = () => {
  let currUserType = JSON.parse(localStorage.getItem("currUser")).user_type;
  let status = props.status;

  switch (status) {
    case "approved":
      if (currUserType === "employer") {
        return <button>Take Job Post Down</button>
      } else {
        return <button onClick={()=> props.disapproveJob(props.currJob)}>Revoke Job Post Approval</button>
      }

    case "submitted":
      if (currUserType === "employer") {
        return <button onClick={()=> props.withdrawSubmitJob(props.currJob)}>Withdraw Submission to Drafts</button>
      } else {
        return <button onClick={()=> props.approveJob(props.currJob)}>Approve Job</button>
      }

    case "draft":
      return <div><button onClick={props.editJob}>Edit Job</button><button onClick={()=> props.submitJob(props.currJob)}>Submit For Approval</button></div>
    default:
      return false;
  }
};

  return (
    <Fragment>
      <h2>{props.currJob.title}</h2>
      <p>{props.currJob.body}</p>
      {renderButtons()}
    
    </Fragment>
  )
}

export default withRouter(JobViewer);
