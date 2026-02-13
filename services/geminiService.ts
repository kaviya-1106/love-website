
import { GoogleGenAI } from "@google/genai";

export async function generateLovePoem() {
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Write a short, deeply romantic and elegant 4-line poem for a 5th Valentine's Day anniversary. Focus on the theme of 'Half a Decade of Love'.",
      config: {
        temperature: 1,
        topP: 0.95,
      }
    });
    return response.text;
  } catch (error) {
    console.error("Failed to generate poem:", error);
    return "Five years of laughter, five years of grace,\nEach moment a treasure in our sacred space.\nThrough seasons of change and the passage of time,\nI'm grateful forever that your heart is mine.";
  }
}
