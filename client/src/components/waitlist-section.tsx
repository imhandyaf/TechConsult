import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistEntrySchema, type InsertWaitlistEntry } from "@shared/schema";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Clock, ArrowLeft, ArrowRight, Check } from "lucide-react";
import { z } from "zod";

const waitlistFormSchema = insertWaitlistEntrySchema.extend({
  services: z.array(z.string()).min(1, "Please select at least one service"),
});

type WaitlistFormData = z.infer<typeof waitlistFormSchema>;

const serviceOptions = [
  "Computer & Laptop Help",
  "Smart Home Setup",
  "Wi-Fi & Network Help",
  "Phone & Tablet Support",
  "Home Entertainment Setup",
  "Data Backup & Recovery",
];

export function WaitlistSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const form = useForm<WaitlistFormData>({
    resolver: zodResolver(waitlistFormSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      services: [],
      preferredContact: "Email",
      budgetRange: "Under $500",
      additionalDetails: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      const response = await apiRequest("POST", "/api/waitlist", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Success!",
        description: "You've been added to our waitlist. We'll contact you soon!",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist/count"] });
      form.reset();
      setCurrentStep(1);
      setSelectedServices([]);
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to join waitlist. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: WaitlistFormData) => {
    mutation.mutate(data);
  };

  const nextStep = () => {
    if (currentStep === 1) {
      // Validate step 1 fields
      form.trigger(["firstName", "lastName", "email"]).then((isValid) => {
        if (isValid) setCurrentStep(2);
      });
    } else if (currentStep === 2) {
      // Validate services selection
      form.setValue("services", selectedServices);
      if (selectedServices.length > 0) {
        setCurrentStep(3);
      } else {
        toast({
          title: "Please select at least one service",
          variant: "destructive",
        });
      }
    }
  };

  const previousStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  return (
    <section
      id="waitlist"
      className="py-20 bg-gradient-to-br from-primary via-secondary to-accent"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm text-amber-200 mb-6">
            <Clock className="w-4 h-4 mr-2" />
            Currently Fully Booked
          </div>

          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Join Our Community Waitlist
          </h2>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            We're currently helping so many families in our community that our schedule is full! 
            Join our waitlist to be the first to know when we can help your family with tech support.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Card className="glass-effect max-w-2xl mx-auto">
            <CardContent className="p-8">
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <AnimatePresence mode="wait">
                  {/* Step 1: Basic Information */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold mb-6">
                        Contact Information
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="text-left">
                          <Label className="text-white">First Name *</Label>
                          <Input
                            {...form.register("firstName")}
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                            placeholder="Enter first name"
                          />
                          {form.formState.errors.firstName && (
                            <p className="text-red-300 text-sm mt-1">
                              {form.formState.errors.firstName.message}
                            </p>
                          )}
                        </div>
                        <div className="text-left">
                          <Label className="text-white">Last Name *</Label>
                          <Input
                            {...form.register("lastName")}
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                            placeholder="Enter last name"
                          />
                          {form.formState.errors.lastName && (
                            <p className="text-red-300 text-sm mt-1">
                              {form.formState.errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="text-left">
                        <Label className="text-white">Email Address *</Label>
                        <Input
                          {...form.register("email")}
                          type="email"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          placeholder="Enter email address"
                        />
                        {form.formState.errors.email && (
                          <p className="text-red-300 text-sm mt-1">
                            {form.formState.errors.email.message}
                          </p>
                        )}
                      </div>
                      <div className="text-left">
                        <Label className="text-white">Phone Number</Label>
                        <Input
                          {...form.register("phone")}
                          type="tel"
                          className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                          placeholder="Enter phone number"
                        />
                      </div>

                      <Button
                        type="button"
                        onClick={nextStep}
                        className="w-full bg-white text-primary font-semibold hover:bg-white/90"
                      >
                        Continue <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </motion.div>
                  )}

                  {/* Step 2: Service Preferences */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold mb-6">
                        Service Preferences
                      </h3>
                      <div className="text-left space-y-4">
                        <Label className="text-white">
                          Which services are you most interested in? (Select all
                          that apply)
                        </Label>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                          {serviceOptions.map((service) => (
                            <div
                              key={service}
                              className="flex items-center space-x-3"
                            >
                              <Checkbox
                                id={service}
                                checked={selectedServices.includes(service)}
                                onCheckedChange={(checked) => {
                                  if (checked) {
                                    setSelectedServices([...selectedServices, service]);
                                  } else {
                                    setSelectedServices(
                                      selectedServices.filter((s) => s !== service)
                                    );
                                  }
                                }}
                                className="border-white/30 data-[state=checked]:bg-white data-[state=checked]:text-primary"
                              />
                              <Label
                                htmlFor={service}
                                className="text-white cursor-pointer"
                              >
                                {service}
                              </Label>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          type="button"
                          onClick={previousStep}
                          variant="outline"
                          className="flex-1 bg-white/20 text-white border-white/30 hover:bg-white/30"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <Button
                          type="button"
                          onClick={nextStep}
                          className="flex-1 bg-white text-primary font-semibold hover:bg-white/90"
                        >
                          Continue <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </motion.div>
                  )}

                  {/* Step 3: Additional Information */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-xl font-semibold mb-6">
                        Additional Information
                      </h3>
                      <div className="space-y-4 text-left">
                        <div>
                          <Label className="text-white">Preferred Contact Method</Label>
                          <Select
                            onValueChange={(value) =>
                              form.setValue("preferredContact", value)
                            }
                            defaultValue="Email"
                          >
                            <SelectTrigger className="bg-white/20 border-white/30 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Email">Email</SelectItem>
                              <SelectItem value="Phone">Phone</SelectItem>
                              <SelectItem value="Text">Text Message</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-white">Estimated Budget Range</Label>
                          <Select
                            onValueChange={(value) =>
                              form.setValue("budgetRange", value)
                            }
                            defaultValue="Under $500"
                          >
                            <SelectTrigger className="bg-white/20 border-white/30 text-white">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="Under $500">Under $500</SelectItem>
                              <SelectItem value="$500 - $1,000">$500 - $1,000</SelectItem>
                              <SelectItem value="$1,000 - $2,500">$1,000 - $2,500</SelectItem>
                              <SelectItem value="$2,500 - $5,000">$2,500 - $5,000</SelectItem>
                              <SelectItem value="$5,000+">$5,000+</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <div>
                          <Label className="text-white">Additional Details</Label>
                          <Textarea
                            {...form.register("additionalDetails")}
                            rows={4}
                            className="bg-white/20 border-white/30 text-white placeholder:text-white/70"
                            placeholder="Tell us more about your tech needs..."
                          />
                        </div>
                      </div>

                      <div className="flex space-x-4">
                        <Button
                          type="button"
                          onClick={previousStep}
                          variant="outline"
                          className="flex-1 bg-white/20 text-white border-white/30 hover:bg-white/30"
                        >
                          <ArrowLeft className="w-4 h-4 mr-2" /> Back
                        </Button>
                        <Button
                          type="submit"
                          disabled={mutation.isPending}
                          className="flex-1 bg-white text-primary font-semibold hover:bg-white/90"
                        >
                          <Check className="w-4 h-4 mr-2" />
                          {mutation.isPending ? "Joining..." : "Join Waitlist"}
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
