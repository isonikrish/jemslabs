"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import { sendGAEvent } from "@next/third-parties/google";

export default function LeadTracker() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const utmSource = searchParams?.get("utm_source") || "direct";
    sessionStorage.setItem("utm_source", utmSource);

    // GA Event
    sendGAEvent("website_visit", {
      event_label: "Website Visit",
      event_category: "Leads",
      utm_source: utmSource,
    });

    // Send lead to Sheets via server
    const sendToSheet = async () => {

        await fetch("/api/lead", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            utm_source: utmSource,
            event_type: "website_visit",
            page_path: window.location.pathname,
          }),
        });
    };

    sendToSheet();
  }, []);

  return null;
}
