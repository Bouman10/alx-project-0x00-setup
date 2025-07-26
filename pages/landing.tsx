import Image from "next/image";
import Card from "@/components/Card";
import Pill from "@/components/Pill";
import UserCard from "@/components/UserCard";
import Button from "@/components/Button";

const Home: React.FC = () => {
  return (
    <main className="flex flex-col min-h-screen justify-center items-center gap-4 p-4 text-center">
      <h1 className="text-4xl font-bold">Airbnb Application Clone system</h1>

      <div className="w-full max-w-4xl rounded-xl overflow-hidden shadow-lg">
        <Image
          src="/hero.jpg"
          alt="Hero"
          width={1600}
          height={600}
          className="w-full h-auto object-cover"
        />
      </div>

      <Card
        title="Welcome to the App"
        description="Browse places, book stays, and explore experiences."
      />

      <div className="mt-4">
        <Pill label="React" />
        <Pill label="Next.js" />
        <Pill label="TypeScript" />
      </div>

      <div className="mt-6">
        <UserCard
          name="Abubakar Abdulhakeem"
          email="boumanabubakar@gmail.com"
          isPremium={true}
        />
      </div>

      <div className="mt-6 flex gap-4">
        <Button onClick={() => alert("Small Button")} variant="primary">
          Small
        </Button>
        <Button onClick={() => alert("Medium Button")} variant="secondary">
          Medium
        </Button>
        <Button onClick={() => alert("Large Button")} variant="primary">
          Large
        </Button>
      </div>
    </main>
  );
};

export default Home;
