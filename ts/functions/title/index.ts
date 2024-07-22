import lowerCase from "./lower-case";
import specials from "./specials";

const word = "[^\\s'’\\(\\)!?;:\"-]";
const regex = new RegExp(
  `(?:(?:(\\s?(?:^|[.\\(\\)!?;:"-])\\s*)(${word}))|(${word}))(${word}*[’']*${word}*)`,
  "g"
);

const convertToRegExp = (specials: string[]) =>
  specials.map((s: string) => [new RegExp(`\\b${s}\\b`, "gi"), s]);

function parseMatch(match) {
  const firstCharacter = match[0];

  // test first character
  if (/\s/.test(firstCharacter)) {
    // if whitespace - trim and return
    return match.slice(1);
  }
  if (/[\(\)]/.test(firstCharacter)) {
    // if parens - this shouldn't be replaced
    return null;
  }

  return match;
}

export interface TitleOptions {
  special?: string[];
}

/**
 * Converts a string to a title
 *
 * @param str - title string
 * @param options - optional - TitleOptions
 *
 * @return string
 */
export function title(str: string, options?: TitleOptions): string {
  str = str
    .toLowerCase()
    .replace(regex, (m, lead = "", forced, lower, rest, offset, string) => {
      const isLastWord = m.length + offset >= string.length;

      const parsedMatch = parseMatch(m);
      if (!parsedMatch) {
        return m;
      }
      if (!forced) {
        const fullLower = lower + rest;

        if (lowerCase.has(fullLower) && !isLastWord) {
          return parsedMatch;
        }
      }

      return lead + (lower || forced).toUpperCase() + rest;
    });

  const customSpecials = options?.special || [];
  const replace = [...specials, ...customSpecials];
  const replaceRegExp = convertToRegExp(replace);

  replaceRegExp.forEach(([pattern, s]: (string | RegExp)[]) => {
    str = str.replace(pattern, s as string);
  });

  return str;
}
