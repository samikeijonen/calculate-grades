/*
 * Calculate grades via form input.
 *
 */
( function() {
	// Get form.
	const gradeForm = document.getElementById('calculate-grades');

	// Bail if we do not have the form.
	if ( ! gradeForm ) {
		return;
	}

	// Get result div and default info from form.
	const showResults  = document.getElementById('show-results');
	const UsualPoints  = Array.from(gradeForm.querySelectorAll('[name="usual-max-points"]'));
	const numberInputs = Array.from(gradeForm.querySelectorAll('input[type="number"]'));

	// Calculate grade by given points.
	function calculateGrade(max, min, points) {
		// Linear: y= k(x - x_0) + y_0.
		const result        = ((10-4)/(max-min))*(points-min)+4;
		const resultRound   = (Math.round(result * 4) / 4).toFixed(2);
		return resultRound >= 4 ? resultRound : 4;
	}

	// Populate grades in table format.
	function populateResults(max, min, i, points) {
		let resultText = '<table>';
		resultText += '<caption class="screen-reader-text">' + CalculateGradesText.caption + '</caption>';
		resultText += '<tr><th scope="col">' + CalculateGradesText.points + '</th><th scope="col">' + CalculateGradesText.grade + '</th></tr>';
		let currentClass = 'results';
		for(i; i >= min; i--) {
			i == points && points ? currentClass = 'results results-match' : currentClass = 'results';
			resultText += '<tr class="' + currentClass + '"><td>' + i + '</td><td>' + parseFloat(calculateGrade(max, min, i)) + '</td></tr>';
		}
		resultText += '</table>';
		showResults.innerHTML = resultText;
	}

	// Calculate grade via form input.
	function calculateGrades(e) {
		// Don't reload the page.
		e.preventDefault();

		// Get values from form fields.
		const MaxPoints  = parseInt( gradeForm.querySelector('[name="max-points"]').value );
		const MinPoints  = parseInt( gradeForm.querySelector('[name="min-points"]').value );
		const ExamPoints = parseInt( gradeForm.querySelector('[name="exam-points"]').value );

		// Populate grade table.
		populateResults(MaxPoints, MinPoints, MaxPoints, ExamPoints);
	}

	// Autofill form from usual points.
	function calculateUsual(e) {
		// Get values and data from radio fields.
		const UsualMaxValue = parseInt( e.target.value );
		const UsualMinValue = parseInt( e.target.getAttribute('data-min-points') );

		// Put these values in the form.
		const MaxPoints  = parseInt( document.querySelector('[name="max-points"]').value = UsualMaxValue );
		const MinPoints  = parseInt( document.querySelector('[name="min-points"]').value = UsualMinValue );

		// Get exam points (not mandatory).
		const ExamPoints = parseInt( gradeForm.querySelector('[name="exam-points"]').value );

		// Populate grade table.
		populateResults(MaxPoints, MinPoints, MaxPoints, ExamPoints);
	}

	// Listen when the form is submitted.
	gradeForm.addEventListener('submit', calculateGrades);

	// Listen when radio buttons have been changed for usual points.
	UsualPoints.forEach(UsualPoint => UsualPoint.addEventListener('change', calculateUsual));

	// Listen when number fields have been changed.
	numberInputs.forEach(numberInput => numberInput.addEventListener('change', calculateGrades));

	// Populate first grade table on page load.
	window.addEventListener('load', calculateGrades);
} )();
