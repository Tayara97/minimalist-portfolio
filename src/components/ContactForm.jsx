import Header from "./Header.jsx/";

const ContactForm = () => {

  return (
    <>
      <Header>Contact</Header>
      <section>
        <form
          action="https://formspree.io/f/xzzbvazv"
          method="POST"
        
        >
          <input
            type="text"
            className="input"
            placeholder="Name"
            name="name"
            required
          />
          <input
            type="email"
            className="input"
            placeholder="Email"
            name="email"
            required
          />
          <textarea name="" id="message" placeholder="Message" />
          <button type="submit">Submit</button>
        </form>
      </section>
    </>
  );
};
export default ContactForm;
