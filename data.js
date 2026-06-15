// DSA Bank — problem data
// Each entry is one solved problem. The skill appends or updates entries here.

const DSA_DATA = [
  {
    id: "sum-of-two-integers",
    title: "Sum of Two Integers",
    url: "https://leetcode.com/problems/sum-of-two-integers/description/",
    topic: "Bit Manipulation",
    date: "2026-06-16",
    patterns: ["XOR as Bitwise Addition", "AND + Left Shift for Carry", "Iterative Carry Propagation"],
    stuckPoints: [
      "Assumed a single bitwise operation would suffice — it's actually iterative: XOR handles sum, AND+shift handles carry, repeated until carry is zero."
    ],
    notes: "Add two numbers without + operator. XOR gives sum without carry (1^1=0, 1^0=1). AND finds where both bits are set — shift left to get the carry in the right position. These two results are two new numbers that still need adding, so repeat until carry (AND result) becomes 0.",
    flashcards: [
      { q: "What does XOR represent in binary addition?", a: "The sum of two bits without carry — 1^1=0, 1^0=1, 0^0=0." },
      { q: "How do you compute the carry in bitwise addition?", a: "(a & b) << 1 — AND finds where both bits are set, left shift moves the carry to the correct position." },
      { q: "Why is a loop needed in the bitwise addition approach?", a: "XOR and AND+shift produce two new numbers that still need to be added; repeat until AND (carry) becomes 0." },
      { q: "Time and space complexity of bitwise addition (no + operator)?", a: "O(1) time and space — bounded by fixed 32-bit integer width." }
    ]
  }
];
