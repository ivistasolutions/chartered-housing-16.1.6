"use client";

import Script from "next/script";
import { useRef, useState, useEffect } from "react";
import { useFormHandler } from "@/hooks/useFormHandler";
import {
  PhoneInputField,
  SelectField,
  TextAreaField,
  TextInputField,
} from "../Form/FormField";
import Button from "../Shared/Button";

const RECAPTCHA_SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || "";
const RECAPTCHA_SCRIPT = "https://www.google.com/recaptcha/api.js";

const ContactForm = () => {
  const {
    formData,
    handleChange,
    handleSelectChange,
    handleSubmit: submitForm,
    isSubmitting,
    submitStatus,
    fieldErrors,
    formId,
  } = useFormHandler(5851);

  const recaptchaContainerRef = useRef(null);
  const widgetIdRef = useRef(null);
  const [recaptchaReady, setRecaptchaReady] = useState(false);
  const [recaptchaError, setRecaptchaError] = useState("");

  // Render reCAPTCHA widget when script has loaded; use grecaptcha.ready() so API is ready
  useEffect(() => {
    if (!RECAPTCHA_SITE_KEY || widgetIdRef.current !== null) return;

    const renderWidget = () => {
      const container = recaptchaContainerRef.current;
      if (typeof window.grecaptcha === "undefined" || !container) return;
      try {
        widgetIdRef.current = window.grecaptcha.render(container, {
          sitekey: RECAPTCHA_SITE_KEY,
          theme: "light",
          size: "normal",
        });
      } catch (err) {
        console.error("reCAPTCHA render error:", err);
      }
    };

    const init = () => {
      if (typeof window.grecaptcha === "undefined") return;
      if (window.grecaptcha.ready) {
        window.grecaptcha.ready(renderWidget);
      } else {
        renderWidget();
      }
    };

    // Small delay so the container ref is attached after mount
    const t = setTimeout(init, 100);
    return () => clearTimeout(t);
  }, [recaptchaReady]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setRecaptchaError("");

    if (!RECAPTCHA_SITE_KEY) {
      submitForm(e);
      return;
    }

    const doSubmit = () => {
      if (widgetIdRef.current === null) {
        setRecaptchaError("reCAPTCHA did not load. Please refresh the page and try again.");
        return;
      }
      const token = window.grecaptcha.getResponse(widgetIdRef.current);
      if (!token) {
        setRecaptchaError("Please complete the reCAPTCHA verification.");
        return;
      }
      submitForm(e, { recaptchaToken: token });
      window.grecaptcha.reset(widgetIdRef.current);
    };

    if (typeof window.grecaptcha === "undefined") {
      setRecaptchaError("reCAPTCHA is still loading. Please wait a moment and try again.");
      return;
    }

    if (window.grecaptcha.ready) {
      window.grecaptcha.ready(doSubmit);
    } else {
      doSubmit();
    }
  };

  return (
    <div className="lg:mt-7 mt-5 lg:mb-10 mb-5 lg:px-0 px-5">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-[#646464] lg:text-2xl text-xl lg:px-0 px-5 text-center">
          What can we help you with?
        </h2>

        {RECAPTCHA_SITE_KEY && (
          <Script
            src={RECAPTCHA_SCRIPT}
            strategy="afterInteractive"
            onLoad={() => setRecaptchaReady(true)}
          />
        )}

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

              {RECAPTCHA_SITE_KEY && (
                <div className="flex flex-col gap-2">
                  <div ref={recaptchaContainerRef} />
                  {recaptchaError && (
                    <span className="text-red-500 text-xs">{recaptchaError}</span>
                  )}
                </div>
              )}

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
