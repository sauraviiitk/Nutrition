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

    const { name, portion_estimate } = await request.json();

    if (!name || !portion_estimate) {
      return Response.json(
        { error: "Missing name or portion" },
        { status: 400 },
      );
    }

    const ai = new GoogleGenAI({ apiKey });
    const response = await ai.models.generateContent({
      model: "gemini-flash-lite-latest",
      contents: [
        {
          role: "user",
          parts: [
            {
              text: `Estimate the nutrition for this food item and portion size.
Food: ${name}
Portion: ${portion_estimate}

Respond ONLY with valid JSON, no markdown fences, no preamble, in this exact shape:
{
  "calories": number,
  "protein_g": number,
  "carbs_g": number,
  "fat_g": number
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
    const macros = JSON.parse(clean);

    return Response.json(macros);
  } catch (err) {
    console.error("Error recalculating item:", err);
    return Response.json(
      { error: err instanceof Error ? err.message : "Failed to recalculate" },
      { status: 500 }
    );
  }
}

