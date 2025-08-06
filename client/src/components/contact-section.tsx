import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactMessageSchema, type InsertContactMessage } from "@shared/schema";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";

export function ContactSection() {
  const { toast } = useToast();

  const form = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactMessageSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  });

  const mutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      const response = await apiRequest("POST", "/api/contact", data);
      return response.json();
    },
    onSuccess: () => {
      toast({
        title: "Message sent!",
        description: "We'll get back to you within 4 hours.",
      });
      form.reset();
    },
    onError: (error: any) => {
      toast({
        title: "Error",
        description: error.message || "Failed to send message. Please try again.",
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    mutation.mutate(data);
  };

  const contactInfo = [
    {
      icon: Phone,
      color: "text-primary",
      title: "Phone",
      content: "(619) 356-1808",
      subtitle: "Call for urgent help",
    },
    {
      icon: Mail,
      color: "text-secondary",
      title: "Email",
      content: "hey@imhandy.tech",
      subtitle: "We respond quickly!",
    },
    {
      icon: MapPin,
      color: "text-accent",
      title: "Service Area",
      content: "Greater San Diego",
      subtitle: "Serving all San Diego communities",
    },
    {
      icon: Clock,
      color: "text-emerald-500",
      title: "Hours",
      content: "Mon-Fri: 8AM-8PM\nWeekends: 10AM-6PM",
      subtitle: "Flexible scheduling available",
    },
  ];

  return (
    <section id="contact" className="py-20 bg-slate-50 dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-slate-600 dark:text-slate-300">
            Have tech questions or need help with your devices? Your neighborhood tech team is here to help!
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <Card className="glass-effect">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-6">Send Us a Message</h3>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label>Name *</Label>
                      <Input
                        {...form.register("name")}
                        className="bg-white dark:bg-slate-700"
                      />
                      {form.formState.errors.name && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.name.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <Label>Email *</Label>
                      <Input
                        {...form.register("email")}
                        type="email"
                        className="bg-white dark:bg-slate-700"
                      />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">
                          {form.formState.errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>
                  <div>
                    <Label>Subject</Label>
                    <Input
                      {...form.register("subject")}
                      className="bg-white dark:bg-slate-700"
                    />
                  </div>
                  <div>
                    <Label>Message *</Label>
                    <Textarea
                      {...form.register("message")}
                      rows={6}
                      className="bg-white dark:bg-slate-700"
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">
                        {form.formState.errors.message.message}
                      </p>
                    )}
                  </div>
                  <Button
                    type="submit"
                    disabled={mutation.isPending}
                    className="w-full bg-gradient-to-r from-primary to-secondary text-white font-semibold hover:shadow-lg transition-all duration-300"
                  >
                    <Send className="w-4 h-4 mr-2" />
                    {mutation.isPending ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          <div className="space-y-8">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="glass-effect">
                  <CardContent className="p-6">
                    <div className={`mb-3 ${info.color}`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    <p className="text-slate-600 dark:text-slate-300 whitespace-pre-line">
                      {info.content}
                    </p>
                    <p className="text-sm text-slate-500 mt-1">{info.subtitle}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
