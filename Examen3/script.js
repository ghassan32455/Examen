const form = document.querySelector('form');
const submitBtn = document.querySelector('#submit-btn');
const creditInfo = document.querySelector('#credit-info');

form.addEventListener('submit', (e) => {
	e.preventDefault();
	const companyName = document.querySelector('#company').value;
	const creditAmount = Math.floor(Math.random() * (2000 - 1000 + 1)) + 1000;
	const revenue = Math.floor(Math.random() * (1000000 - 100000 + 1)) + 100000;
	const employees = Math.floor(Math.random() * (500 - 50 + 1)) + 50;
	const industry = ['Finance', 'Technology', 'Healthcare', 'Retail', 'Manufacturing', 'Education', 'Real Estate', 'Hospitality', 'Transportation', 'Energy'][Math.floor(Math.random() * 10)];
	
    

	
    
    if (creditAmount >= 1500) {
		creditInfo.innerHTML = `
			<div class="credit-status success">
				<h2>${companyName}</h2>
				<p>Credit Score: ${creditAmount}</p>
				<p>Industry: ${industry}</p>
				<p>Revenue: $${revenue.toLocaleString()}</p>
				<p>Number of Employees: ${employees}</p>
				<p>${companyName} is a financially stable company.</p>
			</div>
		`;
	} else {
		creditInfo.innerHTML = `
			<div class="credit-status danger">
				<h2>${companyName}</h2>
				<p>Credit Score: ${creditAmount}</p>
				<p>Industry: ${industry}</p>
				<p>Revenue: $${revenue.toLocaleString()}</p>
				<p>Number of Employees: ${employees}</p>
				<p>${companyName} may be at risk of financial difficulties.</p>
			</div>
		`;

        // Get the current credit score from the HTML element
var currentScore = document.querySelector('.financial-status strong').innerHTML;

// Convert the credit score to a number
var scoreNumber = parseInt(currentScore.replace(/[\$,]/g, ''));

// Get the status line element
var statusLine = document.querySelector('.status-line');

// Check the financial status and change the color of the status line accordingly
if (scoreNumber >= 1000 && scoreNumber <= 2000) {
  statusLine.classList.add('green');
} else {
  statusLine.classList.add('red');
}

	}

	

});
