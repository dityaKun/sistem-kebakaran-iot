"use client"

import { useEffect, useRef } from "react"
import { motion, useInView, useAnimation } from "framer-motion"
import { Shield, Laptop, AlertTriangle, Eye, BarChart3, Lock, Server, Wifi } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-custom-gray to-custom-lavender">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <SecurityBenefitsSection />
      <PlatformSection />
      <CtaSection />
      <Footer />
    </div>
  )
}

function Header() {
  const router = useRouter();
  
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/80 backdrop-blur-sm">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Shield className="h-6 w-6 text-custom-dark" />
          <span className="text-xl font-bold">IoTSecure</span>
        </div>
        <nav className="hidden md:flex items-center gap-6">
          <a href="#features" className="text-sm font-medium hover:text-custom-dark transition-colors">
            Fitur
          </a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-custom-dark transition-colors">
            Cara Kerja
          </a>
          <a href="#benefits" className="text-sm font-medium hover:text-custom-dark transition-colors">
            Manfaat
          </a>
          <a href="#platforms" className="text-sm font-medium hover:text-custom-dark transition-colors">
            Platform
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <Button
          variant="outline"
          className="hidden sm:flex"
          onClick={() => router.push("/login")}
          >
          Login
          </Button>

          <Button className="bg-custom-dark hover:bg-opacity-90 text-white">Coba Gratis</Button>
        </div>
      </div>
    </header>
  )
}

function HeroSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="space-y-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                Sistem Monitoring Keamanan Jaringan IoT
              </h1>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <p className="text-muted-foreground md:text-xl">
                Pemantauan Perangkat dan Deteksi Serangan Jaringan pada Platform Web dan Mobile
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <Button className="bg-custom-dark hover:bg-opacity-90 text-white h-11 px-8">Mulai Sekarang</Button>
              <Button variant="outline" className="h-11 px-8">
                Pelajari Lebih Lanjut
              </Button>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative lg:ml-10"
          >
            <div className="relative overflow-hidden rounded-xl border bg-background p-2 shadow-xl">
              <div className="bg-gradient-custom aspect-[16/9] overflow-hidden rounded-lg">
                <div className="flex h-full items-center justify-center">
                  <div className="grid grid-cols-2 gap-4 p-4">
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Wifi className="h-5 w-5 text-custom-dark" />
                        <span className="text-sm font-medium">Perangkat Aktif</span>
                      </div>
                      <p className="mt-2 text-2xl font-bold">24</p>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <AlertTriangle className="h-5 w-5 text-amber-500" />
                        <span className="text-sm font-medium">Peringatan</span>
                      </div>
                      <p className="mt-2 text-2xl font-bold">2</p>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <BarChart3 className="h-5 w-5 text-blue-500" />
                        <span className="text-sm font-medium">Trafik</span>
                      </div>
                      <p className="mt-2 text-2xl font-bold">1.2 GB</p>
                    </div>
                    <div className="rounded-lg bg-white p-4 shadow-sm">
                      <div className="flex items-center gap-2">
                        <Lock className="h-5 w-5 text-green-500" />
                        <span className="text-sm font-medium">Status</span>
                      </div>
                      <p className="mt-2 text-2xl font-bold">Aman</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

function AnimatedSection({ children, id }) {
  const controls = useAnimation()
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, threshold: 0.2 })

  useEffect(() => {
    if (inView) {
      controls.start("visible")
    }
  }, [controls, inView])

  return (
    <section ref={ref} id={id} className="py-16 md:py-24">
      <motion.div
        initial="hidden"
        animate={controls}
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              duration: 0.6,
              staggerChildren: 0.1,
            },
          },
        }}
      >
        {children}
      </motion.div>
    </section>
  )
}

function AnimatedItem({ children, delay = 0 }) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
            delay,
          },
        },
      }}
    >
      {children}
    </motion.div>
  )
}

function FeaturesSection() {
  const features = [
    {
      icon: <Eye className="h-10 w-10 text-custom-dark" />,
      title: "Pemantauan Real-time",
      description: "Pantau semua perangkat IoT Anda secara real-time dengan dasbor yang intuitif dan mudah digunakan.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-custom-dark" />,
      title: "Deteksi Serangan",
      description: "Deteksi serangan jaringan secara otomatis dengan algoritma machine learning canggih.",
    },
    {
      icon: <Server className="h-10 w-10 text-custom-dark" />,
      title: "Analisis Trafik",
      description: "Analisis trafik jaringan untuk mengidentifikasi pola mencurigakan dan potensi kerentanan.",
    },
    {
      icon: <Lock className="h-10 w-10 text-custom-dark" />,
      title: "Keamanan Terpadu",
      description: "Solusi keamanan terpadu untuk melindungi seluruh ekosistem IoT Anda dari ancaman cyber.",
    },
  ]

  return (
    <AnimatedSection id="features">
      <div className="container px-4 md:px-6">
        <AnimatedItem>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Fitur Utama</h2>
            <p className="mt-4 text-xl text-muted-foreground">Solusi komprehensif untuk keamanan jaringan IoT Anda</p>
          </div>
        </AnimatedItem>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <AnimatedItem key={index} delay={index * 0.1}>
              <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border hover:shadow-md transition-shadow">
                <div className="mb-4 p-3 rounded-full bg-custom-gray">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Instalasi & Konfigurasi",
      description:
        "Pasang sensor dan gateway pada jaringan IoT Anda dan konfigurasikan melalui aplikasi web atau mobile.",
    },
    {
      number: "02",
      title: "Pemantauan & Analisis",
      description: "Sistem secara otomatis memantau dan menganalisis trafik jaringan untuk mendeteksi anomali.",
    },
    {
      number: "03",
      title: "Deteksi & Notifikasi",
      description: "Ketika terdeteksi aktivitas mencurigakan, sistem akan mengirimkan notifikasi real-time.",
    },
    {
      number: "04",
      title: "Mitigasi & Pencegahan",
      description: "Tindakan otomatis untuk mitigasi serangan dan rekomendasi untuk pencegahan di masa depan.",
    },
  ]

  return (
    <AnimatedSection id="how-it-works">
      <div className="container px-4 md:px-6">
        <AnimatedItem>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Cara Kerja</h2>
            <p className="mt-4 text-xl text-muted-foreground">Proses sederhana untuk mengamankan jaringan IoT Anda</p>
          </div>
        </AnimatedItem>
        <div className="relative">
          <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-custom-gray hidden md:block" />
          <div className="space-y-12">
            {steps.map((step, index) => (
              <AnimatedItem key={index} delay={index * 0.1}>
                <div
                  className={`relative flex items-start md:items-center gap-8 ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}
                >
                  <div className="flex-none z-10">
                    <div className="flex items-center justify-center w-16 h-16 rounded-full bg-custom-dark text-white font-bold text-xl">
                      {step.number}
                    </div>
                  </div>
                  <div
                    className={`flex-1 p-6 bg-white rounded-xl shadow-sm border ${index % 2 === 1 ? "md:text-right" : ""}`}
                  >
                    <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                    <p className="text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              </AnimatedItem>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  )
}

function SecurityBenefitsSection() {
  const benefits = [
    {
      title: "Deteksi Dini Serangan",
      description: "Identifikasi serangan cyber pada tahap awal sebelum menyebabkan kerusakan signifikan.",
    },
    {
      title: "Visibilitas Menyeluruh",
      description: "Dapatkan visibilitas lengkap atas semua perangkat IoT dan aktivitas jaringan Anda.",
    },
    {
      title: "Respons Otomatis",
      description: "Tindakan mitigasi otomatis untuk mengurangi dampak serangan cyber.",
    },
    {
      title: "Kepatuhan Regulasi",
      description: "Bantu memenuhi persyaratan kepatuhan keamanan data dan privasi.",
    },
    {
      title: "Perlindungan Data Sensitif",
      description: "Lindungi data sensitif dari pencurian dan eksploitasi oleh pihak tidak bertanggung jawab.",
    },
    {
      title: "Pengurangan Risiko",
      description: "Kurangi risiko finansial dan reputasi akibat pelanggaran keamanan.",
    },
  ]

  return (
    <AnimatedSection id="benefits">
      <div className="container px-4 md:px-6">
        <AnimatedItem>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Manfaat Keamanan</h2>
            <p className="mt-4 text-xl text-muted-foreground">
              Mengapa sistem monitoring keamanan IoT penting untuk bisnis Anda
            </p>
          </div>
        </AnimatedItem>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit, index) => (
            <AnimatedItem key={index} delay={index * 0.1}>
              <div className="p-6 bg-white rounded-xl shadow-sm border h-full">
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </div>
            </AnimatedItem>
          ))}
        </div>
      </div>
    </AnimatedSection>
  )
}

function PlatformSection() {
  return (
    <AnimatedSection id="platforms">
      <div className="container px-4 md:px-6">
        <div className="grid gap-12 lg:grid-cols-2 items-center">
          <AnimatedItem>
            <div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">
                Tersedia di Web & Mobile
              </h2>
              <p className="text-xl text-muted-foreground mb-8">
                Akses sistem monitoring keamanan IoT Anda kapan saja dan di mana saja melalui platform web dan mobile.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="flex-none rounded-full bg-custom-gray p-1">
                    <svg
                      className="h-5 w-5 text-custom-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Antarmuka yang konsisten di semua platform</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-none rounded-full bg-custom-gray p-1">
                    <svg
                      className="h-5 w-5 text-custom-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Notifikasi real-time pada perangkat mobile</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-none rounded-full bg-custom-gray p-1">
                    <svg
                      className="h-5 w-5 text-custom-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Dasbor analitik lengkap pada platform web</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="flex-none rounded-full bg-custom-gray p-1">
                    <svg
                      className="h-5 w-5 text-custom-dark"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Sinkronisasi data otomatis antar perangkat</span>
                </li>
              </ul>
            </div>
          </AnimatedItem>
          <AnimatedItem delay={0.2}>
            <div className="relative">
              <div className="absolute -left-6 -top-6 h-24 w-24 rounded-full bg-custom-gray blur-xl opacity-80"></div>
              <div className="absolute -right-6 -bottom-6 h-24 w-24 rounded-full bg-custom-lavender blur-xl opacity-80"></div>
              <div className="relative flex justify-center">
                <div className="relative z-10 w-[280px] md:w-[320px] rounded-[40px] border-8 border-black bg-black p-2 shadow-xl">
                  <div className="rounded-[32px] overflow-hidden bg-white">
                    <div className="aspect-[9/19] bg-gradient-custom overflow-hidden">
                      <div className="p-4 h-full flex flex-col">
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <Shield className="h-5 w-5 text-custom-dark" />
                            <span className="font-bold">IoTSecure</span>
                          </div>
                          <div className="flex items-center gap-1">
                            <div className="w-2 h-2 rounded-full bg-green-500"></div>
                            <span className="text-xs">Online</span>
                          </div>
                        </div>
                        <div className="flex-1 grid grid-cols-2 gap-2">
                          <div className="bg-white rounded-lg p-2 shadow-sm flex flex-col justify-between">
                            <div className="flex items-center gap-1">
                              <Wifi className="h-3 w-3 text-custom-dark" />
                              <span className="text-xs">Perangkat</span>
                            </div>
                            <p className="text-lg font-bold">24</p>
                          </div>
                          <div className="bg-white rounded-lg p-2 shadow-sm flex flex-col justify-between">
                            <div className="flex items-center gap-1">
                              <AlertTriangle className="h-3 w-3 text-amber-500" />
                              <span className="text-xs">Alert</span>
                            </div>
                            <p className="text-lg font-bold">2</p>
                          </div>
                          <div className="col-span-2 bg-white rounded-lg p-2 shadow-sm">
                            <div className="flex items-center gap-1 mb-1">
                              <Lock className="h-3 w-3 text-custom-dark" />
                              <span className="text-xs">Status Jaringan</span>
                            </div>
                            <div className="flex items-center justify-between">
                              <p className="text-lg font-bold">Aman</p>
                              <div className="w-12 h-2 bg-gray-200 rounded-full overflow-hidden">
                                <div className="w-10 h-full bg-custom-dark rounded-full"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 bg-white rounded-lg p-2 shadow-sm">
                          <div className="flex items-center justify-between mb-1">
                            <span className="text-xs font-medium">Aktivitas Terbaru</span>
                            <span className="text-xs text-muted-foreground">Hari ini</span>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-xs">
                              <div className="w-1 h-1 rounded-full bg-custom-dark"></div>
                              <span>Perangkat baru terdeteksi</span>
                            </div>
                            <div className="flex items-center gap-1 text-xs">
                              <div className="w-1 h-1 rounded-full bg-amber-500"></div>
                              <span>Upaya login tidak sah</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="absolute -right-12 top-1/4 z-0 w-[240px] rounded-xl border bg-background p-1 shadow-lg hidden md:block">
                  <div className="rounded-lg bg-gradient-custom p-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Laptop className="h-4 w-4 text-custom-dark" />
                      <span className="text-xs font-medium">Dashboard Web</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 w-full rounded-full bg-white"></div>
                      <div className="h-2 w-3/4 rounded-full bg-white"></div>
                      <div className="h-2 w-1/2 rounded-full bg-white"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedItem>
        </div>
      </div>
    </AnimatedSection>
  )
}

function CtaSection() {
  return (
    <AnimatedSection id="cta">
      <div className="container px-4 md:px-6">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-custom-dark px-6 py-12 sm:px-12 sm:py-16 md:py-20 lg:px-20">
          <div className="relative z-10 max-w-3xl mx-auto text-center text-white">
            <AnimatedItem>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                Amankan Jaringan IoT Anda Sekarang
              </h2>
            </AnimatedItem>
            <AnimatedItem delay={0.1}>
              <p className="mt-4 text-lg md:text-xl opacity-90">
                Mulai perjalanan menuju keamanan IoT yang lebih baik dengan solusi monitoring keamanan kami.
              </p>
            </AnimatedItem>
            <AnimatedItem delay={0.2}>
              <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-white text-custom-dark hover:bg-opacity-90 h-12 px-8 text-base">
                  Mulai Uji Coba Gratis
                </Button>
                <Button variant="outline" className="border-white text-white hover:bg-white/10 h-12 px-8 text-base">
                  Jadwalkan Demo
                </Button>
              </div>
            </AnimatedItem>
            <AnimatedItem delay={0.3}>
              <p className="mt-6 text-sm opacity-80">Tidak diperlukan kartu kredit. Uji coba gratis selama 14 hari.</p>
            </AnimatedItem>
          </div>
          <div className="absolute top-0 left-0 right-0 bottom-0 bg-[url('/placeholder.svg?height=400&width=800')] bg-cover bg-center opacity-10"></div>
          <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-custom-lavender blur-3xl opacity-30"></div>
          <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-custom-lavender blur-3xl opacity-30"></div>
        </div>
      </div>
    </AnimatedSection>
  )
}

function Footer() {
  return (
    <footer className="border-t bg-white">
      <div className="container px-4 py-12 md:px-6 md:py-16">
        <div className="grid gap-8 sm:grid-cols-2 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-custom-dark" />
              <span className="text-xl font-bold">IoTSecure</span>
            </div>
            <p className="text-sm text-muted-foreground">
              Solusi monitoring keamanan jaringan IoT terdepan untuk bisnis dan industri.
            </p>
          </div>
          <div>
            <h3 className="font-medium mb-4">Produk</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Fitur
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Harga
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Integrasi
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Roadmap
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Perusahaan</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Tentang Kami
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Karir
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Kontak
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-medium mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Kebijakan Privasi
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Syarat & Ketentuan
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
                  Kepatuhan
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} IoTSecure. Hak Cipta Dilindungi.
          </p>
          <div className="flex items-center gap-4">
            <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path
                  fillRule="evenodd"
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
            <a href="#" className="text-muted-foreground hover:text-custom-dark transition-colors">
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

