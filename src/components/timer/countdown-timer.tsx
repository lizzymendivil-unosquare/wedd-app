"use client";

import React, { useEffect, useState } from "react";

import TimerSegment from "./timer-segment";
import { useScopedI18n } from "@/locales/client";

const WEDDING_DATE = "12/30/2023 18:00:00";
// const WEDDING_DATE = "11/15/2023 11:53:00";

export default function CountdownTimer() {
  const t = useScopedI18n("wedding");
  const [weddingTime, setWeddingTime] = useState(false);
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const target = new Date(WEDDING_DATE);
    const interval = setInterval(() => {
      const now = new Date();
      const difference = target.getTime() - now.getTime();

      const d = Math.floor(difference / (1000 * 60 * 60 * 24));
      setDays(d);

      const h = Math.floor(
        (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      setHours(h);

      const m = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      setMinutes(m);

      const s = Math.floor((difference % (1000 * 60)) / 1000);
      setSeconds(s);

      if (d <= 0 && h <= 0 && m <= 0 && s <= 0) {
        setWeddingTime(true);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {!weddingTime && (
        <>
          <p>{t("first_text")}</p>
          <p className="my-4">{t("second_text")}</p>
        </>
      )}

      {weddingTime ? (
        <p>Wedding is happening now!</p>
      ) : (
        <div className="flex bg-purple-700 mx-4 p-4 justify-center rounded-lg text-center">
          <div className="flex flex-col sm:flex-row ">
            <TimerSegment time={days} label={t("days")} />
            <TimerSegment time={hours} label={t("hours")} />
            <TimerSegment time={minutes} label={t("minutes")} />
            <TimerSegment time={seconds} label={t("seconds")} />
          </div>
        </div>
      )}
    </>
  );
}
