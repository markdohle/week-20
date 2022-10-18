import React from 'react'
import {render, fireEvent, wait} from '@testing-library/react';
import userEvent from "@testing-library/user-event";
import App from './App';
import { api } from './Components/api';


test('Todo', () => {

  const {getByText,getByLabelText} = render(<App/>);

  expect(getByText('ToDo List')).not.toBeNull();
  expect(getByLabelText('Add todo:')).not.toBeNull();
  expect(getByText('Add #1')).not.toBeNull();

  //========Alternate Test================
  getByText('ToDo List');
  getByLabelText('Add todo:');
  getByText('Add #1');

});

const mockCreateItem = (api.createItem = jest.fn())

test('add a ToDo item to list', async () => {

  const {getByText,getByLabelText} = render(<App/>);
  //const {getByText,getByLabelText} = render(<App/>);
  getByText('ToDo List')

  const input = getByLabelText('Add todo:');
  fireEvent.change(input, {target:{value:'wash car'}});
  fireEvent.click(getByText('Add #1'));
  mockCreateItem.mockResolvedValueOnce('wash car')
  //confirm data
  //getByText('Add #2')
  getByText('wash car (-Remove)')

  await wait(() => getByText('wash car'));

  expect(mockCreateItem).toBeCalledTimes(1);
  expect(mockCreateItem).toBeCalledWith(
    expect.stringContaining('wash car')
  );
});

//thinking from the perspective of the person interacting with the form
test('user can add to the list', () => {

  const {getByText,getByLabelText} = render(<App/>);

  const input = getByLabelText('Add todo:');
  const button = getByText('Add #1');

  userEvent.type(input, "Learn Spanish");
  userEvent.click(button);


  //confirm data
  //getByText("Add #2");
  //getByText("Learn Spanish (-Remove)");

});

//================Jest Mock Component============
jest.mock ('./MyComponent', () => () => (<div>Hello, World!</div>));

test ('mocking test', () => {
  //test contents here
  const {container} = render(<App/>);
  expect(container.textContent).toMatch('Hello, World!')
});
