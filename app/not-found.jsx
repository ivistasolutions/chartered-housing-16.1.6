"use client";

import NextSeo from "./components/Shared/Seo";
import Button from "./components/Shared/Button";

const NotFoundPage = () => {
  const seoField = {
    title: "Page Not Found | Chartered Housing",
    description:
      "We couldn't find the page you're looking for. Explore Chartered Housing's trusted real estate projects in Bangalore.",
    path: "/404",
  };

  return (
    <>
      <NextSeo {...seoField} />
      <section className="flex min-h-[100vh] flex-col items-center justify-center bg-[#F8F8F8] px-6 lg:py-20 py-40 text-center">
        <div className="max-w-2xl">
          <span className="text-5xl font-semibold uppercase tracking-[0.3em] text-[#ED1C25]">
            404 Error
          </span>
          <h1 className="mt-6 text-4xl font-bold text-[#1A1A1A] md:text-5xl">
            We couldn't find that page
          </h1>
          <p className="mt-4 text-base text-[#646464] md:text-lg">
            The page you were looking for might have been moved, renamed, or may
            no longer exist. Let's get you back to exploring premium living with
            Chartered Housing.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/">Back to Home</Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default NotFoundPage;
