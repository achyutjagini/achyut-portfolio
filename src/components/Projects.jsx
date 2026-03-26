export default function Projects() {
  return (
    <section>
      <h2>Key Projects</h2>

      <div className="card">
        <h3>Twiga – AI WhatsApp Bot for Tanzanian Educators</h3>
        <ul>
          <li>Contributed to an open-source WhatsApp chatbot built for Tanzanian teachers, awarded the Meta Llama Impact Grant Innovation Award 2024.</li>
          <li>Implemented features using retrieval-augmented generation (RAG) with open-source LLMs to help educators generate exams, write lesson plans, and search curriculum content.</li>
          <li>Built on a FastAPI backend with PostgreSQL (Neon), Redis, and Docker; integrated Prometheus and Grafana for monitoring LLM performance and WhatsApp webhook metrics.</li>
          <li>Collaborated with the Tanzania AI Community and open-source contributors to advance AI-powered education tools for social good.</li>
        </ul>
        <a href="https://github.com/achyutjagini/twiga" target="_blank" rel="noopener noreferrer">GitHub</a>
      </div>

      <div className="card">
  <h3>Machine Learning with Spark Streaming for Crime Classification</h3>
  <ul>
    <li>Developed a real-time Spark Streaming pipeline for crime data classification.</li>
    <li>Implemented ML models including Logistic Regression, Naïve Bayes, and Random Forest for predictive analytics.</li>
    <li>Managed classification of crime categories as the target variable and optimized model performance on the San Francisco Crime dataset.</li>
  </ul>
</div>


       <div className="card">
        <h3>AppArmor Security Profile</h3>
        <ul>
          <li>Developed a custom AppArmor profile to restrict the nano text editor to a specific directory.</li>
          <li>Enforced Mandatory Access Control (MAC) to allow writes only in the designated directory while denying unauthorized modifications.</li>
          <li>Configured execution policies to allow essential system library access while preventing privilege escalation.</li>
          <li>Strengthened security by restricting subdirectory write access and enforcing deny rules outside the workspace.</li>
        </ul>
      </div>

         <div className="card">
        <h3>Kafka-Based Crime Data Analysis Platform</h3>
        <ul>
          <li>Configured and managed a real-time data processing pipeline using Spark, Kafka, and Zookeeper.</li>
          <li>Set up and maintained Kafka Configuration Manager (CMAK) for stream monitoring.</li>
          <li>Engineered JSON-based producers and consumers to facilitate data exchange between Kafka and MongoDB.</li>
          <li>Utilized MongoDB Compass for complex data aggregation and analysis tasks.</li>
        </ul>
      </div>

      <div className="card">
        <h3>MERN Stack Dashboard Web Application</h3>
        <ul>
          <li>Developed a company dashboard using the MERN stack, integrating Redux for state management and Material-UI for design.</li>
          <li>Implemented features for managing sales, accounts, and orders with pagination support for efficient data handling.</li>
          <li>Built fully responsive UI with secure and efficient CRUD operations.</li>
        </ul>
      </div>

      <div className="card">
        <h3>Java Course Management System</h3>
        <ul>
          <li>Engineered a three-module system using Java Swing and MySQL (Admin, Student, Instructor functionalities).</li>
          <li>Developed admin capabilities for course creation and user account management.</li>
          <li>Enabled students to view and submit assignments while allowing instructors to create assignments and share course information.</li>
        </ul>
      </div>

    </section>



  );
}

