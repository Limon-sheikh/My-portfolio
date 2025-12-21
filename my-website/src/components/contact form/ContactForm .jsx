import contactFormData from "../../data/contact";

const ContactForm = () => {
  const { title, subtitle, fields, buttonText } = contactFormData;

  return (
    <section id="contact" className="py-16 bg-gray-50">
      <div className="container mx-auto px-5 max-w-3xl">
        
        {/* Heading */}
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2">{title}</h2>
          <p className="text-gray-600">{subtitle}</p>
        </div>

        {/* Form */}
        <form className=" p-6 space-y-5">
          
          {fields.map((field) => (
            <div key={field.id}>
              <label className="block text-sm font-medium mb-1">
                {field.label}
              </label>

              {field.type === "textarea" ? (
                <textarea
                  name={field.name}
                  rows={field.rows}
                  placeholder={field.placeholder}
                  className="w-full border border-gray-300 rounded-md px-4 py-2 resize-none
                             focus:outline-none focus:border-accent"
                />
              ) : (
                <input
                  type={field.type}
                  name={field.name}
                  placeholder={field.placeholder}
                  className="w-full border border-gray-300 rounded-md px-4 py-2
                             focus:outline-none focus:border-accent"
                />
              )}
            </div>
          ))}

          {/* Button */}
          <button
            type="submit"
            className="w-full bg-accent text-white py-2 rounded-md font-semibold
                       hover:bg-hover transition-all duration-200"
          >
            {buttonText}
          </button>

        </form>
      </div>
    </section>
  );
};

export default ContactForm;
