"use client";

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const SuccessPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState();

  if (typeof window !== "undefined") {
    const subscribingEmail = localStorage.getItem("email");
  }

  const dismissMessage = () => {
    router.push("/");
  };

  return (
    <div className="flex flex-col w-[375px] lg:w-[450px] bg-white px-8 lg:pt-8 rounded-3xl">
      <div className="flex flex-col space-y-8 py-32 lg:py-0 lg:space-y-8">
        <Image
          src="./assets/images/icon-list.svg"
          width={48}
          height={48}
          alt="success icon"
        />
        <p className="text-5xl font-extrabold">Thanks for subscribing!</p>
        <p>
          A confirmation email has been sent to{" "}
          <span className="font-extrabold">{email}</span>. Please open it and
          click the button inside to confirm your subscription.
        </p>
      </div>
      <div className="pt-28 pb-12 lg:py-8 drop-shadow-2xl">
        <Button title="Dismiss message" onClick={dismissMessage} />
      </div>
    </div>
  );
};

export default SuccessPage;
