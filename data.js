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
  },
  {
    id: "merge-intervals",
    title: "Merge Intervals",
    url: "https://leetcode.com/problems/merge-intervals/description/",
    topic: "Intervals",
    date: "2026-06-17",
    patterns: ["Sort then Scan", "Greedy Interval Merge", "Running Interval Tracking"],
    stuckPoints: [],
    notes: "Sort by start time, push first interval into result, then scan: if current start <= last result end, extend last result's end with max(curEnd, prevEnd); otherwise push current as a new interval. The sort is what makes a single pass sufficient.",
    flashcards: [
      { q: "Why must intervals be sorted before merging?", a: "Sorting by start time ensures all potentially overlapping intervals are adjacent, enabling a single linear pass." },
      { q: "What is the overlap condition in Merge Intervals?", a: "cur.start <= prevEnd — current interval starts at or before the last merged interval ends." },
      { q: "How do you extend a merged interval when overlap is found?", a: "ans.back()[1] = max(ans.back()[1], curEnd) — take the further of the two end points." },
      { q: "Time and space complexity of Merge Intervals?", a: "O(n log n) for sorting, O(n) space for output." }
    ]
  },
  {
    id: "non-overlapping-intervals",
    title: "Non-Overlapping Intervals",
    url: "https://leetcode.com/problems/non-overlapping-intervals/description/",
    topic: "Intervals",
    date: "2026-06-17",
    patterns: ["Greedy Earliest End", "Sort then Scan", "Virtual Deletion"],
    stuckPoints: [
      "Tried removing elements from vector — O(n) per deletion makes it O(n²) overall. No deletion needed; just count overlaps and track prevEnd virtually."
    ],
    notes: "Sort by start. Track prevEnd. When cur.start < prevEnd (overlap): remove the interval with the larger end (keep the smaller end to minimise future conflicts), increment count. When no overlap: update prevEnd to curEnd. Never actually delete from the array — the count is all that's needed.",
    flashcards: [
      { q: "In Non-Overlapping Intervals, which interval should you remove when two overlap?", a: "Remove the one with the larger end — keeping the smaller end greedily reduces the chance of future overlaps." },
      { q: "Why don't you need to actually delete intervals from the array?", a: "You only need the removal count; track prevEnd virtually and increment a counter when overlap is detected." },
      { q: "What is the overlap condition in Non-Overlapping Intervals?", a: "cur.start < prevEnd — strict less than, because touching intervals [1,2],[2,3] are not overlapping." },
      { q: "Time and space complexity of Non-Overlapping Intervals?", a: "O(n log n) for sorting, O(1) extra space." }
    ]
  },
  {
    id: "meeting-rooms-ii",
    title: "Meeting Rooms II",
    url: "https://neetcode.io/problems/meeting-schedule-ii/question",
    topic: "Intervals",
    date: "2026-06-17",
    patterns: ["Min-Heap End Tracking", "Sort then Scan", "Room Allocation Simulation"],
    stuckPoints: [],
    notes: "Two approaches: (1) Vector of rooms — for each interval scan all rooms for one whose last end <= cur.start; O(n²). (2) Optimal: min-heap of end times — sort by start, for each interval if heap.top() <= cur.start reuse that room (pop and push new end), else push new end. Answer = heap size. O(n log n).",
    flashcards: [
      { q: "What data structure gives the optimal O(n log n) solution for Meeting Rooms II?", a: "A min-heap of end times — always check if the earliest-ending room is free before allocating a new one." },
      { q: "What is the condition to reuse an existing room in Meeting Rooms II?", a: "cur.start >= heap.top() — the meeting starts at or after the earliest-finishing room is free." },
      { q: "Why does scanning a vector of rooms give O(n²) instead of O(n log n)?", a: "Finding the minimum end time in a vector is O(n) per interval; a min-heap reduces this to O(log n)." },
      { q: "Time and space complexity of the optimal Meeting Rooms II solution?", a: "O(n log n) time for sorting and heap operations, O(n) space for the heap." }
    ]
  },
  {
    id: "best-time-to-buy-and-sell-stock",
    title: "Best Time to Buy and Sell Stock",
    url: "https://leetcode.com/problems/best-time-to-buy-and-sell-stock/description/",
    topic: "Greedy",
    date: "2026-06-17",
    patterns: ["Two Pointer Min-Max Scan", "Greedy Local Minimum", "Running Max Profit"],
    stuckPoints: [],
    notes: "Two-pointer: tail = buy (seeks minimum), head scans forward while prices rise and tracks max profit. Simpler canonical approach: track minPrice seen so far, at each step maxProfit = max(maxProfit, price - minPrice). Both O(n) time, O(1) space.",
    flashcards: [
      { q: "What is the simplest O(n) approach for Best Time to Buy and Sell Stock?", a: "Track minPrice seen so far; for each price, maxProfit = max(maxProfit, price - minPrice)." },
      { q: "When should the buy pointer advance in this problem?", a: "When the current price is lower than the current buy price — reset buy to the current position." },
      { q: "Why initialise maxProfit to 0 and not nums[0]?", a: "You can always choose not to transact, so 0 is the minimum possible profit." },
      { q: "Time and space complexity of Best Time to Buy and Sell Stock?", a: "O(n) time, O(1) space." }
    ]
  },
  {
    id: "maximum-subarray",
    title: "Maximum Subarray",
    url: "https://leetcode.com/problems/maximum-subarray/description/",
    topic: "Greedy",
    date: "2026-06-17",
    patterns: ["Kadane's Algorithm", "Two Pointer Sliding Window", "Local vs Global Optimum"],
    stuckPoints: [],
    notes: "Kadane's (Idea 2): at each element decide — extend current subarray (curSum + nums[i]) or start fresh (nums[i]), whichever is larger. Track global max. Edge case: initialise maxSum to nums[0] not 0, otherwise all-negative arrays return 0 incorrectly. Two-pointer (Idea 1) also works but has the same edge case and is harder to reason about.",
    flashcards: [
      { q: "What is the core decision in Kadane's algorithm at each element?", a: "Extend the current subarray (curSum + nums[i]) or start fresh (nums[i]) — whichever is larger." },
      { q: "Kadane's recurrence for Maximum Subarray?", a: "curSum = max(curSum + nums[i], nums[i]); maxSum = max(maxSum, curSum)." },
      { q: "Why must maxSum be initialised to nums[0] and not 0?", a: "For all-negative arrays, 0 would be wrongly returned; the actual answer is the least-negative element." },
      { q: "Time and space complexity of Kadane's algorithm?", a: "O(n) time, O(1) space." }
    ]
  }
];
