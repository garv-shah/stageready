"use client";

import * as React from "react";
import { toast } from "sonner";
import { Phone, PhoneCall, Contact, IdCard, Sofa, TableOfContents } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type Props = {
  className?: string;
};

type BookingFormState = {
  name: string;
  email: string;
  phone: string;
  agentLicense?: string;
  date?: string;
  time?: string;
  service?: string;
  notes?: string;
};

const timeSlots = [
  "09:00",
  "10:30",
  "12:00",
  "13:30",
  "15:00",
  "16:30",
];

const services = [
  { id: "in-home", label: "In-Home Consultation" },
  { id: "virtual", label: "Virtual Walkthrough" },
  { id: "occupied", label: "Occupied Staging Assessment" },
  { id: "vacant", label: "Vacant Property Staging Plan" },
];

export default function BookConsultPage({ className }: Props) {
  const [tab, setTab] = React.useState<string>("schedule");
  const [loading, setLoading] = React.useState(false);
  const [form, setForm] = React.useState<BookingFormState>({
    name: "",
    email: "",
    phone: "",
    agentLicense: "",
    date: "",
    time: undefined,
    service: undefined,
    notes: "",
  });

  function handleChange<K extends keyof BookingFormState>(key: K, value: BookingFormState[K]) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function validate(): string | null {
    if (!form.name.trim()) return "Please enter your name.";
    const hasContact = !!form.email.trim() || !!form.phone.trim();
    if (!hasContact) return "Please provide at least an email or phone number.";
    if (tab === "schedule") {
      if (!form.date) return "Please select a preferred date.";
      if (!form.time) return "Please select a preferred time slot.";
      if (!form.service) return "Please choose a consultation type.";
    }
    return null;
  }

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const error = validate();
    if (error) {
      toast.error(error);
      return;
    }
    setLoading(true);
    try {
      await new Promise((r) => setTimeout(r, 900));
      toast.success(
        tab === "schedule"
          ? "Thanks! Your consultation request has been received. We'll confirm shortly."
          : "Thanks! We'll call you back to coordinate your free consultation."
      );
      setForm({
        name: "",
        email: "",
        phone: "",
        agentLicense: "",
        date: "",
        time: undefined,
        service: undefined,
        notes: "",
      });
    } catch {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <section
      className={cn(
        "w-full max-w-full",
        className
      )}
      aria-label="Book a free consultation with Stage Ready"
    >
      <div className="w-full max-w-full space-y-10">
        <header className="w-full space-y-3">
          <span className="inline-flex items-center gap-2 rounded-full bg-card px-3 py-1 text-xs font-medium text-muted-foreground ring-1 ring-inset ring-border">
            <Contact className="h-4 w-4" aria-hidden="true" />
            Free initial consultation
          </span>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight break-words">
            Book your complimentary staging consultation
          </h1>
          <p className="text-muted-foreground max-w-prose">
            Discover how Stage Ready can elevate your listing with a tailored plan. No pressure, no obligationjust expert guidance to help you sell faster and for more.
          </p>
        </header>

        <div className="grid gap-6 md:gap-8">
          <div className="grid gap-6 md:grid-cols-2 md:gap-8">
            <Card className="bg-card">
              <CardHeader className="space-y-1">
                <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                  <PhoneCall className="h-5 w-5" aria-hidden="true" />
                  Schedule or request a call
                </CardTitle>
                <CardDescription className="break-words">
                  Choose a time that works for you or request a call back. We'll confirm details within one business day.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs value={tab} onValueChange={setTab} className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="schedule">Schedule</TabsTrigger>
                    <TabsTrigger value="callback">Request call</TabsTrigger>
                  </TabsList>

                  <TabsContent value="schedule" className="mt-4">
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="name">Full name</Label>
                          <Input
                            id="name"
                            autoComplete="name"
                            value={form.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="Alex Agent"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            autoComplete="email"
                            value={form.email}
                            onChange={(e) => handleChange("email", e.target.value)}
                            placeholder="alex@example.com"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone</Label>
                          <Input
                            id="phone"
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="0447 856 645"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="license" className="flex items-center gap-1">
                            <IdCard className="h-4 w-4" aria-hidden="true" />
                            Agent licence (optional)
                          </Label>
                          <Input
                            id="license"
                            value={form.agentLicense ?? ""}
                            onChange={(e) => handleChange("agentLicense", e.target.value)}
                            placeholder="VIC LIC #01234567"
                          />
                        </div>
                      </div>

                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="date">Preferred date</Label>
                          <Input
                            id="date"
                            type="date"
                            value={form.date ?? ""}
                            onChange={(e) => handleChange("date", e.target.value)}
                            min={getTodayISO()}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label>Preferred time</Label>
                          <Select
                            value={form.time}
                            onValueChange={(v) => handleChange("time", v)}
                          >
                            <SelectTrigger aria-label="Preferred time">
                              <SelectValue placeholder="Select a time" />
                            </SelectTrigger>
                            <SelectContent>
                              {timeSlots.map((t) => (
                                <SelectItem key={t} value={t}>
                                  {t}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Consultation type</Label>
                        <Select
                          value={form.service}
                          onValueChange={(v) => handleChange("service", v)}
                        >
                          <SelectTrigger aria-label="Consultation type">
                            <SelectValue placeholder="Choose a consultation type" />
                          </SelectTrigger>
                          <SelectContent>
                            {services.map((s) => (
                              <SelectItem key={s.id} value={s.id}>
                                {s.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="notes">Property address or notes</Label>
                        <Textarea
                          id="notes"
                          value={form.notes ?? ""}
                          onChange={(e) => handleChange("notes", e.target.value)}
                          placeholder="123 Maple St, City  3 bed / 2 bath. Target list date in 2 weeks."
                          className="min-h-[96px]"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Button type="submit" disabled={loading}>
                          {loading ? "Submitting..." : "Request free consultation"}
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          By submitting, you agree to be contacted about your request.
                        </p>
                      </div>
                    </form>
                  </TabsContent>

                  <TabsContent value="callback" className="mt-4">
                    <form onSubmit={onSubmit} className="space-y-5">
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="cb-name">Full name</Label>
                          <Input
                            id="cb-name"
                            autoComplete="name"
                            value={form.name}
                            onChange={(e) => handleChange("name", e.target.value)}
                            placeholder="Alex Agent"
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="cb-phone">Phone</Label>
                          <Input
                            id="cb-phone"
                            type="tel"
                            autoComplete="tel"
                            value={form.phone}
                            onChange={(e) => handleChange("phone", e.target.value)}
                            placeholder="0447 856 645"
                            required
                          />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="cb-notes">How can we help?</Label>
                        <Textarea
                          id="cb-notes"
                          value={form.notes ?? ""}
                          onChange={(e) => handleChange("notes", e.target.value)}
                          placeholder="Tell us a bit about the property and your goals."
                          className="min-h-[96px]"
                        />
                      </div>

                      <div className="flex flex-wrap items-center gap-3 pt-2">
                        <Button type="submit" disabled={loading}>
                          {loading ? "Requesting..." : "Request a call back"}
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          We typically call back within 1 business day.
                        </p>
                      </div>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            <div className="grid gap-6">
              <Card className="bg-card">
                <CardHeader className="space-y-1">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <Sofa className="h-5 w-5" aria-hidden="true" />
                    What to expect
                  </CardTitle>
                  <CardDescription>
                    A clear, simple process designed around your listing
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ol className="space-y-4">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                        1
                      </span>
                      <div className="min-w-0">
                        <p className="font-medium">Free discovery call</p>
                        <p className="text-sm text-muted-foreground">
                          Share your goals, timeline, and property details. We'll recommend the best approach.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                        2
                      </span>
                      <div className="min-w-0">
                        <p className="font-medium">On-site or virtual walkthrough</p>
                        <p className="text-sm text-muted-foreground">
                          A specialist reviews layout, lighting, and focal points to craft a tailored staging plan.
                        </p>
                      </div>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs">
                        3
                      </span>
                      <div className="min-w-0">
                        <p className="font-medium">Clear proposal, no pressure</p>
                        <p className="text-sm text-muted-foreground">
                          Receive a transparent scope, timeline, and flat-rate pricing. You decide the next step.
                        </p>
                      </div>
                    </li>
                  </ol>
                </CardContent>
              </Card>

              <Card className="bg-card">
                <CardHeader className="space-y-1">
                  <CardTitle className="flex items-center gap-2 text-lg md:text-xl">
                    <TableOfContents className="h-5 w-5" aria-hidden="true" />
                    Referral bonus program
                  </CardTitle>
                  <CardDescription>For real estate agents partnering with Stage Ready</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="rounded-md border p-4">
                    <p className="text-sm">
                      Earn a referral bonus when your client books a staging project after their free consultation.
                    </p>
                    <ul className="mt-3 list-disc pl-5 text-sm text-muted-foreground space-y-1">
                      <li>$100 bonus on projects under $1,500</li>
                      <li>$200 bonus on projects $1,500$3,000</li>
                      <li>$300 bonus on projects over $3,000</li>
                    </ul>
                  </div>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-md border p-4">
                      <p className="font-medium">1. Refer</p>
                      <p className="text-sm text-muted-foreground">
                        Share your client's details with consent, or introduce us via email.
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">2. We consult</p>
                      <p className="text-sm text-muted-foreground">
                        Your client receives the same complimentary consultation and proposal.
                      </p>
                    </div>
                    <div className="rounded-md border p-4">
                      <p className="font-medium">3. Get rewarded</p>
                      <p className="text-sm text-muted-foreground">
                        Bonuses are paid within 7 days of project start.
                      </p>
                    </div>
                  </div>
                  <p className="text-xs text-muted-foreground">
                    Terms: Referral must be disclosed at or before consultation. One bonus per project. Bonuses are paid via bank transfer or cheque.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          <Card className="bg-card">
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg md:text-xl">Why Stage Ready?</CardTitle>
              <CardDescription>Professional, trustworthy, results-driven</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-6 sm:grid-cols-3">
              <Feature
                icon={<Sofa className="h-5 w-5" aria-hidden="true" />}
                title="Design that sells"
                body="Our curated furnishings and styling highlight your property's best features to attract qualified buyers."
              />
              <Feature
                icon={<Phone className="h-5 w-5" aria-hidden="true" />}
                title="Responsive communication"
                body="Clear timelines, quick updates, and a dedicated contact from consult to closing."
              />
              <Feature
                icon={<Contact className="h-5 w-5" aria-hidden="true" />}
                title="Agent-first partnership"
                body="We make you look great with reliable, on-brand presentation and stress-free coordination."
              />
            </CardContent>
          </Card>

          <Card className="bg-card">
            <CardHeader className="space-y-1">
              <CardTitle className="text-lg md:text-xl">Prefer to talk now?</CardTitle>
              <CardDescription>We're happy to help</CardDescription>
            </CardHeader>
            <CardContent className="grid gap-4 sm:grid-cols-3">
              <a
                href="tel:+61447856645"
                className="group flex items-center gap-3 rounded-md border p-4 transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Phone className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-medium">Call us</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground truncate">
                    0447 856 645
                  </p>
                </div>
              </a>
              <a
                href="mailto:info@stageready.com.au"
                className="group flex items-center gap-3 rounded-md border p-4 transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring"
              >
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Contact className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground group-hover:text-foreground truncate break-words">
                    info@stageready.com.au
                  </p>
                </div>
              </a>
              <div className="flex items-center gap-3 rounded-md border p-4">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <PhoneCall className="h-4 w-4" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-medium">Hours</p>
                  <p className="text-sm text-muted-foreground">Mon - Fri, 9am - 5pm</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="flex gap-3">
      <div className="mt-0.5">{icon}</div>
      <div className="min-w-0">
        <p className="font-medium">{title}</p>
        <p className="text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  );
}

function getTodayISO() {
  if (typeof window === "undefined") return undefined;
  const d = new Date();
  const yyyy = d.getFullYear();
  const mm = String(d.getMonth() + 1).padStart(2, "0");
  const dd = String(d.getDate()).padStart(2, "0");
  return `${yyyy}-${mm}-${dd}`;
}