Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

// Example usage:
let nums1 = [null, {}, 3];
console.log(nums1.last()); // Output: 3

let nums2 = [];
console.log(nums2.last()); // Output: -1
