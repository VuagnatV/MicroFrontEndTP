import { render, screen } from '@testing-library/react';
import Title from '../../host/src/Title';
import React from 'react';
import '@testing-library/jest-dom';

describe('Title component', () => {
  test('renders correctly with given text', () => {
    const testText = 'Hello, World!';
    render(<Title text={testText} />);
    const titleElement = screen.getByText(testText);
    expect(titleElement).toBeInTheDocument();
    expect(titleElement.tagName).toBe('H1');
  });
});
