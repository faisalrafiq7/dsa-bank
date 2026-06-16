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
  },
  {
    id: "counting-bits",
    title: "Counting Bits",
    url: "https://leetcode.com/problems/counting-bits/description/",
    topic: "Bit Manipulation",
    date: "2026-06-16",
    patterns: ["Offset DP", "Power of Two Boundary", "Section Mirroring"],
    stuckPoints: [
      "Was looking for constant-interval patterns; the actual pattern repeats at power-of-2 boundaries — in bit manipulation problems, always check powers of 2 first."
    ],
    notes: "bits[i] = 1 + bits[i - p] where p is the largest power of 2 ≤ i. Each section [2^k, 2^(k+1)-1] is a mirror of the previous section [0, 2^k-1] with every value +1. Track current power with a variable and double it when i reaches the next power.",
    flashcards: [
      { q: "What is the DP recurrence for Counting Bits?", a: "bits[i] = 1 + bits[i - p], where p is the largest power of 2 ≤ i." },
      { q: "What pattern do sections between powers of 2 follow in bit counts?", a: "Each section [2^k, 2^(k+1)-1] mirrors the previous section with every value incremented by 1." },
      { q: "Time and space complexity of the DP approach for Counting Bits?", a: "O(n) time and O(n) space." },
      { q: "When should you look for power-of-2 boundaries instead of constant intervals?", a: "When counting or comparing bit properties — bit patterns reset and mirror at powers of 2, not at constant steps." }
    ]
  },
  {
    id: "reverse-bits",
    title: "Reverse Bits",
    url: "https://leetcode.com/problems/reverse-bits/description/",
    topic: "Bit Manipulation",
    date: "2026-06-17",
    patterns: ["Bit Extraction with AND", "Bit Construction with OR", "Shift and Build"],
    stuckPoints: [],
    notes: "Extract the LSB of n with n&1, OR it into revNum, then left-shift revNum (to make room for the next bit) and right-shift n (to expose the next bit). Repeat exactly 32 times. Note the direction: input is right-shifted, output is left-shifted — easy to mix up.",
    flashcards: [
      { q: "How do you extract the least significant bit of a number?", a: "n & 1 — AND with 1 isolates the last bit." },
      { q: "In Reverse Bits, why is revNum left-shifted before OR-ing the current bit?", a: "To make room at the LSB — existing bits shift left, then the new extracted bit is OR-ed into position." },
      { q: "What are the shift directions for input vs output in Reverse Bits?", a: "Input (n) is right-shifted to expose each bit; output (revNum) is left-shifted to build the reversed number." },
      { q: "Time and space complexity of iterative bit reversal?", a: "O(1) — exactly 32 iterations, no extra space." }
    ]
  },
  {
    id: "insert-interval",
    title: "Insert Interval",
    url: "https://leetcode.com/problems/insert-interval/description/",
    topic: "Intervals",
    date: "2026-06-17",
    patterns: ["Three-Case Interval Classification", "Greedy Interval Merge", "Linear Interval Scan"],
    stuckPoints: [
      "Tried index-based approach to find start/end of merge range — produces too many edge cases. Simpler: single linear scan with three-case classification (before / overlap / after)."
    ],
    notes: "Single pass with three cases: (1) current ends before new starts → add current as-is; (2) current starts after new ends → flush newInterval if not yet added, then add current; (3) overlap → expand newInterval bounds with min/max. Handle the trailing case: if newInterval was never flushed, add it at the end.",
    flashcards: [
      { q: "What are the three cases when inserting an interval into a sorted non-overlapping list?", a: "Entirely before (cur.end < new.start), entirely after (cur.start > new.end), or overlapping — merge by expanding newInterval bounds." },
      { q: "How do you detect that two intervals do NOT overlap?", a: "They don't overlap if cur.end < new.start (current is before) or cur.start > new.end (current is after)." },
      { q: "How do you merge an overlapping interval into newInterval?", a: "newInterval.start = min(newInterval.start, cur.start); newInterval.end = max(newInterval.end, cur.end)." },
      { q: "Time and space complexity of insert interval?", a: "O(n) time, O(n) space for the output array." }
    ]
  }
];
