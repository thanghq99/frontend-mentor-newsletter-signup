"use client";

import React, { useEffect } from "react";
import TextInput from "./TextInput";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Button from "./Button";
import { useRouter } from "next/navigation";

const schema = yup.object().shape({
  email: yup.string().email().required(),
});

const EmailForm = () => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { isValid, errors },
  } = useForm({
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schema),
  });

  useEffect(() => {
    localStorage.clear();
  }, []);

  const onSubmit = (data: { email: string }) => {
    localStorage.setItem("email", data.email);
    router.push("/success");
  };

  return (
    <form
      className="flex flex-col space-y-6 pb-8 px-6"
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextInput
        type="email"
        title="Email address"
        placeholder="email@company.com"
        errorMessage="Valid email required"
        inputProps={register("email")}
        isValid={!!errors.email}
      />
      <Button title="Subcribe to monthy newsletter" />
    </form>
  );
};

export default EmailForm;
