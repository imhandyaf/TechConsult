import { motion } from "framer-motion";
import { ServiceCard } from "@/components/service-card";
import {
  Monitor,
  Smartphone,
  Wifi,
  Printer,
  Home,
  Tv,
  Database,
  Wrench,
  Settings,
} from "lucide-react";

const services = [
  {
    id: "computers",
    icon: Monitor,
    color: "text-primary",
    title: "Computer & Laptop Services",
    description:
      "Complete setup, optimization, hardware upgrades, and troubleshooting for all your computing devices.",
    details: [
      "Initial Setup & Configuration",
      "Performance Optimization",
      "Hardware Upgrades & Installations",
      "Software Troubleshooting",
      "Virus & Malware Removal",
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    color: "text-secondary",
    title: "Smartphone & Tablet Services",
    description:
      "Device setup, data transfer, cloud configuration, and performance optimization for mobile devices.",
    details: [
      "New Device Setup & Data Transfer",
      "Cloud Backup & Sync Setup",
      "Connectivity & Network Fixes",
      "Storage Cleanup & Performance Boost",
    ],
  },
  {
    id: "networking",
    icon: Wifi,
    color: "text-accent",
    title: "Home Wi-Fi & Networking",
    description:
      "Complete network setup, optimization, troubleshooting, and small office network configuration.",
    details: [
      "Router & Modem Installation",
      "Wi-Fi Coverage Optimization",
      "Device Connectivity Troubleshooting",
      "Small Office Network Setup",
    ],
  },
  {
    id: "peripherals",
    icon: Printer,
    color: "text-green-500",
    title: "Printer & Peripheral Services",
    description:
      "Installation, configuration, and troubleshooting for printers, scanners, and external devices.",
    details: [
      "Printer & Scanner Installation",
      "Troubleshooting Printing Issues",
      "Peripheral Setup",
    ],
  },
  {
    id: "smarthome",
    icon: Home,
    color: "text-purple-500",
    title: "Smart Home Device Setup",
    description:
      "Complete smart home integration including speakers, lighting, thermostats, security systems, and more.",
    details: [
      "Smart Speakers & Displays",
      "Smart Lighting & Switches",
      "Smart Thermostats & HVAC Integration",
      "Home Security Cameras & Systems",
      "Smart Door Locks & Video Doorbells",
    ],
  },
  {
    id: "entertainment",
    icon: Tv,
    color: "text-red-500",
    title: "Home Entertainment Setup",
    description:
      "TV mounting, streaming device setup, sound systems, and gaming console configuration.",
    details: [
      "Smart TV Setup & Mounting",
      "Streaming Device Installation",
      "Sound Systems & Soundbar Configuration",
      "Gaming Console Setup",
    ],
  },
  {
    id: "data",
    icon: Database,
    color: "text-blue-500",
    title: "Data Services",
    description:
      "Secure data transfer, backup solutions, and basic data recovery services for your peace of mind.",
    details: [
      "Data Transfer Between Devices",
      "Cloud & Local Backup Solutions",
      "Basic Data Recovery",
    ],
  },
  {
    id: "emergency",
    icon: Wrench,
    color: "text-orange-500",
    title: "Emergency Tech Support",
    description:
      "Urgent technical issue resolution with emergency call-outs and comprehensive device diagnosis.",
    details: [
      "Emergency Call-Outs",
      "Device Diagnosis & Fixes",
      "Multi-Device Troubleshooting",
    ],
  },
  {
    id: "maintenance",
    icon: Settings,
    color: "text-emerald-500",
    title: "Maintenance Services",
    description:
      "Workspace setup, quarterly health checks, and eco-friendly e-waste disposal services.",
    details: [
      "Cable Management & Workspace Setup",
      "Quarterly Tech Health Check",
      "Eco-Friendly E-Waste Pickup & Data Wiping",
    ],
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white dark:bg-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Tech Services
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto">
            We provide end-to-end technology solutions across 9 specialized
            categories, ensuring your digital infrastructure operates at peak
            performance.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ServiceCard service={service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
