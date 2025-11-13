/*
import React, { useState } from "react";
import "./Testimonies.css";
import PageWrapper from "../PageWrapper";

const testimonies = [
  {
    name: "Mas Arip",
    shop: "Call Money Cell",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
    color: "#f39c12",
    quote: "Pelayanan cepat dan hasil memuaskan!"
  },
  {
    name: "Bu Diah",
    shop: "Warung Ikiaka",
    img: "https://randomuser.me/api/portraits/women/44.jpg",
    color: "#bdc3c7",
    quote: "Sistemnya membantu bisnis saya lebih tertata."
  },
  {
    name: "Meisha",
    shop: "Barokah Cell",
    img: "https://randomuser.me/api/portraits/women/68.jpg",
    color: "#f1c40f",
    quote: "Aplikasinya mudah digunakan dan responsif."
  },
  {
    name: "Mas Ahmad",
    shop: "Alfazri Cell",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
    color: "#1abc9c",
    quote: "Sangat puas dengan layanan IT consulting!"
  },
  {
    name: "Mba Rumsiyah",
    shop: "Nasya Cell",
    img: "https://randomuser.me/api/portraits/women/60.jpg",
    color: "#a3e4d7",
    quote: "Tim sangat komunikatif dan profesional."
  },
  {
    name: "Ibu Omih",
    shop: "Aqila Cell",
    img: "https://randomuser.me/api/portraits/women/50.jpg",
    color: "#00c3ff",
    quote: "Rekomendasi banget untuk bisnis digital."
  },
];

function Testimony() {
  const [selected, setSelected] = useState(null);

  return (
    <PageWrapper>
      <section className="testimony">
        <h2>Testimonies</h2>

        {!selected ? (
            <div className="testimony-list animate">
                {testimonies.map((item, index) => (
                <div
                    key={index}
                    className="testimony-card"
                    style={{ backgroundColor: item.color }}
                    onClick={() => setSelected(item)}
                >
                    <img src={item.img} alt={item.name} className="testimony-img" />
                    <h3>{item.name}</h3>
                    <p>{item.shop}</p>
                </div>
                ))}
            </div>
            ) : (
            <div className="testimony-detail animate">
                <img src={selected.img} alt={selected.name} className="testimony-detail-img" />
                <h3>{selected.name}</h3>
                <p><strong>{selected.shop}</strong></p>
                <blockquote>"{selected.quote}"</blockquote>
                <button className="back-btn" onClick={() => setSelected(null)}>
                ← Back
                </button>
            </div>
        )}
      </section>
    </PageWrapper>
  );
}

export default Testimony;
*/
