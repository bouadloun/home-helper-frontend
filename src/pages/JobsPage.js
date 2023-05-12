function JobsPage() {
  // const jobs = backend.giveMeAllJobs();
  // const categories = backend.giveMeAllCategories();

  const categories = ["cleaning", "painting", "plumbing"];

  const jobs = [
    { _id: "a", title: "job 1", description: "description 1", budget: 50 },
    { _id: "b", title: "job 2", description: "description 2", budget: 10 },
  ];

  function jobObjectToHTML(job) {
    return (
      <li key={job._id}>
        <div>
          <p>{job.title}</p>
          <p>{job.description}</p>
          <p>{job.budget}</p>
        </div>
      </li>
    );
  }

  return (
    //  <label className="selectRole" for="select-role">Are you an parent or a sitter?</label>
    //         <select className="dropdown-role" onChange={handleRole}>
    //           <option value="owner">Parent</option>
    //           <option value="sitter">Sitter</option>
    //         </select>

    <div>
      <h1 className="auth-title">Jobs</h1>
      <ul>{jobs.map(jobObjectToHTML)}</ul>
    </div>
  );
}

export default JobsPage;
