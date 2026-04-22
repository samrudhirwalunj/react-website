import React from 'react';

type PageIntroProps = {
  title: string;
  description: string;
};

const PageIntro = ({ title, description }: PageIntroProps) => {
  return (
    <section className="page-intro text-center mb-8">
      <h2 className="text-3xl font-semibold text-black dark:text-zinc-50">{title}</h2>
      <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">{description}</p>
    </section>
  );
};

export default PageIntro;