// src/components/Services.jsx
import React from "react";
import { FaLaptopCode, FaPalette, FaBolt, FaCheckCircle, FaExternalLinkAlt } from "react-icons/fa";
import { SiTailwindcss, SiReact, SiHtml5, SiCss3, SiJavascript } from "react-icons/si";


import {cardData} from "../data/services"


function ToolBadge({ Tool, name }) {
  return (
    <span className="inline-flex items-center gap-2 px-2 py-1 rounded-md text-xs font-medium bg-gray-100/60 dark:bg-white/5">
      {Tool &&<Tool className="w-4 h-4" aria-hidden />}
      <span>{name}</span>
    </span>
  );
}

function FeatureItem({ children }) {
  return (
    <li className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
      <FaCheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" aria-hidden />
      <span>{children}</span>
    </li>
  );
}





export default function Services() {
  return (
    <section id="services" className="py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cardData.map((svc) => {
            const Icon = svc.icon;
            return (
              <article
                key={svc.id}
                className="relative bg-white border border-gray-100 dark:border-slate-700 rounded-2xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300"
                aria-labelledby={`svc-${svc.id}-title`}
                
              >
                {/* Accent ribbon / dot */}
                <div className="absolute -top-3 right-4">
                  <span
                    className={`inline-flex items-center justify-center px-3 py-1 rounded-full text-xs font-semibold ${svc.accent}`}
                    aria-hidden
                  >
                    {svc.id.toUpperCase()}
                  </span>
                </div>

                {/* Icon & title */}
                <div className="flex items-center gap-4 mb-3">
                  <div className="w-12 h-12 rounded-lg flex items-center justify-center bg-gray-50 dark:bg-slate-700/40 text-2xl">
                    <Icon className="w-6 h-6 text-gray-700 dark:text-gray-100" aria-hidden />
                  </div>
                  <div>
                    <h3 id={`svc-${svc.id}-title`} className="text-lg font-bold text-gray-900 ">
                      {svc.title}
                    </h3>
                    <p className="text-sm text-gray-500 dark:text-gray-300">{svc.tagline}</p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">{svc.description}</p>

                {/* Tools */}
                <div className="mb-4 flex flex-wrap gap-2">
                  {svc.tools.map((t, i) => {
                    const Tool = t.icon;
                    // If icon is FaPalette (not a SI icon), handle accordingly
                    return <ToolBadge key={i} Tool={Tool} name={t.name} />;
                  })}
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {/* Features */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-2">Features</h4>
                    <ul className="space-y-2">
                      {svc.features.map((f, i) => (
                        <FeatureItem key={i}>{f}</FeatureItem>
                      ))}
                    </ul>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-sm font-semibold text-gray-800 dark:text-gray-100 mb-2">Deliverables</h4>
                    <ul className="list-disc list-inside text-sm text-gray-700 dark:text-gray-300 space-y-1">
                      {svc.deliverables.map((d, i) => (
                        <li key={i}>{d}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* CTA */}
                <div className="mt-6 flex items-center justify-between gap-4">
                  <a
                    href={svc.cta.href}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-yellow-400 to-yellow-500 text-white text-sm font-medium shadow hover:from-yellow-500 hover:to-yellow-600 transition-colors"
                  >
                    <span>{svc.cta.label}</span>
                    <FaExternalLinkAlt className="w-3.5 h-3.5 opacity-90" />
                  </a>

                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    <span className="font-medium text-gray-900 dark:text-white">Experience:</span>{" "}
                    {svc.id === "frontend" ? "1+ year" : "—"}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
