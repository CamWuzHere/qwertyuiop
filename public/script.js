const term = new Terminal({
  cursorBlink: true,
  convertEol: true,
  fontFamily: 'monospace',
  fontSize: 14,
  theme: {
    background: '#000',
    foreground: '#fff'
  }
});

// Open terminal
term.open(document.getElementById('terminal'));

// Let browser handle native copy/paste
term.attachCustomKeyEventHandler((e) => {
  // Allow Ctrl+C / Cmd+C to pass through
  if ((e.ctrlKey || e.metaKey) && e.key === 'c') {
    return true; // Let browser handle it
  }
  return true; // Allow all other keys
});
