import { useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function QuoteForm() {
  const [sent, setSent] = useState(false);

  if (sent) {
    return (
      <div className="w-full rounded-3xl bg-[#1B4332] p-8 text-white shadow-card">
        <div className="flex min-h-[380px] flex-col items-center justify-center gap-4 text-center">
          <CheckCircle2 className="size-14 text-[#FFC300]" />
          <h3 className="text-2xl font-extrabold" style={{fontFamily: '"Outfit", sans-serif'}}>
            Thanks!
          </h3>
          <p className="text-white/80">We'll be in touch shortly.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full rounded-3xl bg-[#1B4332] p-8 text-white shadow-card">
      <h3 className="text-center text-lg font-extrabold uppercase tracking-wide" style={{fontFamily: '"Outfit", sans-serif'}}>
        Get a Free Quote
      </h3>
      <form
        className="mt-6 space-y-4"
        onSubmit={(e) => {
          e.preventDefault();
          setSent(true);
        }}
      >
        <div>
          <label htmlFor="qf-name" className="mb-1.5 block text-sm font-bold">
            Full Name *
          </label>
          <input
            id="qf-name"
            type="text"
            placeholder="John Smith"
            className="min-h-12 w-full rounded-xl border-0 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
          />
        </div>
        <div>
          <label htmlFor="qf-phone" className="mb-1.5 block text-sm font-bold">
            Phone *
          </label>
          <input
            id="qf-phone"
            required
            type="tel"
            placeholder="Example: (808) 555-1234"
            className="min-h-12 w-full rounded-xl border-0 bg-white px-4 py-3 text-base text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
          />
        </div>
        <div>
          <label htmlFor="qf-msg" className="mb-1.5 block text-sm font-bold">
            Short message about your needs
          </label>
          <textarea
            id="qf-msg"
            rows={4}
            placeholder="Tell us what's going on..."
            className="w-full resize-none rounded-xl border-0 bg-white px-4 py-3 text-sm text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFC300]"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-full bg-[#FAF6F0] py-4 text-base font-extrabold uppercase tracking-wide text-[#1B4332] transition-transform hover:scale-[1.02]"
        >
          Send
        </button>
      </form>
    </div>
  );
}
