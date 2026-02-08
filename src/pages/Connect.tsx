import Header from "@/components/Header";
import ContactForm from "@/components/ContactForm";

const Connect = () => {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center bg-no-repeat flex flex-col"
      style={{ backgroundImage: "url('/Contact-bg1.jpeg')" }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 cinema-overlay z-0"></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Header />

        <div className="flex-1 pt-24 pb-12">
          <div className="container mx-auto px-6">
            <div className="mt-12">
              <ContactForm />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Connect;
