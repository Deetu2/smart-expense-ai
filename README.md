# Smart Expense Tracker – AI Integration

This repository contains the AI logic for the Smart Receipt & Expense Tracker project.

## Features
- Auto-label expense categories using AI
- Generate spending insights and cost-saving tips

## Technologies
- Google Gemini (LLM)
- JavaScript (Node.js)

## Usage
The frontend or backend can import the AI functions and pass expense descriptions or data.

Example:
```js
import { categorizeExpense } from "smart-expense-ai";

const category = await categorizeExpense("uber ride");
