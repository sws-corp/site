import { useTranslation } from 'react-i18next';

export function GetTimeLeft() {
    const { t } = useTranslation();

    const today = new Date();
    const nightInfoUwu = new Date("2025-12-04T16:34:00");
    const timeleft = nightInfoUwu.getTime() - today.getTime();

    if (timeleft <= 0) {
        const minutesSinceStart = Math.floor(-timeleft / (1000 * 60));
        return t("landing.countdown.started-since", { minutesSinceStart: minutesSinceStart });
    }

    const daysLeft = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    if (daysLeft >= 1) return t("landing.countdown.days", { days: daysLeft });

    const hoursLeft = Math.floor(timeleft / (1000 * 60 * 60));
    if (hoursLeft >= 1) return t("landing.countdown.hours", { hours: hoursLeft });

    const minutesLeft = Math.floor(timeleft / (1000 * 60));
    return t("landing.countdown.minutes", { minutes: minutesLeft });
}