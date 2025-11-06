"use client";
import { useFormHandler } from "@/hooks/useFormHandler";
import {
  CheckboxField,
  PhoneInputField,
  SelectField,
  TextAreaField,
  TextInputField,
} from "@/app/components/Form/FormField";
import Link from "next/link";
import Button from "../Shared/Button";

const SendUsYourQueryForm = () => {
  const {
    formData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    fieldErrors,
    formId,
} = useFormHandler(5850);

  return (
    <form onSubmit={handleSubmit} className="lg:mt-0 mt-5" formt>
      <div className="w-full lg:w-[777px] border border-[#ED1C25] px-5 lg:px-10 py-5 flex flex-col gap-8">
        <h3 className="lg:text-2xl text-xl text-[#646464] roboto-serif-regular text-center">
          Send us your query
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

        {/* <div>
          <SelectField
            value={formData.purpose}
            onChange={handleSelectChange}
            fontSize="text-lg"
            formType="partner"
          />
          {fieldErrors.purpose && (
            <span className="text-red-500 text-xs text-start mt-1 block">
              {fieldErrors.purpose}
            </span>
          )}
        </div> */}

        <div>
          <TextAreaField
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
          />
          {fieldErrors.message && (
            <span className="text-red-500 text-xs text-start mt-1 block">
              {fieldErrors.message}
            </span>
          )}
        </div>

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
            {isSubmitting ? "Submitting..." : "Submit"}
          </Button>
        </div>

        <h6 className="text-[#646464] text-lg text-center">
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
    </form>
  );
};

export default SendUsYourQueryForm;
