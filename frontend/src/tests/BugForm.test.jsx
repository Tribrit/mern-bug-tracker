import { render, screen, fireEvent } from '@testing-library/react';
import BugForm from '../components/BugForm';

test('form submits bug data', () => {
  const mock = jest.fn();
  render(<BugForm onBugCreated={mock} />);
  fireEvent.change(screen.getByPlaceholderText('Title'), { target: { value: 'Bug A' } });
  fireEvent.change(screen.getByPlaceholderText('Description'), { target: { value: 'Desc A' } });
  fireEvent.click(screen.getByText('Report Bug'));
});
