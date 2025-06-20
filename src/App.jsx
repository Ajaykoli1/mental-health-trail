import React from "react";
import "./App.css";

function App() {
  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div className="header-content">
          <div className="header-top">
            <span className="brand">Mental Health</span>
            <nav>
              <a href="#">Home</a>
              <a href="#">About</a>
              <button className="signup-btn">Sign Up</button>
            </nav>
          </div>
          <h1>Your Mental Health Matters</h1>
          <p className="subtitle">Support for your well-being and personal growth.</p>
          <button className="get-started-btn">Get Started</button>
        </div>
        <div className="header-illustration">
          {/* Replace with your own SVG/illustration if desired */}
          <img src="https://images.rawpixel.com/image_png_800/cHJpdmF0ZS9sci9pbWFnZXMvd2Vic2l0ZS8yMDI0LTA5L3Jhd3BpeGVsb2ZmaWNlMTVfYWJzdHJhY3RfbGluZV9kcmF3aW5nX29mX3NpbGhvdWV0dGVfc2hhcGVfb2ZfYV8xMTliYWUxNS0zM2I2LTQ4OGEtYWM2Yi1jZjJhYjMxZDc3ODVfMS5wbmc.png" alt="Profile" />
        </div>
      </div>

      {/* Features */}
      <div className="features">
        <FeatureCard icon="😊" title="Mood Tracker" desc="Track your mood daily" />
        <FeatureCard icon="🧘" title="Guided Meditations" desc="Relax and unwind" />
        <FeatureCard icon="📝" title="Journal" desc="Write about your thoughts" />
        <FeatureCard icon="👩‍⚕️" title="Therapiste" desc="Connect with professionals" />
        <FeatureCard icon="💗" title="Self-Assessment" desc="Take quizzes to assess your mental health" wide />
        <FeatureCard icon="💡" title="Resources" desc="Read articles and guides on mental well-being" wide />
      </div>

      {/* Latest Articles */}
      <div className="articles-section">
        <h2>Latest Articles</h2>
        <div className="articles">
          <ArticleCard icon="🤯" title="Managing Anxiety" desc="Tips for coping with anxiety" />
          <ArticleCard icon="😴" title="Improving Sleep Habits" desc="Ways to achieve better sleep" />
          <ArticleCard icon="😊" title="Practicing Self-Care" desc="Ideas for taking care of yourself" />
        </div>
      </div>

      {/* Emergency Helpline */}
      <div className="helpline">
        <span className="helpline-icon">📞</span>
        <div>
          <div className="helpline-title">Emergency Helpline</div>
          <div className="helpline-number">123-456-7890</div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, wide }) {
  return (
    <div className={`feature-card${wide ? " wide" : ""}`}>
      <span className="feature-icon">{icon}</span>
      <div className="feature-title">{title}</div>
      <div className="feature-desc">{desc}</div>
      <span className="feature-arrow">→</span>
    </div>
  );
}

function ArticleCard({ icon, title, desc }) {
  return (
    <div className="article-card">
      <span className="article-icon">{icon}</span>
      <div className="article-title">{title}</div>
      <div className="article-desc">{desc}</div>
    </div>
  );
}

export default App; 