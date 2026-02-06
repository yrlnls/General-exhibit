import Header from "@/components/Header";
import EducationSection from "@/components/EducationSection";
import Footer from "@/components/Footer";
import { educationItems } from "@/data/educationData";

const Education = () => {
  const educationImage = '/edu.jpg'

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Header />
      <div className="flex-1">
        <div className="pt-16 pb-4">
          <div className="container mx-auto px-6">
            <div className="mt-4">

              <EducationSection items={educationItems} image={educationImage} />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Education;
