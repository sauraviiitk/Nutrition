// app/api/scan-food+api.ts
import { GoogleGenAI } from "@google/genai";

export async function POST(request: Request) {
  try {
    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      return Response.json(
        { error: "GEMINI_API_KEY is not configured" },
        { status: 500 }
      );
    }

    const { base64Image, mediaType } = await request.json();

    if (!base64Image) {
      return Response.json({ error: "Missing image" }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: [
        {
          role: "user",
          parts: [
            {
              inlineData: {
                mimeType: mediaType || "image/jpeg",
                data: base64Image,
              },
            },
            {
              text: `Identify the food(s) in this image and estimate a macro breakdown.
Respond ONLY with valid JSON, no markdown fences, no preamble, in this exact shape:
{
  "items": [
    { "name": "string", "portion_estimate": "string", "calories": number, "protein_g": number, "carbs_g": number, "fat_g": number }
  ],
  "total": { "calories": number, "protein_g": number, "carbs_g": number, "fat_g": number },
  "confidence": "low" | "medium" | "high"
}`,
            },
          ],
        },
      ],
      config: {
        responseMimeType: "application/json",
      },
    });

    const text = response.text?.trim();
    if (!text) {
      return Response.json(
        { error: "No response text received from AI model" },
        { status: 502 }
      );
    }

    let clean = text.replace(/```json/gi, "").replace(/```/g, "").trim();
    const jsonMatch = clean.match(/\{[\s\S]*\}/);
    if (jsonMatch) {
      clean = jsonMatch[0];
    }
    const result = JSON.parse(clean);

    return Response.json(result);
  } catch (err) {
    console.error("Error analyzing image:", err);
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to analyze image" },
      { status: 500 }
    );
  }
}

