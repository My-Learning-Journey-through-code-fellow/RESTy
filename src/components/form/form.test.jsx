import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';

import Form from './index';

describe('Form test', () => {
  test('Submission successful', () => {
    render(<Form/>);

    const button = screen.getByTestId(e.target.upload.value);

  })
})