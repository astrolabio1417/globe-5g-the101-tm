// --- SETUP & EXECUTION ---

// 1. IMPORTANT: This code must be run on a secure (HTTPS) website 
//    (e.g., https://www.google.com/) because the Web Crypto API
//    (window.crypto.subtle) is often restricted in insecure (HTTP) contexts.

// 2. Before execution, replace "Enter Your product SN here" with the actual serial number.

const productSn = "Enter Your product SN here";
generateHash(productSn);

/**
 * Generates a developer password by hashing a Product Serial Number (SN) 
 * with a fixed salt and extracting specific parts of the hash.
 * * @param {string} sn - The Product Serial Number to be processed.
 * @returns {Promise<string>} A promise that resolves to the generated 30-character password.
 */
async function generateHash(sn) {
    const input = `${sn}+*#developer*#rain*#`;

    // Hash using Web Crypto API (returns ArrayBuffer)
    const encoder = new TextEncoder();
    const data = encoder.encode(input);
    const hashBuffer = await crypto.subtle.digest("SHA-256", data);

    // Convert ArrayBuffer → hex string
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray
        .map((b) => b.toString(16).padStart(2, "0"))
        .join("");

    // Simulate: cut -c 1-15,50-64 (1-based)
    const part1 = hashHex.slice(0, 15);
    const part2 = hashHex.slice(49, 64);
    const pw = part1 + part2;
    console.log("Developer Password: " + pw);
    return pw;
}
