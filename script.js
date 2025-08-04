function calculate() {
    const br = parseFloat(document.getElementById('br').value);
    const pr = parseFloat(document.getElementById('pr').value);
    const b = parseFloat(document.getElementById('b').value);

    if (isNaN(br) || isNaN(pr) || isNaN(b)) {
        document.getElementById('result').innerText = 'Please enter valid numbers.';
        return;
    }

    const result = (br - (pr * b)) * 40;
    document.getElementById('result').innerText = `Result: ${result.toFixed(2)}`;
}
