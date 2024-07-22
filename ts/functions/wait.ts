/**
 * Waits for the specified number of milliseconds.
 *
 * @param duration - time in milliseconds
 * @throws Error if `duration` not positive finite number
 * @returns void
 */
export function wait(duration: number) {
  if (typeof duration !== "number" || !isFinite(duration)) {
    throw new Error("Value provided to ms.format() must be of type number.");
  }

  if (duration <= 0) throw Error("duration must be positive number.");

  return new Promise((resolve): number => setTimeout(resolve, duration));
}
