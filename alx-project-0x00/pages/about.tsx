import Layout from "@/components/Layout";

const About: React.FC = () => {
  return (
    <Layout title="About | Airbnb Clone">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold">About This App</h1>
        <p className="text-gray-700">
          This is a simple Airbnb clone built using Next.js, React, and Tailwind CSS.
        </p>
      </div>
    </Layout>
  );
};

export default About;
