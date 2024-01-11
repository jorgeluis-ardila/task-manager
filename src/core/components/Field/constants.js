import { File, Input, Password, Select, TextArea } from './components';

export const fieldsList = {
  default: props => <Input {...props} />,
  file: props => <File {...props} />,
  password: props => <Password {...props} />,
  select: props => <Select {...props} />,
  textarea: props => <TextArea {...props} />,
};

export const fieldProps = props => ({
  default: {
    type: props.type,
    hasIcon: props.hasIcon,
  },
  file: { fileRef: props.fileRef },
  password: { hasIcon: props.hasIcon },
  select: {
    options: props.options,
    parentRef: props.wrapperRef,
  },
  textarea: {},
});
