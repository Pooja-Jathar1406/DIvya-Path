

var GrievanceSystem = React.createClass({
    render: function() {
      return (
        <div>
          <title>Complaint Registration</title>
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          {/* Bootstrap v5.1.3 CDNs */}
          <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" />
          <link rel="stylesheet" href="style.css" />
          <div className="complaint-register">
            <h3 className="text-center">Grievance Registration</h3>
            <form className="needs-validation">
              <div className="form-group">
                <label className="form-label" htmlFor="name">First Name</label>
                <input className="form-control" type="text" id="text" placeholder="Enter First Name" required />
              </div>
              <br />
              <div className="form-group">
                <label className="form-label" htmlFor="name">Last Name</label>
                <input className="form-control" type="text" id="text" placeholder="Enter Last Name" required />
              </div>
              <br />
              <div className="form-group">
                <label className="form-label" htmlFor="email">Email address</label>
                <input className="form-control" type="email" id="email" placeholder="Enter Email Address" required />
              </div>
              <br />
              <div className="form-group ">
                <div>
                  <label htmlFor="Category">Category</label>
                  <select className="form-select" aria-label="Default select example" required>    
                    <option selected>Select</option>
                    <option value={1}>One</option>
                    <option value={2}>Two</option>
                    <option value={3}>Three</option>
                  </select>
                  <div className="invalid-feedback">
                    Please Select Category 
                  </div>
                </div>
              </div>
              <br />
              <div className="form-group">
                <label htmlFor="comment">Description of Complaint</label>
                <textarea className="form-control" rows={2} id="comment" placeholder="Enter Complaint Description" defaultValue={""} />
              </div>
              <br />
              <div className="form-group">  
                <div className="col-sm-12">
                  <label htmlFor="date">Date</label>
                  <input type="date" name="date" />  
                </div>  
              </div> 
              <br />
              <div>
                <label htmlFor="file-upload">Upload File</label>
                <input type="file" className="form-control" name="file" placeholder="user_defind" />
              </div>
              <br />
              <input className="btn btn-success w-100" type="submit" defaultValue="Submit" />
            </form>
          </div>
        </div>
      );
    }
  });