document.addEventListener('mouseup', () => {
  const selectedText = window.getSelection().toString();
  if (selectedText) {
      chrome.runtime.sendMessage({
          action: 'selectedText',
          text: selectedText
      });
  }
});
