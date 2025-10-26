export interface SplitTextResult {
  chars: HTMLElement[];
  words: HTMLElement[];
  lines: HTMLElement[];
  revert: () => void;
}

export class CustomSplitText {
  private readonly element: HTMLElement;
  private readonly originalContent: string;
  private readonly config: { type: string; linesClass?: string };

  constructor(element: HTMLElement, config: { type: string; linesClass?: string }) {
    this.element = element;
    this.originalContent = element.innerHTML;
    this.config = config;
  }

  split(): SplitTextResult {
    const typeSet = new Set(this.config.type.split(',').map(t => t.trim()));
    const allChars: HTMLElement[] = [];
    const allWords: HTMLElement[] = [];
    const lines: HTMLElement[] = [];

    // Get the text content
    const text = this.element.textContent || '';
    
    if (typeSet.has('words') || typeSet.has('chars')) {
      // Split into words
      const wordsArray = text.trim().split(/\s+/);
      this.element.innerHTML = '';

      for (let wordIndex = 0; wordIndex < wordsArray.length; wordIndex++) {
        const word = wordsArray[wordIndex];
        const wordSpan = document.createElement('span');
        wordSpan.style.display = 'inline-block';
        wordSpan.style.position = 'relative';
        wordSpan.dataset.word = word;

        if (typeSet.has('chars')) {
          // Split word into characters
          const chars = word.split('');
          for (const char of chars) {
            const charSpan = document.createElement('span');
            charSpan.textContent = char;
            charSpan.style.display = 'inline-block';
            charSpan.style.position = 'relative';
            charSpan.dataset.char = char;
            wordSpan.appendChild(charSpan);
            allChars.push(charSpan);
          }
        } else {
          wordSpan.textContent = word;
        }

        this.element.appendChild(wordSpan);
        allWords.push(wordSpan);

        // Add space after word (except last word)
        if (wordIndex < wordsArray.length - 1) {
          const space = document.createTextNode(' ');
          this.element.appendChild(space);
        }
      }
    }

    if (typeSet.has('lines')) {
      // For lines, we'll wrap each line in a span
      // This is a simplified implementation
      const lineElements = this.element.querySelectorAll('span[data-word]');
      const linesArray: HTMLElement[] = [];
      
      // Group words into lines (simplified - assumes words on same line)
      let currentLine: HTMLElement[] = [];
      let currentTop = -1;
      
      for (const wordElement of lineElements) {
        const element = wordElement as HTMLElement;
        const rect = element.getBoundingClientRect();
        if (currentTop === -1) {
          currentTop = rect.top;
        }
        
        if (Math.abs(rect.top - currentTop) < 5) { // Same line (within 5px)
          currentLine.push(element);
        } else {
          // New line
          if (currentLine.length > 0) {
            const lineWrapper = this.wrapElementsInLine(currentLine);
            linesArray.push(lineWrapper);
          }
          currentLine = [element];
          currentTop = rect.top;
        }
      }
      
      // Add the last line
      if (currentLine.length > 0) {
        const lineWrapper = this.wrapElementsInLine(currentLine);
        linesArray.push(lineWrapper);
      }
      
      lines.push(...linesArray);
    }

    return {
      chars: typeSet.has('chars') ? Array.from(this.element.querySelectorAll('[data-char]')) : [],
      words: typeSet.has('words') ? Array.from(this.element.querySelectorAll('[data-word]')) : [],
      lines,
      revert: () => this.revert()
    };
  }

  private wrapElementsInLine(elements: HTMLElement[]): HTMLElement {
    const lineWrapper = document.createElement('div');
    lineWrapper.className = this.config.linesClass || 'split-line';
    lineWrapper.style.display = 'block';
    lineWrapper.style.position = 'relative';
    
    // Insert wrapper before first element
    const firstElement = elements[0];
    firstElement.parentNode?.insertBefore(lineWrapper, firstElement);
    
    // Move all elements into the wrapper
    for (const element of elements) {
      lineWrapper.appendChild(element);
    }
    
    return lineWrapper;
  }

  revert(): void {
    this.element.innerHTML = this.originalContent;
  }
}

// Create a function that mimics the SplitText API
export function createSplitText(element: HTMLElement, config: { type: string; linesClass?: string }): SplitTextResult {
  const splitter = new CustomSplitText(element, config);
  return splitter.split();
}