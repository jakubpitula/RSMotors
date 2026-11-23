import { ArrowRight } from "lucide-react";

export const ContactUs = () => {
  return (
    <section className="contact-banner" id="contact">
      <div>
        <p className="kicker">Start a conversation</p>
        <h2>Looking for something specific?</h2>
      </div>
      <a className="button button-white" href="mailto:">
        Request an enquiry <ArrowRight size={18} />
      </a>
    </section>
  );
};
