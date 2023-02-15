import TherapyData from "./TherapyData";
import "./TherapyStyles.css";
import Therapy1 from "../images/1.jpg";
import Therapy2 from "../images/2.jpg";
import Therapy3 from "../images/3.jpg";
function Therapy() {
  return (
    <div className="Therapy">
      <h1>Popular Therapies</h1>
      <p>Counselling Therapy Sessions With Licensed & Verified Experts</p>
      <div className="Therapycard">
        <TherapyData
          image={Therapy1}
          heading="Psychodynamic therapy"
          text="Psychodynamic therapy developed from psychoanalysis, a long-term
        approach to mental health treatment. In psychoanalysis, you can
        expect to talk about anything on your mind to uncover patterns in
        thoughts or behavior that might be contributing to distress. It’s
        also common to talk about your childhood"
        />
        <TherapyData
          image={Therapy2}
          heading="Cognitive behavioral therapy"
          text="Cognitive behavioral therapy is a short-term approach to mental health treatment. It’s similar to behavioral therapy, but it also addresses unhelpful thought patterns or problematic thoughts.
        The idea behind CBT is that certain feelings or beliefs you have about yourself or situations in your life can lead to distress.
        This distress may contribute to mental health issues, occur alongside them, or develop as a complication of other mental"
        />
        <TherapyData
          image={Therapy3}
          heading="Humanistic therapy"
          text="Humanistic therapy is an approach that looks at how your worldview affects the choices you make, especially choices that cause distress. It’s based on the belief that you’re the best person to understand your experiences and needs.
        Humanistic therapists work to help you better understand what you’re experiencing, offering guidance and support without interpreting your feelings for you.
        Your therapist will help you work toward the goal of living your most fulfilling life, largely by enabling you"
        />
      </div>
    </div>
  );
}

export default Therapy;
