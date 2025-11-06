"use client";

import { useFormHandler } from "@/hooks/useFormHandler";
import {
  CheckboxField,
  // CheckboxField,
  PhoneInputField,
  SelectField,
  TextAreaField,
  TextInputField,
} from "../Form/FormField";
import Button from "../Shared/Button";
import Link from "next/link";

const FormBirdSong = () => {
  const {
    formData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    fieldErrors,
    formId,
  } = useFormHandler(5859);

  return (
    <div className="mb-10 lg:px-0 px-5 lg:mt-0 mt-5">
      <div className="max-w-7xl mx-auto">
      <h3 className="roboto-serif-light text-center lg:text-center text-[#ED1C24] lg:text-4xl text-2xl lg:pb-10 pb-5">
      Interested in Chartered Birdsong?
        </h3>
        <form className="" onSubmit={handleSubmit} id={formId}>
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
            <div className="border border-[#ED1C25] py-5 px-10 w-full flex flex-col gap-8">
              <h3 className="lg:text-2xl text-xl text-[#646464] text-center">
                We’d Love to Hear From You
              </h3>

              <div>
                <TextInputField
                  placeholder="Your Name *"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                />
                {fieldErrors.name && (
                  <span className="text-red-500 text-xs text-start mt-1 block">
                    {fieldErrors.name}
                  </span>
                )}
              </div>

              <div>
                <PhoneInputField
                  value={formData.mobile}
                  onChange={(val) => handleSelectChange("mobile", val)}
                />
                {fieldErrors.mobile && (
                  <span className="text-red-500 text-xs text-start mt-1 block">
                    {fieldErrors.mobile}
                  </span>
                )}
              </div>

              <div>
                <TextInputField
                  type="email"
                  placeholder="Your Email Address *"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                />
                {fieldErrors.email && (
                  <span className="text-red-500 text-xs text-start mt-1 block">
                    {fieldErrors.email}
                  </span>
                )}
              </div>

              {/* <TextAreaField
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {fieldErrors.message && (
                <span className="text-red-500 text-xs text-start mt-1 block">
                  {fieldErrors.message}
                </span>
              )} */}

              <div>
                <CheckboxField
                  id="sendUsYourQueryForm"
                  checked={formData.consent}
                  onChange={handleSelectChange}
                />
                {fieldErrors.consent && (
                  <span className="text-red-500 text-xs text-start mt-1 block">
                    {fieldErrors.consent}
                  </span>
                )}
              </div>

              {submitStatus === "success" && (
                <div className="text-green-500 text-sm text-center p-3 bg-green-50 rounded">
                  Thank you for your message! We&apos;ll get back to you soon.
                </div>
              )}

              {submitStatus === "error" && (
                <div className="text-red-500 text-sm text-center p-3 bg-red-50 rounded">
                  Oops! Something went wrong. Please try again.
                </div>
              )}

              <div className="flex justify-center">
                <Button type="submit" disabled={isSubmitting}>
                  {isSubmitting
                    ? "Requesting a Callback..."
                    : "Request a Callback"}
                </Button>
              </div>
              <h6 className="text-[#646464] lg:text-lg text-center">
                By continuing, you agree to our{" "}
                
                <Link
                  target="_blank"
                  href="/privacy-policy"
                  className="underline underline-offset-2"
                >
                  Privacy Policy
                </Link>
                .
              </h6>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FormBirdSong;
