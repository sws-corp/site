import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

export function GetTimeLeft() {
  const { t } = useTranslation();

  const targets = [
    new Date("2025-12-04T16:34:00"),
    new Date("2025-12-05T08:04:00"),
  ];

  const [currentTargetIndex, setCurrentTargetIndex] = useState(0);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setNow(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const today = now;
  const target = targets[currentTargetIndex];
  const timeleft = target.getTime() - today.getTime();

  if (timeleft <= 0) {
    if (currentTargetIndex < targets.length - 1) {
      setCurrentTargetIndex((i) => i + 1);
      return ""; 
    }
    const minutesSinceStart = Math.floor(-timeleft / (1000 * 60));
    return t("landing.countdown.started-since", { minutesSinceStart });
  }
  const daysLeft = Math.floor(timeleft / (1000 * 60 * 60 * 24));
  if (daysLeft >= 1) return t("landing.countdown.days", { days: daysLeft });
  const hoursLeft = Math.floor(timeleft / (1000 * 60 * 60));
  if (hoursLeft >= 1) return t("landing.countdown.hours", { hours: hoursLeft });
  const minutesLeft = Math.floor(timeleft / (1000 * 60));
  return t("landing.countdown.minutes", { minutes: minutesLeft });
}