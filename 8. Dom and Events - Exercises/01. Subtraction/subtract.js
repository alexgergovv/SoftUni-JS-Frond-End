function subtract() {
    let nums = Array.from(document.querySelectorAll('#wrapper input'));
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Number(nums[i].value);
    }
    let result = nums[0] - nums[1];
    let resultArea = document.getElementById('result');
    resultArea.textContent = result;
}