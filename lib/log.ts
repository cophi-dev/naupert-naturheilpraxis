import createDebug from "debug";

export const log = createDebug("naupert");

export function logger(scope: string) {
  return log.extend(scope);
}
