// /**
//  * Sanitize and validate user input to allow only normal plain text.
//  * Blocks: Script Injection, PHP Code, HTML Tags, SQL / Malware-like text.
//  */

// // Script injection & HTML
// const SCRIPT_AND_HTML_PATTERNS = [
//   /<script\b[^>]*>[\s\S]*?<\/script>/gi,
//   /<iframe\b[^>]*>[\s\S]*?<\/iframe>/gi,
//   /<object\b[^>]*>[\s\S]*?<\/object>/gi,
//   /<embed\b[^>]*>/gi,
//   /javascript\s*:/gi,
//   /vbscript\s*:/gi,
//   /data\s*:\s*[^,\s]+/gi,
//   /on\w+\s*=\s*["'][^"']*["']/gi,
//   /on\w+\s*=\s*[^\s>]+/gi,
//   /\beval\s*\(/gi,
//   /\b(document\.|window\.|alert\s*\(|fetch\s*\(|XMLHttpRequest)/gi,
//   /<[^>]+>/g,
// ];

// // PHP code
// const PHP_PATTERNS = [
//   /<\?[\s\S]*?\?>/g,
//   /<\?php/gi,
//   /<\?=/gi,
// ];

// // SQL injection & malware-like (avoid blocking normal phrases like "I don't want" - use word boundaries and specific attack patterns)
// const SQL_AND_MALWARE_PATTERNS = [
//   /\bUNION\s+SELECT\b/gi,
//   /\bINSERT\s+INTO\b/gi,
//   /\bDROP\s+TABLE\b/gi,
//   /\bDELETE\s+FROM\b/gi,
//   /\bEXEC\s*(\s|\()/gi,
//   /\bEXECUTE\s*(\s|\()/gi,
//   /;\s*DROP\s/gi,
//   /'\s*OR\s*'?\d*'\s*=\s*'?\d*'/gi,
//   /"\s*OR\s*"?\d*"\s*=\s*"?\d*"/gi,
//   /--\s*$/gm,
//   /\bCHAR\s*\(\s*\d+/gi,
//   /\bCONCAT\s*\(/gi,
//   /\bBENCHMARK\s*\(/gi,
//   /\bSLEEP\s*\(/gi,
//   /\bLOAD_FILE\s*\(/gi,
//   /\/\*[\s\S]*?\*\//g, // SQL block comments
// ];

// function testPatterns(str, patterns) {
//   if (!str || typeof str !== "string") return false;
//   const s = str.trim();
//   if (!s) return false;
//   for (let i = 0; i < patterns.length; i++) {
//     const p = new RegExp(patterns[i].source, patterns[i].flags);
//     if (p.test(s)) return true;
//   }
//   return false;
// }

// /**
//  * Check if string contains dangerous content (script, PHP, HTML, SQL/malware).
//  * @param {string} value
//  * @returns {boolean}
//  */
// export function containsDangerousContent(value) {
//   if (!value || typeof value !== "string") return false;
//   if (testPatterns(value, SCRIPT_AND_HTML_PATTERNS)) return true;
//   if (testPatterns(value, PHP_PATTERNS)) return true;
//   if (testPatterns(value, SQL_AND_MALWARE_PATTERNS)) return true;
//   // Raw angle brackets (HTML/script)
//   if (/<|>/.test(value)) return true;
//   return false;
// }

// // Safe character sets
// const SAFE_NAME_REGEX = /[^a-zA-Z\s\-']/g;
// const SAFE_TEXT_REGEX = /[^a-zA-Z0-9\s.,?!'\-()@:\n\r]/g;

// /**
//  * Sanitize to plain text only. Strips dangerous patterns and non-allowed chars.
//  * @param {string} value
//  * @param {"name" | "message" | "general"} mode
//  * @returns {string}
//  */
// export function sanitizeText(value, mode = "general") {
//   if (!value || typeof value !== "string") return "";

//   let out = value;

//   const allPatterns = [...SCRIPT_AND_HTML_PATTERNS, ...PHP_PATTERNS, ...SQL_AND_MALWARE_PATTERNS];
//   const LINK_PATTERNS = [
//     /\bhttps?:\/\/[^\s]+/gi,        // http:// https://
//     /\bwww\.[^\s]+/gi,              // www.domain.com
//     /\b[a-z0-9.-]+\.(com|net|org|io|co|in|xyz|info|biz|me|site|online)\b/gi, // domains
//     /\bmailto:[^\s]+/gi,
//     /\b[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}\b/gi, // email addresses
//   ];
//   const BASE64_PATTERNS = [
//     /\b[a-zA-Z0-9+/]{20,}={0,2}\b/g // long base64 strings
//   ];
//   const ENCODED_PATTERNS = [
//     /&#\d+;/g,         // HTML entities
//     /&#x[a-f0-9]+;/gi, // hex entities
//     /\\x[0-9a-f]{2}/gi,
//     /%[0-9a-f]{2}/gi,  // URL encoding
//   ];
//   for (let i = 0; i < allPatterns.length; i++) {
//     const p = new RegExp(allPatterns[i].source, allPatterns[i].flags);
//     out = out.replace(p, " ");
//   }
//   out = out.replace(/<|>/g, " ");
//   out = out.replace(/\s+/g, " ").trim();

//   if (mode === "name") {
//     out = out.replace(SAFE_NAME_REGEX, "");
//   } else {
//     out = out.replace(SAFE_TEXT_REGEX, "");
//   }

//   return out.trim();
// }

// /**
//  * Validate that content is safe (no script, PHP, HTML, SQL/malware). Use for showing errors.
//  * @param {string} value
//  * @returns {string | null} Error message if invalid, null if valid
//  */
// export function validatePlainTextOnly(value) {
//   if (!value || typeof value !== "string") return null;
//   if (containsDangerousContent(value)) {
//     return "Only normal text is allowed. No scripts, code, HTML, or suspicious content.";
//   }
//   return null;
// }


/**
 * ULTRA STRICT Plain Text Security
 * Allows ONLY normal readable text.
 * Blocks:
 * - Links / URLs / emails
 * - HTML / Script / PHP
 * - Base64 / Encoded payloads
 * - SQL injection keywords
 */

/**
 * Allowed characters ONLY
 */
const ULTRA_SAFE_REGEX = /^[a-zA-Z0-9\s.,?!'()\-\n\r]*$/;

/**
 * Link / URL / Email detection
 */
const LINK_REGEX =
  /(https?:\/\/|www\.|mailto:|[a-z0-9.-]+\.(com|net|org|io|co|in|xyz|info|biz|site|online)|[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,})/i;

/**
 * Encoded / base64 / ascii tricks
 */
const ENCODED_REGEX =
  /([a-zA-Z0-9+/]{20,}={0,2}|&#\d+;|&#x[a-f0-9]+;|\\x[0-9a-f]{2}|%[0-9a-f]{2})/i;

/**
 * HTML / script / PHP tags
 */
const TAG_REGEX = /<|>|\?php|<\?|<\/?|\/>/i;

/**
 * SQL / Malware keywords
 */
const SQL_REGEX =
  /\b(SELECT|INSERT|DELETE|DROP|UNION|EXEC|EXECUTE|BENCHMARK|SLEEP|LOAD_FILE)\b/i;

/**
 * Check dangerous content
 */
export function containsDangerousContent(value) {
  if (!value || typeof value !== "string") return false;

  const v = value.trim();

  if (!v) return false;

  if (LINK_REGEX.test(v)) return true;
  if (ENCODED_REGEX.test(v)) return true;
  if (TAG_REGEX.test(v)) return true;
  if (SQL_REGEX.test(v)) return true;

  // Block anything outside safe characters
  if (!ULTRA_SAFE_REGEX.test(v)) return true;

  return false;
}

/**
 * Safe character sets
 */
const SAFE_NAME_REGEX = /[^a-zA-Z\s\-']/g;
const SAFE_TEXT_REGEX = /[^a-zA-Z0-9\s.,?!'()\-\n\r]/g;

/**
 * Sanitize to ultra strict plain text
 * @param {string} value
 * @param {"name" | "message" | "general"} mode
 */
export function sanitizeText(value, mode = "general") {
  if (!value || typeof value !== "string") return "";

  let out = value;

  // Remove dangerous parts
  out = out.replace(LINK_REGEX, " ");
  out = out.replace(ENCODED_REGEX, " ");
  out = out.replace(TAG_REGEX, " ");
  out = out.replace(SQL_REGEX, " ");

  // Apply allowed characters
  if (mode === "name") {
    out = out.replace(SAFE_NAME_REGEX, "");
  } else {
    out = out.replace(SAFE_TEXT_REGEX, "");
  }

  // normalize spaces
  out = out.replace(/\s+/g, " ").trim();

  return out;
}

/**
 * Validate ultra strict plain text
 */
export function validatePlainTextOnly(value) {
  if (!value || typeof value !== "string") return null;

  if (containsDangerousContent(value)) {
    return "Only normal plain text is allowed. Links, scripts, HTML, encoded text, or suspicious content are blocked.";
  }

  return null;
}
