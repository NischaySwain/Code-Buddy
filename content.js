// Inject a hint box into the LeetCode problem page, with hints based on the problem slug
(function() {
  // Avoid injecting multiple times
  if (document.getElementById('student-buddy-hint')) return;

  // Extract the problem slug from the URL
  const match = window.location.pathname.match(/\/problems\/([^\/]+)\//);
  const slug = match ? match[1] : null;

  // Mapping of problem slugs to hints
  const hints = {
    "two-sum": "Try using a hash map to store values.",
    "add-two-numbers": "Think about how you add numbers digit by digit.",
    "longest-substring-without-repeating-characters": "Use a sliding window to keep track of unique characters.",
    // Add more problem hints here
  };

  // Default hint if not found
  const hintText = slug && hints[slug]
    ? `Hint: ${hints[slug]}`
    : "Hint: Try to break the problem into smaller subproblems!";

  // Create the hint box
  const hintBox = document.createElement('div');
  hintBox.id = 'student-buddy-hint';
  hintBox.innerText = hintText;

  // Style is handled by styles.css

  // Insert the hint box at the top of the main content
  const mainContent = document.querySelector('div[data-key="description-content"]') || document.body;
  mainContent.prepend(hintBox);
})(); 