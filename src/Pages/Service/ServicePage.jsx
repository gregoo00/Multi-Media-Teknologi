import React, { useState } from "react";
import PageWrapper from "../../Components/PageWrapper";
import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import "./Service.css";

function ServicePage() {
  const [selectedService, setSelectedService] = useState(null);
  const [selectedDuration, setSelectedDuration] = useState("1");

  const services = {
    "Mobile App": [
      {
        name: "Starter",
        price: 19900,
        features: [
          "1 Aplikasi Android",
          "Desain template standar",
          "Integrasi API sederhana",
          "Free maintenance 1 bulan",
        ],
      },
      {
        name: "Growth",
        price: 39900,
        features: [
          "2 Platform (Android & iOS)",
          "Desain kustom UI/UX",
          "Integrasi API + Firebase",
          "Free maintenance 3 bulan",
        ],
      },
      {
        name: "Business",
        price: 69900,
        features: [
          "Multi-user app",
          "Integrasi AI Chatbot",
          "Push Notification + Analytics",
          "Free maintenance 6 bulan",
        ],
      },
      {
        name: "Enterprise",
        price: 119900,
        features: [
          "Full custom system",
          "Cloud sync & load balancing",
          "Support 24/7 Dedicated",
          "Garansi SLA 99.9%",
        ],
      },
    ],
    "Cloud Hosting": [
      {
        name: "Basic",
        price: 12900,
        features: [
          "1 Website",
          "10 GB SSD Storage",
          "Gratis SSL",
          "Backup mingguan",
        ],
      },
      {
        name: "Premium",
        price: 24900,
        features: [
          "3 Website",
          "20 GB SSD Storage",
          "Domain gratis 1 tahun",
          "Backup harian otomatis",
        ],
      },
      {
        name: "Business",
        price: 38900,
        features: [
          "50 Website",
          "50 GB NVMe Storage",
          "AI Monitoring & CDN",
          "Dukungan 24/7",
        ],
      },
      {
        name: "Cloud Pro",
        price: 99900,
        features: [
          "100 Website",
          "100 GB NVMe Storage",
          "Load Balancer + IP Unik",
          "Performa tinggi terjamin",
        ],
      },
    ],
  };

  const durations = [
    { label: "1 Bulan", value: 1, multiplier: 1 },
    { label: "6 Bulan", value: 6, multiplier: 0.95 },
    { label: "12 Bulan", value: 12, multiplier: 0.9 },
    { label: "24 Bulan", value: 24, multiplier: 0.85 },
  ];

  const handleChoose = (service, plan) => {
    window.location.href = `/payment?service=${service}&plan=${plan}`;
  };

  return (
    <>
      <Navbar />
      <PageWrapper>
        <section className="pricing-section">
          <div className="pricing-header">
            <h1>Pilih Layanan & Paket</h1>
            <p>
              Pilih jenis layanan yang kamu butuhkan dan sesuaikan durasi
              langgananmu 🚀
            </p>
          </div>

          {/* Pilihan Layanan */}
          <div className="service-selector">
            {Object.keys(services).map((service) => (
              <button
                key={service}
                className={`service-btn ${
                  selectedService === service ? "active" : ""
                }`}
                onClick={() => setSelectedService(service)}
              >
                {service}
              </button>
            ))}
          </div>

          {/* Pilihan Durasi */}
          {selectedService && (
            <div className="duration-selector">
              <h3>Pilih Durasi Langganan:</h3>
              <div className="duration-buttons">
                {durations.map((d) => (
                  <button
                    key={d.value}
                    className={`duration-btn ${
                      selectedDuration === d.value.toString() ? "active" : ""
                    }`}
                    onClick={() => setSelectedDuration(d.value.toString())}
                  >
                    {d.label}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Paket */}
          {selectedService && (
            <div className="pricing-grid">
              {services[selectedService].map((pkg, index) => {
                const selectedDur = durations.find(
                  (d) => d.value.toString() === selectedDuration
                );
                const totalPrice = Math.round(
                  pkg.price * selectedDur.value * selectedDur.multiplier
                );
                const pricePerMonth = Math.round(
                  pkg.price * selectedDur.multiplier
                );

                return (
                  <div key={index} className="pricing-card">
                    <h3>{pkg.name}</h3>
                    <p className="price">
                      Rp {pricePerMonth.toLocaleString("id-ID")}/bln
                    </p>
                    <p className="total">
                      Total: Rp {totalPrice.toLocaleString("id-ID")}
                    </p>
                    <ul>
                      {pkg.features.map((f, idx) => (
                        <li key={idx}>{f}</li>
                      ))}
                    </ul>
                    <button
                      className="choose-btn"
                      onClick={() => handleChoose(selectedService, pkg.name)}
                    >
                      Pilih Paket
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </section>
      </PageWrapper>
      <Footer />
    </>
  );
}

export default ServicePage;
