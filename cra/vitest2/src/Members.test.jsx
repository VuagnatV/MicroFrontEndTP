import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Members from '../../remote/src/Members';

describe('Members component', () => {
  test('renders correctly with the given number', () => {
    const testNumber = 5;
    render(<Members number={testNumber} />);
    const membersElement = screen.getByText(
      `Il y a ${testNumber} membre(s) dans notre association !`,
    );
    expect(membersElement).toBeInTheDocument();
  });
});
