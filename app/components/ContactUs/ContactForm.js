"use client";

import { useFormHandler } from "@/hooks/useFormHandler";
import {
  // CheckboxField,
  PhoneInputField,
  SelectField,
  TextAreaField,
  TextInputField,
} from "../Form/FormField";
import Button from "../Shared/Button";

const ContactForm = () => {
  const {
  formData,
    handleChange,
    handleSelectChange,
    handleSubmit,
    isSubmitting,
    submitStatus,
    fieldErrors,
    formId,
  } = useFormHandler(5851);

  return (
    <div className="lg:mt-7 mt-5 lg:mb-10 mb-5 lg:px-0 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#646464] lg:text-2xl text-xl lg:px-0 px-5 text-center">
          What can we help you with?
        </h2>

        <form className="lg:mt-10 mt-5" onSubmit={handleSubmit} id={formId}>
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
            <div className="lg:w-4/6 w-full">
              <SelectField
                value={formData.purpose}
                onChange={handleSelectChange}
                formType="contact"
                placeholder="Purpose"
                className="border border-[#ED1C25] rounded-none bg-transparent focus:outline-0 focus-visible:outline-0 focus:ring-0"
              />
              {fieldErrors.purpose && (
                <span className="text-red-500 text-xs text-start mt-1 block">
                  {fieldErrors.purpose}
                </span>
              )}
            </div>

            <div className="border border-[#ED1C25] py-5 px-10 w-full mt-10 flex flex-col gap-8">
              <h3 className="lg:text-2xl text-xl text-[#646464] font-playfair text-center">
                Leave A Message
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

             <div className="">
             <TextAreaField
                name="message"
                value={formData.message}
                onChange={handleChange}
              />
              {fieldErrors.message && (
                <span className="text-red-500 text-xs text-start mt-1 block">
                  {fieldErrors.message}
                </span>
              )}
             </div>

              {/* <div>
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
              </div> */}

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
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
