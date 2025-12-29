export default function Experience() {
  return (
    <section>
      <h2>Industry Experience</h2>
      <div className="card">
        <h3>AMD — Machine Learning Intern</h3>
        <p>Jan 2023 – Jul 2023</p>
        <ul>
          <li>
            Developed a <strong>Flask-based internal web application</strong> leveraging a
            <strong> Siamese Neural Network</strong> to detect and manage duplicate JIRA defect tickets.
          </li>
          <li>
            Integrated <strong>Pinecone vector database</strong> for embedding-based similarity search,
            enabling faster and more accurate ticket matching.
          </li>
          <li>
            Designed and implemented <strong>RESTful APIs</strong>, streamlining workflows and reducing
            manual triage time by ~50%.
          </li>
          <li>
            Applied <strong>CI/CD, version control, and API testing best practices</strong> to ensure
            production-ready, maintainable software.
          </li>
        </ul>
      </div>
    </section>
  );
}
