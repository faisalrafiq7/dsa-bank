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
      "Assumed a single bitwise operation would give the result directly.",
      "It's actually iterative — XOR gives sum, AND+shift gives carry, repeat until carry is zero."
    ],
    notes: "Add two numbers without using the + operator. XOR gives the sum of two bits without carry — 1^1=0, 1^0=1. AND finds where both bits are set; left-shift the result to place the carry correctly. XOR and AND produce two new numbers that must be added again — repeat until the carry (AND result) is zero.",
    flashcards: [
      { q: "[Sum of Two Integers] What two bit operations replace addition, and why must you loop?", a: "XOR gives sum without carry; (a & b) << 1 gives the carry. Loop because XOR+AND produce two new numbers still needing addition — stop when carry is zero." },
      { q: "[Sum of Two Integers] What does (a & b) << 1 compute and why?", a: "The carry — AND finds positions where both bits are 1 (carry occurs), left shift places it in the correct next column." }
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
      "Was looking for constant-interval patterns instead of power-of-2 boundaries.",
      "In bit manipulation problems, always check powers of 2 first — patterns reset and mirror there."
    ],
    notes: "Recurrence: bits[i] = 1 + bits[i - p], where p is the largest power of 2 <= i. Each section [2^k, 2^(k+1)-1] mirrors the previous section with every value incremented by 1. Track the current power with a variable and double it when i reaches the next power of 2.",
    flashcards: [
      { q: "[Counting Bits] Count set bits for all numbers 0..n in O(n): what recurrence avoids recomputing?", a: "bits[i] = 1 + bits[i - p], where p is the largest power of 2 <= i. Each section [2^k, 2^(k+1)-1] mirrors the previous with every value +1." },
      { q: "[Counting Bits] Why does the pattern repeat at powers of 2 and not at constant intervals?", a: "Each power of 2 adds a new leading 1-bit — the result is an exact mirror of the previous section. This follows binary representation, not arithmetic spacing." }
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
    notes: "Extract the LSB of n using n & 1. OR the extracted bit into revNum to append it at the current position. Left-shift revNum to make room for the next bit, right-shift n to expose the next bit. Repeat exactly 32 times — input is right-shifted, output is left-shifted (easy to mix up).",
    flashcards: [
      { q: "[Reverse Bits] To reverse a 32-bit integer bit by bit: what two operations per iteration and in what order?", a: "Left-shift revNum first (make room), OR in n & 1 (append LSB), then right-shift n. Repeat 32 times." },
      { q: "[Reverse Bits] What is the key shift direction rule — input vs output?", a: "Input (n) right-shifts to expose each bit; output (revNum) left-shifts to build the reversed number — they go in opposite directions." }
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
      "Tried index-based approach to find the start/end of the merge range — too many edge cases.",
      "Simpler fix: single linear scan with three-case classification (before / overlap / after)."
    ],
    notes: "Three cases: current ends before new starts (add current as-is), current starts after new ends (flush newInterval first then add current), or overlap (expand newInterval bounds with min/max). For overlap: newInterval.start = min(both starts), newInterval.end = max(both ends). After the loop, flush newInterval if it was never added.",
    flashcards: [
      { q: "[Insert Interval] Three cases for each existing interval when inserting a new one — what are they and what do you do?", a: "Before (cur.end < new.start) → add cur. After (cur.start > new.end) → flush new first, then add cur. Overlap → expand new: start = min(both), end = max(both)." },
      { q: "[Insert Interval] What trailing edge case must you handle after the loop?", a: "If newInterval was never flushed (no 'after' case was ever hit), add it at the end of the result." }
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
    notes: "Sort all intervals by start time so overlapping ones are always adjacent. Push the first interval into the result, then scan: if cur.start <= last result end, extend the end to max(curEnd, prevEnd). Otherwise push the current interval as a new entry. Sorting is what makes a single linear pass sufficient.",
    flashcards: [
      { q: "[Merge Intervals] Core approach: why sort first, what is the merge condition, and how do you extend?", a: "Sort by start so overlapping intervals are adjacent. Merge when cur.start <= last result end. Extend: last.end = max(last.end, cur.end) — not just cur.end, in case cur is fully contained." },
      { q: "[Merge Intervals] Why use max(prevEnd, curEnd) when extending, not just curEnd?", a: "The current interval may be fully contained inside the last merged one — curEnd could be smaller than prevEnd and would incorrectly shrink it." }
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
      "Tried removing elements from vector — O(n) per deletion makes it O(n²) overall.",
      "No deletion needed; just count overlaps and track prevEnd virtually."
    ],
    notes: "Sort by start time. When cur.start < prevEnd (overlap), remove the interval with the larger end — the smaller end causes fewer future conflicts. When no overlap, update prevEnd to curEnd. No actual deletion needed — count overlaps and track prevEnd virtually.",
    flashcards: [
      { q: "[Non-Overlapping Intervals] To minimise removals: when two intervals overlap, which do you keep and why?", a: "Keep the one with the smaller end — it conflicts with fewer future intervals (greedy earliest end). Remove the larger-end one." },
      { q: "[Non-Overlapping Intervals] Why is no deletion needed, and what is the exact overlap condition?", a: "Only the count matters — track prevEnd virtually. Overlap: cur.start < prevEnd (strict less than; touching intervals like [1,2],[2,3] are not overlapping)." }
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
    notes: "Brute force: vector of rooms, scan all rooms per interval to find a free one — O(n²). Optimal: sort by start time, use a min-heap of end times. For each interval: if heap.top() <= cur.start, reuse that room (pop old end, push new end). Otherwise allocate a new room (push new end). Answer = heap size — O(n log n) time, O(n) space.",
    flashcards: [
      { q: "[Meeting Rooms II] Find minimum rooms needed: what is the O(n log n) min-heap approach?", a: "Sort by start. Min-heap stores end times. For each meeting: if heap.top() <= cur.start, reuse that room (pop, push new end). Else push new end. Answer = heap size." },
      { q: "[Meeting Rooms II] Why does a vector of rooms give O(n²) while a min-heap gives O(n log n)?", a: "Finding the earliest-ending room in a vector requires scanning all of them — O(n) per meeting. A min-heap gives O(log n) access to the minimum end time." }
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
    notes: "Canonical O(n) approach: track minPrice seen so far; at each step maxProfit = max(maxProfit, price - minPrice). Two-pointer alternative: tail = buy day (seeks minimum), head scans forward while prices rise. Both are O(n) time, O(1) space.",
    flashcards: [
      { q: "[Best Time to Buy and Sell Stock] Single buy-sell for max profit: what O(n) O(1) approach works?", a: "Track minPrice seen so far. At each price: maxProfit = max(maxProfit, price - minPrice). Update minPrice each step." },
      { q: "[Best Time to Buy and Sell Stock] Why initialise maxProfit to 0 rather than INT_MIN?", a: "Not transacting is always valid — 0 profit is achievable. INT_MIN would force a trade even when all prices fall." }
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
    notes: "Kadane's: at each element, curSum = max(curSum + nums[i], nums[i]) — extend current subarray or start fresh, whichever is larger. Track the global max: maxSum = max(maxSum, curSum). Initialise maxSum to nums[0], not 0 — otherwise all-negative arrays return 0 incorrectly. Two-pointer also works but Kadane's is simpler and cleaner.",
    flashcards: [
      { q: "[Maximum Subarray — Kadane's] At each element, what is the decision and the recurrence?", a: "Extend or restart: curSum = max(nums[i], curSum + nums[i]). Track maxSum = max(maxSum, curSum). Initialise maxSum = nums[0], not 0." },
      { q: "[Maximum Subarray] Why initialise maxSum to nums[0] instead of 0?", a: "For all-negative arrays, 0 would be wrongly returned — the best subarray is the least-negative element, not an empty subarray." }
    ]
  },
  {
    id: "maximum-product-subarray",
    title: "Maximum Product Subarray",
    url: "https://leetcode.com/problems/maximum-product-subarray/description/",
    topic: "Dynamic Programming",
    date: "2026-06-17",
    patterns: ["Dual DP State (Max + Min)", "Sign-Aware Greedy Extension", "Memoised Recursion", "Iterative DP"],
    stuckPoints: [
      "The need for two recursions (max and min) is not obvious at first.",
      "Min is needed because a negative min × negative element = large positive — min feeds directly into max."
    ],
    notes: "Track both max and min product because a negative flips the sign — min can become max and vice versa. For a positive element: multiply by max continuation to extend max, multiply by min continuation to extend min. For a negative element: the logic reverses — multiply by min continuation to get max, multiply by max continuation to get min. Iterative Kadane's variant: curMax = max(nums[i], curMax*nums[i], curMin*nums[i]); curMin = min of the same three — O(n) time, O(1) space. --- 2026-06-17 --- Iterative approach confirmed: keep curMax and curMin at each index. At i+1, newMax = max(nums[i], curMax*nums[i], curMin*nums[i]). NewMin = min of same three. Maintain a running answer max.",
    flashcards: [
      { q: "[Maximum Product Subarray] Why track both curMax and curMin, and what are the three candidates each step?", a: "A negative curMin × negative element can flip to the new maximum. Three candidates: nums[i], nums[i]*prevMax, nums[i]*prevMin. curMax = max of three; curMin = min of three." },
      { q: "[Maximum Product Subarray vs Maximum Subarray] What makes product harder than sum?", a: "Negatives flip sign — a very negative product can become the largest when multiplied by another negative. For sum only curMax matters; for product you need both curMax and curMin." }
    ]
  }
];
