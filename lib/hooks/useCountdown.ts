import { useEffect, useState } from "react";

export interface CountdownState {
	days: number;
	hours: number;
	minutes: number;
	seconds: number;
	isComplete: boolean;
}

function getCountdownState(targetTime: number): CountdownState {
	const remaining = Math.max(targetTime - Date.now(), 0);

	const days = Math.floor(remaining / (1000 * 60 * 60 * 24));
	const hours = Math.floor((remaining / (1000 * 60 * 60)) % 24);
	const minutes = Math.floor((remaining / (1000 * 60)) % 60);
	const seconds = Math.floor((remaining / 1000) % 60);

	return {
		days,
		hours,
		minutes,
		seconds,
		isComplete: remaining === 0,
	};
}

export function useCountdown(targetDate: string | Date): CountdownState {
	const targetTime =
		targetDate instanceof Date
			? targetDate.getTime()
			: new Date(targetDate).getTime();

	const [countdown, setCountdown] = useState<CountdownState>(() =>
		Number.isNaN(targetTime)
			? {
					days: 0,
					hours: 0,
					minutes: 0,
					seconds: 0,
					isComplete: true,
				}
			: getCountdownState(targetTime),
	);

	useEffect(() => {
		if (Number.isNaN(targetTime)) {
			return;
		}

		const tick = () => {
			setCountdown(getCountdownState(targetTime));
		};

		tick();
		const intervalId = window.setInterval(tick, 1000);

		return () => {
			window.clearInterval(intervalId);
		};
	}, [targetTime]);

	return countdown;
}
