import { useState } from "react";
import { format } from "date-fns";
import { ArrowRight, CalendarIcon, CheckCircle2, Clock, Mail, MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { site } from "@/lib/site";

const services = [
  "Wildlife Control",
  "Mosquito Control",
  "General Pest Control",
  "Inspection & Estimate",
];

type Confirmation = {
  name: string;
  service: string;
  date: Date | undefined;
};

export function Contact() {
  const [date, setDate] = useState<Date | undefined>();
  const [service, setService] = useState<string>("");
  const [confirmation, setConfirmation] = useState<Confirmation | null>(null);

  return (
    <section id="contact" className="bg-surface py-10 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-6 md:grid-cols-2 md:gap-16">
        <div>
          <h2 className="section-title mt-4 text-3xl sm:text-4xl lg:text-5xl">
            Ready To Take Care Of Your Pest Problem?
          </h2>
          <p className="mt-4 text-sm text-muted-foreground">
            Have a question, need an estimate, or ready to schedule a service? Reach out and our
            team will help you take the next step.
          </p>

          <div className="mt-8 space-y-4">
            <a href={site.phoneHref} className="flex min-h-12 items-center gap-3 rounded-2xl bg-card p-5 shadow-soft">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                <Phone className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Call Us
                </span>
                <span className="block truncate font-bold">{site.phone}</span>
              </span>
            </a>
            <a href={`mailto:${site.email}`} className="flex min-h-12 items-center gap-3 rounded-2xl bg-card p-5 shadow-soft">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                <Mail className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Email Address
                </span>
                <span className="block truncate font-bold">{site.email}</span>
              </span>
            </a>
            <div className="flex items-center gap-3 rounded-2xl bg-card p-5 shadow-soft">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                <MapPin className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Our Location
                </span>
                <span className="block font-bold">{site.address}</span>
              </span>
            </div>
            <div className="flex items-center gap-3 rounded-2xl bg-card p-5 shadow-soft">
              <span className="grid size-10 shrink-0 place-items-center rounded-full bg-brand text-brand-foreground">
                <Clock className="size-4" />
              </span>
              <span className="min-w-0">
                <span className="block text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                  Business Hours
                </span>
                <span className="block font-bold">{site.hours}</span>
              </span>
            </div>
          </div>
        </div>

        {confirmation ? (
          <div className="card-soft p-7 sm:p-10" aria-live="polite">
            <span className="grid size-14 place-items-center rounded-full bg-brand-soft text-brand">
              <CheckCircle2 className="size-7" />
            </span>
            <p className="mt-7 text-xs font-bold uppercase text-brand">Request received</p>
            <h3 className="section-title mt-2 text-2xl sm:text-3xl">Thanks, {confirmation.name}.</h3>
            <p className="mt-4 text-sm leading-6 text-muted-foreground">
              Your request for <strong className="text-foreground">{confirmation.service}</strong> has been recorded.
            </p>

            <dl className="mt-7 divide-y rounded-lg bg-surface px-5">
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-sm text-muted-foreground">Selected service</dt>
                <dd className="text-right text-sm font-bold">{confirmation.service}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-sm text-muted-foreground">Preferred date</dt>
                <dd className="text-right text-sm font-bold">{confirmation.date ? format(confirmation.date, "PPP") : "First available"}</dd>
              </div>
              <div className="flex items-center justify-between gap-4 py-4">
                <dt className="text-sm text-muted-foreground">What happens next</dt>
                <dd className="max-w-56 text-right text-sm font-bold">A Joseph Animal & Pest Control specialist will call within 24 hours.</dd>
              </div>
            </dl>

            <p className="mt-6 text-sm leading-6 text-muted-foreground">
              We’ll confirm the pest details, appointment window, and any preparation needed before a technician visits.
            </p>
            <div className="mt-7 flex flex-col gap-3 sm:flex-row">
              <Button asChild className="min-h-12 flex-1 rounded-full bg-brand text-brand-foreground hover:bg-brand/90">
                <a href={site.phoneHref}><Phone /> Call Joseph Animal & Pest Control now</a>
              </Button>
              <Button type="button" variant="outline" className="min-h-12 flex-1 rounded-full shadow-none" onClick={() => setConfirmation(null)}>
                Send another request
              </Button>
            </div>
          </div>
        ) : (
          <form
            onSubmit={(event) => {
              event.preventDefault();
              const form = event.currentTarget;
              const data = new FormData(form);
              const name = String(data.get("name") ?? "there").trim() || "there";
              const selectedService = service || "Inspection & Estimate";
              setConfirmation({ name: name.split(/\s+/)[0] ?? "there", service: selectedService, date });
              form.reset();
              setDate(undefined);
            }}
            className="card-soft p-7 sm:p-10"
          >
            <h3 className="section-title text-2xl">Book A Service</h3>
            <p className="mt-2 text-sm text-muted-foreground">
              Send your preferred details and we'll confirm the visit within 24 hours.
            </p>

          <div className="mt-8 grid gap-5 sm:grid-cols-2">
            <div>
              <label className="text-xs font-bold uppercase tracking-wide">Full name</label>
              <Input name="name" required maxLength={100} placeholder="Smith M." className="mt-2 min-h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wide">Phone</label>
              <Input name="phone" required type="tel" maxLength={30} placeholder="(000) 000-0000" className="mt-2 min-h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wide">Email</label>
              <Input name="email" required type="email" maxLength={255} placeholder="you@example.com" className="mt-2 min-h-12 rounded-xl" />
            </div>
            <div>
              <label className="text-xs font-bold uppercase tracking-wide">Services</label>
              <Select value={service} onValueChange={setService}>
                <SelectTrigger className="mt-2 min-h-12 w-full rounded-xl">
                  <SelectValue placeholder="Pest Control" />
                </SelectTrigger>
                <SelectContent>
                  {services.map((s) => (
                    <SelectItem key={s} value={s}>
                      {s}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wide">Preferred date</label>
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    type="button"
                    variant="outline"
                    className="mt-2 min-h-12 w-full justify-between rounded-xl bg-background px-3 py-2 text-sm font-normal shadow-none"
                  >
                    {date ? format(date, "PPP") : <span className="text-muted-foreground">Pick a date</span>}
                    <CalendarIcon className="size-4 text-brand" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar mode="single" selected={date} onSelect={setDate} />
                </PopoverContent>
              </Popover>
            </div>
            <div className="sm:col-span-2">
              <label className="text-xs font-bold uppercase tracking-wide">
                What can we help you with today?
              </label>
              <Textarea
                name="details"
                required
                maxLength={1000}
                rows={4}
                placeholder="Tell me a little about what you'd like support with..."
                className="mt-2 rounded-xl"
              />
            </div>
          </div>

          <Button
            type="submit"
            className="mt-8 min-h-12 w-full rounded-full bg-brand px-6 py-3 text-sm font-bold text-brand-foreground hover:bg-brand/90"
          >
            Request Booking <ArrowRight className="size-4" />
          </Button>
        </form>
        )}
      </div>
    </section>
  );
}
