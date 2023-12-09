import { Input, Select, TextArea } from './components';

export const fieldsList = {
  select: props => <Select {...props} />,
  textarea: props => <TextArea {...props} />,
  default: props => <Input {...props} />,
};

export const fieldProps = props => ({
  default: {
    type: props.type,
  },
  select: {
    options: props.options,
    parentRef: props.wrapperRef,
  },
  textarea: {},
});
