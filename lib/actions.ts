"use server";

import { formSchema, getInTouchFormSchema } from "@/lib/definitions";

export const handleFormSubmission = async (formdata: FormData) => {
  const data = formSchema.safeParse({
    fullname: formdata.get("fullname"),
    email: formdata.get("email"),
    phone: formdata.get("phone"),
    company: formdata.get("company"),
    industry: formdata.get("industry"),
    service: formdata.get("service"),
    budget: formdata.get("budget"),
  });

  if (!data.success) {
    return {
      errors: data.error.flatten().fieldErrors,
      message: "Please fill all required fields",
    };
  }

  console.log(data);
  return { message: "Form Submitted Successfully" };
};

export const handleContactForm = (prev: any, formdata: FormData) => {
  const data = getInTouchFormSchema.safeParse({
    name: formdata.get("name"),
    email: formdata.get("email"),
    message: formdata.get("message"),
  });

  if (!data.success) {
    console.log(data.error.flatten().fieldErrors);
    return {
      errors: data.error.flatten().fieldErrors,
      message: "Please fill all required fields",
    };
  }
  console.log(data);
};
