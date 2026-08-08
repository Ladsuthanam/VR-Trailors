import { FormEvent, useState } from "react";
import { CalendarDays, CircleCheck } from "lucide-react";
import { requestAppointment, type AppointmentPayload } from "../lib/appointment";
import { serviceOptions } from "../data/services";
import { Button } from "./ui/Button";
import { SectionHeading } from "./ui/SectionHeading";
import { SectionReveal } from "./ui/SectionReveal";
import { cn } from "../utils/cn";

type Errors = Partial<Record<keyof AppointmentPayload, string>>;

const initialForm: AppointmentPayload = {
  name: "",
  phone: "",
  service: "",
  preferredDate: "",
  preferredTime: "",
  message: "",
};

function validate(form: AppointmentPayload) {
  const errors: Errors = {};
  if (!form.name.trim()) errors.name = "Please enter your name.";
  if (!form.phone.trim()) errors.phone = "Please enter your phone number.";
  if (form.phone.trim() && form.phone.replace(/\D/g, "").length < 7) errors.phone = "Please enter a valid phone number.";
  if (!form.service) errors.service = "Please choose a service.";
  if (!form.preferredDate) errors.preferredDate = "Please choose a preferred date.";
  if (!form.preferredTime) errors.preferredTime = "Please choose a preferred time.";
  return errors;
}

export function BookingForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState<Errors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  const updateField = (field: keyof AppointmentPayload, value: string) => {
    setForm((current) => ({ ...current, [field]: value }));
    setErrors((current) => ({ ...current, [field]: undefined }));
    setSuccessMessage("");
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    setIsSubmitting(true);
    const result = await requestAppointment(form);
    setIsSubmitting(false);
    if (result.ok) {
      setSuccessMessage(result.message);
      setForm(initialForm);
    }
  };

  return (
    <section id="booking" className="bg-[#FCFAF7] px-5 py-20 sm:px-8 lg:py-28">
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:items-start">
        <SectionReveal>
          <SectionHeading
            align="left"
            eyebrow="Appointment"
            title="Let's Create Something Beautiful."
            description="Have a dress that needs adjusting, a blouse that needs the perfect fit, or a design you've been dreaming about?"
          />
          {/* <div className="mt-8 flex items-center gap-4 rounded-[1.6rem] bg-[#F8F3ED] p-5 text-[#242124]">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-[#6B2638] text-white">
              <CalendarDays className="h-5 w-5" aria-hidden="true" />
            </span>
            <p className="leading-7 text-[#5D5557]">This first version records the request on screen only. A backend, WhatsApp or email workflow can be connected in <code className="rounded bg-white px-1 py-0.5 text-xs">src/lib/appointment.ts</code>.</p>
          </div> */}
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <form onSubmit={handleSubmit} noValidate className="rounded-[2.5rem] bg-white p-5 shadow-[0_28px_90px_rgba(36,33,36,0.1)] ring-1 ring-[#6B2638]/8 sm:p-8">
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" error={errors.name}>
                <input value={form.name} onChange={(event) => updateField("name", event.target.value)} autoComplete="name" className={inputClasses(Boolean(errors.name))} />
              </Field>
              <Field label="Phone Number" error={errors.phone}>
                <input value={form.phone} onChange={(event) => updateField("phone", event.target.value)} autoComplete="tel" inputMode="tel" className={inputClasses(Boolean(errors.phone))} />
              </Field>
              <Field label="Service" error={errors.service}>
                <select value={form.service} onChange={(event) => updateField("service", event.target.value)} className={inputClasses(Boolean(errors.service))}>
                  <option value="">Select a service</option>
                  {serviceOptions.map((service) => (
                    <option key={service} value={service}>{service}</option>
                  ))}
                </select>
              </Field>
              <Field label="Preferred Date" error={errors.preferredDate}>
                <input type="date" value={form.preferredDate} onChange={(event) => updateField("preferredDate", event.target.value)} className={inputClasses(Boolean(errors.preferredDate))} />
              </Field>
              <Field label="Preferred Time" error={errors.preferredTime}>
                <input type="time" value={form.preferredTime} onChange={(event) => updateField("preferredTime", event.target.value)} className={inputClasses(Boolean(errors.preferredTime))} />
              </Field>
              <Field label="Message" error={errors.message} className="sm:col-span-2">
                <textarea value={form.message} onChange={(event) => updateField("message", event.target.value)} rows={5} className={cn(inputClasses(Boolean(errors.message)), "resize-y rounded-[1.5rem]")} placeholder="Tell us about the outfit, alteration or design idea." />
              </Field>
            </div>
            <Button type="submit" className="mt-6 w-full sm:w-auto" disabled={isSubmitting}>
              {isSubmitting ? "Requesting..." : "Request an Appointment"}
            </Button>
            {successMessage ? (
              <div className="mt-5 flex items-start gap-3 rounded-[1.3rem] bg-[#F8F3ED] p-4 text-[#22623A]" role="status">
                <CircleCheck className="mt-0.5 h-5 w-5 shrink-0" aria-hidden="true" />
                <p className="font-semibold">{successMessage}</p>
              </div>
            ) : null}
          </form>
        </SectionReveal>
      </div>
    </section>
  );
}

function Field({ label, error, children, className }: { label: string; error?: string; children: React.ReactNode; className?: string }) {
  return (
    <label className={cn("block", className)}>
      <span className="mb-2 block text-sm font-bold text-[#242124]">{label}</span>
      {children}
      {error ? <span className="mt-2 block text-sm font-semibold text-[#9A2339]">{error}</span> : null}
    </label>
  );
}

function inputClasses(hasError: boolean) {
  return cn(
    "min-h-12 w-full rounded-full bg-[#FCFAF7] px-4 py-3 text-[#242124] ring-1 transition placeholder:text-[#7E7477] focus:outline-none focus:ring-2 focus:ring-[#B89455]",
    hasError ? "ring-[#9A2339]" : "ring-[#6B2638]/13",
  );
}
