import { useEffect, useState } from "react";
import { Navigation } from "./Navigation";
import "../css/Home.css";
import "../css/Navigation.css";
import "../css/Footer.css";
import { addedJob } from "./AddJobAdmin"
import { addJobFromServer, getAllJobsFromServer } from "../Services/ApiServices";


export function JobAdmin() {
  
  const [jobs, setJobs] = useState([]);

  async function getAllJobs() {
    const response = await getAllJobsFromServer();
    setJobs(response.data);
  }
  useEffect(() => {
    getAllJobs();
  }, []);

  console.log(jobs);

  const job = jobs.map((ele) => {
    return ele + 1;
  });

    return  (
      <>
        <Navigation></Navigation>
        {jobs.map((job) => {
            return (
            <>
              <title>Job_User</title>
              <div className="container">
                <br />
                <div className="card">
                  <h5 className="card-header">JOB_PROFILE_02</h5>
                  <div className="card-body">
                    <div><h5 className="card-title">{addJobFromServer}</h5>
                      <span className="badge rounded-pill bg-success">Active</span></div>
                    <p className="card-text">
                      <b>Roles and Responsibilities</b>
                    </p>
                    <p>{job.addedJob}</p>
                    <p /> 
                    <dl className="row">
                      <dt className="col-sm-2">Experience</dt>
                      <dd className="col-sm-10">2 - 3 years</dd>
                      <dt className="col-sm-2">Location</dt>
                      <dd className="col-sm-10">Navi Mumbai</dd>
                      <dt className="col-sm-2">Category</dt>
                      <dd className="col-sm-10">Locomotor Disability</dd>
                      <dt className="col-sm-2">Industry Type</dt>
                      <dd className="col-sm-10">IT Services &amp; Consulting</dd>
                      <dt className="col-sm-2">Employment Type</dt>
                      <dd className="col-sm-10">Full Time, Permanent</dd>
                      <dt className="col-sm-2">Education</dt>
                      <dd className="col-sm-10">UG :B.Tech/B.E. in Any Specialization, B.A in Any Specialization, B.Com in Any Specialization, B.Sc in Any Specialization
                      </dd>
                    </dl>
                    <div className="mt-2">
                      <a href="/add-jobs-admin" className="btn btn-primary ">EDIT</a>
                    </div>
                  </div>
                </div>
                <br />
              </div>
            </>
            );
          })
        }
      </>
    );
  }
