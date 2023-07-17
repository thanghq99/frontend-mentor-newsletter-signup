import EmailForm from "@/components/EmailForm";
import { ListItem } from "@/components/ListItem";
import Image from "next/image";
import { FC } from "react";

const Home: FC = () => {
  return (
    <div className="flex flex-col lg:flex-row-reverse lg:items-stretch w-[375px] lg:w-[1024px] bg-white lg:rounded-3xl lg:p-8">
      <div
        className="bg-desktop-image bg-center w-[375px] h-[375px] lg:w-5/12 lg:h-auto"
        style={{ backgroundSize: "100%" }}
      />
      <div className="lg:w-7/12 lg:py-16">
        <div className="flex flex-col space-y-4 py-8 px-6">
          <p className="font-extrabold text-4xl lg:text-5xl">Stay updated!</p>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <div className="flex flex-col space-y-2">
            <ListItem text="Product discovery and building what matters" />
            <ListItem text="Measuring to ensure updates are a success" />
            <ListItem text="And much more!" />
          </div>
        </div>
        <EmailForm />
      </div>
    </div>
  );
};

export default Home;
