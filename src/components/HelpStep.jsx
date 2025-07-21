import React from "react";
import "./HelpStep.css";

const steps = [
  "Update content on my Website",
  "Improve User Experience",
  "Request Free Website Review",
  "Improve your SEO Rankings",
];

function HelpStep() {
  return (
    <section className="help-section">
      <h2 className="help-title">How Can We Help You?</h2>
      <p className="help-subtitle">Let's do great work together</p>

      <div className="step-line">
        {steps.map((step, index) => (
          <div className="step-item" key={index}>
            {/* Icon for the first step */}
            <div className="step-circle">
              {index === 0 && <div className="diamond-shape" />}
            </div>

            {/* Dotted line (except after the last item) */}
            {index < steps.length - 1 && <div className="dotted-line" />}

            {/* Label */}
            <p className="step-label">{step}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default HelpStep;