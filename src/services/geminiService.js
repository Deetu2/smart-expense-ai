import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

export async function categorizeExpense(description) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
Categorize this expense into ONE category:
Food, Transport, Entertainment, Shopping, Bills, Other

Expense: "${description}"

Return ONLY the category name.
`;

  const result = await model.generateContent(prompt);
  const text = result.response.text().trim().toLowerCase();

  if (text.includes("transport") || text.includes("uber")) return "Transport";
  if (text.includes("food")) return "Food";
  if (text.includes("bill")) return "Bills";
  if (text.includes("shop")) return "Shopping";
  if (text.includes("entertain")) return "Entertainment";

  return "Other";
}

export async function generateSpendingInsights(expenses) {
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

  const prompt = `
Analyze this spending data and give 3 tips:
${JSON.stringify(expenses)}

Return ONLY a JSON array.
`;

  const result = await model.generateContent(prompt);
  return result.response.text();

}
