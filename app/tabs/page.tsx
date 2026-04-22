 

export default function ContactPage() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full flex-col items-center justify-between py-8 px-16 bg-white dark:bg-black sm:items-start">
          
        <div className="flex flex-col gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Contact Page
          </h1>
          <p>
            You can reach us at contact@mywebsite.com or fill out the contact form below.
          </p>
        </div>
      </main>
    </div>
  );
}