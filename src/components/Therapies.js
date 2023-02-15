import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img4.webp";
import img4 from "../images/img5.webp";
import img5 from "../images/img6.jpg";
import img6 from "../images/img7.jpeg";
import TherapiesData from "./Therapiesdata";
import "./TherapiesStyles.css";
const Therapies = () => {
  return (
    <div className="Therapies">
      <h1>Our Popular Therapies</h1>
      <p>
        Success as a therapist is not found in doing something for the client,
        but rather in being something for the client.{" "}
      </p>
      <TherapiesData
        className="first-des"
        heading="Psychodynamic therapy"
        text="Psychodynamic therapy developed from psychoanalysis, a long-term
      approach to mental health treatment. In psychoanalysis, you can
      expect to talk about anything on your mind to uncover patterns in
      thoughts or behavior that might be contributing to distress. It’s
      also common to talk about your childhood and past, along with
      recurring dreams or fantasies you might have.In psychodynamic therapy, you’ll work with a therapist to explore the connection between your unconscious mind and your actions. This involves examining your emotions, relationships, and thought patterns."
        img1={img1}
        img2={img2}
      />

      <TherapiesData
        className="first-des"
        heading="Cognitive behavioral therapy "
        text="Cognitive behavioral therapy is a short-term approach to mental health treatment. It’s similar to behavioral therapy, but it also addresses unhelpful thought patterns or problematic thoughts.
        The idea behind CBT is that certain feelings or beliefs you have about yourself or situations in your life can lead to distress.
        This distress may contribute to mental health issues, occur alongside them, or develop as a complication of other mental health issues.
        In CBT sessions, you’ll work on identifying patterns and learning more about how they might negatively affect you.
        With your therapist’s guidance, you’ll explore ways to replace negative thought patterns or behaviors with ones that are more helpful and accurate."
        img1={img3}
        img2={img4}
      />
      <TherapiesData
        className="first-des"
        heading="Humanistic therapy "
        text="Humanistic therapy is an approach that looks at how your worldview affects the choices you make, especially choices that cause distress. It’s based on the belief that you’re the best person to understand your experiences and needs.
              Humanistic therapists work to help you better understand what you’re experiencing, offering guidance and support without interpreting your feelings for you.
              Your therapist will help you work toward the goal of living your most fulfilling life, largely by enabling you to be your true self. You’ll spend time exploring ways to grow and increase self-acceptance along with discussing the issues you’re dealing with.
              Another important principle in humanistic therapy is unconditional positive regard."
        img1={img5}
        img2={img6}
      />
    </div>
  );
};

export default Therapies;
