export default function Projects() {
  return (
    <section>
      <h2>Key Projects</h2>

      <div className="card">
  <h3>Machine Learning with Spark Streaming for Crime Classification</h3>
  <ul>
    <li>Developed a real-time Spark Streaming pipeline for crime data classification.</li>
    <li>Implemented ML models including Logistic Regression, Naïve Bayes, and Random Forest for predictive analytics.</li>
    <li>Managed classification of crime categories as target variables and optimized model performance on large-scale datasets.</li>
  </ul>
</div>


      <div className="card">
        <h3>Kafka-Based Crime Data Analysis Platform</h3>
        <ul>
          <li>Real-time data streaming using Kafka, Spark, MongoDB</li>
          <li>Cluster monitoring with CMAK and Zookeeper</li>
          <li>Fault-tolerant producers and consumers</li>
        </ul>
      </div>


      <div className="card">
        <h3>Linux AppArmor Security Profiles</h3>
        <ul>
          <li>Designed custom Mandatory Access Control (MAC) profiles</li>
          <li>Sandboxed applications to prevent privilege escalation</li>
          <li>Strengthened Linux system security</li>
        </ul>
      </div>

            <div className="card">
        <h3>MERN Stack Dashboard Application</h3>
        <ul>
          <li>Tech stack: React, Node.js, Express, MongoDB, Redux</li>
          <li>JWT-based authentication, CRUD operations, pagination</li>
          <li>Material-UI and fully responsive design</li>
        </ul>
      </div>

    </section>



  );
}

