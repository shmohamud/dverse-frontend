import React from "react";

//Get the first 3 words of a Job
const truncateJob = JobTitle => {
  let JobWordsArray = JobTitle.split(" ");
  //take first 3 words of array
  let firstThreeWords = JobWordsArray.splice(0, 3);

  //create string of first 3 words
  let threeWords = firstThreeWords.join();

  //set caption after removing commas, adding space b/w words
  var caption = threeWords.replace(/,/g, " ");

  caption += "...";

  return caption;
};

const JobItem = (props) => {
  const {currJob, showJob} = props
  return (
    <li onClick={() => showJob(props.currJob)}>
      <h2>{currJob.title}</h2>
      <p>{truncateJob(currJob.body)}</p>
    </li>
  );
};

export default JobItem;