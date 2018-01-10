import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { Task } from '../src/components/Task';

Enzyme.configure({ adapter: new Adapter() });

describe('Testing Task component', () => {
  it('renders as expected', () => {
    const task = {
      text: 'ESCREVER TESTES',
      deadline: '2018 01 09',
      tag: 'WORK',
      complete: false
    };

    const taskKey = 0;
    const taskItem = {task, key: taskKey};
    const wrapper = shallow(
      <Task key={taskItem.key}
          keyValue={taskItem.key} task={taskItem.task}
          onPress={() => console.log(taskItem.key)}
          onLongPress={()=> console.log(true, taskItem.key)}
          onDelete={() => console.log(taskItem.key)}
      />
    );
    expect(wrapper).toMatchSnapshot();
    wrapper.setProps({ keyValue: 1 });
    expect(wrapper).toMatchSnapshot();
  });
});
