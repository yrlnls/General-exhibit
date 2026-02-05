import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div
      className="min-h-screen bg-background bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: "url('/Contact-bg.jpeg')" }}
    >
      <Header />
      <div className="flex-1">
        <div className="pt-24 pb-12">
          <div className="container mx-auto px-6">
            {/* Contact Form Section */}
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
