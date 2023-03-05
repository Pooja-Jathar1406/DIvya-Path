import "../css/Navigation.css";
import { Navigation } from "./Navigation";
import "../css/Footer.css";

export function JobAdmin() {
  return (
    <div>
      <Navigation></Navigation>
      <meta charSet="UTF-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <link
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
        rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
        crossOrigin="anonymous"
      />
      <title>Job_Opportunities</title>
      <div className="container">
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
          crossOrigin="anonymous"
        />
        <title>Job_Opportunities</title>
        <div className="container">
          <br />
          <div className="card">
            <h5 className="card-header">JOB_PROFILE_02</h5>
            <div className="card-body">
              <h5 className="card-title">
                Hiring Person with Disability For Microsoft Power BI For PAN
                India
              </h5>
              <p className="card-text"></p>
              <dl className="row">
                <dt className="col-sm-2">Experience</dt>
                <dd className="col-sm-10">2 - 3 years</dd>
                <dt className="col-sm-2">Industry Type</dt>
                <dd className="col-sm-10">IT Services &amp; Consulting</dd>
                <dt className="col-sm-2">Employment Type</dt>
                <dd className="col-sm-10">Full Time, Permanent</dd>
                <dt className="col-sm-2">Education</dt>
                <dd className="col-sm-10">
                  UG :B.Tech/B.E. in Any Specialization, B.A in Any
                  Specialization, B.Com in Any Specialization, B.Sc in Any
                  Specialization
                </dd>
              </dl>
              <b>Roles and Responsibilities</b>
              <p>
                Strong analytical skills and the ability to pay careful
                attention to detail. Capacity to work well in groups and a
                willingness to understand the various roles played by fellow
                team members. Knowledge about the subject area in which they are
                working.
              </p>
              <p />
              <div className="btn-group row">
                <div className="dropdown col">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Location
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button className="dropdown-item" type="button">
                        Action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Another action
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Something else here
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown col">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Category
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button className="dropdown-item" type="button">
                        Locomotor Disability
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Visual Impairment
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Hearing Impairment
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" type="button">
                        Speech and Language Disability
                      </button>
                    </li>
                  </ul>
                </div>
                <div className="dropdown col">
                  <button
                    className="btn btn-secondary dropdown-toggle"
                    type="button"
                    id="dropdownMenu2"
                    data-bs-toggle="dropdown"
                    aria-expanded="false">
                    Status
                  </button>
                  <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
                    <li>
                      <button className="dropdown-item" href="#">
                        Active
                      </button>
                    </li>
                    <li>
                      <button className="dropdown-item" href="#">
                        In-Active
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="mt-2">
                <a href="#" className="btn btn-primary ">
                  EDIT
                </a>
                <a href="#" className="btn btn-primary ">
                  DELETE
                </a>
              </div>
            </div>
          </div>
          <br />
        </div>
      </div>
    </div>
  );
}
