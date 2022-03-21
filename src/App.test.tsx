import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import App from './App';
import {MemoryRouter} from 'react-router-dom';
import AllQues from './Components/FirstQues';



describe("<App />", () => {
  test('check input field exist or not', () => {
    const {getByText} = render(<App />);
    const TextField = screen.getByPlaceholderText(/Enter Your Name/i);
    expect(TextField).toBeInTheDocument();
    expect(getByText(/START/i).closest('button')).toBeInTheDocument();
  });
});

describe("<App />", () => {
  test('check other section', () => {
    const {getByText} = render(<App />);
    const TextField = screen.getByText(/React.js/i);
    expect(TextField).toBeInTheDocument();
    expect(getByText(/START/i).closest('button')).toBeInTheDocument();
  });
});


describe("<App />", () => {
  test('Start button check',async () => {
    const {getByText} = render(<App />);
    expect(getByText(/START/i).closest('button')).toBeDisabled();
    const inputNode = screen.getByPlaceholderText('Enter Your Name');
    expect(inputNode).toBeInTheDocument();
    fireEvent.change(inputNode, { target: { value: 'Vimal Tripathi' } })
    expect(getByText(/START/i).closest('button')).toBeEnabled();
    fireEvent.click(screen.getByText(/START/i))
    await waitFor(() => {
      expect(screen.getByTestId('custom-element')).toBeInTheDocument();
    });
    expect(screen.getByTestId('custom-element')).toBeInTheDocument();  
  });   
});

describe("<App />", () => {
  test('Go to all ques list',async () => {
    render(    
       <MemoryRouter>
      <AllQues/>
    </MemoryRouter>);
    const element = screen.getByTestId('custom-element');
    expect(element).toBeInTheDocument();
  });   
});


