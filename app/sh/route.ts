import { NextResponse } from "next/server";
type colors =
  | "yellow"
  | "red"
  | "white"
  | "green"
  | "blue"
  | "magenta"
  | "cyan"
  | "lightYellow"
  | "lightRed"
  | "lightGreen"
  | "lightBlue"
  | "lightMagenta"
  | "lightCyan"
  | "brightWhite";
function neon(text: string, color: colors): string {
  const colorCodes: Record<string, string> = {
    yellow: "\x1b[33m",    // Yellow
    red: "\x1b[31m",       // Red
    green: "\x1b[32m",     // Green
    blue: "\x1b[34m",      // Blue
    magenta: "\x1b[35m",   // Magenta
    cyan: "\x1b[36m",      // Cyan
    white: "\x1b[37m",     // White
    lightYellow: "\x1b[93m",  // Light Yellow
    lightRed: "\x1b[91m",     // Light Red
    lightGreen: "\x1b[92m",   // Light Green
    lightBlue: "\x1b[94m",    // Light Blue
    lightMagenta: "\x1b[95m", // Light Magenta
    lightCyan: "\x1b[96m",    // Light Cyan
    brightWhite: "\x1b[97m",  // Bright White
    reset: "\x1b[0m",         // Reset
  };
  return `${colorCodes[color]}${text}${colorCodes.reset}`;
}

export async function GET() {
  const message = `
  ${neon("██████", "yellow")}${neon("╗", "red")}  ${neon("██████", "yellow")}${neon("╗", "red")}   ${neon("Pavan Kumar Chennupati", "lightRed")}
  ${neon("██", "yellow")}${neon("╔══", "red")}${neon("██", "yellow")}${neon("╗", "red")}${neon("██", "yellow")}${neon("╔════╝", "red")}   ${neon("Full Stack Developer", "lightRed")}
  ${neon("██████", "yellow")}${neon("╔╝", "red")}${neon("██", "yellow")}${neon("║", "red")}        ${neon("Designer & ML Enthusiast", "lightRed")}
  ${neon("██", "yellow")}${neon("╔═══╝", "red")} ${neon("██", "yellow")}${neon("║", "red")}        
  ${neon("██", "yellow")}${neon("║     ╚", "red")}${neon("██████", "yellow")}${neon("╗", "red")}
  ${neon("╚═╝      ╚═════╝", "red")}
 ┌─ About ─────────────────────────────┐
 │                                     │
 │ ${neon("Hey! I'm Pavan Kumar, a developer", "white")}   │
 │ ${neon("who builds web apps & AI tools.", "white")}     │
 │ ${neon("I'm passionate about building apps,", "white")} │
 │ ${neon("clean UX, and user-friendly design.", "white")} │
 │                                     │
 └─────────────────────────────────────┘

 ┌─ Socials ────────────────────────────────────┐
 │ ${neon("GitHub", "white")}    │ https://github.com/${neon("pavancos", "yellow")}      │
 │ ${neon("LinkedIn", "white")}  │ https://linkedin.com/in/${neon("pavankch", "yellow")} │
 │ ${neon("X", "white")}         │ https://x.com/${neon("pavancos", "yellow")}           │
 │ ${neon("Email", "white")}     │ ${neon("pavankc005", "yellow")}@gmail.com             │
 └──────────────────────────────────────────────┘

 `;
//  ${neon("Legend", "yellow")}

//  ${neon("$", "lightBlue")} curl pavanc.in/sh          ${neon("Get this page", "yellow")}
//  ${neon("$", "lightBlue")} curl pavanc.in/sh/list     ${neon("List of projects", "yellow")}
//  ${neon("$", "lightBlue")} curl pavanc.in/sh/help     ${neon("Get all endpoints", "yellow")}

  return new NextResponse(message, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
    },
  });
}
