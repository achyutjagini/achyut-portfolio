export default function Experience() {
  return (
    <section>
      <h2>Industry Experience</h2>
      <div className="card">
        <h3>AMD — Machine Learning Intern</h3>
        <p>Jan 2023 – Jul 2023</p>
        <ul>
          <li>
            Built a Flask-based internal web application integrating a Siamese
            Neural Network for duplicate JIRA defect detection.
          </li>
          <li>
            Integrated Pinecone as a vector database for embedding-based
            similarity search.
          </li>
          <li>Designed REST APIs, reducing manual triage time by ~50%.</li>
          <li>Applied CI/CD, version control, and API testing best practices.</li>
        </ul>
      </div>
    </section>
  );
}
