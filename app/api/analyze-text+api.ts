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

    const { description } = await request.json();

    if (!description || typeof description !== "string" || !description.trim()) {
      return Response.json({ error: "Missing description" }, { status: 400 });
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `A user is manually logging a meal they ate. Based on their description, identify the food item(s) and estimate a macro breakdown.
Description: "${description}"

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
    console.error("Error analyzing description:", err);
    return Response.json(
      {
        error:
          err instanceof Error
            ? err.message
            : "Failed to analyze description",
      },
      { status: 500 }
    );
  }
}

