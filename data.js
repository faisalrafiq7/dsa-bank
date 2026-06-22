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
  },
  {
    id: "find-minimum-in-rotated-sorted-array",
    title: "Find Minimum in Rotated Sorted Array",
    url: "https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/",
    topic: "Binary Search",
    date: "2026-06-18",
    patterns: ["Rotated Array Binary Search", "Section Identification", "Left-Right Comparison"],
    stuckPoints: [],
    notes: "A rotated sorted array has two individually increasing sections — visualise them as two humps on a graph. Use binary search for O(log n). Check nums[l] > nums[r] to detect rotation in current window. When rotation exists, determine which section mid falls in: nums[mid] >= nums[l] means mid is in the left (higher) section, so move l = mid+1; otherwise mid is in the right (lower) section, so r = mid. When nums[l] <= nums[r] the window is fully sorted — minimum is at l, so r = mid.",
    flashcards: [
      { q: "[Find Minimum in Rotated Sorted Array] What are the two cases in binary search and what do you do in each?", a: "If nums[l] <= nums[r]: window is sorted, minimum is at l (r = mid). If nums[l] > nums[r]: rotation detected — if nums[mid] >= nums[l], mid is in the left section (l = mid+1); else mid is in the right section (r = mid)." },
      { q: "[Find Minimum in Rotated Sorted Array] How do you tell which sorted section mid is in when rotation is detected?", a: "Compare nums[mid] with nums[l]: if nums[mid] >= nums[l], mid is on the higher left section — minimum is further right. Otherwise mid is on the lower right section — minimum is at mid or to its left." },
      { q: "[Find Minimum in Rotated Sorted Array] Why use r = mid instead of r = mid - 1 when narrowing right?", a: "Mid itself could be the minimum — discarding it with mid-1 would lose the answer. Use r = mid to keep it in range." }
    ]
  },
  {
    id: "search-in-rotated-sorted-array",
    title: "Search in Rotated Sorted Array",
    url: "https://leetcode.com/problems/search-in-rotated-sorted-array/description/",
    topic: "Binary Search",
    date: "2026-06-18",
    patterns: ["Find Inflection Point First", "Target-Based Subarray Selection", "Two-Pass Binary Search"],
    stuckPoints: [],
    notes: "Find the inflection point (minimum) using the exact same binary search as LC 153. Use target >= nums[0] to decide which sorted subarray contains the target — if true, search the left section [0, inflection-1]; otherwise search the right section [inflection, n-1]. Handle the edge case: if inflection is 0 (no rotation), search the full array. Run standard binary search on the chosen subarray.",
    flashcards: [
      { q: "[Search in Rotated Sorted Array] What is the two-step approach to searching in a rotated array?", a: "Step 1: Find the inflection point (minimum index) using rotated binary search. Step 2: Use target >= nums[0] to pick the correct sorted half, then run standard binary search on it." },
      { q: "[Search in Rotated Sorted Array] How do you decide which subarray to search after finding the inflection point?", a: "If target >= nums[0], target is in the left section [0, inflection-1]. Otherwise it's in the right section [inflection, n-1]. Edge case: if inflection is 0 (no rotation), search the full array." },
      { q: "[Search in Rotated Sorted Array vs Find Minimum in Rotated Sorted Array] How does this problem build on LC 153?", a: "The inflection-point logic is identical to LC 153. Once you have the pivot index, the problem reduces to a standard binary search on the correct sorted half." }
    ]
  },
  {
    id: "3sum",
    title: "3Sum",
    url: "https://leetcode.com/problems/3sum/description/",
    topic: "Two Pointers",
    date: "2026-06-19",
    patterns: ["Fix One, Two-Pointer Rest", "Duplicate Skip", "Sort-First Two Pointer"],
    stuckPoints: [
      "Got stuck preventing duplicate triplets in the answer.",
      "Three separate skips are needed: skip i if nums[i] == nums[i-1], and after each found triplet advance l and retreat r past all equal elements."
    ],
    notes: "Sort the array first. Fix each index i and set target = -nums[i]. Use two pointers l = i+1 and r = n-1 to find pairs summing to the target. Reduce or increase pointers based on the current sum. Three duplicate skips are required: skip i if it equals the previous element; after a match, skip l forward while nums[l] == leftElm and skip r backward while nums[r] == rightElm.",
    flashcards: [
      { q: "[3Sum] What is the O(n²) approach — how do you reduce the brute-force O(n³)?", a: "Sort the array. Fix each i as one element (target = -nums[i]), then use two pointers l=i+1 and r=n-1 to find the pair summing to target in O(n). Repeat for all i." },
      { q: "[3Sum] How do you prevent duplicate triplets across all three positions?", a: "Three skips: (1) skip i if nums[i] == nums[i-1]; (2) after a match, advance l past all elements equal to nums[l]; (3) retreat r past all elements equal to nums[r]." }
    ]
  },
  {
    id: "trapping-rain-water",
    title: "Trapping Rain Water",
    url: "https://leetcode.com/problems/trapping-rain-water/description/",
    topic: "Two Pointers",
    date: "2026-06-19",
    patterns: ["Greedy Two Pointer Shrink", "Running Max Tracking", "Bounded Water Calculation"],
    stuckPoints: [],
    notes: "Water trapped at each cell = min(maxLeft, maxRight) - height[cell]. Use two pointers l and r. When height[l] < height[r], the right boundary is tall enough — water on the left is capped by curMaxL, so process left (add curMaxL - height[l], advance l). When height[l] >= height[r], process right symmetrically. Track running maxL and maxR as pointers move inward.",
    flashcards: [
      { q: "[Trapping Rain Water] Two-pointer O(n) approach: how do you know how much water each cell traps?", a: "Water at a cell = min(maxLeft, maxRight) - height. When height[l] < height[r], right boundary is guaranteed tall enough — process left using curMaxL as the cap (add curMaxL - height[l], advance l). Mirror for right side." },
      { q: "[Trapping Rain Water] Why can you safely process the left side when height[l] < height[r]?", a: "The right wall is at least height[r] tall, so the water cap on the left depends only on curMaxL — you don't need to know the exact right max. The smaller side always determines the bottleneck." },
      { q: "[Trapping Rain Water vs Container With Most Water] What is the key difference in what you calculate?", a: "Container: one rectangle using the shorter wall, move the shorter pointer. Trapping: per-cell water = min(maxL, maxR) - height — process whichever side has the smaller boundary since that determines the water cap." }
    ]
  },
  {
    id: "longest-substring-without-repeating-characters",
    title: "Longest Substring Without Repeating Characters",
    url: "https://leetcode.com/problems/longest-substring-without-repeating-characters/description/",
    topic: "Sliding Window",
    date: "2026-06-19",
    patterns: ["Expand-Shrink Window", "Frequency Map Window", "Running Max Length"],
    stuckPoints: [],
    notes: "Use two pointers (head, tail) as the window boundaries and a frequency map to track characters in the current window. Expand head while the next character has freq 0. When blocked, shrink from tail (decrement freq, advance tail). Track the maximum window size seen. O(n) time since each character enters and leaves the window at most once.",
    flashcards: [
      { q: "[Longest Substring Without Repeating Characters] Sliding window approach: how do you expand and shrink, and what tracks uniqueness?", a: "Frequency map tracks chars in window. Expand head while next char has freq 0. When blocked, shrink from tail (decrement freq, advance tail). Track max window size. O(n) — each char enters and leaves at most once." },
      { q: "[Longest Substring Without Repeating Characters] When head is blocked by a repeat, why shrink from tail rather than jump past the duplicate?", a: "Shrinking from tail is O(1) per step and preserves as much of the valid window as possible. Jumping (using a char→index map) also works and avoids shrinking one-by-one, but both approaches are O(n)." }
    ]
  },
  {
    id: "container-with-most-water",
    title: "Container With Most Water",
    url: "https://leetcode.com/problems/container-with-most-water/description/",
    topic: "Two Pointers",
    date: "2026-06-20",
    patterns: ["Two Pointer Shrink", "Greedy Pointer Movement"],
    stuckPoints: [],
    notes: "Use two pointers at both ends to maximize area. Area = base * min(height[l], height[r]) where base = r - l. Move the pointer with the shorter height inward. Moving the taller pointer can only decrease area — height is still capped by the shorter side but the base shrinks. Moving the shorter pointer gives a chance to find a taller wall. O(n) time, O(1) space.",
    flashcards: [
      { q: "[Container With Most Water] Two-pointer approach: start positions, what you calculate, and what to do each step?", a: "Start l=0, r=n-1. Area = (r-l) * min(height[l], height[r]). Move the pointer with the shorter height inward. Track running max." },
      { q: "[Container With Most Water] Why move the shorter pointer and not the taller one?", a: "Moving the taller pointer: height is still capped by the shorter side and base shrinks — area can only decrease. Moving the shorter gives a chance to find a taller wall." }
    ]
  }
];
