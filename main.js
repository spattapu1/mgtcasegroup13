
// Display word count in the write-up div in the footer
function displayWordCount() {
	// Find the write-up div (class may be 'write-up' or 'writeup')
	const writeupDiv = document.querySelector('.write-up, .writeup');
	if (!writeupDiv) return;

	// Get text content and count words
	const text = writeupDiv.textContent || '';
	const wordCount = text.trim().length === 0 ? 0 : text.trim().split(/\s+/).length;

	// Create or update the word count display in the footer
	let footer = document.querySelector('footer');
	if (!footer) {
		// If no footer exists, create one
		footer = document.createElement('footer');
		document.body.appendChild(footer);
	}

	let wordCountDiv = document.getElementById('word-count');
	if (!wordCountDiv) {
		wordCountDiv = document.createElement('div');
		wordCountDiv.id = 'word-count';
		footer.appendChild(wordCountDiv);
	}
	wordCountDiv.textContent = `Word count: ${wordCount}`;
}


// Run on page load and whenever the write-up changes
window.addEventListener('DOMContentLoaded', () => {
	displayWordCount();

	// PDF generation button functionality
	const pdfBtn = document.getElementById('generate-pdf');
	if (pdfBtn) {
		pdfBtn.addEventListener('click', () => {
			window.print(); // Opens browser print dialog, user can save as PDF
		});
	}

	// Optional: observe changes to the write-up div
	const writeupDiv = document.querySelector('.write-up, .writeup');
	if (writeupDiv) {
		const observer = new MutationObserver(displayWordCount);
		observer.observe(writeupDiv, { childList: true, subtree: true, characterData: true });
	}
});
