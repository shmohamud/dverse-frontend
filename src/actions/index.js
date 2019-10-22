export const LOGIN_BEGIN = "LOGIN_BEGIN";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT = "LOGOUT";

export const FETCH_CANDIDATES_BEGIN = "FETCH_CANDIDATES_BEGIN";
export const FETCH_CANDIDATES_SUCCESS = "FETCH_CANDIDATES_SUCCESS";
export const FETCH_CANDIDATES_FAILURE = "FETCH_CANDIDATES_FAILURE";
export const SELECT_CANDIDATE = "SELECT_CANDIDATE";

export const FETCH_JOBS_BEGIN = "FETCH_JOBS_BEGIN";
export const FETCH_JOBS_SUCCESS = "FETCH_JOBS_SUCCESS";
export const FETCH_JOBS_FAILURE = "FETCH_JOBS_FAILURE";

export const CREATE_JOB_BEGIN = "CREATE_JOB_BEGIN";
export const CREATE_JOB_SUCCESS = "CREATE_JOB_SUCCESS";
export const CREATE_JOB_FAILURE = "CREATE_JOB_FAILURE";

export const JOB_EDIT_BEGIN = "JOB_EDIT_BEGIN";
export const JOB_EDIT_SAVE = "JOB_EDIT_SAVE";
export const JOB_EDIT_SUCCESS = "JOB_EDIT_SAVE";
export const JOB_EDIT_FAILURE = "JOB_EDIT_SAVE";
export const JOB_EDIT_CANCEL = "JOB_EDIT_CANCEL";

export const DELETE_JOB_BEGIN = "DELETE_JOB_BEGIN";
export const DELETE_JOB_SUCCESS = "DELETE_JOB_SUCCESS";
export const DELETE_JOB_FAILURE = "DELETE_JOB_FAILURE";
export const SELECT_JOB = "SELECT_JOB";


//-------------------------------------------ACTION TYPES------------------------------------//--------------------------------

export const loginBegin = (email, password) => ({
  type: LOGIN_BEGIN,
  email: email,
  password: password
});

export const loginSuccess = data => {
  return {
    type: LOGIN_SUCCESS,
    user: data.user,
    token: data.token
  };
};

export const loginFailure = () => ({
  type: LOGIN_FAILURE,
  failure: true
});

export const logout = () => ({
  type: LOGOUT
});

//-------------------------------------------------ACTION CREATORS------------------------------//------------------------------------

export const fetchCandidatesBegin = () => ({
  type: FETCH_CANDIDATES_BEGIN
});

export const fetchCandidatesSuccess = users => ({
  type: FETCH_CANDIDATES_SUCCESS,
  payload: { users }
});

export const fetchCandidatesFailure = error => ({
  type: FETCH_CANDIDATES_FAILURE,
  payload: { error }
});

export const selectCandidate = candidate => ({
  type: SELECT_CANDIDATE,
  payload: { candidate }
});

//------------------------------------------------------------------------//------------------------------------

export const createJobBegin = () => ({
  type: CREATE_JOB_BEGIN
});

export const createJobSuccess = job => {
  return {
    type: CREATE_JOB_SUCCESS,
    payload: { job }
  };
};
export const createJobFailure = error => ({
  type: CREATE_JOB_FAILURE,
  payload: { error }
});

export const deleteJobBegin = () => ({
  type: DELETE_JOB_BEGIN
});

export const deleteJobSuccess = id => {
  return {
    type: DELETE_JOB_SUCCESS,
    payload: { id }
  };
};
export const deleteJobFailure = error => ({
  type: DELETE_JOB_FAILURE,
  payload: { error }
});

export const fetchJobsBegin = () => ({
  type: FETCH_JOBS_BEGIN
});

export const fetchJobsSuccess = jobs => ({
  type: FETCH_JOBS_SUCCESS,
  payload: { jobs }
});

export const fetchJobsFailure = error => ({
  type: FETCH_JOBS_FAILURE,
  payload: { error }
});

export const selectJob = job => ({
  type: SELECT_JOB,
  payload: { job }
});

export const jobEditBegin = (title, body) => ({
  type: JOB_EDIT_BEGIN,
  payload: { body, title }
});

//---------------------------------------HELPERS---------------------------------------------//

const BASE_URL = "https://dverse-staffing-backend.herokuapp.com/";

export function setUser(email, password) {
  return dispatch => {
    dispatch(loginBegin(email, password));
    fetch(BASE_URL + "api/v1/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        HTTP_AUTHORIZATION: "Bearer <super encoded JWT>",
        Accept: "application/json"
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    })
      .then(resp => resp.json())
      .then(data => {
        if (data.authenticated) {
          dispatch(loginSuccess(data));
          return data;
        } else {
          alert("Incorrect username or password");
        }
      });
  };
}

export function fetchCandidates() {
  return dispatch => {
    dispatch(fetchCandidatesBegin());
    return fetch(BASE_URL + "api/v1/users")
      .then(resp => resp.json())
      .then(users => {
        dispatch(fetchCandidatesSuccess(users));
        return
      })
      .catch(error => dispatch(fetchCandidatesFailure(error)));
  };
}

export function fetchJobs() {
  return dispatch => {
    dispatch(fetchJobsBegin());
    return fetch(BASE_URL + "api/v1/jobs")
      .then(resp => resp.json())
      .then(jobs => {
        dispatch(fetchJobsSuccess(jobs));
        return
      })
      .catch(error => dispatch(fetchJobsFailure(error)));
  };
}

export function createJob(id) {
  debugger
  return dispatch => {
    dispatch(createJobBegin());
    return fetch(BASE_URL + "api/v1/jobs", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify({
        user_id: id
      })
    })
      .then(resp => resp.json())
      .then(job => {
        dispatch(createJobSuccess(
          job
        ))
        return 
      })
      .catch(error => dispatch(createJobFailure(error)));
  };
}


export function editJob(){
 return null
}


export function setJob(job) {
  return selectJob(job);
}

export function deleteSelected(id) {
  return dispatch => {
    dispatch(deleteJobBegin());
    return fetch(BASE_URL + "api/v1/jobs/" + id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: JSON.stringify(id)
    })
      .then(resp => resp.json())
      .then(() => {
        dispatch(deleteJobSuccess(id));
        return id;
      })
      .catch(error => dispatch(deleteJobFailure(error)));
  };
}
