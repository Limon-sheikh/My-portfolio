import contactFormData from "../../data/contact";

const ContactForm = () => {
  const { title, subtitle, fields, buttonText,description } = contactFormData;

  return (
    <section id="contact" className="py-10">
      <div className="container mx-auto px-5 max-w-3xl">
        {/* Heading */}
        <div className="px-5 pb-5">
          <h5 className="text-md font-semibold text-secondary/50 mb-2">{title}</h5>
          <h2 className="text-2xl text-primary font-bold mb-2">{subtitle}</h2>
          <p className="text-secondary/50">{description}</p>
        </div>

        {/* Form */}
        <form className="px-5 space-y-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 w-full">
            {fields.map((field) => (
              <div key={field.id} className={field.width === "full" ? "md:col-span-2" : ""}>
                {field.type === "textarea" ? (
                  <textarea
                    name={field.name}
                    rows={field.rows}
                    placeholder={field.placeholder}
                    className="w-full border-b border-b-black/20 px-2 pt-4 resize-none focus:outline-none focus:border-accent"
                  />
                ) : (
                  <input
                    type={field.type}
                    name={field.name}
                    placeholder={field.placeholder}
                    className="w-full border-b border-b-black/20 px-2 py-4 focus:outline-none focus:border-accent"
                  />
                )}
              </div>
            ))}
          </div>

          {/* Button */}
          <button type="submit"
            className="w-full bg-[#2c5257] text-white py-3 rounded-md font-semibold hover:bg-[#427d86] transition-all duration-500"
          >
            {buttonText}
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
