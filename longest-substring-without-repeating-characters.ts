// Hash solution
function lengthOfLongestSubstring(s: string): number {
  let max = 0;
  let pointer = 0;

  let hash: { [key: string]: number } = {};

  for (let i = 0; i < s.length; i++) {
    if (hash[s[i]] !== undefined && hash[s[i]] >= pointer) {
      pointer = hash[s[i]] + 1;
    }
    hash[s[i]] = i;
    max = Math.max(max, i - pointer + 1);
  }

  return max;
}

// O(n)
