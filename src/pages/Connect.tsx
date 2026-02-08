import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Connect = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: "url('/Contact-bg1.jpeg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/70 z-0"></div>
      <div className="absolute inset-0 film-grain z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex-1 pt-28 pb-12">
          <div className="container mx-auto px-6">
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default Connect;
